"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(!prefersReducedMotion.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setEnabled(!e.matches);
    };

    prefersReducedMotion.addEventListener("change", handleChange);
    return () => {
      prefersReducedMotion.removeEventListener("change", handleChange);
    };
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      {children}
    </ReactLenis>
  );
}
