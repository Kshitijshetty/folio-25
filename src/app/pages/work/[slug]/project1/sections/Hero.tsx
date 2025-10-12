"use client";

import Image, { StaticImageData } from "next/image";

type HeroMediaProps = {
  // allow public path string or a static import
  src?: string | StaticImageData;
  alt?: string;
};

export default function Hero({
  src = "/images/014.png",
  alt = "Project preview",
}: HeroMediaProps) {
  return (
    <section id="hero" className="relative w-full min-h-[100svh] bg-bg-dark text-white">
      <div className="mx-auto max-w-screen-2xl min-w-0 pt-[70px] md:pt-[130px] md:pb-[82.557px]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-[10px] md:gap-[30px]">
          {/* LEFT */}
          <div className="flex flex-col items-start gap-[13px] w-full md:w-[520px] lg:flex-none md:flex-1 min-w-0">
            <p className="text-text-light font-PPMori text-[12px] md:text-[20px] leading-relaxed">
              <span className="font-PPMori-SemiBold text-white">80% reduction in roommate conflicts: </span>A shared-living app designed to simplify 
              communication and cut down on daily friction.
            </p>

            <div className="self-stretch leading-[0.9] select-none">
              <h1 className="self-stretch font-PPMori-SemiBold text-[96px] md:text-[116px] text-[#0A9] leading-[0.9] min-w-0">
                Home
              </h1>
              <h1 className="self-stretch font-PPMori-SemiBold text-[96px] md:text-[116px] text-[#88C6C0] tracking-tight text-right">
                Ease
              </h1>
            </div>

            <dl className="self-stretch space-y-2 text-[12px] md:text-[16px] text-text-light font-PPMori">
              <div className="flex gap-2">
                <dt className="shrink-0 text-white font-PPMori-SemiBold">Role:</dt>
                <dd className="grow">Research, UI/UX Design, Interaction Design</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-white font-PPMori-SemiBold">Team:</dt>
                <dd className="grow">4 UI/UX designers</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-white font-PPMori-SemiBold">Tools:</dt>
                <dd className="grow">Figma, FigJam</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-white font-PPMori-SemiBold">Duration:</dt>
                <dd className="grow">4 Months</dd>
              </div>
            </dl>
          </div>

          {/* RIGHT: media frame */}
          <div className="min-w-0 w-full md:flex-1 lg:flex-none lg:w-[745px]">
            <div className="
              relative w-full overflow-hidden
              h-[300px] md:h-[600px] lg:h-[720px]   /* <- height at breakpoints */
              aspect-[16/10] lg:aspect-auto         /* ignore aspect at lg so height wins */
            ">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover [object-position:75%_50%]"  /* tweak focal point as needed */
                priority
                sizes="(min-width:1024px) 745px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
