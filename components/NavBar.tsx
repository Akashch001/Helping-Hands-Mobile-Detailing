"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { BUSINESS } from "@/app/lib/business";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Elevation shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu and restore focus to trigger button
  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Handle keyboard interaction (Escape to close, Tab trapping in open drawer)
  useEffect(() => {
    if (!open) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Initial focus on first link in drawer
    const timer = setTimeout(() => {
      const firstLink = menuRef.current?.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [open, closeMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_20px_rgba(25,35,61,0.08)] border-b border-stone/80"
          : "border-b border-stone/40"
      }`}
      role="banner"
    >
      <nav
        className="container-hh flex items-center justify-between h-[72px] sm:h-[80px]"
        aria-label="Primary navigation"
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-md"
          aria-label="Helping Hands Mobile Detailing — Return to homepage"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
            <Image
              src="/assets/logo/hh-main-256.png"
              alt="Helping Hands Mobile Detailing logo"
              fill
              sizes="44px"
              className="object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span
              className="font-archivo text-navy tracking-[0.04em] text-[0.88rem] sm:text-[0.95rem] font-bold"
            >
              HELPING HANDS
            </span>
            <span
              className="font-manrope text-navy/90 tracking-[0.08em] uppercase text-[0.62rem] sm:text-[0.68rem] font-extrabold mt-0.5"
            >
              MOBILE DETAILING
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-2 xl:gap-4" role="list">
          {BUSINESS.nav.map((item, idx) => {
            const isHome = idx === 0;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`font-manrope text-[0.92rem] px-2.5 py-1.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold rounded ${
                    isHome
                      ? "text-navy font-bold border-b-2 border-gold"
                      : "text-charcoal font-semibold hover:text-gold"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BUSINESS.phone.link}
            className="btn btn-white-navy text-sm py-2 px-4"
          >
            <svg
              width="15"
              height="15"
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
          <a
            href="#quote"
            className="btn btn-gold text-sm py-2 px-5"
          >
            <span>GET A QUOTE →</span>
          </a>
        </div>

        {/* Mobile Action Buttons (Phone + Hamburger) */}
        <div className="flex lg:hidden items-center gap-1.5">
          <a
            href={BUSINESS.phone.link}
            aria-label={`Call Helping Hands at ${BUSINESS.phone.display}`}
            className="p-2.5 text-navy hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold rounded-md"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
            </svg>
          </a>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="p-2.5 text-navy hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-gold rounded-md"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] sm:top-[80px] bg-navy/40 backdrop-blur-sm z-40"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile site menu"
        hidden={!open}
        className={`lg:hidden relative z-50 bg-white border-t border-stone overflow-hidden transition-all duration-300 ease-out shadow-xl ${
          open ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-hh py-6 flex flex-col gap-5">
          <ul className="flex flex-col gap-1" role="list">
            {BUSINESS.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block font-manrope font-bold text-charcoal hover:text-navy hover:bg-stone/60 text-lg px-4 py-3 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-stone flex flex-col gap-3">
            <a
              href={BUSINESS.phone.link}
              onClick={closeMenu}
              className="btn btn-white-navy w-full justify-center py-3 text-base"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              <span>{BUSINESS.phone.display}</span>
            </a>
            <a
              href="#quote"
              onClick={closeMenu}
              className="btn btn-gold w-full justify-center py-3 text-base"
            >
              <span>GET A FREE QUOTE →</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
