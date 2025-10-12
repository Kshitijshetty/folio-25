"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { NotebookPen } from "lucide-react";

type StepState = "active" | "idle" | "locked";

export type Step = {
  id: string;                 // must match <section id="">
  title: string;
  countLabel?: string;        // e.g. "1 / 4"
  progress?: number;          // 0..1 (optional override)
  initialState?: StepState;

  /** Per-step icon (use either Icon or iconSrc) */
  Icon?: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  iconSrc?: string;           // e.g., "/icons/research.svg" or PNG
  iconAlt?: string;           // accessibility label if using iconSrc
};

type Props = {
  steps: Step[];
  topOffset?: number;         // sticky navbar/stepper height (px)
  pillWidthPx?: number;       // equal width per pill on md+ (default 240)
  accent?: string;            // per-project color (e.g., "#2DD4BF")
};

/** Type-safe window.lenis (optional) */
type LenisWindow = Window & {
  lenis?: { scrollTo?: (el: Element | number, opts?: { offset?: number }) => void };
};

/* -------- Static className constants (don’t trigger hook deps) -------- */
// Mobile (smaller than md): icon-only circular chip
const MOBILE_BASE =
  "md:hidden inline-grid place-items-center w-11 h-11 rounded-full border transition-colors backdrop-blur-md";
const MOBILE_VARIANTS: Record<StepState, string> = {
  active: "bg-white/5 text-white",
  idle: "border-white/50 text-white hover:bg-white/5",
  locked: "border-white/20 text-white/40 cursor-not-allowed",
};

// Desktop (md+): full pill with equal width
const DESKTOP_BASE =
  "hidden md:inline-flex justify-center items-center gap-[10px] " +
  "py-[10px] pr-[20px] pl-[10px] relative rounded-full border transition-colors backdrop-blur-md";
const DESKTOP_VARIANTS: Record<StepState, string> = {
  active: "bg-white/5 text-white",
  idle: "border-white/50 text-white hover:bg-white/5",
  locked: "border-white/20 text-white/40 cursor-not-allowed",
};

