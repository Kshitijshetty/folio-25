'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function AboutHero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const playedRef = useRef(false);

  useLayoutEffect(() => {
    if (playedRef.current || !rootRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    playedRef.current = true;

    const items = rootRef.current.querySelectorAll<HTMLElement>('[data-anim]');
    gsap.set(items, { opacity: 0, y: 50 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.12,
    });
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-dvw bg-bg-dark text-white px-[12px] md:px-[70px]"
    >
      <div
        className="mx-auto max-w-screen-2xl 
                   md:min-h-dvh 
                   flex flex-col md:flex-row 
                   items-start md:items-end 
                   justify-start md:justify-between 
                   gap-[25px] md:gap-[50px] 
                   pt-[150px] md:pt-[80px] 
                   pb-[0px] md:pb-[30px]"
      >
        {/* TEXT — left on desktop, below image on mobile */}
        <div className=" md:order-1 flex-1 flex">
          <div className="mt-0 md:mt-0 md:self-end">
            <div
              data-anim
              className="text-brand-orange font-PPMori-SemiBold leading-none text-[72px] md:text-[128px] mb-[12px] md:mb-[20px]"
            >
              Kshitij
            </div>

            <div
              data-anim
              className="text-brand-purple text-right font-PPMori-SemiBold leading-[0.95] text-[72px] md:text-[128px]"
            >
              Shetty
            </div>

            <p
              data-anim
              className="mt-[6px] md:mt-[30px] max-w-[600px] text-text-light font-PPMori text-[14px] md:text-[24px] leading-snug md:leading-relaxed"
            >
              a <span className="font-PPMori-SemiBold italic">UI/UX designer</span> and{' '}
              <span className="font-PPMori-SemiBold italic">front-end developer</span>{' '}
              passionate about building human-centered digital experiences.
            </p>
          </div>
        </div>

        {/* IMAGE — top on mobile, right on desktop */}
        <div className=" md:order-2 w-full md:w-auto">
          <div className="relative w-full aspect-[679/631] md:h-[514px] md:w-[477px] overflow-hidden bg-[#1f1f21]">
            <Image
              src="/images/KShetty.jpg"
              alt="Portrait of Kshitij Shetty"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 631px"
              className="object-cover object-center md:object-bottom "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
