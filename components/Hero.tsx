import Image from "next/image";
import { BUSINESS } from "@/app/lib/business";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-80px)] mt-[72px] sm:mt-[80px] bg-white flex items-center overflow-hidden"
      aria-label="Helping Hands Mobile Detailing Hero"
    >
      {/* ── Background Photography (Approved Clean Asset: hero-clean.png) ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/assets/hero-clean.png"
          alt="Chris standing in front of a professionally detailed SRT vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] sm:object-[82%_center] md:object-[80%_center] lg:object-[68%_center] select-none"
        />

        {/* Desktop & Tablet Soft Light Wash (Left to Right) for High-Contrast Typography */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.92) 36%, rgba(255, 255, 255, 0.55) 58%, rgba(255, 255, 255, 0.08) 75%, transparent 85%)",
          }}
        />

        {/* Mobile Light Wash Overlay for Guaranteed Readability while keeping Chris visible */}
        <div
          className="absolute inset-0 block sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.82) 45%, rgba(255, 255, 255, 0.94) 100%)",
          }}
        />

        {/* Bottom Seamless Fade to White for Editorial Continuity */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 sm:h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.6) 60%, #FFFFFF 100%)",
          }}
        />
      </div>

      {/* ── Hero Foreground Content ── */}
      <div className="container-hh relative z-10 py-8 sm:py-10 lg:py-12 w-full">
        <div className="max-w-[580px] lg:max-w-[620px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3 anim-fade-up">
            <span className="w-5 h-0.5 bg-gold hidden sm:block" aria-hidden="true" />
            <p className="font-manrope font-bold text-navy tracking-[0.16em] uppercase text-xs sm:text-[0.82rem]">
              {BUSINESS.tagline}
            </p>
          </div>

          {/* Hero Headline — Crisp HTML Rendering Matching Approved Design */}
          <h1
            className="font-archivo text-navy leading-[0.92] tracking-tight mb-4 sm:mb-5 text-[2.75rem] xs:text-[3.25rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-[5.25rem] anim-fade-up anim-delay-100"
          >
            CLEANER
            <br />
            <span className="text-gold">CARS</span>
            <br />
            HAPPIER
            <br />
            <span className="text-gold">PEOPLE.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-manrope text-charcoal font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-7 max-w-lg anim-fade-up anim-delay-200">
            Premium mobile detailing delivered to your home, office, or anywhere in Dallas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 sm:mb-9 anim-fade-up anim-delay-300">
            <a
              href="#quote"
              className="btn btn-gold text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-7 font-bold shadow-md"
            >
              <span>GET A FREE QUOTE →</span>
            </a>
            <a
              href={BUSINESS.phone.link}
              className="btn btn-white-navy text-sm sm:text-base py-3 sm:py-3.5 px-5 sm:px-6 font-bold shadow-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              <span>{BUSINESS.phone.display}</span>
            </a>
          </div>

          {/* Trust Bar — Authentic Service Highlights */}
          <div
            className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-nowrap items-center gap-x-5 gap-y-3 pt-3.5 border-t border-navy/15 anim-fade-up anim-delay-400"
            aria-label="Key service highlights"
          >
            {/* Dallas, Texas */}
            <div className="flex items-center gap-2.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-navy shrink-0"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              <div>
                <p className="font-manrope font-extrabold text-navy text-[0.78rem] sm:text-[0.82rem] uppercase leading-tight tracking-wider">
                  Dallas, Texas
                </p>
                <p className="font-manrope font-semibold text-charcoal/75 text-[0.65rem] sm:text-[0.7rem] uppercase leading-tight tracking-wider">
                  &amp; Surrounding Areas
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-7 bg-charcoal/20" aria-hidden="true" />

            {/* 15+ Years */}
            <div className="flex items-center gap-2.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-navy shrink-0"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div>
                <p className="font-manrope font-extrabold text-navy text-[0.78rem] sm:text-[0.82rem] uppercase leading-tight tracking-wider">
                  15+ Years
                </p>
                <p className="font-manrope font-semibold text-charcoal/75 text-[0.65rem] sm:text-[0.7rem] uppercase leading-tight tracking-wider">
                  Experience
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-7 bg-charcoal/20" aria-hidden="true" />

            {/* Mobile Service */}
            <div className="flex items-center gap-2.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-navy shrink-0"
                aria-hidden="true"
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
                <circle cx="7.5" cy="14.5" r="1.5" />
                <circle cx="16.5" cy="14.5" r="1.5" />
              </svg>
              <div>
                <p className="font-manrope font-extrabold text-navy text-[0.78rem] sm:text-[0.82rem] uppercase leading-tight tracking-wider">
                  Mobile Service
                </p>
                <p className="font-manrope font-semibold text-charcoal/75 text-[0.65rem] sm:text-[0.7rem] uppercase leading-tight tracking-wider">
                  We Come to You
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
