"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Researchprojects from "@/components/researchprojects";
import Skills from "@/components/skills";

import FinalText from "@/components/FinalText";

export default function Home() {
 

  return (
    <>
      <div className="font-PPMori text-[30px] min-h-screen flex flex-col items-center justify-center">
       

        <Hero />
        <Projects />
        <Researchprojects />
        <Skills />
        <FinalText />
      </div>
    </>
  );
}
