// components/AboutAfterHours.tsx
'use client';

import Image from 'next/image';

const IMAGES = [
  '/images/after-hours1.jpeg',
  '/images/after-hours2.jpeg',
  '/images/after-hours3.jpeg',
  '/images/after-hours4.jpeg',
  '/images/after-hours5.jpeg',
  '/images/after-hours8.jpeg',
  '/images/after-hours6.jpeg',
  '/images/after-hours7.jpg',
  
];

export default function AboutAfterHours() {
  return (
    <section className="w-dvw bg-bg-dark text-white px-[12px] md:px-[70px] py-[40px] md:py-[80px]">
      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <div className="flex items-center gap-[10px] mb-[30px]">
            <span className="w-[20px] h-[20px] rounded-full bg-brand-orange" />
            <h2 className="font-PPMori text-[18px] md:text-[28px] text-white">[After Hours]</h2>
          </div>

        {/* Flex gallery */}
        <div className="flex flex-wrap gap-[12px] md:gap-[28px]">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square bg-white overflow-hidden
                         basis-[calc(50%-6px)] md:basis-[calc(25%-21px)]"
            >
              {/* Replace paths with your photos */}
              <Image
                src={src}
                alt={`After hours ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
