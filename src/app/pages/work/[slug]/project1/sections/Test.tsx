"use client";

export default function Testing() {
  return (
    <section id="test" className="w-full bg-bg-dark text-white">
      <div className="flex flex-col  md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[20px] min-w-0 py-[30px] md:py-16">
      <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* Placeholder circle — swap this span with your SVG */}
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            Usability Testing
          </h2>
        </header>
        <div className="flex flex-col md:flex-row  md:justify-between md:items-start gap-[25px]">
        <div className="flex flex-col self-stretch md:w-[522px]">
          <p className="font-PPMori text-text-light text-[12px] md:text-[14px] self-stretch ">
          To validate HomeEase’s core features and ensure our design flows were intuitive, we conducted four usability tests , one by each team member. Our goal was to observe how new users interact with the app, identify pain points, and evaluate whether the intended use of each feature was understood.
          </p>
        </div>
        <div className="flex flex-col  gap-[25px] md:w-[740px]">
          {/* Problem */}
          <div className="flex flex-col  gap-[10px] min-w-0">
            <h3 className=" font-PPMori-Regular text-[18px] md:text-[32px]">
            Preparing the Usability Test
            </h3>
            <p className=" font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
            Before creating the script, we identified the main features that needed testing. We then developed scenarios and task lists around these features, ensuring tasks reflected realistic roommate situations. To maintain consistency across sessions, we created a script with a greeting, study brief, instructions, and consent for recording.
Method
            </p>
          </div>

          {/* Goal */}
          <div className="flex flex-col gap-[25px] min-w-0">
            <h3 className="font-PPMori-Regular text-[18px] md:text-[32px]">
              Method
            </h3>
            <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
            Usability tests were conducted in person and over Zoom, with participants thinking out loud as they completed tasks. Each task was rated on a 1–5 scale, and feedback was documented in a shared Excel sheet for analysis.
            </p>
          </div>

          <div className="flex flex-row justify-between items-start">
          <div className="flex justify-end items-end gap-[15px]">
          <div className="flex-none font-PPMori-SemiBold leading-[0.7] tracking-tight text-brand-teal text-[64px] md:text-[96px]">
                4
              </div>
              {/* Description */}
              <p className="min-w-0 font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
                Participants
              </p>
          </div>
          <div className="flex justify-end items-end gap-[15px]">
          <div className="flex-none font-PPMori-SemiBold leading-[0.7] tracking-tight text-brand-teal text-[64px] md:text-[96px]">
                9
              </div>
              {/* Description */}
              <p className="min-w-0 font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
                Scenarios
              </p>
          </div>
          <div className="flex justify-end items-end gap-[15px]">
          <div className="flex-none font-PPMori-SemiBold leading-[0.7] tracking-tight text-brand-teal text-[64px] md:text-[96px]">
                13
              </div>
              {/* Description */}
              <p className="min-w-0 font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
                Tasks
              </p>
          </div>
          </div>
          <div className="flex flex-col gap-[10px] min-w-0">
            <h3 className="font-PPMori-Regular text-[18px] md:text-[32px]">
            Pilot Testing
            </h3>
            <p className="font-PPMori text-text-light text-[14px] md:text-[16px] leading-relaxed">
            Through this process, we identified and fixed 7 design inconsistencies, including prototyping bugs, inconsistent title bars, missing pop-ups, non-functional buttons, and disabled mood updates.
            Addressing these early ensured that the actual usability testing could focus on user experience rather than technical glitches.
            </p>
          </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
