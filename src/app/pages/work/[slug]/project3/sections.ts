// app/work/[slug]/sections.ts
export const stepperSections = [
    { id: "research", title: "Research", iconSrc: "/images/DiscoverIcon.svg" },
    { id: "results",   title: "Results", iconSrc: "/images/DefineIcon.svg" },
    { id: "solutions",   title: "Solutions", iconSrc: "/images/DesignIcon.svg" },
  ] as const;
  export type StepId = typeof stepperSections[number]["id"];
  