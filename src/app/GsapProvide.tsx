"use client";
import { useEffect } from "react";
import { registerGsap, ScrollTrigger } from "../../lib/gsap";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return <>{children}</>;
}
