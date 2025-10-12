/* eslint-disable @next/next/no-img-element */
import React from 'react'
const PERSON_ICON = "/icons/person.svg"; 

type InsightItem = {
  title: string
  value: number
  total: number
  perc?: string // optional; we compute from value/total anyway
  note: string
  iconSrc?: string;
}

const insightsData: InsightItem[] = [
  {
    title: 'No Real-Time Availability',
    value: 6,
    total: 8,
    perc: '75%',
    note: 'of users had to physically drive around to check for open spots due to lack of real-time updates.',
  },
  {
    title: 'Confusing Zone Selection',
    value: 5,
    total: 8,
    perc: '62%',
    note: 'experienced confusion selecting zones before payment confirmation.',
  },
  {
    title: 'Trust in Pre-Booking',
    value: 4,
    total: 8,
    perc: '50%',
    note: 'expressed low confidence that a pre-booked spot would still be available on arrival.',
  },
  {
    title: 'Notification Visibility',
    value: 7,
    total: 8,
    perc: '88%',
    note: 'wanted clearer timers/alerts for session start, expiry, and extensions.',
  },
  {
    title: 'Price Transparency',
    value: 6,
    total: 8,
    perc: '75%',
    note: 'were unsure about final price until late in the flow.',
  },
  {
    title: 'Location Permissions',
    value: 5,
    total: 8,
    perc: '62%',
    note: 'hesitated to share precise location when pre-booking.',
  },
]

const InsightCard = ({ title, value, total, perc, note, iconSrc = PERSON_ICON }: InsightItem) => {
    const pct = perc ?? `${Math.round((value / total) * 100)}%`;
  
    return (
      <div className="flex flex-col items-start gap-[12px] w-[175px] md:w-[411px]">
        {/* Title in brand blue */}
        <h4 className="text-brand-blue font-PPMori-SemiBold text-[16px] md:text-[18px] leading-relaxed">
          {title}
        </h4>
  
        {/* Row of people (value bright, rest dim) */}
        <div className="flex flex-wrap items-center gap-[24px] md:gap-[30px]" aria-label={`${value} of ${total} participants`}>
          {Array.from({ length: total }).map((_, i) => (
            <img
              key={i}
              src={iconSrc}
              alt="" 
              className={`w-[22px] h-[22px] md:w-[30px] md:h-[30px] ${
                i < value ? "opacity-100" : "opacity-35"
              }`} 
            />
             
          ))}
        </div>
  
        {/* Lone dim person + percentage sentence */}
        <div className="flex items-start gap-[10px]">
          <p className="text-text-light font-PPMori text-[13px] md:text-[14px] leading-relaxed">
            <span className="font-PPMori-SemiBold text-brand-blue">{pct}</span> of <span className="font-PPMori-SemiBold">Users</span> {note}
          </p>
        </div>
      </div>
    );
  };

