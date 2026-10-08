import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helping Hands Mobile Detailing | Dallas, TX",
  description:
    "Premium mobile car detailing delivered to your home, office, or anywhere in Dallas. Call (972) 388-4721 for a free quote.",
  keywords: "mobile detailing, car detailing, Dallas TX, auto detailing, Helping Hands",
  openGraph: {
    title: "Helping Hands Mobile Detailing | Dallas, TX",
    description:
      "Premium mobile car detailing delivered to your home, office, or anywhere in Dallas.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
