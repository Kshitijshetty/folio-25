import React from 'react'

const Footer = () => {
  return (
    <main
      className="relative h-[530px] w-screen md:h-[704px] overflow-x-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Background Layer */}
      <div className="fixed bottom-0 h-[704px] md:h-[704] w-full bg-brand-orange">
        {/* Grid Lines */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Desktop grid lines */}
          <div className="hidden md:block absolute grid-line left-[70px]" />
          <div className="hidden md:block absolute grid-line left-[610px]" />
          <div className="hidden md:block absolute grid-line left-[652px]" />
          <div className="hidden md:block absolute grid-line left-[1011px]" />
          <div className="hidden md:block absolute grid-line left-[1370px]" />
          {/* Mobile grid lines */}
          <div className="block md:hidden grid-line absolute left-[16px]" />
          <div className="block md:hidden grid-line absolute left-[197px]" />
          <div className="block md:hidden grid-line absolute left-[377px]" />
          {/* Horizontal lines */}
          <div className="horizontal-line absolute top-[195px] md:top-[170px] w-full border-grid-line" />
          <div className="horizontal-line absolute top-[505px] md:top-[648px] w-full border-grid-line" />
          <div className="horizontal-line absolute top-[585px] md:top-[765px] w-full border-grid-line" />

        </div>

       




        {/* Name */}
        <div className="absolute text-text-light font-PPMori-SemiBold text-[96px] md:text-[128px] top-[430px] md:top-[406px] left-[14px] md:left-[62px]">
          Kshitij
        </div>
        <div className="absolute text-text-light font-PPMori-SemiBold text-[96px] md:text-[128px] top-[530px] md:top-[522px] right-[14px] md:left-[216px]">
          Shetty
        </div>


        {/* Contact Section */}
        <div className="absolute left-[16px] md:left-[652px] top-[200px]  md:top-[39px] text-text-light font-PPMori-SemiBold text-[16px] md:text-[20px]">
          Contact
          <div className="mt-[12px] flex flex-col gap-2 font-PPMori text-[14px] md:text-[20px]">
            <a href="#" className="hover:underline">khitijshetty@gmail.com</a>
            <a href="https://www.linkedin.com/in/kshitij-shetty-03ks " className="hover:underline">LinkedIn</a>
            <a href="https://github.com/Kshitijshetty" className="hover:underline">Github</a>
            <a href="#" className="hover:underline font-PPMori-SemiBold">Resume</a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="absolute left-[197px] md:left-[1011px] top-[200px] md:top-[39px] text-text-light font-PPMori-SemiBold text-[16px] md:text-[20px]">
          Navigation
          <div className="mt-[12px] flex flex-col gap-2 font-PPMori text-[14px] md:text-[20px]">
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">PlayGround</a>
            <a href="#" className="hover:underline">About Me</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;