const Discover = () => {
  return (
    <div
      id="discover"
      className="flex flex-col items-start content-start gap-[50px] self-stretch bg-bg-dark text-white py-[30px] md:py-16"
    >
      {/* ===================== USER RESEARCH (unchanged) ===================== */}
      <div className="flex flex-col items-start pb-[37px] gap-[25px] md:w-[1292px] md:p-0 md:gap-[20px]">
        {/* Header */}
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue"
          />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">
            User Research
          </h2>
        </header>

        {/* Two-column layout */}
        <div className="flex flex-col items-start gap-[25px] w-[361px] md:w-full md:flex-row md:gap-[28px] md:self-stretch">
          {/* LEFT (grows) */}
          <div className="flex flex-col items-start self-stretch gap-[25px] md:gap-[20px] md:flex-1">
            <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed">
              We conducted qualitative research through{' '}
              <span className="font-PPMori-SemiBold text-white">contextual inquiries</span> and{' '}
              <span className="font-PPMori-SemiBold text-white">interviews</span> to observe how users
              interact with parking apps like <span className="font-PPMori-SemiBold text-white">ParkMobile</span> and{' '}
              <span className="font-PPMori-SemiBold text-white">Passport Parking</span>, uncovering key
              usability gaps and frustrations.
            </p>

            {/* Contextual Inquiry */}
            <div className="flex self-stretch px-0 py-[10px] items-start gap-[16px] md:gap-[10px]">
              <img src={`/icons/CTI.svg`} alt="icon" className="w-[78px] h-[78px] md:w-[120px] md:h-[120px]" />
              <div className="flex flex-col justify-center items-start gap-[10px] text-white">
                <p className="text-text-light font-PPMori-Regular text-[14px] md:text-[16px] leading-relaxed">
                  1. Contextual Inquiry
                </p>
                <ul className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed list-disc pl-5">
                  <li>Participants were observed in real-world settings while using a parking app to complete real-world tasks.</li>
                  <li>They were asked to think aloud, allowing us to gather spontaneous reactions, challenges, and decision-making insights.</li>
                </ul>
              </div>
            </div>

            {/* Follow-up Interviews */}
            <div className="flex self-stretch px-0 py-[10px] items-start gap-[16px] md:gap-[10px]">
              <img src={`/icons/CTI.svg`} alt="icon" className="w-[78px] h-[78px] md:w-[120px] md:h-[120px]" />
              <div className="flex flex-col justify-center items-start gap-[10px] text-white">
                <p className="text-text-light font-PPMori-Regular text-[14px] md:text-[16px] leading-relaxed">
                  2. Follow-up Interviews
                </p>
                <ul className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed list-disc pl-5">
                  <li>We conducted follow-up interviews to explore users’ past experiences, challenges, and expectations with parking apps.</li>
                  <li>We also observed how environmental factors like multitasking, noise, and on-the-go navigation influenced user interaction with the app.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT (fixed sidebar) */}
          <div className="flex w-full md:w-[636px] md:flex-none flex-col items-start gap-[24px]">
            <div className="flex flex-col items-start gap-[9px] self-stretch">
              <h2 className="font-PPMori-Regular text-[14px] md:text-[16px] leading-relaxed text-brand-blue">
                Participants
              </h2>

              {/* People icons row */}
              <div className="flex items-center gap-[27px] md:gap-[29px]">
                {[...Array(8)].map((_, i) => (
                  <img
                  key={i}
                  alt=""      
                  aria-hidden="true"   
                  src={PERSON_ICON}
                  className={`w-[22px] h-[22px] md:w-[30px] md:h-[30px] `} 
                />
                ))}
              </div>

              {/* Summary */}
              <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed">
                We engaged <span className="font-PPMori-SemiBold text-white">8 participants</span> between the ages of{' '}
                <span className="font-PPMori-SemiBold text-white">20</span> and{' '}
                <span className="font-PPMori-SemiBold text-white">26</span>, all regular or occasional users of mobile parking apps. The participant group included:
              </p>

              {/* Bullets */}
              <ul className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed list-disc pl-5">
                <li>University students commuting to the RIT campus</li>
                <li>Event attendees parking in crowded city areas</li>
                <li>
                  Drivers using <span className="font-PPMori-SemiBold text-white">ParkMobile</span> and{' '}
                  <span className="font-PPMori-SemiBold text-white">Passport Parking</span> in varied contexts (campuses, downtown, events)
                </li>
              </ul>

              {/* Logos */}
              <div className="flex items-center justify-center w-full pt-[12px] gap-[64px] md:gap-[100px]">
                <img src="/images/PassportP.png" alt="Passport Parking" className="w-[80px] h-auto md:w-[120px]" />
                <img src="/images/ParkM.png" alt="ParkMobile" className="w-[80px] h-auto md:w-[120px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== RESEARCH SYNTHESIS (unchanged from your last) ===================== */}
      <div className="flex flex-col items-start gap-[25px] md:w-[1292px] md:gap-[20px]">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span aria-hidden="true" className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue" />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">Research Synthesis</h2>
        </header>

        <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed w-full">
          To make sense of our observations, we created several interpretive models. These models helped us visualize user workflows,
          emotional responses, and systemic breakdowns across the parking journey.
        </p>

        {/* Flow Model */}
        <div className="flex flex-col items-start gap-[12px] self-stretch">
          <h3 className="font-PPMori-SemiBold text-[16px] md:text-[18px] leading-relaxed text-brand-blue">Flow Model</h3>
          <div className="flex flex-col md:flex-row items-start gap-[12px] self-stretch">
            <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed">
              We mapped how users interact with parking apps from arrival to payment. It revealed handoffs between people and systems,
              waiting for the blue zone numbers, and highlighted moments of confusion and delay in the overall parking flow.
            </p>
            <div className="flex items-center justify-center">
              <img src="/images/flow 1.png" alt="Flow Model Diagram" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Sequence Model */}
        <div className="flex flex-col items-start gap-[12px] self-stretch">
          <h3 className="font-PPMori-SemiBold text-[16px] md:text-[18px] leading-relaxed text-brand-blue">Sequence Model</h3>
          <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed w-full">
            We broke down each step users took while finding and booking parking. It exposed key pain points such as starting the parking
            timer before confirming payment and long steps for zone selection, which caused stress and errors.
          </p>
          <div className="flex items-center justify-center self-stretch">
            <img src="/images/sequence 1.png" alt="Sequence Model Diagram" className="w-full h-auto" />
          </div>
        </div>

        {/* Artefact Model */}
        <div className="flex flex-col items-start gap-[12px] self-stretch">
          <h3 className="font-PPMori-SemiBold text-[16px] md:text-[18px] leading-relaxed text-brand-blue">Artefact Model</h3>
          <div className="flex flex-col md:flex-row items-start gap-[12px] self-stretch">
            <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed">
              It showes user reliance on their smartphones as the main tool for parking, especially for payment and navigation.
              It also revealed a gap between the app and the physical world, such as unclear signage and missing real-time info.
            </p>
            <div className="flex items-center justify-center">
              <img src="/images/artifact 1.png" alt="Flow Model Diagram" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Cultural Model */}
        <div className="flex flex-col items-start gap-[12px] self-stretch">
          <h3 className="font-PPMori-SemiBold text-[16px] md:text-[18px] leading-relaxed text-brand-blue">Cultural Model</h3>
          <div className="flex flex-col md:flex-row items-start gap-[12px] self-stretch">
            <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed">
              It helped us Explore user beliefs and motivations, uncovering trust issues with pre-booking, reluctance to share precise
              location, and a strong preference for safety features like gated lots and surveillance indicators.
            </p>
            <div className="flex items-center justify-center">
              <img src="/images/cultural 1.png" alt="Flow Model Diagram" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* ===================== RESEARCH INSIGHTS (dynamic) ===================== */}
      <div className="flex flex-col items-start gap-[25px] md:w-[1292px] md:gap-[20px]">
        <header className="flex items-center gap-[8px] md:gap-[10px]">
          <span aria-hidden="true" className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue" />
          <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed">Research Insights</h2>
        </header>

        <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-relaxed">
          Through user interviews and contextual observations, we uncovered key pain points
        </p>

        {/* Cards */}
        <div className="flex flex-wrap items-start  gap-[12px] md:gap-[29px] self-stretch">
          {insightsData.map((item, idx) => (
            <InsightCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discover
