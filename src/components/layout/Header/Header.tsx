"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDarkTheme } from "@/hooks/useDarkTheme/useDarkTheme";
import { Logo } from "@/components/elements/logo/Logo";

type NavLink = { href: string; label: string };

const NAV_LINKS: readonly NavLink[] = [
  { href: "/o-nas", label: "O Nas" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const Header: React.FC = () => {
  const { isDark, toggle } = useDarkTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = "mobile-menu";

  // aktywność linku (obsługa podstron /foo/bar)
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  // Zamknij menu po nawigacji
  useEffect(() => setOpen(false), [pathname]);

  // Zablokuj scroll tła przy otwartym menu
  useEffect(() => {
    if (typeof document === "undefined") return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = open ? "hidden" : "";
    return () => {
      body.style.overflow = prev;
    };
  }, [open]);

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <header
      role="banner"
      className="fixed inset-x-0 top-0 z-50 h-20 bg-background/70 md:bg-background/60 supports-[backdrop-filter]:backdrop-blur border-b border-[var(--border)] shadow-sm transition-all duration-300"
    >
      {/* Skip link dla klawiatury */}
      <a
        href="#main"
        className="sr-only sr-only-focusable"
      >
        Przejdź do treści
      </a>

      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12"
        aria-label="Główna nawigacja"
      >
        <Logo />

        <div className="flex items-center gap-2 md:gap-4">
          {/* Przełącznik motywu – korzysta z tokenów kolorów */}
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-foreground/90 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
            aria-pressed={isDark}
            aria-label={
              isDark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"
            }
            title={isDark ? "Jasny motyw" : "Ciemny motyw"}
          >
            {isDark ? "Jasny motyw" : "Ciemny motyw"}
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 text-base font-medium">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`pb-1 border-b-2 border-transparent text-foreground/90 transition-colors duration-200 hover:text-accent hover:border-accent ${
                      active ? "text-accent border-accent" : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            onKeyDown={onKeyDown}
            className="md:hidden grid h-10 w-10 place-content-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-controls={menuId}
            aria-expanded={open}
          >
            <span
              className="relative block h-6 w-6"
              aria-hidden
            >
              <span className="absolute left-0 top-1 block h-0.5 w-6 rounded bg-foreground transition-transform duration-300 aria-expanded:top-1/2 aria-expanded:rotate-45" />
              <span className="absolute left-0 top-3 block h-0.5 w-6 rounded bg-foreground transition-opacity duration-300 aria-expanded:opacity-0" />
              <span className="absolute left-0 top-5 block h-0.5 w-6 rounded bg-foreground transition-transform duration-300 aria-expanded:top-1/2 aria-expanded:-rotate-45" />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id={menuId}
        className={`md:hidden fixed left-0 top-20 z-40 w-full overflow-hidden border-b border-[var(--border)] bg-background/95 supports-[backdrop-filter]:backdrop-blur shadow-md transition-[max-height,opacity] duration-300 ${
          open
            ? "max-h-60 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-label="Menu mobilne"
      >
        <ul className="flex flex-col gap-1 py-3 px-8 text-base font-medium">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded px-2 py-2 transition-colors duration-200 hover:bg-accent/10 hover:text-accent ${
                    active ? "font-semibold text-accent" : "text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overlay do zamknięcia menu */}
      {open && (
        <button
          type="button"
          aria-label="Zamknij menu"
          className="md:hidden fixed inset-0 top-20 z-30 bg-black/10 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};
