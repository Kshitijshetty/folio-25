import CaseStudyLayout from "@/components/casestudy/LayOut";
import CaseStudyBlock from "@/components/casestudy/CaseStudyBlock";


import { stepperSections } from "./sections";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Outcomes from "./sections/Outcomes";
import Research from "./sections/Research";
import Results from "./sections/Results";
import Solutions from "./sections/Solutions";
import MoreProjects from "@/components/MoreProjects";
import Learnings from "./sections/Learnings";

// Section components

export default function CaseStudyPage() {
  return (
    <CaseStudyLayout topOffset={80}>
      {/* Not in stepper */}
      
      <Hero />
      <Overview />
      <Outcomes />
      {/* Middle block WITH stepper */}
      <CaseStudyBlock steps={[...stepperSections]} topOffset={88}
        barHeight={56}
        accent="#F8771F"     
        >
        <Research />
        <Results />
        <Solutions />
      </CaseStudyBlock>
      {/* Not in stepper */}
      <Outcomes />
      <Learnings />
      <MoreProjects excludeId={3} />
    </CaseStudyLayout>
  );
}
