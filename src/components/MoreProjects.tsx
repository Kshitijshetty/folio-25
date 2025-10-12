/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const projects = [
  {
    id: 1,
    name: "HomeEase",
    description:
      "80% reduction in roommate conflicts: A shared-living app designed to simplify communication and cut down on daily friction.",
    img: "/images/014.png",
    href: "/pages/work/projects/project1", // link to full case study page
  },
  {
    id: 2,
    name: "ParkAway",
    description:
      "Streamlined parking experience with 5 key design innovations to reduce user stress by 60%.",
    img: "/images/PAHero.png",
    href: "/pages/work/projects/project2",
  },
  {
    id: 3,
    name: "Portal Usability",
    description:
      "Streamlined healthcare insurance provider portal with 5 usability fixes, boosting task success by 40%. ",
    img: "/images/NDAHero.png",
    href: "/pages/work/projects/project3",
  },
];

export default function MoreProjects({ excludeId }: { excludeId: number }) {
  return (
    <section id="more-projects" className="relative isolate">
      {/* Full-bleed white background */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-white -z-10" />

      <div className="mx-auto max-w-screen-2xl flex flex-col items-center gap-[25px] md:gap-[20px] px-[12px] py-[40px] md:py-[70px] text-black">
        
        {/* Centered Header */}
        <div className="text-center mb-[10px] md:mb-[20px]">
          <h2 className="font-PPMori-Regular text-[20px] md:text-[30px] leading-relaxed">
            More Projects
          </h2>
        </div>

        <div className="flex w-full flex-col md:flex-row justify-between items-stretch gap-[24px] md:gap-[30px]">
          {projects
            .filter((p) => p.id !== excludeId)
            .map((p) => (
              <a
                key={p.id}
                href={p.href}
                className="group/card flex w-full md:w-1/2 flex-col items-start bg-white"
              >
                {/* Description */}
                <div className="flex justify-center items-center gap-[10px] self-stretch px-[10px] pt-[8px] pb-0">
                  <p className="font-PPMori text-[16px] md:text-[20px] leading-snug my-[10px] text-black">
                    {p.description}
                  </p>
                </div>

                {/* Preview image */}
                <div className="w-full aspect-[16/11] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} Preview`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom row (hover effect) */}
                <div className="flex flex-row pt-[7px] pb-[7px] px-[10px] justify-between items-center w-full transition-colors duration-300 bg-white group-hover/card:bg-black">
                  <div className="text-black font-PPMori text-[28px] md:text-[44px] transition-colors duration-300 group-hover/card:text-white">
                    {p.name}
                  </div>
                  <img
                    src="/icons/ArrowVector.svg"
                    alt="open project"
                    className="w-[19px] h-[19px] md:w-[26px] md:h-[26px] transition-all duration-300 invert group-hover/card:invert-0 group-hover/card:-rotate-45 group-hover/card:translate-y-[-2px]"
                  />
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