export default function Stepper({
  steps,
  topOffset = 80,
  pillWidthPx = 200,
  accent,
}: Props) {
  const defaultAccent = accent ?? "#2DD4BF";

  const firstSelectable =
    steps.find((s) => s.initialState !== "locked")?.id ?? steps[0]?.id ?? "";
  const [active, setActive] = useState<string>(firstSelectable);

  const [progressById, setProgressById] = useState<Record<string, number>>({});
  const positionsRef = useRef<{ id: string; top: number }[]>([]);
  const rafLock = useRef(false);

  // ---------- measure / scroll-spy ----------
  const getTop = (el: HTMLElement) =>
    Math.round(el.getBoundingClientRect().top + window.scrollY);
  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

  const recompute = () => {
    const pts = steps
      .map((s) => {
        const el = document.getElementById(s.id);
        return el ? { id: s.id, top: getTop(el) } : null;
      })
      .filter(Boolean) as { id: string; top: number }[];
    pts.sort((a, b) => a.top - b.top);
    positionsRef.current = pts;
  };

  const updateFromScroll = () => {
    const pts = positionsRef.current;
    if (!pts.length) return;

    const y = window.scrollY + topOffset + 1;

    // active = last section whose top <= y
    let current = pts[0].id;
    for (let i = 0; i < pts.length; i++) {
      if (y >= pts[i].top) current = pts[i].id;
      else break;
    }
    setActive(current);

    // per-section progress (top..nextTop)
    const next: Record<string, number> = {};
    for (let i = 0; i < pts.length; i++) {
      const start = pts[i].top;
      const end =
        i < pts.length - 1
          ? pts[i + 1].top
          : Math.max(
              start + (document.getElementById(pts[i].id)?.offsetHeight || 1),
              document.body.scrollHeight - window.innerHeight
            );
      next[pts[i].id] = clamp01((y - start) / Math.max(1, end - start));
    }
    setProgressById(next);
  };

  useEffect(() => {
    recompute();
    updateFromScroll();

    const onScroll = () => {
      if (rafLock.current) return;
      rafLock.current = true;
      requestAnimationFrame(() => {
        rafLock.current = false;
        updateFromScroll();
      });
    };
    const onResize = () => {
      recompute();
      updateFromScroll();
    };
    const onLoad = () => {
      recompute();
      updateFromScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onLoad);

    const sections = steps
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const ro = new ResizeObserver(() => {
      recompute();
      updateFromScroll();
    });
    sections.forEach((el) => ro.observe(el));

    const mo = new MutationObserver(() => {
      recompute();
      updateFromScroll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
      ro.disconnect();
      mo.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, topOffset]);

  // click (Lenis if present) with offset
  const onClick = useCallback(
    (id: string, locked?: boolean) => {
      if (locked) return;
      const el = document.getElementById(id);
      if (!el) return;

      const { lenis } = window as LenisWindow;
      if (lenis?.scrollTo) {
        lenis.scrollTo(el, { offset: -topOffset });
      } else {
        const y = getTop(el) - topOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      history.replaceState(null, "", `#${id}`);
    },
    [topOffset]
  );

  /**
   * Render a per-step icon that:
   *  - Uses React SVG component if provided (stroke/fill colored)
   *  - Or uses a static file with CSS mask to color it exactly
   *  - Falls back to NotebookPen
   */
  const renderIcon = useCallback(
    (
      s: Step,
      size: number,
      isLocked: boolean,
      isActive: boolean,
      classNameExtra = ""
    ) => {
      const iconColor = isActive ? "#FFFFFF" : defaultAccent;

      // A) React SVG component (SVGR/lucide-like)
      if (s.Icon) {
        const Cmp = s.Icon;
        return (
          <Cmp
            className={`${isLocked ? "opacity-40" : ""} ${classNameExtra}`}
            size={size}
            strokeWidth={2}

            
          />
        );
      }

      // B) Static asset (SVG/PNG): color it via CSS mask so it exactly matches `iconColor`
      if (s.iconSrc) {
        const maskStyle: React.CSSProperties = {
          width: size,
          height: size,
          display: "inline-block",
          backgroundColor: iconColor,
          opacity: isLocked ? 0.4 : 1,
          WebkitMaskImage: `url(${s.iconSrc})`,
          maskImage: `url(${s.iconSrc})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        };
        return (
          <span
            aria-hidden="true"
            title={s.iconAlt ?? s.title}
            className={classNameExtra}
            style={maskStyle}
          />
        );
      }

      // C) Fallback icon
      return (
        <NotebookPen
          className={`${isLocked ? "opacity-40" : ""} ${classNameExtra}`}
          size={size}
          strokeWidth={2}
          stroke={iconColor}
        />
      );
    },
    [defaultAccent]
  );

  const List = useMemo(() => {
    return steps.map((s) => {
      const isActive = active === s.id;
      const isLocked = s.initialState === "locked";
      const state: StepState = isLocked ? "locked" : isActive ? "active" : "idle";
      const prog = s.progress ?? progressById[s.id];

      // COLORS ONLY (no layout changes):
      const containerColorStyle = isActive
        ? { borderColor: defaultAccent, backgroundColor: defaultAccent, color: "#FFFFFF" }
        : { borderColor: defaultAccent, backgroundColor: "transparent", color: defaultAccent };

      const haloBorderColor = isActive ? "rgba(255,255,255,0.4)" : defaultAccent;

      const desktopWidthStyle = { width: `${pillWidthPx}px` };

      return (
        <button
          key={s.id}
          type="button"
          aria-label={s.title} // text is hidden on mobile, keep it accessible
          aria-current={isActive ? "step" : undefined}
          aria-disabled={isLocked || undefined}
          disabled={isLocked}
          onClick={() => onClick(s.id, isLocked)}
          className="p-0 bg-transparent border-0"
        >
          {/* MOBILE: icon-only circle */}
          <span className={`${MOBILE_BASE} ${MOBILE_VARIANTS[state]}`} style={containerColorStyle}>
            <span className="relative grid place-items-center w-[22px] h-[22px]" aria-hidden="true">
              <span
                className="absolute inset-0 rounded-full border border-dashed hidden md:block"
                style={{ borderColor: haloBorderColor }}
              />
              {renderIcon(s, 22, isLocked, isActive, "block")}
            </span>
          </span>

          {/* DESKTOP (md+): full pill */}
          <span
            className={`${DESKTOP_BASE} ${DESKTOP_VARIANTS[state]}`}
            style={{ ...desktopWidthStyle, ...containerColorStyle }}
          >
            {/* Left: icon with dashed halo */}
            <span className="relative grid place-items-center w-8 h-8 shrink-0" aria-hidden="true">
              <span
                className="absolute inset-0 rounded-full border border-dashed"
                style={{ borderColor: haloBorderColor }}
              />
              {renderIcon(s, 20, isLocked, isActive)}
            </span>

            {/* Right: title + (optional) progress */}
            <span className="flex flex-col justify-center flex-1 min-w-0">
              <span className="flex items-center justify-between gap-2 min-w-0">
                <span className="text-[17px] leading-none truncate">{s.title}</span>
                {s.countLabel && (
                  <span
                    className="text-sm tabular-nums shrink-0"
                    style={{ color: isActive ? "rgba(255,255,255,0.9)" : defaultAccent }}
                  >
                    {s.countLabel}
                  </span>
                )}
              </span>

              {/* progress only on desktop */}
              {isActive && prog != null && (
                <span className="mt-1 h-[2px] w-full rounded-full bg-white/30">
                  <span
                    className="block h-full rounded-full"
                    style={{
                      width: `${Math.round(Math.max(0, Math.min(1, prog)) * 100)}%`,
                      backgroundColor: defaultAccent,
                    }}
                  />
                </span>
              )}
            </span>
          </span>
        </button>
      );
    });
  }, [steps, active, progressById, defaultAccent, pillWidthPx, onClick, renderIcon]);

  return (
    <div
      role="tablist"
      aria-label="Case study steps"
      className="flex items-center justify-center gap-4 py-1 max-w-full min-w-0"
    >
      {List}
    </div>
  );
}
