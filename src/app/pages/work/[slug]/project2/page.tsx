import CaseStudyLayout from "@/components/casestudy/LayOut";
import CaseStudyBlock from "@/components/casestudy/CaseStudyBlock";

import Hero from "./sections/Hero";
import { stepperSections } from "./sections";
import Overview from "./sections/Overview";
import Outcomes from "./sections/Outcomes";
import Discover from "./sections/Discover";
import Define from "./sections/Define";
import MoreProjects from "@/components/MoreProjects";
import Design from "./sections/Design";
import Ideate from "./sections/Ideate";
import Future from "./sections/Future";
import Learnings from "./sections/Learnings";

// Section components

export default function CaseStudyPage() {
  return (
    <CaseStudyLayout topOffset={80}>
      {/* Not in stepper */}
      <Hero/>
      <Overview/>
      <Outcomes/>
      {/* Middle block WITH stepper */}
      <CaseStudyBlock steps={[...stepperSections]} topOffset={88}
        barHeight={56}
        accent="#399FD6"     
        >
        <Discover />
        <Define />
        <Ideate />
        <Design />
      </CaseStudyBlock>
      <Outcomes/>
      <Future />
      <Learnings />
      <MoreProjects excludeId={2} />
      {/* Not in stepper */}
     
    </CaseStudyLayout>
  );
}
