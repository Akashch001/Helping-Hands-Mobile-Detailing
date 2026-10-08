// Centralized business data — Helping Hands Mobile Detailing
// Edit this file to update contact info site-wide.

export const BUSINESS = {
  name: "Helping Hands Mobile Detailing",
  tagline: "Mobile Car Detailing in Dallas, TX",
  phone: {
    display: "(972) 388-4721",
    link: "tel:+19723884721",
  },
  email: "bigsleepy42067@gmail.com",
  location: {
    city: "Dallas",
    state: "Texas",
    serviceArea: "Dallas, TX & Surrounding Areas",
  },
  owner: "Chris",
  ownerTitle: "Owner of Helping Hands Mobile Detailing",
  nav: [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#pricing" },
    { label: "Gallery",  href: "#results" },
    { label: "Reviews",  href: "#reviews" },
    { label: "Contact",  href: "#quote" },
  ],
} as const;
