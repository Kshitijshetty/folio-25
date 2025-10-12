/* eslint-disable @next/next/no-img-element */
'use client';
import React, { memo } from 'react';

type Skill = {
  icon: string;      // file name without .svg
  title: string;
  desc: string;
};

const SKILLS: Skill[] = [
  {
    icon: 'research',
    title: 'Research',
    desc:
      'Every great product begins with understanding. I conduct user research to uncover real needs, motivations, and pain points—using methods like interviews, surveys, and usability testing. This foundation helps ensure that every design decision is backed by insight, not assumption, leading to products that resonate with their target audience.',
  },
  {
    icon: 'design',
    title: 'Design',
    desc:
      'I design with purpose, combining creativity with usability. From wireframes to high-fidelity mockups, I focus on crafting intuitive interfaces that align with business goals and elevate user experiences. I rely on design systems, accessibility best practices, and iterative testing to bring clarity and consistency to every screen.',
  },
  {
    icon: 'develop',
    title: 'Develop',
    desc:
      'Bridging design and code, I bring interfaces to life with clean, responsive, and scalable frontend development. I use HTML, CSS, JavaScript, React, and modern libraries like GSAP or Tailwind to build fast, accessible products. My goal is to maintain pixel-perfect precision while optimizing for performance and maintainability.',
  },
  {
    icon: 'communicate',
    title: 'Communicate',
    desc:
      'Clear communication drives successful collaboration. Whether it’s aligning with stakeholders, presenting design decisions, or working closely with developers, I believe in transparency, feedback loops, and shared understanding. My process ensures that teams move forward with clarity and users stay at the center of every conversation.',
  },
];

const SkillRow = memo(function SkillRow({ icon, title, desc }: Skill) {
  return (
    <li className="flex flex-row justify-start gap-[20px] md:gap-0 md:justify-between w-full ">
      <img
        src={`/icons/${icon}.svg`}
        alt={`${title} icon`}
        className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] shrink-0"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col md:gap-[10px] md:w-1/2">
        <h3 className="text-brand-orange font-PPMori text-[20px] md:text-[28px] leading-8">
          {title}
        </h3>
        <p className="text-text-light font-PPMori text-[14px] md:text-[16px] leading-8">
          {desc}
        </p>
      </div>
    </li>
  );
});

const Skills = () => {
  return (
    <section className="relative w-dvw px-[12px] md:px-[70px] py-[30px] md:py-16">
      <div className="flex flex-col md:flex-row justify-between gap-[20px]">
        {/* Sticky Heading */}
        <header className="md:sticky top-[100px] self-start h-fit">
          <div className="flex flex-row gap-[10px] items-center">
            <img
              src="/icons/circle.svg"
              alt=""
              aria-hidden="true"
              className="w-[28px] h-[28px] md:w-[26px] md:h-[26px]"
            />
            <h2 className="text-text-light font-PPMori text-[20px] md:text-[28px] leading-8">
              [Skills I bring to the table]
            </h2>
          </div>
        </header>

        {/* Skill Content */}
        <ul className="flex flex-col items-end md:w-1/2 gap-[20px] md:gap-[80px]">
          {SKILLS.map((s) => (
            <SkillRow key={s.icon} {...s} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
