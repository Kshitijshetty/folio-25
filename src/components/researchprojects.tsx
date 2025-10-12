/* eslint-disable @next/next/no-img-element */
import React from 'react'

const researchprojects = () => {
  const researchCards = [
    {
      id: 'R1',
      title:
        'Before the lease and after the keys: Students’ anticipation and afterthoughts about housing',
      tags: [, 'Qualitative Research', 'Interviews', 'Thematic Analysis'],
      cta: 'View',
      href: 'https://drive.google.com/file/d/1_bNi5v-zvDEu4XPdLt6nOGrTHclVdGPp/view',
    },
    {
      id: 'R2',
      title:
        'Pets and Tech: A Quantitative Study on Utilization of Technology in Modern Pet Parenting',
      tags: ['Quantitative Research', 'Thematic Analysis', 'Qualtrics Survey', 'Smart Devices'],
      cta: 'View',
      href: 'https://drive.google.com/file/d/1nknakSassouZ8IJSfwHfPW8bP8G6hkqc/view',
    },
    {
      id: 'R3',
      title:
        'Do you Recall? An Experimental Study on Memory Recall Differences in Males and Females',
      tags: ['Experimenatal Research', 'Interviews', 'SPSS', 'Insight Synthesis'],
      cta: 'View',
      href: 'https://drive.google.com/file/d/1uxu3km0fuIpRUw6fZgTyZu3C93Pgxpid/view',
    },
  ]

  const wipCard = {
    title:
      'Designing for Language Diversity — Exploring How Multilingual and BiDi Interfaces Shape User Experience',
    subtitle: "Master's in HCI Capstone",
    status: 'Work in Progress',
  }

  return (
    <div className="relative h-auto w-dvw overflow-x-hidden px-[12px] md:px-[70px] py-[30px] md:py-16 bg-white">
      <div className="flex flex-col gap-[25px] md:gap-[30px]">
        {/* Heading */}
        <div className="flex flex-row gap-[10px]">
          <img
            src="/icons/circle.svg"
            alt="icon"
            className="w-[28px] h-[28px] md:w-[26px] md:h-[26px]"
          />
          <div className="text-bg-dark font-PPMori text-[20px] md:text-[28px] leading-8">
            [ Research ]
          </div>
        </div>

        {/* Row of three reusable cards */}
        <div className="flex flex-col md:flex-row gap-[25px] md:gap-[30px]">
          {researchCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group/card flex flex-col gap-[40px] md:gap-[142px] justify-between border-1 border-bg-dark w-full md:w-1/3 transition-colors duration-300 md:cursor-pointer"
            >
              <div className="flex flex-col gap-[10px] md:justify-center md:flex-grow pl-[14px] pr-[14px] pt-[7px]">
                {/* Title / Description */}
                <div className="text-bg-dark font-PPMori- text-[24px] md:text-[24px]">
                  {card.title}
                </div>
                {/* Tags */}
                <div className="flex flex-wrap text-bg-dark font-PPMori text-[14px] md:text-[16px] gap-x-[20px]">
                  {card.tags.map((t, i) => (
                    <div key={i}>{t}</div>
                  ))}
                </div>
              </div>

              {/* Bottom row: flips to black on hover */}
              <div className="flex flex-row pl-[14px] pr-[14px] justify-between items-center w-full transition-all duration-300 bg-transparent group-hover/card:bg-bg-dark">
                <div className="text-bg-dark font-PPMori text-[32px] md:text-[36px] transition-colors duration-300 group-hover/card:text-white">
                  {card.cta}
                </div>
                <img
                  src="/icons/ArrowVector.svg"
                  alt="open research"
                  className="w-[19px] h-[19px] md:w-[26px] md:h-[26px] transition-all duration-300 invert group-hover/card:-rotate-45 group-hover/card:translate-y-[-2px] group-hover/card:invert-0"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Full-width WIP block (separate data) */}
        <div className="group/card flex flex-col gap-[40px] md:gap-[142px] justify-between border-1 border-bg-dark w-full transition-colors duration-300 hover:bg-bg-dark/5">
          <div className="flex flex-col gap-[10px] md:justify-center md:flex-grow pl-[14px] pr-[14px] pt-[7px]">
            <div className="text-bg-dark font-PPMori text-[24px] md:text-[24px]">
              {wipCard.title}
            </div>
            <div className="text-bg-dark font-PPMori text-[14px] md:text-[16px]">
              {wipCard.subtitle}
            </div>
          </div>
          <div className="flex flex-row pl-[14px] pr-[14px] items-center w-full">
            <div className="text-bg-dark font-PPMori text-[32px] md:text-[36px]">
              {wipCard.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default researchprojects
