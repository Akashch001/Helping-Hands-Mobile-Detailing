"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  useEffect(() => {
    // Check for reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Gentle card entrances on scroll without breaking initial visibility
      const animateSection = (selector: string, trigger: string) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) return;

        gsap.from(elements, {
          scrollTrigger: {
            trigger,
            start: "top 85%",
            once: true,
          },
          y: 20,
          opacity: 0.4,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "all",
        });
      };

      animateSection("#services a.group", "#services");
      animateSection("#results [role='slider']", "#results");
      animateSection("#pricing .grid > div", "#pricing");
      animateSection("#reviews .grid > div", "#reviews");
      animateSection("#quote form", "#quote");
    });

    // Refresh after DOM layout
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
