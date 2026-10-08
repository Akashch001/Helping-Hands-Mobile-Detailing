import Image from "next/image";

const SERVICES_DATA = [
  {
    id: "exterior",
    title: "Exterior Detailing",
    description: "Hand wash, decontamination, waxing, and more.",
    image: "/assets/services/exterior.webp",
    badge: "Popular",
  },
  {
    id: "interior",
    title: "Interior Detailing",
    description: "Deep cleaning, stain removal, & interior protection.",
    image: "/assets/services/interior.webp",
    badge: "Essential",
  },
  {
    id: "engine",
    title: "Engine Detailing",
    description: "Clean, protect, and enhance your engine bay.",
    image: "/assets/services/engine.webp",
    badge: "Performance",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description: "Remove swirl marks, oxidation, & restore your finish.",
    image: "/assets/services/paint-correction.webp",
    badge: "Flawless Finish",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-ivory py-16 sm:py-20 lg:py-28 border-t border-stone/60"
      aria-labelledby="services-heading"
    >
      <div className="container-hh">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.18em] text-xs sm:text-sm mb-2 sm:mb-3">
              OUR SERVICES
            </p>
            <h2
              id="services-heading"
              className="font-dmserif text-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
            >
              Professional Detailing. Real Results<span className="text-gold">.</span>
            </h2>
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 font-manrope font-bold text-gold hover:text-gold-dark transition-colors text-sm sm:text-base group shrink-0"
          >
            <span>VIEW ALL SERVICES</span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Services Grid (4 Cards Matching Approved Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SERVICES_DATA.map((service) => (
            <a
              key={service.id}
              href={`#quote?service=${service.id}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-stone/80 focus-visible:outline-2 focus-visible:outline-gold"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone/20">
                <Image
                  src={service.image}
                  alt={`${service.title} by Helping Hands`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-dmserif text-navy text-xl sm:text-2xl group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <div
                    className="w-8 h-8 rounded-full bg-ivory flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-navy transition-all duration-200 shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="font-manrope text-charcoal/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
