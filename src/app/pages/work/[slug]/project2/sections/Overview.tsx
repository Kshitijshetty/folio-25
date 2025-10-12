"use client";

export default function Overview() {
  return (
    <section id="overview" className="w-full bg-bg-dark text-white">
      <div className="flex flex-col md:flex-row  md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[30px] md:py-16">
        {/* Title row with placeholder dot (replace with your SVG) */}
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* Placeholder circle — swap this span with your SVG */}
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Project Overview
          </h2>
        </header>

        <div className="flex flex-col  gap-[10px] md:gap-[40px] md:w-[740px]">
          {/* Problem */}
          <div className="flex flex-col  gap-[10px] min-w-0">
            <h3 className=" font-PPMori-Regular text-[18px] md:text-[32px]">
              Problem
            </h3>
            <p className=" font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
            Finding parking in busy areas can be frustrating, drivers waste time circling for spots, struggle with confusing zone numbers, and face unexpected fines due to app errors or unclear rules. 
            </p>
          </div>

          {/* Goal */}
          <div className="flex flex-col gap-[10px] min-w-0">
            <h3 className="font-PPMori-Regular text-[18px] md:text-[32px]">
              Goal
            </h3>
            <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
            To identify pain points in current parking apps usage and design intuitive, user-centered features that reduce friction, save time, and build trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
