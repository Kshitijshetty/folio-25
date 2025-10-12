'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!menuRef.current) return;

    if (!hasMounted.current) {
      gsap.set(menuRef.current, { y: '-150%' });
      menuRef.current.classList.remove('invisible');
      gsap.set(linksRef.current.filter(Boolean), { x: 80, opacity: 0 });
      hasMounted.current = true;
      return;
    }

    if (isOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
        onComplete: () => {
          gsap.fromTo(
            linksRef.current.filter(Boolean),
            { x: 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
              stagger: 0.05,
            }
          );
        },
      });
    } else {
      gsap.to(menuRef.current, {
        y: '-150%',
        duration: 0.8,
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)',
      });
      gsap.set(linksRef.current.filter(Boolean), { x: 80, opacity: 0 });
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu (hidden on md+) */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="fixed top-[49px] left-0 w-full bg-brand-orange text-white z-40 md:hidden invisible"
      >
        <div className="flex flex-col text-[16px] font-PPMori py-[10px]">
          {/* Projects -> anchors to #projects */}
          <Link
            href="/#projects"
            ref={(el) => { linksRef.current[0] = el; }}
            onClick={() => setIsOpen(false)}
            className=" bg-brand-orange opacity-0 px-[20px] py-[10px]"
          >
            Projects
          </Link>

          <Link
            href="/pages/playground"
            ref={(el) => { linksRef.current[1] = el; }}
            onClick={() => setIsOpen(false)}
            className="bg-brand-orange opacity-0 px-[20px] py-[10px]"
          >
            Playground
          </Link>

          <Link
            href="/pages/about"
            ref={(el) => { linksRef.current[2] = el; }}
            onClick={() => setIsOpen(false)}
            className="bg-brand-orange opacity-0 px-[20px] py-[10px]"
          >
            About Me
          </Link>

          <Link
            href="/"
            ref={(el) => { linksRef.current[3] = el; }}
            onClick={() => setIsOpen(false)}
            className="bg-brand-orange opacity-0 px-[20px] py-[10px]"
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 bg-bg-dark backdrop-blur-md w-full border-b border-text-light">
        {/* Desktop Navbar */}
        <div className="hidden md:flex max-w-full gap-[237.84px] py-3 justify-between items-center md:pl-[70px] md:pr-[70px] pl-[12px] pr-[12px]">
          <Link href="/" className="text-text-light font-PPMori text-[16px]">
            Kshitij Shetty
          </Link>

          <div className="flex gap-[40px] text-text-light font-PPMori text-[16px]">
            <Link href="/#projects" className="hover:text-brand-orange transition-colors">
              Projects
            </Link>
            <Link href="/pages/playground" className="hover:text-brand-orange transition-colors">
              Playground
            </Link>
            <Link href="/pages/about" className="hover:text-brand-orange transition-colors">
              About Me
            </Link>
          </div>

          <Link href="/" className="text-text-light font-PPMori text-[16px] hover:text-brand-orange transition-colors">
            Resume
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden w-full py-3 px-[20px] justify-between items-center">
          <Link href="/" className="text-text-light font-PPMori text-[16px]">
            Kshitij Shetty
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-6 h-6 relative flex items-center justify-start z-50"
            aria-label="Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {/* Top Line */}
            <span
              className={`absolute w-full h-[1px] bg-white rounded transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45 top-1/2' : 'top-[6px]'
              }`}
            />
            {/* Middle Line */}
            <span
              className={`absolute w-[60%] h-[1px] bg-white rounded transition-all duration-100 ease-in-out ${
                isOpen ? 'opacity-0' : 'top-1/2'
              }`}
            />
            {/* Bottom Line */}
            <span
              className={`absolute w-full h-[1px] bg-white rounded transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45 top-1/2' : 'top-[18px]'
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
