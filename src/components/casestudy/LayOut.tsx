"use client";

// Minimal wrapper: applies scroll-padding so anchors don't hide under navbar
export default function CaseStudyLayout({
  children,
  topOffset = 80, // match your navbar height
}: {
  children: React.ReactNode;
  topOffset?: number;
}) {
  return (
    <div
      // Key changes:
      // - Remove `overflow-hidden` and `overflow-x-auto`
      // - Use axis-specific clipping: X is clipped, Y remains visible (so sticky works)
      className="px-[12px] md:px-[70px] max-w-full min-w-0 overflow-x-clip overflow-y-visible"
      style={{ scrollPaddingTop: `${topOffset + 16}px` }}
    >
      {children}
    </div>
  );
}
