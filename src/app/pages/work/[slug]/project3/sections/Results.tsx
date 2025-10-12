/* eslint-disable @next/next/no-img-element */
import React from "react";

const Results = () => {
  return (
    <section
      id="results"
      className="flex flex-col items-start content-start gap-[20px] self-stretch bg-bg-dark text-white py-[30px] md:py-16"
    >
      {/* ===================== RESULTS HEADER ===================== */}
      <div className="flex flex-col items-start gap-[25px] md:w-[1292px] md:gap-[20px]">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-orange"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Results
          </h2>
        </header>

        <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
          The usability testing highlighted clear differences between how participants performed on
          desktop versus mobile. While some tasks were faster and more accurate on mobile, others
          exposed major friction points.
        </p>
      </div>

      {/* ===================== CHART: SUCCESS RATE ===================== */}
      <div className="flex flex-col md:w-[1292px] gap-[10px]">
        <div className="flex items-center justify-between">
          <h3 className="font-PPMori-SemiBold text-[16px] md:text-[20px] leading-relaxed">
            Success Rate
          </h3>
          {/* Legend */}
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <span className="inline-block w-[12px] h-[12px] rounded-sm bg-brand-orange" />
              <span className="font-PPMori text-text-light text-[12px] md:text-[14px]">Desktop</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="inline-block w-[12px] h-[12px] rounded-sm bg-brand-purple" />
              <span className="font-PPMori text-text-light text-[12px] md:text-[14px]">Mobile</span>
            </div>
          </div>
        </div>

        {/* Replace with your chart image */}
        <img
          src="/images/SuccessRate.png"
          alt="Success Rate by task: Desktop vs Mobile"
          className="w-full h-auto rounded"
        />
      </div>

      {/* ===================== CHART: AVERAGE COMPLETION TIME ===================== */}
      <div className="flex flex-col md:w-[1292px] gap-[10px]">
        <div className="flex items-center justify-between">
          <h3 className="font-PPMori-SemiBold text-[16px] md:text-[20px] leading-relaxed">
            Average Completion Time
          </h3>
          {/* Legend */}
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <span className="inline-block w-[12px] h-[12px] rounded-sm bg-brand-orange" />
              <span className="font-PPMori text-text-light text-[12px] md:text-[14px]">Desktop</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="inline-block w-[12px] h-[12px] rounded-sm bg-brand-purple" />
              <span className="font-PPMori text-text-light text-[12px] md:text-[14px]">Mobile</span>
            </div>
          </div>
        </div>

        <img
          src="/images/TimeChart.png"
          alt="Average completion time by task: Desktop vs Mobile"
          className="w-full h-auto rounded"
        />
      </div>

      {/* ===================== CHART: AVERAGE ERRORS ===================== */}
      <div className="flex flex-col md:w-[1292px] gap-[10px]">
        <div className="flex items-center justify-between">
          <h3 className="font-PPMori-SemiBold text-[16px] md:text-[20px] leading-relaxed">
            Average Errors
          </h3>
          {/* Legend */}
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <span className="inline-block w-[12px] h-[12px] rounded-sm bg-brand-orange" />
              <span className="font-PPMori text-text-light text-[12px] md:text-[14px]">Desktop</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="inline-block w-[12px] h-[12px] rounded-sm bg-brand-purple" />
              <span className="font-PPMori text-text-light text-[12px] md:text-[14px]">Mobile</span>
            </div>
          </div>
        </div>

        <img
          src="/images/ErrorChart.png"
          alt="Average errors by task: Desktop vs Mobile"
          className="w-full h-auto rounded"
        />
      </div>

      {/* ===================== QUALITATIVE OBSERVATIONS ===================== */}
      <div className="flex flex-col md:w-[1292px] gap-[16px]">
        <h3 className="font-PPMori-SemiBold text-[16px] md:text-[20px] leading-relaxed">
          Qualitative Observations
        </h3>

        {/* Two-column: copy left, quotes right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {/* Left text */}
          <div className="flex flex-col gap-[10px]">
            <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
              Participants often hesitated due to missing feedback, struggled with confusing terms
              like “mail” vs. “email”, and grew frustrated when toggles didn’t behave as expected.
              Long instructions were skipped, while mobile users in particular expected quicker flows.
            </p>
            <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
              Older participants tended to double-check actions and seek reassurance, while younger
              ones skimmed text and pushed ahead, even when unsure. These patterns explained the
              errors, delays, and confidence gaps reflected in the metrics.
            </p>
          </div>

          {/* Right quotes */}

          <div className="flex flex-col justify-around gap-[12px] p-[20px]">
           
          </div>
          <div className="flex flex-col justify-around gap-[12px] p-[20px]">
           
          </div>

          <div className="flex flex-col justify-around gap-[12px] p-[20px] bg-[#292929]">
            {/* <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed self-stretch text-right">
              <span className="text-brand-orange">“</span>
              I clicked it, but did it actually save? I don’t see a confirmation.
              <span className="text-brand-orange">”</span>
            </p>
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed">
              <span className="text-brand-purple">“</span>
              Wait, does mail mean regular mail or email? I thought they were the same thing.
              <span className="text-brand-purple">”</span>
            </p>
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed self-stretch text-right">
              <span className="text-brand-orange">“</span>
              If I choose paperless for everything, why do I still have to check all these boxes?
              <span className="text-brand-orange">”</span>
            </p> */}
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed">
              <span className="text-brand-purple">“</span>
              On my phone I’d expect this to be quicker, why is it taking so many screens?
              <span className="text-brand-purple">”</span>
            </p>

            <span className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch text-right">
              — Usability testing participants
            </span>
          </div>

          <div className="flex flex-col justify-around gap-[12px] p-[20px] bg-[#292929]">
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed self-stretch text-right">
              <span className="text-brand-orange">“</span>
              I clicked it, but did it actually save? I don’t see a confirmation.
              <span className="text-brand-orange">”</span>
            </p>
            {/* <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed">
              <span className="text-brand-purple">“</span>
              Wait, does mail mean regular mail or email? I thought they were the same thing.
              <span className="text-brand-purple">”</span>
            </p>
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed self-stretch text-right">
              <span className="text-brand-orange">“</span>
              If I choose paperless for everything, why do I still have to check all these boxes?
              <span className="text-brand-orange">”</span>
            </p>
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed">
              <span className="text-brand-purple">“</span>
              On my phone I’d expect this to be quicker, why is it taking so many screens?
              <span className="text-brand-purple">”</span>
            </p> */}

            <span className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch text-right">
              — Usability testing participants
            </span>
          </div>

          <div className="flex flex-col justify-around gap-[12px] p-[20px] bg-[#292929]">
            
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed">
              <span className="text-brand-purple">“</span>
              On my phone I’d expect this to be quicker, why is it taking so many screens?
              <span className="text-brand-purple">”</span>
            </p> 

            <span className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch text-right">
              — Usability testing participants
            </span>
          </div>

          <div className="flex flex-col justify-around gap-[12px] p-[20px] bg-[#292929]">
            
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed self-stretch text-right">
              <span className="text-brand-orange">“</span>
              If I choose paperless for everything, why do I still have to check all these boxes?
              <span className="text-brand-orange">”</span>
            </p>
            <span className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch text-right">
              — Usability testing participants
            </span>
          </div>

          <div className="flex flex-col justify-around gap-[12px] p-[20px] bg-[#292929]">
            
            <p className="font-PPMori italic text-text-light text-[14px] md:text-[20px] leading-relaxed">
              <span className="text-brand-purple">“</span>
              Wait, does mail mean regular mail or email? I thought they were the same thing.
              <span className="text-brand-purple">”</span>
            </p>


            <span className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch text-right">
              — Usability testing participants
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
