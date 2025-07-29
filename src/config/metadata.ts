import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://st-system.pl"),
  title: "ST System",
  description:
    "Profesjonalny montaż systemów monitoringu, alarmów i zabezpieczeń. Nowoczesne rozwiązania dla domu i firmy. Szybka wycena i fachowa instalacja – skontaktuj się z nami!",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ST System",
    description:
      "Monitoring, alarmy i zabezpieczenia – dla domu i firmy. Szybka wycena i fachowa instalacja.",
    url: "https://st-system.pl",
    siteName: "ST System",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ST System - monitoring i zabezpieczenia",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ST System",
    description: "Monitoring, alarmy i zabezpieczenia dla domu i firmy.",
    images: ["/og-image.jpg"],
    creator: "@stsystem",
  },
};
