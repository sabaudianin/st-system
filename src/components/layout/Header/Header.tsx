import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white dark:bg-zinc-900 shadow">
      <nav
        className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
        aria-label="Główna nawigacja"
      >
        <Link
          href="/"
          className="text-lg font-bold text-zinc-800 dark:text-white"
        >
          ST System
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          <li>
            <Link href="/">Start</Link>
          </li>
          <li>
            <Link href="/oferta">O Nas</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
