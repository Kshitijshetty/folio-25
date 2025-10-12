// app/layout.tsx
"use client";
import "./globals.css";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import GsapProvider from "./GsapProvide"; // ✅ fixed path
import { ScrollTrigger } from "../../lib/gsap"; // ✅ sync Lenis → ScrollTrigger

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // ✅ Keep ScrollTrigger in sync with Lenis
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", onLenisScroll);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-bg-dark text-white overflow-x-hidden">
        <GsapProvider>
          <Navbar />
          <main id="app">{children}</main>
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}
