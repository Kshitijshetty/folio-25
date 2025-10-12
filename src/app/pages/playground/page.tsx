'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type Item = {
  src: string;
  description: string;     // unique per item
  tags: string[];          // unique per item
};

const IMAGES: Item[] = [
  {
    src: '/images/img1.png',
    description: 'BuildBuddy : an app that allows the user to follow step-by-step Lego guides',
    tags: ['Animation', 'Prototyping', 'Interaction Design'],
  },
  {
    src: '/images/img2.png',
    description: 'HighFashion — A Landing Page Concept for a Fast-Fashion Brand',
    tags: ['Concept', 'Prototyping', 'Interaction Design'],
  },
  {
    src: '/images/img3.png',
    description: 'Flag Explorer — An Interactive Website to Discover the Meaning Behind Flags',
    tags: ['Interaction Design', 'Web UI', 'Visual Design'],
  },
  {
    src: '/images/img4.png',
    description: 'An Interactive Weather App for Stargazers',
    tags: ['Prototyping', 'UI Design', 'Mobile'],
  },
  {
    src: '/images/img5.png',
    description: 'An Interactive Weather App for F1 Fans',
    tags: ['Mobile', 'UI Design', 'Prototyping'],
  },
  {
    src: '/images/img6.png',
    description: 'AudioTour — An Accessible Museum Companion App',
    tags: ['Accessibility', 'UI Design', 'Prototyping'],
  },
];

