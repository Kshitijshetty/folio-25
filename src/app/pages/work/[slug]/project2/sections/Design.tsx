/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

type Feature = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  painPoint: string;
  targeted: string[];
};

const FEATURES: Feature[] = [
  {
    title: "Color-Coded Availability",
    subtitle: "See spot availability at a glance.",
    description:
      "Users often struggled with uncertainty around open spots. Color-coded indicators show real-time and predicted availability, even during pre-booking, helping drivers make faster and more confident choices.",
    imageSrc: "/images/ColourCode.gif",
    painPoint: "Uncertainty about open spots.",
    targeted: ["No Real-Time Availability", "Trust in Pre-Booking"],
  },
  {
    title: "Wallet System",
    subtitle: "Add funds once, pay seamlessly every time.",
    description:
      "Managing multiple payment steps created friction and drop-offs. With the wallet system, users can preload balance and complete transactions in seconds, reducing errors and streamlining the parking experience.",
    imageSrc: "/images/wallet.gif",
    painPoint: "Friction in payment flow.",
    targeted: ["Confusing Zone Selection", "Inconvenience in Payments"],
  },
  {
    title: "Smarter Pre-Booking",
    subtitle: "Check predicted spot availability before committing.",
    description:
      "Half of users expressed low trust in pre-booked spots. The pre-booking flow now displays potential availability based on the selected time, with confidence indicators that set clear expectations and build reliability.",
    imageSrc: "/images/Prebook.gif",
    painPoint: "Low trust in pre-booked spots.",
    targeted: ["Trust in Pre-Booking"],
  },
  {
    title: "Location Confirmation",
    subtitle: "Avoid mistakes with a simple confirmation pop-up.",
    description:
      "Users sometimes paid for the wrong parking lot, causing confusion and unexpected charges. To prevent this, ParkAway adds a confirmation step before payment, ensuring drivers always verify the correct location before booking.",
    imageSrc: "/images/location.gif",
    painPoint: "Accidental payments for wrong lots.",
    targeted: ["Location Permissions", "Confusing Zone Selection"],
  },
  {
    title: "Feedback Mechanism",
    subtitle: "Close the loop by rating and reporting after your session.",
    description:
      "Users often felt their concerns about parking accuracy or safety went unheard. The in-app feedback system lets them rate experiences and flag issues, helping improve reliability and trust over time.",
    imageSrc: "/images/feedback.gif",
    painPoint: "Lack of accountability and response.",
    targeted: ["Trust in Pre-Booking", "Notification Visibility"],
  },
];

function FeatureRow({ feature, reverse }: { feature: Feature; reverse: boolean }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-[20px] md:gap-[30px] self-stretch`}
    >
      <div className="flex flex-col items-start gap-[20px] md:gap-[40px] w-full md:w-[746px]">
        {/* Title with teal + dark parts */}
        <h3 className="font-PPMori-SemiBold text-[16px] md:text-[20px] leading-snug">
          <span className="text-brand-blue">{feature.title}:</span>{" "}
          <span className="font-PPMori-Regular text-bg-dark">
            {feature.subtitle.replace(`${feature.title}: `, "")}
          </span>
        </h3>

        {/* Description */}
        <p className="font-PPMori text-bg-dark text-[14px] md:text-[16px] leading-relaxed">
          {feature.description}
        </p>

        {/* Pain Points Targeted */}
        <p className="font-PPMori text-bg-dark text-[14px] md:text-[16px] leading-relaxed">
          <span className="font-PPMori-SemiBold text-bg-dark">
            Pain Points Targeted:{" "}
          </span>
          {feature.targeted.join(", ")}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-[600px] px-[12px] sm:px-6 md:px-[38px] md:w-[516px]">
        <img
          src={feature.imageSrc}
          alt={`${feature.title} GIF`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default function Design() {
  return (
    <section id="design" className="relative isolate w-full text-bg-dark">
      {/* Full-bleed white background */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-white -z-10" />

      <div className="flex flex-col md:justify-between md:items-start mx-auto max-w-screen-2xl gap-[25px] md:gap-[50px] min-w-0 py-[30px] md:py-16">
        {/* Header */}
        <section className="flex flex-col items-start gap-[20px]">
          <header className="flex items-center gap-[8px] md:gap-[10px]">
            <span
              aria-hidden="true"
              className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-blue"
            />
            <h2 className="font-PPMori-Regular text-[20px] md:text-[24px] leading-relaxed text-bg-dark">
              Design Solutions
            </h2>
          </header>
        </section>

        {/* Feature Rows */}
        {FEATURES.map((feature, idx) => (
          <FeatureRow key={feature.title} feature={feature} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
