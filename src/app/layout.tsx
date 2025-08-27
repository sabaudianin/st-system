import "@/styles/globals.css";
import { inter } from "@/lib/fonts";
import { viewport } from "@/config/viewport";
import { metadata } from "@/config/metadata";

import { SkipToContent } from "@/components/layout/SkipToContent/SkipToContent";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      dir="ltr"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col bg-background text-foreground font-sans antialiased">
        {/* Skip link centralnie w layoutcie (jeśli zostawiasz, usuń duplikat z Headera) */}
        <SkipToContent />

        <Header />

        <main
          id="main"
          role="main"
          className="flex-1 pt-20"
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
