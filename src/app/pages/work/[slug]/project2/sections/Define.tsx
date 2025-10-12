/* eslint-disable @next/next/no-img-element */
"use client";

export default function Define() {
  return (
    // Full-bleed white background for this section only
    <section id="define" className="relative isolate">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-white -z-10" />

      {/* ===== Title row ===== */}
      <div className="flex flex-col md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[20px] min-w-0 py-[30px] md:py-[70px] text-bg-dark">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          {/* replace with your SVG dot */}
          <span aria-hidden className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue" />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            User Personas
          </h2>
        </header>
        {/* ===== Row 1: Intro (left) + Image (right) ===== */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-auto max-w-screen-2xl gap-[25px] md:gap-[30px] min-w-0  text-neutral-900">
        {/* Intro text */}
        <div className="min-w-0 md:w-[530px]">
          <p className="font-PPMori text-[14px] md:text-[16px] leading-relaxed text-neutral-700 max-w-[48ch]">
          The <span className="font-PPMori-SemiBold">Planner</span> is an individual who values organization and preparation, 
          ensuring that every detail is accounted for. 
          They prefer <span className="font-PPMori-SemiBold">to avoid last-minute stress by planning ahead</span> and <span className="font-PPMori-SemiBold">often pre-book parking to 
          save time and ensure convenience</span> during busy schedules or events. 
          </p>
        </div>

        {/* Image block */}
        <div className="md:w-[740px] min-w-0">
          <figure className="overflow-hidden w-full aspect-[16/10]">
            {/* Replace src with your image (or use next/image if you prefer) */}
            <img
              src="/images/PAPersona1.png"
              alt="Persona board"
              className="w-full h-full object-contain"
            />
          </figure>
        </div>
      </div>

      {/* ===== Row 2: Image (left) + Intro (right) ===== */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[10px] md:py-6 text-neutral-900">
        {/* Image block */}
        <div className="md:w-[740px] min-w-0">
          <figure className=" w-full aspect-[16/10]">
            <img
              src="/images/PAPersona2.png"
              alt="Persona board"
              className="w-full h-full object-contain"
            />
          </figure>
        </div>

        {/* Intro text */}
        <div className="min-w-0 md:w-[530px]">
          <p className="font-PPMori text-[14px] md:text-[16px] leading-relaxed text-neutral-700 max-w-[48ch]">
            The <span className="font-PPMori-SemiBold">On-the-Go Seeker</span> values flexibility and convenience, using parking apps to find spots in real time. 
            They prefer <span className="font-PPMori-SemiBold">simple, intuitive navigation and adaptable solutions</span> that <span className="font-PPMori-SemiBold">fit their changing plans, 
            seeing parking as a quick</span>, functional part of their journey.
          </p>
        </div>
      </div>

      {/* ===== Story Boards ===== */}
<div className="flex flex-col items-start mx-auto max-w-screen-2xl gap-[16px] md:gap-[20px] min-w-0 py-[30px] md:py-[70px] text-bg-dark">
  {/* Header */}
  <header className="flex items-center gap-[8px] md:gap-[10px] self-stretch">
    <span aria-hidden className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue" />
    <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
      Story boards
    </h2>
  </header>

  {/* Intro line */}
  {/* <p className="font-PPMori text-[14px] md:text-[16px] leading-relaxed text-neutral-700">
    We conducted qualitative research through <span className="font-PPMori-SemiBold text-neutral-900">contextual inquiries</span> and <span className="font-PPMori-SemiBold text-neutral-900">interviews</span> to observe how users interact with parking apps like <span className="font-PPMori-SemiBold text-neutral-900">ParkMobile</span> and <span className="font-PPMori-SemiBold text-neutral-900">Passport Parking</span>, uncovering key usability gaps and frustrations.
  </p> */}

  {/* Single storyboard image */}
  <figure className="flex self-stretch">
    {/* update the src to your actual storyboard image */}
    <img
      src="/images/PAStory.png"
      alt="Storyboard sequence panels"
      className="w-full h-auto object-contain"
    />
  </figure>
</div>
      </div>

      
    </section>
  );
}