export default function PlaygroundPage() {
  const [active, setActive] = useState(0);

  const itemsRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const previewWrapRef = useRef<HTMLDivElement | null>(null);
  const previewImgRef = useRef<HTMLImageElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);

  // crossfade text on active change
  useEffect(() => {
    if (!descRef.current || !tagsRef.current) return;
    const tl = gsap.timeline();
    tl.to([descRef.current, tagsRef.current], { opacity: 0, duration: 0.18, ease: 'power2.out' })
      .to([descRef.current, tagsRef.current], { opacity: 1, duration: 0.18, ease: 'power2.out' });
    return () => {
      tl.kill();
    };
  }, [active]);

  useEffect(() => {
    const items = itemsRef.current!;
    const indicator = indicatorRef.current!;
    const previewWrap = previewWrapRef.current!;
    const previewImage = previewImgRef.current!;

    const itemElements = Array.from(items.querySelectorAll<HTMLDivElement>('.item'));
    const itemImages = Array.from(items.querySelectorAll<HTMLImageElement>('.item img'));

    // Body lock/unlock for desktop (so wheel/drag focuses the canvas)
    const prevOverflow = document.body.style.overflow;
    const prevHeight = document.body.style.height;
    const prevTouchAction = document.body.style.touchAction;
    const lockBody = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100svh';
      document.body.style.touchAction = 'none';
    };
    const unlockBody = () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.height = prevHeight;
      document.body.style.touchAction = prevTouchAction;
    };

    const isDesktopNow = () => window.matchMedia('(min-width: 768px)').matches;
    let isMobile = !isDesktopNow();
    if (isMobile) unlockBody();
    else lockBody();

    let dimensions = { itemSize: 0, containerSize: 0, indicatorSize: 0 };
    let maxTranslate = 0;
    let currentTranslate = 0;
    let targetTranslate = 0;
    let isClickMove = false;
    let currentImageIndex = 0;
    const activeItemOpacity = 0.3;

    const lerp = (s: number, e: number, f: number) => s + (e - s) * f;

    function updateDimensions() {
      isMobile = !isDesktopNow();
      if (isMobile) unlockBody();
      else lockBody();

      if (!itemElements.length) return dimensions;

      if (isMobile) {
        // Mobile: horizontal strip
        dimensions = {
          itemSize: itemElements[0].getBoundingClientRect().width,
          containerSize: items.scrollWidth,
          indicatorSize: indicator.getBoundingClientRect().width,
        };
      } else {
        // Desktop: vertical strip
        dimensions = {
          itemSize: itemElements[0].getBoundingClientRect().height,
          containerSize: items.getBoundingClientRect().height,
          indicatorSize: indicator.getBoundingClientRect().height,
        };
      }

      maxTranslate = Math.max(0, dimensions.containerSize - dimensions.indicatorSize);
      targetTranslate = Math.min(Math.max(targetTranslate, -maxTranslate), 0);
      currentTranslate = Math.min(Math.max(currentTranslate, -maxTranslate), 0);

      items.style.transform = isMobile
        ? `translateX(${currentTranslate}px)`
        : `translateY(${currentTranslate}px)`;

      return dimensions;
    }

    updateDimensions();

    function getItemInIndicator() {
      // reset all img opacities
      itemImages.forEach((img) => (img.style.opacity = '1'));

      const indicatorStart = -currentTranslate;
      const indicatorEnd = indicatorStart + dimensions.indicatorSize;

      let maxOverlap = 0;
      let selectedIndex = 0;

      itemElements.forEach((_, index) => {
        const itemStart = index * dimensions.itemSize;
        const itemEnd = itemStart + dimensions.itemSize;
        const overlapStart = Math.max(indicatorStart, itemStart);
        const overlapEnd = Math.min(indicatorEnd, itemEnd);
        const overlap = Math.max(0, overlapEnd - overlapStart);
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          selectedIndex = index;
        }
      });

      itemImages[selectedIndex].style.opacity = String(activeItemOpacity);
      return selectedIndex;
    }

    function updatePreview(index: number) {
      if (currentImageIndex !== index) {
        currentImageIndex = index;
        const targetItem = itemElements[index].querySelector('img')!;
        const targetSrc = targetItem.getAttribute('src')!;

        // crossfade the big image quickly for polish
        gsap.to(previewImage, {
          opacity: 0,
          duration: 0.12,
          ease: 'power2.out',
          onComplete: () => {
            previewImage.setAttribute('src', targetSrc);
            previewImage.setAttribute('alt', IMAGES[index].description);
            setActive(index);
            gsap.to(previewImage, { opacity: 1, duration: 0.12, ease: 'power2.out' });
          },
        });
      }
    }

    const tickerFn = () => {
      const lerpFactor = isClickMove ? 0.05 : 0.075;
      const next = lerp(currentTranslate, targetTranslate, lerpFactor);

      if (Math.abs(next - currentTranslate) > 0.01) {
        currentTranslate = next;
        items.style.transform = isMobile
          ? `translateX(${currentTranslate}px)`
          : `translateY(${currentTranslate}px)`;
        const activeIndex = getItemInIndicator();
        updatePreview(activeIndex);
      } else {
        currentTranslate = targetTranslate;
        isClickMove = false;
      }
    };
    gsap.ticker.add(tickerFn);

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isClickMove = false;
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const vel = Math.min(Math.max(delta * 0.5, -20), 20);
      targetTranslate = Math.min(Math.max(targetTranslate - vel, -maxTranslate), 0);
    };

    let touchStartY = 0;
    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const onTouchMovePreview = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      const deltaY = touchStartY - touchY;
      const deltaX = touchStartX - touchX;
      const primary = !isDesktopNow()
        ? Math.abs(deltaX) >= Math.abs(deltaY)
          ? deltaX
          : deltaX || deltaY
        : deltaY;
      const vel = Math.min(Math.max(primary * 0.5, -20), 20);
      targetTranslate = Math.min(Math.max(targetTranslate - vel, -maxTranslate), 0);
      touchStartY = touchY;
      touchStartX = touchX;
    };

    const onTouchMoveMinimap = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      const deltaY = touchStartY - touchY;
      const deltaX = touchStartX - touchX;
      const primary = !isDesktopNow() ? deltaX : deltaY;
      const vel = Math.min(Math.max(primary * 0.5, -20), 20);
      targetTranslate = Math.min(Math.max(targetTranslate - vel, -maxTranslate), 0);
      touchStartY = touchY;
      touchStartX = touchX;
    };

    const itemClickHandlers = itemElements.map((item, index) => {
      const handler = () => {
        isClickMove = true;
        targetTranslate =
          -index * dimensions.itemSize + (dimensions.indicatorSize - dimensions.itemSize) / 2;
        targetTranslate = Math.max(Math.min(targetTranslate, 0), -maxTranslate);
      };
      item.addEventListener('click', handler);
      return { item, handler };
    });

    // Dragging the indicator area
    let isDragging = false;
    let pointerLastX = 0;
    let pointerLastY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      pointerLastX = e.clientX;
      pointerLastY = e.clientY;
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - pointerLastX;
      const dy = e.clientY - pointerLastY;
      pointerLastX = e.clientX;
      pointerLastY = e.clientY;
      const primary = !isDesktopNow() ? dx : -dy;
      targetTranslate = Math.min(Math.max(targetTranslate - primary, -maxTranslate), 0);
      isClickMove = true;
      e.preventDefault();
    };
    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    };

    indicator.addEventListener('pointerdown', onPointerDown as EventListener);
    window.addEventListener('pointermove', onPointerMove as EventListener, { passive: false });
    window.addEventListener('pointerup', onPointerUp as EventListener);

    // Scroll + touch listeners
    previewWrap.addEventListener('wheel', onWheel, { passive: false });
    items.addEventListener('wheel', onWheel, { passive: false });
    previewWrap.addEventListener('touchstart', onTouchStart, { passive: true });
    previewWrap.addEventListener('touchmove', onTouchMovePreview, { passive: false });
    items.addEventListener('touchstart', onTouchStart, { passive: true });
    items.addEventListener('touchmove', onTouchMoveMinimap, { passive: false });

    const onResize = () => updateDimensions();
    window.addEventListener('resize', onResize);

    return () => {
      gsap.ticker.remove(tickerFn);
      indicator.removeEventListener('pointerdown', onPointerDown as EventListener);
      window.removeEventListener('pointermove', onPointerMove as EventListener);
      window.removeEventListener('pointerup', onPointerUp as EventListener);
      previewWrap.removeEventListener('wheel', onWheel as EventListener);
      items.removeEventListener('wheel', onWheel as EventListener);
      previewWrap.removeEventListener('touchstart', onTouchStart as EventListener);
      previewWrap.removeEventListener('touchmove', onTouchMovePreview as EventListener);
      items.removeEventListener('touchstart', onTouchStart as EventListener);
      items.removeEventListener('touchmove', onTouchMoveMinimap as EventListener);
      window.removeEventListener('resize', onResize as EventListener);

      // Use the collected handlers to clean up (fixes the "assigned but never used" warning)
      itemClickHandlers.forEach(({ item, handler }) => {
        item.removeEventListener('click', handler);
      });

      unlockBody();
    };
  }, []);

  const meta = IMAGES[active];

  return (
    <>
      {/* MAIN PLAYGROUND SECTION */}
      <div className="relative w-screen h-[100svh] overflow-hidden bg-bg-dark pt-[70px] md:pt-[130px] md:pb-[82.557px]">
        <div className="relative w-full h-full">
          {/* Description + tags (mobile top-center; md: left-center) */}
          <aside className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 translate-y-0 w-full md:left-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-auto">
            <div className="flex flex-col justify-between w-full md:w-[40%]">
              <div className="flex flex-col gap-[10px] md:justify-center md:flex-grow p-[23px]">
                <div
                  ref={descRef}
                  className="text-text-light font-PPMori text-[14px] md:text-[24px] transition-colors duration-300"
                >
                  {meta.description}
                </div>

                <div
                  ref={tagsRef}
                  className="flex flex-wrap gap-x-[20px] text-text-light font-PPMori text-[14px] transition-colors duration-300"
                >
                  {meta.tags.map((t, idx) => (
                    <div key={idx}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Preview image (mobile slightly higher; md centered larger) */}
          <div
            ref={previewWrapRef}
            className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[75%] h-1/2 overflow-hidden md:top-1/2 md:w-1/2 md:h-[75%]"
          >
            <img
              ref={previewImgRef}
              src={IMAGES[0].src}
              alt={meta.description}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
              draggable={false}
            />
          </div>

          {/* Minimap + indicator (mobile bottom-center horizontal; md right-middle vertical) */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 h-20 w-auto md:bottom-auto md:left-auto md:translate-x-0 md:top-1/2 md:right-32 md:w-20 md:h-auto">
            <div
              ref={indicatorRef}
              className="absolute top-0 left-0 w-[60px] h-full border border-brand-orange z-[2] md:w-full md:h-[60px]"
            />
            <div
              ref={itemsRef}
              className="relative w-full h-full flex flex-row md:flex-col gap-0 [will-change:transform]"
            >
              {IMAGES.map((it, i) => (
                <div
                  key={i}
                  className="item w-[60px] h-full p-[5px] cursor-pointer md:w-full md:h-[60px] flex"
                >
                  <img
                    src={it.src}
                    alt={it.description}
                    className="w-full h-full object-cover transition-opacity duration-200 select-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
