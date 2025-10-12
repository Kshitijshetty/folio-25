// components/Hero.tsx
'use client';

import { useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const playedRef = useRef(false);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);

  const playIntro = () => {
    if (playedRef.current || !heroRef.current) return;
    playedRef.current = true;
    const items = heroRef.current.querySelectorAll<HTMLElement>('[data-anim]');
    gsap.set(items, { opacity: 0, y: 50 });
    gsap.to(items, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12 });
  };

  // Keep your autoplay resilience logic intact
  useEffect(() => {
    const tryPlay = () => {
      [mobileVideoRef.current, desktopVideoRef.current].forEach(v => {
        if (!v) return;
        v.muted = true; // required for autoplay
        const p = v.play();
        if (p?.catch) p.catch(() => {}); // ignore
      });
    };
    const onVisible = () => document.visibilityState === 'visible' && tryPlay();
    const onPageShow = () => tryPlay();

    tryPlay();
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, []);

  // Apply the SAME animation trigger as AboutHero (no loader event / timeout)
  useLayoutEffect(() => {
    if (playedRef.current || !heroRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    playIntro();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-dvh w-dvw overflow-x-hidden px-[12px] md:px-[70px] bg-bg-dark text-white"
    >
      {/* Background videos */}
      {/* Mobile */}
      <video
        ref={mobileVideoRef}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none md:hidden"
        playsInline
        muted
        autoPlay
        loop
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/images/hero-mobile.webm" type="video/webm" />
        <source src="/images/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Desktop */}
      <video
        ref={desktopVideoRef}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none hidden md:block"
        playsInline
        muted
        autoPlay
        loop
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/images/hero.webm" type="video/webm" />
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* First Name */}
      <div
        data-anim
        className="absolute text-brand-orange font-PPMori-SemiBold text-[96px] md:text-[128px] bottom-[160px] md:bottom-[172px]"
      >
        Kshitij
      </div>

      {/* Last Name */}
      <div
        data-anim
        className="absolute text-brand-purple font-PPMori-SemiBold text-[96px] md:text-[128px] bottom-[64px] md:bottom-[56px] right-[12px] md:left-[212px]"
      >
        Shetty
      </div>

      <div
        data-anim
        className="absolute flex md:flex-col flex-wrap md:gap-y-1 md:w-[537px] text-text-light font-PPMori text-[12px] md:text-[16px] bottom-[65px] md:bottom-[55px] left-[16px] md:left-[272px] leading-snug space-x-0.5 md:space-x-0"
      >
        <span>
        <span className="font-PPMori-SemiBold">2+ years</span> experience desiging for  </span>
        <span><span className="font-PPMori-SemiBold">HealthCare</span>, <span className="font-PPMori-SemiBold">B2B Saas</span>, and <span className="font-PPMori-SemiBold">Marketing</span> Businesses.</span>
        
       
      </div>

      {/* Tagline */}
      <div
        data-anim
        className="absolute flex md:flex-col flex-wrap md:gap-y-1 md:w-[537px] text-text-light font-PPMori text-[12px] md:text-[16px] bottom-[286px] md:bottom-[225px] right-[12px] md:left-[459px] leading-snug space-x-0.5 md:space-x-0"
      >
        <span>
          I <span className="font-PPMori-SemiBold">Research, </span>
        </span>
        <span className="font-PPMori-SemiBold">Design </span>
        <span>and </span>
        <span>
          <span className="font-PPMori-SemiBold">Develop </span>Digital Products
        </span>
      </div>
    </div>
  );
};

export default Hero;
