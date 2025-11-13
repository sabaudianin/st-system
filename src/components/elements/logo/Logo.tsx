import Link from "next/link";

type LogoProps = {
  withText?: boolean;
  brand?: string;
  size?: number;
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  withText = true,
  brand = "rafbobbob@gmail.com",
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
      {withText && (
        <span className="text-lg md:text-xl font-extrabold leading-none tracking-tight">
          {brand}
        </span>
      )}
    </Link>
  );
};
