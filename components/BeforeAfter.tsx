"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(95, prev + 5));
    }
  };

  return (
    <section
      id="results"
      className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden border-t border-stone/50"
      aria-labelledby="before-after-heading"
    >
      <div className="container-hh">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.18em] text-xs sm:text-sm mb-3">
              BEFORE &amp; AFTER
            </p>
            <h2
              id="before-after-heading"
              className="font-dmserif text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4"
            >
              See The Difference<span className="text-gold">.</span>
            </h2>
            <p className="font-manrope text-charcoal/85 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Real results from real customers. Slide to compare the dramatic transformation from road grime to showroom gloss.
            </p>

            <div>
              <a
                href="#quote"
                className="btn btn-gold text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-7 font-bold shadow-md"
              >
                <span>GET A FREE QUOTE →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Comparison Slider */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              role="slider"
              tabIndex={0}
              aria-label="Before and after transformation slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPosition)}
              onKeyDown={handleKeyDown}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-2 border-stone focus-visible:outline-2 focus-visible:outline-gold"
            >
              {/* After Image (Full background layer) */}
              <div className="absolute inset-0">
                <Image
                  src="/assets/transformations/after.webp"
                  alt="Vehicle paint after professional paint correction showing mirror reflection"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm text-white font-manrope font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md z-10">
                  AFTER
                </span>
              </div>

              {/* Before Image (Clipped layer using clip-path) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <Image
                  src="/assets/transformations/before.webp"
                  alt="Vehicle paint before detailing showing heavy swirl marks and micro-scratches"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm text-white font-manrope font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md z-10">
                  BEFORE
                </span>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center -translate-x-1/2 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl border-2 border-gold flex items-center justify-center text-navy font-bold text-sm select-none">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="font-manrope text-charcoal/60 text-xs text-center mt-3 sm:mt-4">
              Drag slider left or right or use arrow keys to inspect the transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
