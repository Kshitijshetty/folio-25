"use client";
import { useEffect, useRef } from "react";

const INSIGHTS = [
  { pct: 89, text: "of students didn’t prioritize roommate compatibility when choosing housing." },
  { pct: 56, text: "reported that mismatched roommates negatively impacted their mental health and study time." },
  { pct: 100, text: "expressed they did not want to switch roommates, or couldn’t switch because they had signed a lease." },
];

// Staggered columns: one has 3 cards (starts higher), the other has 2 (starts lower)
const COL_A = [
  { title: "Personality Clashes", desc: "Conflicting habits, routines, and values" },
  { title: "Unshared Interests", desc: "Minimal common ground or social connection" },
  { title: "Communication Gaps", desc: "Little to no discussion about problems/needs" },
];
const COL_B = [
  { title: "Lack of Ground Rules", desc: "No shared expectations or house guidelines" },
  { title: "Uneven Responsibilities", desc: "Unbalanced chores and task distribution" },
];

export default function Discover() {
  const leftVideoBoxRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const BREAKPOINT = 1024; // lg and up = "big screen"

    const applyHeights = () => {
      const left = leftVideoBoxRef.current;
      const right = rightContentRef.current;
      if (!left) return;

      if (window.innerWidth >= BREAKPOINT && right) {
        const target = Math.max(709, right.offsetHeight);
        left.style.height = `${target}px`;
      } else {
        // reset on small screens (keep your original behavior)
        left.style.height = "";
      }
    };

    applyHeights();
    window.addEventListener("resize", applyHeights);

    let ro: ResizeObserver | null = null;
    if (rightContentRef.current) {
      ro = new ResizeObserver(applyHeights);
      ro.observe(rightContentRef.current);
    }

    return () => {
      window.removeEventListener("resize", applyHeights);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <section id="discover" className="w-full bg-bg-dark text-white">
      {/* ---------- USER RESEARCH ---------- */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[30px] md:py-16">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span aria-hidden className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal" />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">User Research</h2>
        </header>

        <div className="flex flex-col gap-[12px] md:gap-[25px] md:w-[740px] min-w-0">
          <h3 className="font-PPMori-Regular text-[18px] md:text-[32px]">Qualitative Research Insights</h3>
          <p className="font-PPMori text-text-light text-[12px] md:text-[16px]">
            We interviewed <span className="font-PPMori-SemiBold text-white">9 students</span> living with roommates to learn about their everyday challenges, from communication struggles to managing shared chores and expenses.
          </p>
          <ul className="mt-2 flex flex-col gap-[18px] md:gap-[25px]">
            {INSIGHTS.map((item, i) => (
              <li key={i} className="flex items-center gap-[14px] md:gap-[24px]">
                <div className="flex-none font-PPMori-SemiBold leading-none text-brand-teal text-[64px] md:text-[96px]">
                  {item.pct}%
                </div>
                <p className="min-w-0 font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- PAIN POINTS (staggered tiles, NO <Card />) ---------- */}
      <div className="flex flex-col md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[30px] md:py-16">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span aria-hidden className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal" />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">Pain Points</h2>
        </header>

        {/* Content row: left video, right staggered columns */}
        <div className="flex flex-col md:flex-row items-start gap-[20px] md:gap-[32px] min-w-0">
          {/* LEFT: video (replaces placeholder) */}
          <div
            ref={leftVideoBoxRef}
            className="w-full md:w-[520px] h-full aspect-square overflow-hidden ring-1 ring-white/10 bg-[#F5EDE5]"
          >
            <video
              className="w-full h-full object-cover"
              playsInline
              muted
              loop
              autoPlay
              controls={false}
              preload="metadata"
              poster="/images/research-poster.jpg" /* optional */
            >
              <source src="/images/HEAffinityMap.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* RIGHT: intro + two staggered columns of inline tiles */}
          <div
            ref={rightContentRef}
            className="flex flex-col min-w-0 md:gap-[40px] md:w-[740px]"
          >
            <p className="flex font-PPMori text-text-light text-[20px] md:text-[32px] leading-relaxed">
              Based on the interviews, we categorized the roommate issues into five core themes for clarity:
            </p>

            <div className="flex mt-4 items-end gap-[25px] md:gap-[35px]">
              {/* Column A (3 tiles, starts higher) */}
              
              {/* Column B (2 tiles, pushed down to create the stagger) */}
              <div className="md:w-1/2 flex flex-col gap-[25px] md:gap-[35px] min-w-0 ">
                {COL_B.map((t, i) => (
                  <div
                    key={`b-${i}`}
                    className="flex flex-col border border-brand-teal/60 bg-transparent px-4 py-4 md:px-6 md:py-6 gap-[48px]"
                  >
                    <h4 className="font-PPMori-Regular text-brand-teal text-[16px] md:text-[18px]">
                      {t.title}
                    </h4>
                    <p className="mt-1 font-PPMori text-text-light text-[13px] md:text-[14px] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex md:w-1/2 flex-col gap-[25px] md:gap-[35px] min-w-0">
                {COL_A.map((t, i) => (
                  <div
                    key={`a-${i}`}
                    className="flex flex-col border border-brand-teal/60 bg-transparent px-4 py-4 md:px-6 md:py-6 gap-[48px]"
                  >
                    <h4 className="font-PPMori-Regular text-brand-teal text-[16px] md:text-[18px]">
                      {t.title}
                    </h4>
                    <p className="mt-1 font-PPMori text-text-light text-[13px] md:text-[14px] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
