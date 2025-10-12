// app/work/[slug]/sections.ts
export const stepperSections = [
    { id: "discover", title: "Discover" ,iconSrc: "/images/DiscoverIcon.svg"},
    { id: "define",   title: "Define", iconSrc: "/images/DefineIcon.svg"},
    { id: "ideate",   title: "Ideate", iconSrc: "/images/IdeateIcon.svg"},
    { id: "design",   title: "Design" ,iconSrc: "/images/DesignIcon.svg"},
    { id: "test",     title: "Test", iconSrc: "/images/TestIcon.svg" },
  ] as const;
  export type StepId = typeof stepperSections[number]["id"];
  