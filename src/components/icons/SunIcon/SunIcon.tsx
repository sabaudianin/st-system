import React from "react";

export type IconProps = { className?: string; title?: string };

export const SunIcon: React.FC<IconProps> = ({ className = "", title }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={title ? undefined : true}
    role={title ? "img" : "presentation"}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="orange"
      fill="yellow"
      strokeWidth="2"
    />
    <path
      d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42"
      stroke="orange"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
