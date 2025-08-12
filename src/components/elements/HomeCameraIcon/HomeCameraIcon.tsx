export const HomeCameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="Dom z kamerą"
    {...props}
  >
    <path d="M12 2.5l9 7.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11l9-7.5z" />
    <g fill="#000">
      <rect
        x="7"
        y="13"
        width="8"
        height="4"
        rx="1"
        ry="1"
      />
      <path d="M15 14.5l3-1.5v4l-3-1.5z" />
    </g>
  </svg>
);
