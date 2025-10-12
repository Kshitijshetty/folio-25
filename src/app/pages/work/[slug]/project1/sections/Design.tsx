"use client";
import React from "react";
import Image from "next/image";

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
    title: "Quick Mood Updates",
    subtitle: "Let roommates know how you’re feeling without needing a conversation.",
    description:
      "Roommates often don’t know when someone is stressed, unwell, or not in the mood to socialize. Mood updates make emotions visible, preventing conflicts like unexpected parties or tension at home.",
    imageSrc: "/images/Mood.gif",
    painPoint: "Misunderstandings from unspoken feelings.",
    targeted: ["Personality Clashes", "Communication Gaps"],
  },
  {
    title: "Smart Task Management",
    subtitle: "Keep chores fair with clear schedules and automated reminders.",
    description:
      "Chores pile up when nobody remembers who’s responsible. Task management assigns names, schedules, and reminders—keeping responsibilities clear and fair for everyone.",
    imageSrc: "/images/Tasks.gif",
    painPoint: "Unequal chore distribution and forgotten tasks.",
    targeted: ["Uneven Responsibilities", "Lack of Ground Rules"],
  },
  {
    title: "Instant Announcements",
    subtitle: "Share updates in one place and know who’s seen them.",
    description:
      "Important updates get lost in chats. Announcements create a central hub with read receipts so everyone knows what’s happening and nothing slips through the cracks.",
    imageSrc: "/images/Announcements.gif",
    painPoint: "Missed messages and miscommunication.",
    targeted: ["Communication Gaps", "Lack of Ground Rules"],
  },
  {
    title: "Collaborative Grocery Management",
    subtitle: "Shop together in real time and avoid duplicate purchases.",
    description:
      "Roommates often buy the same items twice or forget essentials. Shared lists update in real time and show who added what, making shopping efficient and transparent.",
    imageSrc: "/images/Grocery.gif",
    painPoint: "Duplicated or missing groceries.",
    targeted: ["Uneven Responsibilities", "Unshared Interests"],
  },
  {
    title: "Timely Notifications",
    subtitle: "Get alerts for tasks, expenses, and updates so nothing is missed.",
    description:
      "Even if tasks or groceries are tracked, people forget to check the app. Smart notifications keep everyone on top of updates, reducing slips and delays.",
    imageSrc: "/images/Notifications.gif",
    painPoint: "Overlooked tasks and updates.",
    targeted: ["Communication Gaps"],
  },
  {
    title: "Transparent Expense Tracker",
    subtitle: "Log, split, and track costs to prevent money disputes.",
    description:
      "Money often causes friction. Expense tracker logs payments, splits fairly, and shows balances clearly—building accountability and reducing financial tension.",
    imageSrc: "/images/expenses.gif",
    painPoint: "Confusion and mistrust over shared costs.",
    targeted: ["Uneven Responsibilities", "Personality Clashes"],
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
        {/* Title with teal + dark text */}
        <h3 className="font-PPMori-SemiBold text-[16px] md:text-[20px] leading-snug">
          <span className="text-brand-teal">{feature.title}:</span>{" "}
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
          <span className="font-PPMori-SemiBold text-bg-dark">Pain Points Targeted: </span>
          {feature.targeted.join(", ")}
        </p>
      </div>

      {/* Image (GIF) */}
      <div className="relative flex flex-col justify-center items-center w-full h-[600px] px-[12px] sm:px-6 md:px-[38px] md:w-[516px]">
        <Image
          src={feature.imageSrc}
          alt={`${feature.title} GIF`}
          fill
          className="object-contain"
          sizes="(min-width: 768px) 516px, 100vw"
          unoptimized
          priority={false}
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
              className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] rounded-full bg-brand-teal"
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
