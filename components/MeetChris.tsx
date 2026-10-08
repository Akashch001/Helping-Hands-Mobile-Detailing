import Image from "next/image";
import { BUSINESS } from "@/app/lib/business";

export default function MeetChris() {
  return (
    <section
      id="about"
      className="bg-white py-14 sm:py-18 lg:py-24 overflow-hidden border-t border-stone/50"
      aria-labelledby="meet-chris-heading"
    >
      <div className="container-hh">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── Left Column: Authentic Portrait of Chris & Service Van ── */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone/20 aspect-[5/6] max-w-md sm:max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/assets/chris-professional.png"
                alt="Chris, owner of Helping Hands Mobile Detailing, holding professional detailing products in front of his service van"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_top] select-none"
                priority
              />

              {/* Right edge soft fade into white to blend seamlessly into the editorial layout */}
              <div
                className="absolute inset-y-0 right-0 w-24 sm:w-32 hidden lg:block"
                style={{
                  background:
                    "linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.7) 60%, #FFFFFF 100%)",
                }}
                aria-hidden="true"
              />

              {/* Authentic Cursive Script Overlay Matching Approved Reference */}
              <div
                className="absolute top-1/4 right-4 sm:right-6 lg:right-8 text-right text-white select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                aria-hidden="true"
              >
                <p className="font-script text-2xl sm:text-3xl lg:text-[2.25rem] leading-none tracking-wide text-white">
                  Local.
                </p>
                <p className="font-script text-2xl sm:text-3xl lg:text-[2.25rem] leading-none tracking-wide text-white mt-1">
                  Trusted.
                </p>
                <p className="font-script text-2xl sm:text-3xl lg:text-[2.25rem] leading-none tracking-wide text-white mt-1">
                  Owner Operated.
                </p>
                <div className="w-12 h-0.5 bg-gold ml-auto my-2 rounded-full" />
                <p className="font-script text-3xl sm:text-4xl lg:text-5xl leading-none text-gold">
                  Chris
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Editorial Copy & Authenticated Stats ── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.18em] text-xs sm:text-sm mb-3">
              MEET THE OWNER
            </p>

            {/* Section Heading */}
            <h2
              id="meet-chris-heading"
              className="font-dmserif text-navy text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-5"
            >
              {BUSINESS.ownerTitle}
            </h2>

            {/* Factual Bio from Approved Reference */}
            <p className="font-manrope text-charcoal/90 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              We started Helping Hands with a simple mission — to deliver high-quality,
              professional detailing with honest service and real attention to detail.
              We bring professional results directly to you, whether it&apos;s your home,
              office, or anywhere in Dallas and surrounding areas.
            </p>

            {/* Clean Freestanding Stats Bar Matching Approved Reference (No Box Containers) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 pt-5 border-t border-stone">
              {/* Stat 1: 15+ Years Experience */}
              <div className="flex items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="#B9954B"
                  className="text-gold shrink-0"
                  aria-hidden="true"
                >
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1c1.98-.44 3.53-2.02 3.61-4.06C19.08 11.63 21 9.55 21 7V5c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                </svg>
                <div>
                  <div className="font-archivo text-navy text-2xl sm:text-3xl font-extrabold leading-none">
                    15+
                  </div>
                  <div className="font-manrope text-charcoal/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 leading-tight">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-stone-300" aria-hidden="true" />

              {/* Stat 2: 1000+ Vehicles Detailed */}
              <div className="flex items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="#B9954B"
                  className="text-gold shrink-0"
                  aria-hidden="true"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
                  <circle cx="7.5" cy="14.5" r="1.5" />
                  <circle cx="16.5" cy="14.5" r="1.5" />
                </svg>
                <div>
                  <div className="font-archivo text-navy text-2xl sm:text-3xl font-extrabold leading-none">
                    1000+
                  </div>
                  <div className="font-manrope text-charcoal/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 leading-tight">
                    Vehicles
                    <br />
                    Detailed
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-stone-300" aria-hidden="true" />

              {/* Stat 3: 5 Customer Ratings */}
              <div className="flex items-center gap-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="#B9954B"
                  className="text-gold shrink-0"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <div>
                  <div className="font-archivo text-navy text-2xl sm:text-3xl font-extrabold leading-none flex items-center gap-1">
                    <span>5</span>
                    <span className="text-gold text-xl leading-none">★</span>
                  </div>
                  <div className="font-manrope text-charcoal/80 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 leading-tight">
                    Customer
                    <br />
                    Ratings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
