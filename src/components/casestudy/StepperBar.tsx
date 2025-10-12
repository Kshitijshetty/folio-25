"use client";

import Stepper, { type Step as StepType } from "./Stepper";

type Props = {
  steps: StepType[];
  /** Height of your fixed navbar (px). The StepperBar will sit just below it. */
  topOffset?: number;   // default 88
  /** Visual height of the sticky bar that holds the Stepper (px). */
  barHeight?: number;   // default 20
  /** Per-project accent color for the Stepper pills (e.g. "#2DD4BF"). */
  accent?: string;      // optional, forwarded to Stepper
  /** Fixed width for each pill (px). */
  pillWidthPx?: number; // optional, forwarded to Stepper
  /** Optional extra classes for the container. */
  className?: string;
  /** Set true if you actually want a background strip (kept off by default). */
  showBackground?: boolean;
};

export default function StepperBar({
  steps,
  topOffset = 88,
  barHeight = 20,
  accent,
  pillWidthPx,
  className = "",
  showBackground = false,
}: Props) {
  // The Stepper's scroll-spy needs to know the total fixed area ABOVE sections:
  // navbar height + this bar's height.
  const effectiveStepperOffset = topOffset + barHeight;

  return (
    <div
      className={`sticky z-40 w-full ${showBackground ? "bg-bg-dark/60" : "bg-transparent"} ${className}`}
      style={{ top: topOffset, height: barHeight }}
    >
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-center px-4 md:px-8">
        <Stepper
          steps={steps}
          topOffset={effectiveStepperOffset}
          accent={accent}
          pillWidthPx={pillWidthPx}
        />
      </div>
    </div>
  );
}
