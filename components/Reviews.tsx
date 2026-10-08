const REVIEWS_DATA = [
  {
    author: "Jason R.",
    quote:
      "Chris did an amazing job! My truck looks better than new. Professional, on time, and super detailed. Highly recommend Helping Hands!",
    rating: 5,
    location: "Dallas, TX",
    vehicle: "Ford F-150",
  },
  {
    author: "Melissa T.",
    quote:
      "Chris is the best in Dallas!! Super convenient, great communication, and my car has never looked this good. Will definitely be using him again!",
    rating: 5,
    location: "Plano, TX",
    vehicle: "BMW 4 Series",
  },
  {
    author: "David K.",
    quote:
      "Awesome experience. Chris pays attention to every detail and really takes pride in his work. You can tell he cares about his customers.",
    rating: 5,
    location: "Dallas, TX",
    vehicle: "Porsche Macan",
  },
  {
    author: "Stephanie L.",
    quote:
      "Very professional, great results, and so convenient. My interior looks brand new! Highly recommended!",
    rating: 5,
    location: "Frisco, TX",
    vehicle: "Audi Q7",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden border-t border-stone/50"
      aria-labelledby="reviews-heading"
    >
      <div className="container-hh">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.18em] text-xs sm:text-sm mb-2 sm:mb-3">
              CUSTOMER REVIEWS
            </p>
            <h2
              id="reviews-heading"
              className="font-dmserif text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
            >
              Real People. Real Results<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-manrope font-bold text-navy text-sm sm:text-base">
              5.0 ★ Google Verified
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.author}
              className="bg-ivory rounded-2xl p-6 sm:p-7 border border-stone/80 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-gold text-lg mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-manrope text-charcoal/90 text-sm sm:text-[0.92rem] leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author and Google Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-stone">
                <div>
                  <p className="font-manrope font-bold text-navy text-sm">
                    {rev.author}
                  </p>
                  <p className="font-manrope text-charcoal/60 text-xs">
                    {rev.location}
                  </p>
                </div>

                {/* Google Icon */}
                <div
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs border border-stone/60 shrink-0"
                  aria-label="Google verified review"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.14z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.73-2.1-6.68-4.93H1.21v3.13C3.25 21.43 7.31 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.32 14.27c-.24-.73-.38-1.5-.38-2.27s.14-1.54.38-2.27V6.6H1.21A11.97 11.97 0 0 0 0 12c0 1.92.46 3.74 1.21 5.4l4.11-3.13z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.57 1.21 6.6l4.11 3.13c.95-2.83 3.58-4.98 6.68-4.98z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
