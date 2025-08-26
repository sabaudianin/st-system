"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDarkTheme } from "@/hooks/useDarkTheme/useDarkTheme";
import { Logo } from "@/components/elements/logo/Logo";

type NavLink = { href: string; label: string };

export const Header: React.FC = () => {
  const { isDark, toggle } = useDarkTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = "mobile-menu";

  const navLinks: ReadonlyArray<NavLink> = [
    { href: "/o-nas", label: "O Nas" },
    { href: "/realizacje", label: "Realizacje" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  // Zamknij menu po nawigacji
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Zablokuj scroll tła przy otwartym menu
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 h-20 bg-[var(--panel)] backdrop-blur-md border-b border-[var(--border,_rgba(15,23,42,0.12))] shadow-sm transition-all duration-300"
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 h-full flex justify-between items-center"
        aria-label="Główna nawigacja"
      >
        <Logo />

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="
              px-3 py-2 text-sm font-semibold rounded-md
              hover:bg-white/10
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              text-[var(--foreground)]
            "
            aria-pressed={isDark}
            aria-label={
              isDark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"
            }
            title={isDark ? "Jasny motyw" : "Ciemny motyw"}
          >
            {isDark ? "Jasny motyw" : "Ciemny motyw"}
          </button>

          <ul className="hidden md:flex gap-10 text-base font-medium items-center">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      pb-1 border-b-2 border-transparent
                      transition-colors duration-200
                      text-[var(--foreground)]
                      hover:text-blue-700 hover:border-blue-700
                      ${active ? "text-blue-700 border-blue-700" : ""}
                    `}
                    aria-current={active ? "page" : undefined}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            onKeyDown={onKeyDown}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-controls={menuId}
            aria-expanded={open}
          >
            <span
              className="block relative w-6 h-6"
              aria-hidden="true"
            >
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[var(--foreground)] rounded transition-all duration-300
                ${open ? "top-1/2 rotate-45" : "top-1"}`}
                style={{ transformOrigin: "center" }}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[var(--foreground)] rounded transition-all duration-300
                ${open ? "opacity-0" : "top-3"}`}
                style={{ transformOrigin: "center" }}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[var(--foreground)] rounded transition-all duration-300
                ${open ? "top-1/2 -rotate-45" : "top-5"}`}
                style={{ transformOrigin: "center" }}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        className={`
          md:hidden fixed top-20 left-0 w-full
          bg-[var(--panel-bg)] backdrop-blur-lg
          shadow-md border-b border-[var(--border,_rgba(15,23,42,0.12))]
          transition-[max-height,opacity] duration-300 z-40
          ${
            open
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
          overflow-hidden
        `}
        aria-label="Menu mobilne"
      >
        <ul className="flex flex-col py-3 px-8 gap-2 text-base font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    block py-2 px-2 rounded
                    transition-colors duration-200
                    text-[var(--foreground)]
                    hover:bg-blue-100 hover:text-blue-800
                    ${active ? "font-semibold" : ""}
                  `}
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

      {open && (
        <button
          type="button"
          aria-label="Zamknij menu"
          className="md:hidden fixed inset-0 top-20 bg-black/10 backdrop-blur-[1px] z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};
