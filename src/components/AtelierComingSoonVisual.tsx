import { styles } from "../styles/appStyles"

export function AtelierComingSoonVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      style={
        compact
          ? styles.atelierShowcaseComingSoonCompact
          : styles.atelierShowcaseComingSoonBlock
      }
      aria-hidden="true"
    >
      <svg
        style={styles.atelierShowcaseComingSoonSymbol}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="9"
          width="16"
          height="11"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path
          d="M4 10.5 12 15.2 20 10.5"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 9.5V8a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 8v1.5"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
