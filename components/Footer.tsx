import Image from "next/image";
import { BUSINESS } from "@/app/lib/business";

export default function Footer() {
  return (
    <footer className="bg-[#12192c] text-white pt-16 pb-12 border-t border-white/10" role="contentinfo">
      <div className="container-hh">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a
              href="#home"
              className="flex items-center gap-3 mb-4 group"
              aria-label="Helping Hands Mobile Detailing — Return to homepage"
            >
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src="/assets/logo/hh-main-256.png"
                  alt="Helping Hands logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-archivo text-white tracking-[0.04em] text-[0.95rem] font-bold">
                  HELPING HANDS
                </span>
                <span className="font-manrope text-gold tracking-[0.08em] uppercase text-[0.68rem] font-extrabold mt-0.5">
                  MOBILE DETAILING
                </span>
              </div>
            </a>

            <p className="font-manrope text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Premium automotive detailing brought directly to your home, office, or anywhere in Dallas, TX. Cleaner cars, happier people.
            </p>

            <div className="flex items-center gap-2">
              <span className="font-archivo text-gold text-lg">5.0 ★</span>
              <span className="font-manrope text-white/60 text-xs">Customer Satisfaction Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.16em] text-xs mb-4">
              QUICK LINKS
            </p>
            <ul className="space-y-2.5" role="list">
              {BUSINESS.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-manrope text-white/75 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.16em] text-xs mb-4">
              SERVICES
            </p>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "Exterior Hand Wash & Wax", href: "#services" },
                { label: "Interior Deep Cleaning", href: "#services" },
                { label: "Engine Bay Detailing", href: "#services" },
                { label: "Paint Correction & Swirl Removal", href: "#services" },
                { label: "Ultimate Hand Wash Package ($215)", href: "#pricing" },
                { label: "Show Car Package ($430)", href: "#pricing" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="font-manrope text-white/75 hover:text-gold transition-colors text-sm"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.16em] text-xs mb-4">
              GET IN TOUCH
            </p>
            <div className="space-y-3 font-manrope text-sm text-white/80">
              <p>
                <span className="block text-xs text-white/50 uppercase font-bold">Call or Text</span>
                <a href={BUSINESS.phone.link} className="text-gold font-bold hover:underline">
                  {BUSINESS.phone.display}
                </a>
              </p>
              <p>
                <span className="block text-xs text-white/50 uppercase font-bold">Direct Email</span>
                <a href={`mailto:${BUSINESS.email}`} className="text-white hover:text-gold transition-colors">
                  {BUSINESS.email}
                </a>
              </p>
              <p>
                <span className="block text-xs text-white/50 uppercase font-bold">Service Hours</span>
                <span className="text-white/85">Monday – Saturday: 8:00 AM – 6:00 PM</span>
              </p>
              <p>
                <span className="block text-xs text-white/50 uppercase font-bold">Service Area</span>
                <span className="text-white/85">{BUSINESS.location.serviceArea}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-manrope text-xs text-white/50">
          <p>© 2026 {BUSINESS.name}. All rights reserved.</p>
          <p>Owner Operated in Dallas, Texas.</p>
        </div>
      </div>
    </footer>
  );
}
