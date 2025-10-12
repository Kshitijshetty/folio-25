"use client";

type FutureItem = {
  title: string;
  body: string;
};

function Item({ title, body }: FutureItem) {
  return (
    <div className="flex flex-col  gap-[10px] min-w-0">
      <h3 className=" font-PPMori-Regular text-brand-orange text-[18px] md:text-[32px]">
        {title}
      </h3>
      <p className=" font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

export default function Learnings() {
  const items: FutureItem[] = [
    {
      title: "Accessibility isn’t optional in healthcare",
      body:
        "Participants highlighted that unclear labels, low-contrast text, and non-descriptive buttons created anxiety during high-stakes tasks. Designing for accessibility is not just inclusive, it’s essential for patient trust and safety.",
    },
    {
      title: "Good UX Writing is essential",
      body:
        "Even small mismatches in wording (“Claims” vs. “Bills”) created confusion. I learned to validate terminology through user language mapping before finalizing content.",
    },
    {
        title: "Stakeholder alignment takes empathy too.",
        body:
          "Balancing the needs of patients, providers, and internal teams required early communication and shared success metrics. I learned that human-centered design applies to both users and collaborators.",
      },
  ];

  return (
    <section id="future" className="w-full bg-bg-dark text-white">
      <div className="flex flex-col md:flex-row  md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[30px] md:py-16">
        {/* Title row with placeholder dot (replace with your SVG) */}
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* Placeholder circle — swap this span with your SVG */}
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-orange"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Learnings
          </h2>
        </header>

        <div className="flex flex-col  gap-[10px] md:gap-[40px] md:w-[740px]">
          {items.map((it, i) => (
            <Item key={i} title={it.title} body={it.body} />
          ))}
        </div>
      </div>
    </section>
  );
}
