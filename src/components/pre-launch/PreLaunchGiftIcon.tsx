/** Ilustração simples de caixa fechada — presente / descoberta. */
export function PreLaunchGiftIcon() {
  return (
    <svg
      className="prelaunch-gift"
      viewBox="0 0 96 96"
      width="88"
      height="88"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="18"
        y="38"
        width="60"
        height="42"
        rx="6"
        fill="#fffdf9"
        stroke="#c4a58d"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="30"
        width="68"
        height="14"
        rx="4"
        fill="#f3e8dc"
        stroke="#c4a58d"
        strokeWidth="2"
      />
      <path
        d="M48 30v50"
        stroke="#b3815f"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M38 22c0-5 4-8 10-8s8 4 8 8c0 6-8 10-10 12-2-2-10-6-10-12z"
        fill="none"
        stroke="#8a9870"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="30" r="3" fill="#c88757" />
    </svg>
  )
}
