"use client";

import Image from "next/image";

export default function Define() {
  return (
    // Full-bleed white background for this section only
    <section id="define" className="relative isolate">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-white -z-10" />

      {/* ===== Title row ===== */}
      <div className="flex flex-col md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[20px] min-w-0 py-[30px] md:py-[70px] text-bg-dark">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* replace with your SVG dot */}
          <span aria-hidden className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal" />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            User Personas
          </h2>
        </header>

        {/* ===== Row 1: Intro (left) + Image (right) ===== */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-auto max-w-screen-2xl gap-[25px] md:gap-[30px] min-w-0 text-neutral-900">
          {/* Intro text */}
          <div className="min-w-0 md:w-[530px]">
            <p className="font-PPMori text-[14px] md:text-[16px] leading-relaxed text-neutral-700 max-w-[48ch]">
              As a <span className="font-PPMori-SemiBold text-neutral-900">graduate student</span> living with roommates,
              <span className="font-PPMori-SemiBold text-neutral-900"> I want to share chores and expenses fairly</span> so that <span className="font-PPMori-SemiBold text-neutral-900">I can focus on my studies
              without unnecessary conflicts or distractions</span>.
            </p>
          </div>

          {/* Image block */}
          <div className="md:w-[740px] min-w-0">
            <figure className="relative overflow-hidden w-full aspect-[16/10]">
              <Image
                src="/images/HEPersona1.png"
                alt="Persona board"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 740px, 100vw"
                priority={false}
              />
            </figure>
          </div>
        </div>

        {/* ===== Row 2: Image (left) + Intro (right) ===== */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[10px] md:py-6 text-neutral-900">
          {/* Image block */}
          <div className="md:w-[740px] min-w-0">
            <figure className="relative w-full aspect-[16/10]">
              <Image
                src="/images/HEPersona2.png"
                alt="Persona board"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 740px, 100vw"
              />
            </figure>
          </div>

          {/* Intro text */}
          <div className="min-w-0 md:w-[530px]">
            <p className="font-PPMori text-[14px] md:text-[16px] leading-relaxed text-neutral-700 max-w-[48ch]">
              As<span className="font-PPMori-SemiBold text-neutral-900"> a social and organized roommate</span>, <span className="font-PPMori-SemiBold text-neutral-900">I want everyone to communicate and participate in
              household decisions </span>so that <span className="font-PPMori-SemiBold text-neutral-900">our home feels cooperative, balanced, and positive</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
