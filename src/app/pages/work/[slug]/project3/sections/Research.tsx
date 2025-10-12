/* eslint-disable @next/next/no-img-element */
import React from "react";

const Research = () => {
  return (
    <div
      id="research"
      className="flex flex-col items-start content-start gap-[20px] self-stretch bg-bg-dark text-white py-[30px] md:py-16"
    >
      {/* ===================== RESEARCH METHODOLOGY ===================== */}
      <div className="flex flex-col items-start pb-[37px] gap-[25px] md:w-[1292px] md:p-0 md:gap-[20px]">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-orange"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Research Methodology
          </h2>
        </header>

        <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
          We used a <span className="font-PPMori-SemiBold text-white">two-phase research</span> approach, starting with a{" "}
          <span className="font-PPMori-SemiBold text-white">heuristic evaluation</span> to identify potential usability issues,
          followed by <span className="font-PPMori-SemiBold text-white">usability testing</span> with{" "}
          <span className="font-PPMori-SemiBold text-white">14 participants</span> to validate those findings through real user behaviors.
        </p>
      </div>

      {/* ===================== HEURISTIC EVALUATION (LEFT RAIL + RIGHT CONTENT) ===================== */}
      <section className="flex flex-col md:flex-row md:w-[1292px] items-start gap-[20px]">
        {/* Left rail title */}
        <div className="md:w-[523px]">
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Heuristic evaluation
          </h2>
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col gap-[16px] min-w-0">
          <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
            Before running usability tests, we conducted a heuristic evaluation of both the desktop and mobile prototypes using
            Nielsen’s 10 usability heuristics as our framework. Each team member reviewed the designs independently, then we
            consolidated our observations into a single report. This gave us a structured view of the design’s strengths and weaknesses.
          </p>

          <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
            Through this process, we uncovered several issues that might not be obvious in a static prototype. For example,{" "}
            <span className="font-PPMori-SemiBold text-white">
              some settings toggles didn’t behave consistently, instructions were longer than necessary, and critical actions
              lacked confirmation messages
            </span>
            . While these weren’t tested with users yet, they signaled areas that could undermine confidence or efficiency.
          </p>

          {/* Charts */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-start gap-[24px] flex-col md:flex-row">
              {/* Desktop chart */}
              <div className="flex flex-col justify-center items-start gap-[10px] min-w-0 md:flex-1">
                <h3 className="font-PPMori-Regular text-[16px] leading-relaxed">Desktop :</h3>
                <img
                  src="/images/Desktop.png"
                  alt="Heuristic radar chart - Desktop"
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Mobile chart */}
              <div className="flex flex-col justify-center items-start gap-[10px] min-w-0 md:flex-1">
                <h3 className="font-PPMori-Regular text-[16px] leading-relaxed">Mobile :</h3>
                <img
                  src="/images/Mobile.png"
                  alt="Heuristic radar chart - Mobile"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT SHAPED OUR USABILITY TESTING ===================== */}
<section className="flex flex-col md:flex-row md:w-[1292px] items-start gap-[20px]">
  {/* Left rail title */}
  <div className="md:w-[523px]">
    <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
      How It Shaped Our Usability Testing
    </h2>
  </div>

  {/* Right content */}
  <div className="flex-1 flex flex-col gap-[16px] min-w-0">
    <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
      The heuristic evaluation gave us an early indication of where users might struggle. Instead of
      treating these as abstract findings, we translated them into realistic scenarios to see how they
      played out with actual participants.
    </p>

    <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
      We designed scenarios that closely mirrored real-world actions members would take in the portal.
      Each scenario reflected a common task in managing healthcare communication preferences. Participants
      were guided through situations such as:
    </p>

    {/* Quotes row */}
    <div className="flex flex-col md:flex-row items-start gap-[24px]">
      <p className="font-PPMori-Regular italic text-text-light text-[14px] md:text-[16px] leading-relaxed max-w-[340px]">
      <span className="font-PPMori-SemiBold text-brand-orange text-[16px] md:text-[24px] leading-0">“</span>Imagine you are setting up your online profile for the first time and need to add your mobile
        number so you can receive text updates about your account.<span className="font-PPMori-SemiBold text-brand-orange text-[16px] md:text-[24px] leading-0">”</span>
      </p>

      <p className="font-PPMori-SemiBold italic text-text-light text-[14px] md:text-[16px] leading-relaxed max-w-[340px]">
      <span className="font-PPMori-SemiBold text-brand-orange text-[16px] md:text-[24px] leading-0">“</span>Now imagine you’d like to go paperless and receive all communication digitally instead of by mail.
        Please update your preferences accordingly.<span className="font-PPMori-SemiBold text-brand-orange text-[16px] md:text-[24px] leading-0">”</span>
      </p>

      <p className="font-PPMori-SemiBold italic text-text-light text-[14px] md:text-[16px] leading-relaxed max-w-[340px]">
      <span className="font-PPMori-SemiBold text-brand-orange text-[16px] md:text-[24px] leading-0">“</span>Finally, imagine you’ve changed your mind and would prefer to receive physical letters again.
        Update your settings so that certain communications are sent by mail.<span className="font-PPMori-SemiBold text-brand-orange text-[16px] md:text-[24px] leading-0">”</span>
      </p>
    </div>

    <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
      These scenarios ensured participants engaged with the portal in ways authentic to their everyday
      needs, while letting us validate risks from the heuristic review and assess task success,
      efficiency, and user confidence.
    </p>
  </div>
</section>
{/* ===================== USABILITY TESTING ===================== */}
{/* ===================== USABILITY TESTING ===================== */}
<section className="flex flex-col md:w-[1292px] gap-[20px]">
  {/* Section title */}
  <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
    Usability Testing
  </h2>

  {/* Intro text */}
  <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
    Building on the scenarios shaped by our heuristic evaluation, we conducted
    <span className="font-PPMori-SemiBold text-white"> moderated usability testings</span>. 
    Sessions were held remotely, where participants shared their screens and 
    thought aloud while attempting tasks on both desktop and mobile prototypes of the portal.
  </p>

  {/* Metrics row */}
  <div className="flex flex-col md:flex-row md:w-[1292px] items-start justify-between gap-[24px] md:gap-0">
    {/* 6 Scenarios */}
    <div className="flex flex-col md:flex-row md:items-baseline">
      <div className="font-PPMori-SemiBold text-brand-orange leading-none text-[72px] md:text-[120px]">
        6
      </div>
      <div className="font-PPMori text-text-light text-[14px] md:text-[16px]">
        Scenarios
      </div>
    </div>

    {/* 14 Participants */}
    <div className="flex flex-col md:flex-row md:items-baseline">
      <div className="font-PPMori-SemiBold text-brand-orange leading-none text-[72px] md:text-[120px]">
        14
      </div>
      <div className="font-PPMori text-text-light text-[14px] md:text-[16px]">
        Participants
      </div>
    </div>

    {/* 25–80 Age Group */}
    <div className="flex flex-col md:flex-row md:items-baseline">
      <div className="font-PPMori-SemiBold text-brand-orange leading-none text-[72px] md:text-[120px]">
        25–80
      </div>
      <div className="font-PPMori text-text-light text-[14px] md:text-[16px]">
        Participant age group
      </div>
    </div>
  </div>

  {/* Supporting text */}
  <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
    Throughout testing, we captured both 
    <span className="font-PPMori-SemiBold text-white"> quantitative metrics</span>, 
    <span className="font-PPMori-SemiBold text-white"> task success rates</span>, 
    <span className="font-PPMori-SemiBold text-white"> time on task</span>, 
    <span className="font-PPMori-SemiBold text-white"> number of errors</span>, and 
    <span className="font-PPMori-SemiBold text-white"> qualitative insights</span> from participants’ comments and behaviors.
  </p>

  <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
    This approach allowed us to go beyond whether participants could complete tasks, 
    and instead measure how efficiently and confidently they did so, while revealing 
    where friction points slowed them down or led to errors.
  </p>
</section>


      {/* ===== You can keep your next sections (How It Shaped… / Usability Testing) below ===== */}
    </div>
  );
};

export default Research;
