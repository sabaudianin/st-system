import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliodev-hazel.vercel.app/"),
  title: "rafBob",
  description:
    "Profesjonalny montaż systemów monitoringu, alarmów i zabezpieczeń. Nowoczesne rozwiązania dla domu i firmy. Szybka wycena i fachowa instalacja-skontaktuj się z nami!",
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
    title: "RafBob",
    description:
      "Monitoring, alarmy i zabezpieczenia dla domu i firmy. Szybka wycena i fachowa instalacja.",
    url: "https://portfoliodev-hazel.vercel.app/",
    siteName: "RafBob",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "rafBob - monitoring i zabezpieczenia",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RafBob",
    description: "Monitoring, alarmy i zabezpieczenia dla domu i firmy.",
    images: ["/og-image.jpg"],
    creator: "@rafBob",
  },
};
