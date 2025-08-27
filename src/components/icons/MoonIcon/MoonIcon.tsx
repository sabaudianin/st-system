import React from "react";
import type { IconProps } from "../SunIcon/SunIcon";

export const MoonIcon: React.FC<IconProps> = ({ className = "", title }) => (
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
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
