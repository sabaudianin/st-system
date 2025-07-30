"use client";
import { useDarkTheme } from "@/hooks/useDarkTheme/useDarkTheme";

export const Footer = () => {
  const { isDark, toggle } = useDarkTheme();
  return (
    <footer className="bg-zinc-600 dark:bg-zinc-900 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
      &copy; {new Date().getFullYear()} ST-System Sławomir Tomala. Wszelkie
      Prawa zastrzezone.
      <button onClick={toggle}>{isDark ? "Jasny Motyw" : "Ciemy Motyw"}</button>
    </footer>
  );
};
