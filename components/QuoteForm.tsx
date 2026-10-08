"use client";

import { useState } from "react";
import Image from "next/image";
import { BUSINESS } from "@/app/lib/business";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "Ultimate Hand Wash Detail ($215)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="quote"
      className="bg-navy py-16 sm:py-20 lg:py-28 text-white relative overflow-hidden"
      aria-labelledby="quote-heading"
    >
      {/* Background Photography Texture from AssetImmages */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none mix-blend-luminosity" aria-hidden="true">
        <Image
          src="/assets/bg/cta_bg.webp"
          alt="Helping hands detailing equipment"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-hh relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-manrope font-bold text-gold uppercase tracking-[0.18em] text-xs sm:text-sm mb-3">
              GET A FREE ESTIMATE
            </p>
            <h2
              id="quote-heading"
              className="font-dmserif text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4"
            >
              Request Your Custom Quote<span className="text-gold">.</span>
            </h2>
            <p className="font-manrope text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Tell us about your vehicle and detailing goals. Chris will personally review your request and reach out promptly with tailored pricing.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-manrope text-xs text-white/60 uppercase font-bold tracking-wider">Direct Phone</p>
                  <a href={BUSINESS.phone.link} className="font-archivo text-gold text-lg sm:text-xl font-bold hover:underline">
                    {BUSINESS.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-manrope text-xs text-white/60 uppercase font-bold tracking-wider">Email Address</p>
                  <a href={`mailto:${BUSINESS.email}`} className="font-manrope text-white text-sm sm:text-base font-semibold hover:underline">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-manrope text-xs text-white/60 uppercase font-bold tracking-wider">Service Territory</p>
                  <p className="font-manrope text-white text-sm sm:text-base font-semibold">
                    {BUSINESS.location.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-10 text-charcoal shadow-2xl border border-gold/30">
            {submitted ? (
              <div className="text-center py-10" role="status">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  ✓
                </div>
                <h3 className="font-dmserif text-navy text-2xl sm:text-3xl mb-2">
                  Quote Request Received!
                </h3>
                <p className="font-manrope text-charcoal/80 text-base max-w-md mx-auto mb-6">
                  Thank you, {formData.name || "friend"}. Chris will review your vehicle details and call or text you shortly at {formData.phone || "your number"}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-gold text-sm font-bold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-name" className="block font-manrope font-bold text-navy text-xs sm:text-sm uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 font-manrope text-sm text-navy outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="block font-manrope font-bold text-navy text-xs sm:text-sm uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. (972) 388-4721"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 font-manrope text-sm text-navy outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-email" className="block font-manrope font-bold text-navy text-xs sm:text-sm uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 font-manrope text-sm text-navy outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-vehicle" className="block font-manrope font-bold text-navy text-xs sm:text-sm uppercase tracking-wider mb-2">
                      Vehicle Year, Make &amp; Model *
                    </label>
                    <input
                      id="quote-vehicle"
                      type="text"
                      name="vehicle"
                      required
                      placeholder="e.g. 2023 Dodge Challenger"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 font-manrope text-sm text-navy outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-service" className="block font-manrope font-bold text-navy text-xs sm:text-sm uppercase tracking-wider mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="quote-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 font-manrope text-sm text-navy outline-none transition-all bg-white"
                  >
                    <option value="Ultimate Hand Wash Detail ($215)">Ultimate Hand Wash Detail ($215)</option>
                    <option value="Show Car Detail ($430)">Show Car Detail ($430)</option>
                    <option value="Paint Correction">Paint Correction</option>
                    <option value="Interior Deep Clean Only">Interior Deep Clean Only</option>
                    <option value="Engine Bay Detailing">Engine Bay Detailing</option>
                    <option value="Custom Specialty / Fleet Quote">Custom Specialty / Fleet Quote</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-notes" className="block font-manrope font-bold text-navy text-xs sm:text-sm uppercase tracking-wider mb-2">
                    Vehicle Notes &amp; Preferred Time (Optional)
                  </label>
                  <textarea
                    id="quote-notes"
                    name="notes"
                    rows={3}
                    placeholder="Tell us about specific stains, swirl marks, pet hair, or your preferred scheduling window..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 font-manrope text-sm text-navy outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-gold w-full justify-center py-4 text-base font-bold shadow-lg"
                >
                  {loading ? "SUBMITTING REQUEST..." : "SUBMIT QUOTE REQUEST →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
