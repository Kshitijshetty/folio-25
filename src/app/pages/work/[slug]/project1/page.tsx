import CaseStudyLayout from "@/components/casestudy/LayOut";
import CaseStudyBlock from "@/components/casestudy/CaseStudyBlock";
import { stepperSections } from "./sections";

// Section components
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Discover from "./sections/Discover";
import Define from "./sections/Define";
import Ideate from "./sections/Ideate";
import Design from "./sections/Design";
import Testing from "./sections/Test";
import Outcome from "./sections/Outcomes";
import MoreProjects from "@/components/MoreProjects";
import Future from "./sections/Future";
import Learnings from "./sections/Learnings";

export default function CaseStudyPage() {
  return (
    <CaseStudyLayout topOffset={80}>
      {/* Not in stepper */}
      <Hero />
      <Overview />
      <Outcome />
      {/* Middle block WITH stepper */}
      <CaseStudyBlock steps={[...stepperSections]} topOffset={88}
        barHeight={56}
        accent="#00AA99"     // HomeEase teal
        >
        <Discover />
        <Define />
        <Ideate />
        <Design />
        <Testing />
      </CaseStudyBlock>
      <Outcome />
      <Future />
      <Learnings />
      <MoreProjects excludeId={1} />
      {/* Not in stepper */}
      
    </CaseStudyLayout>
    
  );
}
