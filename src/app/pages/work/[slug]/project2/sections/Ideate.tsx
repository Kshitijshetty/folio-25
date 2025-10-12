/* eslint-disable @next/next/no-img-element */
"use client";

const FEATURES = [
  { n: "1.", title: "Colour-coded Availability", desc: "Simple feature that lets roommates express how they feel each day, helping others understand their mood, avoid tension, and build empathy without needing long conversations." },
  { n: "2.", title: "Wallet System", desc: "A way to share important updates like guests, repairs, or house plans in one place, helping everyone stay informed and on the same page." },
  { n: "3.", title: "Pre-Booking", desc: "A shared system that makes it easy to divide responsibilities, set due dates, and track recurring chores, ensuring everyone contributes fairly and stays organized." },
  { n: "4.", title: "Location Confirmation", desc: "An expense tracker that simplifies logging purchases, splitting costs, and viewing balances, making money matters clear and avoiding awkward conversations." },
  { n: "5.", title: "Feedback Mechanism", desc: "A collaborative grocery list allows roommates to add and track items in one place, making shopping more efficient and avoiding duplicate purchases or forgotten essentials." },
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
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Ideating Features
          </h2>
        </header>
        <div className="flex flex-col self-stretch">
          <p className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch ">
          Based on insights from our personas and their everyday challenges, goals and needs,
            we proposed 5 key features:
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-start gap-[15px] md:gap-[30px]">
        {FEATURES.map((f) => ( <div key={f.title} className="flex flex-col items-start gap-[15px] md:gap-[69px] w-[173px] md:w-[412px]">
          <div className="flex items-baseline gap-2">
                  <span className="font-PPMori-Regular text-[16px] md:text-[18px] text-brand-blue">{f.n}</span>
                  <h3 className="font-PPMori-Regular text-[16px] md:text-[18px]  text-brand-blue">{f.title}</h3>
                </div>
                <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
                  {f.desc}
                </p>
          </div>
          ))}
        </div>
      </section>
      {/* information architechture */}
      


      {/* Design System */}
<section className="flex flex-col items-start gap-[20px]">
  <header className="flex items-center gap-[8px] md:gap-[10px]">
    <span aria-hidden="true" className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue" />
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
          src="/images/DesignPA.png"
          alt="Typography and Color"
          className="w-full h-auto object-contain"
        />
      </figure>
    </div>
  </div>

  {/* Row 2: Reusable Components (title left, image right) */}
  
</section>


      
      </div>
    </section>

    
  );
}
