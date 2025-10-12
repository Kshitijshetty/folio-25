/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Projects = () => {
  const cards = [
    {
      id: '01',
      name: 'HomeEase',
      description:
        '80% reduction in roommate conflicts: A shared-living app designed to simplify communication and cut down on daily friction.',
      tags: ['Mobile App', 'Qualitative Analysis', 'Interaction Design', 'UI/UX Design'],
      href: '/pages/work/projects/project1',
      previewImg: '/images/014.png',
    },
    {
      id: '02',
      name: 'ParkAway',
      description:
        'Streamlined parking experience with 5 key design innovations to reduce user stress by 60%.',
      tags: ['Mobile App', 'Usability Testing', 'Prototyping', 'Contextual Inquiry'],
      href: '/pages/work/projects/project2',
      previewImg: '/images/PAHero.png',
    },
    {
      id: '03',
      name: 'Portal Usability (NDA)',
      description:
        'Streamlined healthcare insurance provider portal with 5 usability fixes, boosting task success by 40%. ',
      tags: ['Usability Testing', 'Heuristic Evaluation', 'Health Technology'],
      href: '/pages/work/projects/project3',
      previewImg: '/images/NDAHero.png',
    },
  ]

  return (
    // Added id + scroll-mt so anchors land correctly under a sticky navbar
    <section
      id="projects"
      className="h-auto w-dvw px-[12px] md:px-[70px] py-[30px] md:py-16 scroll-mt-[88px] md:scroll-mt-[130px]"
    >
      <div className="flex flex-col gap-[25px] md:gap-[30px] justify-around">
        {/* Section Title */}
        <div className="flex flex-row gap-[10px]">
          <img
            src="/icons/circle.svg"
            alt="icon"
            className="w-[28px] h-[28px] md:w-[26px] md:h-[26px]"
          />
          <div className="text-text-light font-PPMori text-[20px] md:text-[28px] leading-8">
            [ Projects ]
          </div>
        </div>

        {/* Project Cards */}
        {cards.map((p) => (
          <a
            key={p.id}
            href={p.href}
            className="group/card flex flex-col md:flex-row md:h-[678px] overflow-hidden md:cursor-pointer transition-colors duration-300 bg-transparent hover:bg-[#272727]"
          >
            {/* LEFT SIDE (Text) */}
            <div className="flex flex-col justify-between w-full md:w-[40%]">
              {/* Description + Tags */}
              <div className="flex flex-col gap-[10px] md:justify-center md:flex-grow md:p-[23px]">
                <div className="text-text-light font-PPMori-Regular text-[14px] md:text-[24px] transition-colors duration-300 group-hover/card:text-white">
                  {p.description}
                </div>

                <div className="flex flex-wrap gap-x-[20px] text-text-light font-PPMori text-[14px] transition-colors duration-300 group-hover/card:text-white">
                  {p.tags.map((t, idx) => (
                    <div key={idx}>{t}</div>
                  ))}
                </div>

                {/* Mobile preview box */}
                <div className="relative w-full h-[345px] bg-gray-700 my-[14px] md:hidden">
                {p.previewImg ? (
                  <img
                    src={p.previewImg}
                    alt={`${p.name} preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute bottom-[10px] right-[10px] text-text-light font-PPMori text-[14px]">
                    {p.id}
                  </div>
                )}
                </div>
              </div>

              {/* Bottom Row */}
              <div
                className="
                  flex flex-row pt-[7px] pb-[7px] px-[20px] justify-between items-center w-full
                  transition-all duration-300
                  bg-transparent group-hover/card:bg-white
                "
              >
                <div
                  className="
                    text-text-light font-PPMori text-[32px] md:text-[44px]
                    transition-colors duration-300 group-hover/card:text-black
                  "
                >
                  {p.name}
                </div>
                <img
                  src="/icons/ArrowVector.svg"
                  alt="open project"
                  className="
                    w-[19px] h-[19px] md:w-[26px] md:h-[26px]
                    transition-all duration-300
                    group-hover/card:-rotate-45 group-hover/card:translate-y-[-2px] group-hover/card:invert
                  "
                />
              </div>
            </div>

            {/* RIGHT SIDE (Image/Preview) */}
            <div className="hidden md:block w-full md:w-[60%]">
              <div className="relative w-full h-full bg-gray-700">
                {p.previewImg ? (
                  <img
                    src={p.previewImg}
                    alt={`${p.name} preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute bottom-[10px] right-[10px] text-text-light font-PPMori text-[14px]">
                    {p.id}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
