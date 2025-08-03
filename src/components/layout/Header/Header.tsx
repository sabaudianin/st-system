"use client";
import React, { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [open, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Start" },
    { href: "/oferta", label: "O nas" },
    { href: "/kontakt", label: "Kontakt" },
  ];
  return (
    <header
      className="
      fixed top-0 left-0 w-full z-50 h-20 
      bg-[var(--header-bg)] backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300"
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 h-full flex justify-between items-center"
        aria-label="Główna nawigacja"
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-[var(--foreground)]"
        >
          <span className="relative flex h-7 w-7">
            <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-7 w-7 bg-red-500"></span>
          </span>
          ST System
        </Link>

        <ul className="hidden md:flex gap-10 text-base font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-200 hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 pb-1 text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none group"
          aria-label="Otwórz menu"
        >
          <span className="block relative w-6 h-6">
            <span
              className={`absolute left-0 w-6 h-0.5 bg-[var(--foreground)] rounded transition-all duration-300
        ${open ? "top-1/2 rotate-45" : "top-1"}
      `}
              style={{ transformOrigin: "center" }}
            />

            <span
              className={`absolute left-0 w-6 h-0.5 bg-[var(--foreground)] rounded transition-all duration-300
        ${open ? "opacity-0" : "top-3"}
      `}
              style={{ transformOrigin: "center" }}
            />

            <span
              className={`absolute left-0 w-6 h-0.5 bg-[var(--foreground)] rounded transition-all duration-300
        ${open ? "top-1/2 -rotate-45" : "top-5"}
      `}
              style={{ transformOrigin: "center" }}
            />
          </span>
        </button>
      </nav>
      <nav
        className={`
          md:hidden fixed top-20 left-0 w-full bg-[var(--header-bg)] backdrop-blur-lg
          shadow-md border-b border-slate-200/80
          transition-all duration-300 z-40
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 px-2 rounded transition-colors duration-200 hover:bg-blue-100 hover:text-blue-800 text-[var(--foreground)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
