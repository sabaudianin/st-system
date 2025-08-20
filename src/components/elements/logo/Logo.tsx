import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Strona główna ST System"
      className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-[var(--foreground)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="52"
        height="52"
        className="shrink-0"
      >
        <circle
          cx="28"
          cy="28"
          r="18"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeDasharray="100 20"
          strokeDashoffset="215"
        />

        <circle
          cx="28"
          cy="28"
          r="10"
          fill="red"
          opacity="0.4"
        />

        <circle
          cx="28"
          cy="28"
          r="10"
          fill="red"
          stroke="white"
          strokeWidth="3"
        />

        <line
          x1="35"
          y1="35"
          x2="46"
          y2="46"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      ST System
    </Link>
  );
};
