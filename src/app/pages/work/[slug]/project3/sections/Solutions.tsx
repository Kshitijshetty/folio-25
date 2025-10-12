"use client";

const FEATURES = [
  {
    n: "1.",
    title: "Add confirmation feedback",
    desc: "Provide clear success messages (e.g., “Your number has been added”) to reassure users and reduce hesitation.",
  },
  {
    n: "2.",
    title: "Clarify terminology",
    desc: "Differentiate “mail” and “email” with distinct labels or icons to prevent confusion across age groups.",
  },
  {
    n: "3.",
    title: "Simplify toggle behavior",
    desc: "Ensure global options like “Go paperless for everything” apply universally without requiring additional steps.",
  },
  {
    n: "4.",
    title: "Shorten instructions",
    desc: "Replace long paragraphs with brief, scannable text to support both skimmers and detail-oriented users.",
  },
  {
    n: "5.",
    title: "Introduce a Save button",
    desc: "Give users explicit control to finalize changes, boosting confidence and trust.",
  },
  
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative isolate">
      {/* Full-bleed white background */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-white -z-10" />

      {/* Content wrapper (same padding/spacing as Outcomes) */}
      <div className="flex flex-col mx-auto max-w-screen-2xl gap-[25px] md:gap-[20px] min-w-0 py-[30px] md:py-16 text-neutral-900">
        {/* Header */}
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-orange"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Recommended Suggestions
          </h2>
        </header>

        {/* Intro */}
        <p className="font-PPMori text-neutral-600 text-[12px] md:text-[14px]">
        Based on the issues uncovered in testing, our team proposed five usability fixes to improve the portal’s communication preference center:
        </p>

        {/* Features grid */}
        <div className="flex flex-row flex-wrap items-start gap-[15px] md:gap-[30px]">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-[15px] md:gap-[69px] w-[173px] md:w-[412px]"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-PPMori-Regular text-[16px] md:text-[18px] text-brand-orange">
                  {f.n}
                </span>
                <h3 className="font-PPMori-Regular text-[16px] md:text-[18px] text-brand-orange">
                  {f.title}
                </h3>
              </div>
              <p className="font-PPMori text-neutral-600 text-[14px] md:text-[16px] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
