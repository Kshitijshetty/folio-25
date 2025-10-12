/* eslint-disable @next/next/no-img-element */
"use client";

const FEATURES = [
  { n: "1.", title: "Mood Sharing", desc: "Simple feature that lets roommates express how they feel each day, helping others understand their mood, avoid tension, and build empathy without needing long conversations." },
  { n: "2.", title: "Announcements", desc: "A way to share important updates like guests, repairs, or house plans in one place, helping everyone stay informed and on the same page." },
  { n: "3.", title: "Tasks", desc: "A shared system that makes it easy to divide responsibilities, set due dates, and track recurring chores, ensuring everyone contributes fairly and stays organized." },
  { n: "4.", title: "Expenses", desc: "An expense tracker that simplifies logging purchases, splitting costs, and viewing balances, making money matters clear and avoiding awkward conversations." },
  { n: "5.", title: "Groceries", desc: "A collaborative grocery list allows roommates to add and track items in one place, making shopping more efficient and avoiding duplicate purchases or forgotten essentials." },
  { n: "6.", title: "Notifications", desc: "Timely alerts that keep everyone updated on house activities, whether it's a new task assigned, an announcement posted, or a shared expense added, making coordination effortless and reducing miscommunication." },
];

export default function Ideate() {
  return (
    <section id="ideate" className="w-full bg-bg-dark text-white">
      <div className="flex flex-col  md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[30px] md:py-16">
      {/* Ideating Feature  */}
      <section className="flex flex-col items-start gap-[20px]">
      <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* Placeholder circle — swap this span with your SVG */}
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Ideating Features
          </h2>
        </header>
        <div className="flex flex-col self-stretch">
          <p className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch ">
          Based on insights from our personas and their everyday challenges,
            we proposed six key features designed to simplify shared living, 
            improve communication, and create a more balanced household experience.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-start gap-[15px] md:gap-[30px]">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-start gap-[15px] md:gap-[69px] w-[173px] md:w-[412px]"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-PPMori-Regular text-[16px] md:text-[18px] text-brand-teal">{f.n}</span>
                <h3 className="font-PPMori-Regular text-[16px] md:text-[18px]  text-brand-teal">{f.title}</h3>
              </div>
              <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* information architechture */}
      <section className="flex flex-col items-start gap-[20px]">
      <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* Placeholder circle — swap this span with your SVG */}
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Information Architecture
          </h2>
        </header>
        <div className="flex flex-col self-stretch">
          <p className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch ">
          To bring clarity to every interaction, we mapped out the information architecture to define how roommates navigate, access, and connect with each feature seamlessly.
          </p>
        </div>
        <figure className="overflow-hidden  w-full">
          <div className="aspect-[21/9] w-full h-auto grid place-items-center text-white/60 text-sm">
            {/* image inserted — classes retained */}
            <img src="/images/HEIA.png" alt="Information Architecture" className="w-full h-full object-contain" />
          </div>
        </figure>
      </section>

      {/* information architechture */}
      <section className="flex flex-col items-start gap-[20px]">
      <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* Placeholder circle — swap this span with your SVG */}
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
          Sketching Solutions
          </h2>
        </header>
        <div className="flex flex-col self-stretch">
          <p className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch ">
          We began sketching early concepts to explore different ways roommates could interact with key features. 
          </p>
        </div>
        <figure className="overflow-hiddenw-full">
          <div className="aspect-[21/9] w-full h-auto grid place-items-center text-white/60 text-sm">
            <img src="/images/HESketches.png" alt="Sketching Solutions" className="w-full h-full object-contain" />
          </div>
        </figure>
      </section>

      {/* information architechture */}
      <section className="flex flex-col items-start gap-[20px]">
      <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* Placeholder circle — swap this span with your SVG */}
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
          Low -Fidelity Designs 
          </h2>
        </header>
        <div className="flex flex-col self-stretch">
          <p className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch ">
          We translated our sketches into low-fidelity wireframes to visualize the core layout and user flow, allowing us to test structure and functionality before refining the visuals.
          </p>
        </div>
        <figure className="overflow-hidden w-full">
          <div className="aspect-[21/9] w-full h-auto grid place-items-center text-white/60 text-sm">
            <img src="/images/HELofi.png" alt="Low-Fidelity Designs" className="w-full h-full object-contain" />
          </div>
        </figure>
      </section>

      {/* information architechture */}
      {/* Design System */}
<section className="flex flex-col items-start gap-[20px]">
  <header className="flex items-center gap-[8px] md:gap-[10px]">
    <span aria-hidden="true" className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal" />
    <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
      Design System
    </h2>
  </header>

  <div className="flex flex-col self-stretch ">
    <p className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch ">
      We created a lightweight design system with <span className="font-PPMori-SemiBold text-white">reusable components</span>, 
      <span className="font-PPMori-SemiBold text-white"> consistent typography</span>, and <span className="font-PPMori-SemiBold text-white">colour pallet</span> to keep the app cohesive and speed up iterations.
    </p>
  </div>

  {/* Row 1: Typography & Color (title left, image right) */}
  <div className="flex md:flex-row flex-col w-full justify-between items-start  gap-[10px] md:gap-[30px] ">
    <h3 className="font-PPMori-Regular text-[16px] md:text-[18px] md:w-[520px]">Typography and Color</h3>
    <div className="flex-1 min-w-0">
      <figure className="overflow-hidden w-full">
        <img
          src="/images/HETypo.png"
          alt="Typography and Color"
          className="w-full h-auto object-contain"
        />
      </figure>
    </div>
  </div>

  {/* Row 2: Reusable Components (title left, image right) */}
  <div className="flex md:flex-row flex-col w-full justify-between items-start gap-[10px] md:gap-[30px]  ">
    <h3 className="font-PPMori-Regular text-[16px] md:text-[18px] md:w-[520px]">Reusable Components</h3>
    <div className="flex-1 min-w-0">
      <figure className="overflow-hidden w-full">
        <img
          src="/images/HEComponents.png"
          alt="Typography and Color"
          className="w-full h-auto object-contain"
        />
      </figure>
    </div>
  </div>
</section>


      
      </div>
    </section>

    
  );
}
