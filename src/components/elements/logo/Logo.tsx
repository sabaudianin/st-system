import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Strona główna ST System"
      className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-[var(--foreground)]"
    >
      <span className="relative flex h-7 w-7">
        <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-40"></span>
        <span className="relative inline-flex rounded-full h-7 w-7 bg-red-500"></span>
      </span>
      ST System
    </Link>
  );
};
