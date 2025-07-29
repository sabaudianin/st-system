import "../styles/globals.css";
import { inter } from "@/lib/fonts";
import { viewport } from "@/config/viewport";
import { metadata } from "@/config/metadata";

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
        {children}
      </body>
    </html>
  );
}
