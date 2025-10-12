'use client';

export default function AboutExperience() {
  return (
    <section className="w-dvw bg-bg-dark text-white px-[12px] md:px-[70px] py-[50px] md:py-[70px]">
      <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row justify-between gap-[50px] md:gap-[40px]">
        {/* WORK EXPERIENCE */}
        <div className="flex-1">
          <div className="flex items-center gap-[10px] mb-[30px]">
            <span className="w-[20px] h-[20px] rounded-full bg-brand-orange" />
            <h2 className="font-PPMori text-[18px] md:text-[28px] text-white">[Work Experience]</h2>
          </div>

          <div className="flex flex-col gap-[35px]">
            {/* Item */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-brand-orange font-PPMori-Regular text-[22px] md:text-[28px] leading-tight">
                Graduate Assistant
              </h3>
              <div className="flex justify-between text-text-light font-PPMori text-[14px] md:text-[18px]">
                <span>Rit@Clubs and Organizations</span>
                <span>Aug 2024 – Present</span>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="text-brand-orange font-PPMori-Regular text-[22px] md:text-[28px] leading-tight">
                HealthCare Provider (NDA)
              </h3>
              <div className="flex justify-between text-text-light font-PPMori text-[14px] md:text-[18px]">
                <span>Usability Tester</span>
                <span>Jan 2024 – Apr 2024</span>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="text-brand-orange font-PPMori-Regular text-[22px] md:text-[28px] leading-tight">
                UI/UX Designer
              </h3>
              <div className="flex justify-between text-text-light font-PPMori text-[14px] md:text-[18px]">
                <span>Intricare Technologies</span>
                <span>Jan 2023 – Jun 2023</span>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="text-brand-orange font-PPMori-Regular text-[22px] md:text-[28px] leading-tight">
                Frontend Developer
              </h3>
              <div className="flex justify-between text-text-light font-PPMori text-[14px] md:text-[18px]">
                <span>IConnect Solutions</span>
                <span>Jun 2021 – May 2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="flex-1">
          <div className="flex items-center gap-[10px] mb-[30px]">
            <span className="w-[20px] h-[20px] rounded-full bg-brand-purple" />
            <h2 className="font-PPMori text-[18px] md:text-[28px] text-white">[Education]</h2>
          </div>

          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-brand-purple font-PPMori-Regular text-[22px] md:text-[28px] leading-tight">
                M.S. Human Computer Interaction
              </h3>
              <div className="flex justify-between text-text-light font-PPMori text-[14px] md:text-[18px]">
                <span>Rochester Institute Of Technology</span>
                <span>Aug 2023 – Present</span>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="text-brand-purple font-PPMori-Regular text-[22px] md:text-[28px] leading-tight">
                B.Tech. Computer Engineering
              </h3>
              <div className="flex justify-between text-text-light font-PPMori text-[14px] md:text-[18px]">
                <span>NMIMS, India</span>
                <span>Jan 2024 – Apr 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
