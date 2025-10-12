"use client";

import React from "react";
import StepperBar from "./StepperBar";

type Step = { id: string; title: string; countLabel?: string; progress?: number; accent?: string };

export default function CaseStudyBlock({
  steps,
  children,
  topOffset = 88,  // your Navbar height
  barHeight = 56,
  accent,
}: {
  steps: Step[];
  children: React.ReactNode;
  topOffset?: number;
  barHeight?: number;
  accent?: string;
}) {
  // Create an anchor offset so sections don't hide under the sticky bar + navbar
  const anchorOffset = `${topOffset + barHeight + 12}px`;

  // Type-safe custom CSS variable
  const style: React.CSSProperties & Record<"--anchorOffset", string> = {
    ["--anchorOffset"]: anchorOffset,
  };

  return (
    <section className="relative">
      <StepperBar steps={steps} topOffset={topOffset} barHeight={barHeight} accent={accent} />

      <div>
        {/* Apply scroll-margin-top to direct section children */}
        <div className="[&>section]:scroll-mt-[var(--anchorOffset)]" style={style}>
          {children}
        </div>
      </div>
    </section>
  );
}
