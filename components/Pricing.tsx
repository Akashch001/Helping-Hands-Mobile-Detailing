import { BUSINESS } from "@/app/lib/business";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-ivory py-16 sm:py-20 lg:py-28 border-t border-stone/60"
      aria-labelledby="pricing-heading"
    >
      <div className="container-hh">
        {/* Section Header with Trust Highlights */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.18em] text-xs sm:text-sm mb-2 sm:mb-3">
              PACKAGES &amp; PRICING
            </p>
            <h2
              id="pricing-heading"
              className="font-dmserif text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-3"
            >
              Detailing Packages<span className="text-gold">.</span>
            </h2>
            <p className="font-manrope text-charcoal/80 text-base sm:text-lg max-w-xl">
              Choose the package that&apos;s right for you. Custom quotes available for specialty vehicles.
            </p>
          </div>

          {/* Top Trust Highlights */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 lg:pt-0 border-t border-stone/80 lg:border-t-0">
            <div className="flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#19233D"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
              <div>
                <p className="font-manrope font-extrabold text-navy text-xs uppercase leading-tight tracking-wider">
                  Mobile Service
                </p>
                <p className="font-manrope text-charcoal/70 text-[10px] uppercase leading-tight tracking-wider">
                  We Come to You
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#19233D"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <p className="font-manrope font-extrabold text-navy text-xs uppercase leading-tight tracking-wider">
                  Premium Products
                </p>
                <p className="font-manrope text-charcoal/70 text-[10px] uppercase leading-tight tracking-wider">
                  Professional Grade
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#19233D"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <p className="font-manrope font-extrabold text-navy text-xs uppercase leading-tight tracking-wider">
                  Flexible Scheduling
                </p>
                <p className="font-manrope text-charcoal/70 text-[10px] uppercase leading-tight tracking-wider">
                  Your Time, Your Convenience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Package 1: Ultimate Hand Wash Detail ($215) */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone/80 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-archivo text-navy text-lg sm:text-xl font-bold tracking-tight uppercase">
                  Ultimate Hand Wash Detail
                </h3>
                <div className="font-archivo text-navy text-3xl sm:text-4xl font-extrabold shrink-0">
                  $215
                </div>
              </div>

              <p className="font-manrope font-extrabold text-gold text-xs uppercase tracking-widest mb-4">
                Full Wash &amp; Interior Care
              </p>

              <div className="divider-gold mb-6" aria-hidden="true" />

              <ul className="space-y-3.5 mb-8" role="list">
                {[
                  "Full exterior hand wash & dry",
                  "Tire & wheel deep cleaning",
                  "Interior vacuum & surface wipe down",
                  "Streak-free glass inside & out",
                  "Protective hand-applied wax seal",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-gold font-bold text-base" aria-hidden="true">✓</span>
                    <span className="font-manrope text-charcoal text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#quote?package=ultimate"
              className="btn btn-gold w-full justify-center py-3.5 text-sm sm:text-base font-bold shadow-md"
            >
              GET THIS PACKAGE →
            </a>
          </div>

          {/* Package 2: Show Car Detail ($430) */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gold flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy text-gold font-manrope font-extrabold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-archivo text-navy text-lg sm:text-xl font-bold tracking-tight uppercase">
                  Show Car Detail
                </h3>
                <div className="font-archivo text-navy text-3xl sm:text-4xl font-extrabold shrink-0">
                  $430
                </div>
              </div>

              <p className="font-manrope font-extrabold text-gold text-xs uppercase tracking-widest mb-4">
                Signature Showroom Restoration
              </p>

              <div className="divider-gold mb-6" aria-hidden="true" />

              <ul className="space-y-3.5 mb-8" role="list">
                {[
                  "Everything in Ultimate Detail",
                  "Deep interior steam & conditioning",
                  "Engine bay cleaning & dressing",
                  "Paint enhancement & gloss restoration",
                  "Premium protective paint sealant",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-gold font-bold text-base" aria-hidden="true">✓</span>
                    <span className="font-manrope text-charcoal text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#quote?package=showcar"
              className="btn btn-gold w-full justify-center py-3.5 text-sm sm:text-base font-bold shadow-md"
            >
              GET THIS PACKAGE →
            </a>
          </div>

          {/* Package 3: Need a Custom Quote? */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B9954B"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="font-dmserif text-navy text-2xl font-bold">
                  Need a Custom Quote?
                </h3>
              </div>

              <div className="divider-gold mb-6" aria-hidden="true" />

              <p className="font-manrope text-charcoal/85 text-sm sm:text-base leading-relaxed mb-6">
                Have a truck, SUV, RV, or something special? Contact Chris for a custom quote. We&apos;ll create a package tailored specifically to your vehicle&apos;s condition and your personal goals.
              </p>

              <div className="space-y-3 pt-2 mb-8">
                <a
                  href={BUSINESS.phone.link}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-ivory hover:bg-stone/60 transition-colors text-navy group font-manrope font-bold text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gold">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                  <span>{BUSINESS.phone.display}</span>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-ivory hover:bg-stone/60 transition-colors text-navy group font-manrope font-medium text-xs sm:text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span className="truncate">{BUSINESS.email}</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-ivory text-navy font-manrope font-medium text-xs sm:text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-navy">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span>Follow on Facebook</span>
                </div>
              </div>
            </div>

            <a
              href="#quote"
              className="btn btn-gold w-full justify-center py-3.5 text-sm sm:text-base font-bold shadow-md"
            >
              REQUEST CUSTOM QUOTE →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
