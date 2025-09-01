import Link from "next/link";

type LogoProps = {
  withText?: boolean;
  brand?: string;
  size?: number;
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  withText = true,
  brand = "ST-System",
  size = 52,
  className = "",
}) => {
  return (
    <Link
      href="/"
      rel="home"
      aria-label={`Strona główna ${brand}`}
      className={`group inline-flex items-center gap-2 md:gap-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="shrink-0 select-none"
        aria-hidden
        focusable="false"
        role="img"
      >
        <circle
          cx="28"
          cy="28"
          r="18"
          className="stroke-current fill-none [stroke-dasharray:100_20] [stroke-dashoffset:215]"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />

        <circle
          cx="28"
          cy="28"
          r="10"
          className="fill-danger/40"
        />

        <circle
          cx="28"
          cy="28"
          r="10"
          className="fill-danger stroke-current"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />

        <line
          x1="35"
          y1="35"
          x2="46"
          y2="46"
          className="stroke-current"
          strokeWidth="4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {withText && (
        <span className="text-lg md:text-xl font-extrabold leading-none tracking-tight">
          {brand}
        </span>
      )}
    </Link>
  );
};
