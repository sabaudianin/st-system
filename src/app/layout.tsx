import "../styles/globals.css";
import { inter } from "@/lib/fonts";
import { viewport } from "@/config/viewport";
import { metadata } from "@/config/metadata";

import { SkipToContent } from "@/components/layout/SkipToContent/SkipToContent";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export { metadata, viewport };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={inter.variable}
    >
      <body className="bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        <SkipToContent />
        <Header />
        <main
          id="main"
          className="min-h-screen p-2 lg:p-8  "
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
