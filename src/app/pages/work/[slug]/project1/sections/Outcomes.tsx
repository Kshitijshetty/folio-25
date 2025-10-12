"use client";

const OUTCOMES = [
  { pct: 80, text: "of users liked the recurring tasks feature for long–term coordination." },
  { pct: 90, text: "found the expense tracking system more convenient for cost-splitting." },
  { pct: 85, text: "appreciated the announcements feature for improved communication." },
  { pct: 80, text: "found the mood update feature helpful for reducing conflicts." },
];

export default function Outcomes() {
  return (
    // Full-bleed white background behind this section only
    <section id="outcomes" className="relative isolate">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-white -z-10" />

      {/* Same layout + spacing as your Overview */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[30px] md:py-16 text-neutral-900">
        {/* Title row with placeholder dot (swap for your SVG) */}
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span aria-hidden="true" className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal" />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Outcomes
          </h2>
        </header>

        {/* Right column: metrics list */}
        <ul className="flex flex-col gap-[28px] md:gap-[40px] md:w-[740px] min-w-0">
          {OUTCOMES.map((o, i) => (
            <li key={i} className="flex items-center md:items-baseline gap-[16px] md:gap-[15px]">
              {/* Big percentage */}
              <div className="flex-none font-PPMori-SemiBold leading-none tracking-tight text-brand-teal text-[64px] md:text-[96px]">
                {o.pct}%
              </div>
              {/* Description */}
              <p className="min-w-0 font-PPMori text-bg-dark text-[14px] md:text-[16px] leading-relaxed">
                {o.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
