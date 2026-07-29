import type { ReactNode } from "react"
import type { KitContentItem, KitProblemItem } from "../../data/kitPageCopy"

type IconName = KitProblemItem["icon"] | KitContentItem["icon"] | "water" | "play"

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function Svg({
  children,
  label,
}: {
  children: ReactNode
  label?: string
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {children}
    </svg>
  )
}

export function KitIcon({ name }: { name: IconName }) {
  switch (name) {
    case "search":
      return (
        <Svg>
          <circle cx="14" cy="14" r="6.5" {...stroke} />
          <path d="M19 19l5.5 5.5" {...stroke} />
        </Svg>
      )
    case "flask":
      return (
        <Svg>
          <path
            d="M12 5h8M14 5v6.2L9.5 22a3 3 0 002.6 4.5h8a3 3 0 002.6-4.5L18 11.2V5"
            {...stroke}
          />
          <path d="M11 18h10" {...stroke} />
        </Svg>
      )
    case "cart":
      return (
        <Svg>
          <path d="M5 8h3l2.2 11h11.3l2.2-8H10" {...stroke} />
          <circle cx="13" cy="24" r="1.6" {...stroke} />
          <circle cx="21" cy="24" r="1.6" {...stroke} />
        </Svg>
      )
    case "scale":
      return (
        <Svg>
          <path d="M16 6v18M8 10h16" {...stroke} />
          <path d="M8 10l-3 7h6l-3-7zM24 10l-3 7h6l-3-7z" {...stroke} />
        </Svg>
      )
    case "vial":
      return (
        <Svg>
          <path d="M13 5h6v6l3 12a3 3 0 01-3 4h-6a3 3 0 01-3-4l3-12V5z" {...stroke} />
          <path d="M12 18h8" {...stroke} />
        </Svg>
      )
    case "bottle":
      return (
        <Svg>
          <path
            d="M13 4h6v4l2 3v13a3 3 0 01-3 3h-4a3 3 0 01-3-3V11l2-3V4z"
            {...stroke}
          />
          <path d="M12 16h8" {...stroke} />
        </Svg>
      )
    case "tools":
      return (
        <Svg>
          <path d="M8 22l8-8" {...stroke} />
          <path d="M18 6l3 3-4 4-3-3 4-4z" {...stroke} />
          <path d="M10 16l-4 4 2 2 4-4" {...stroke} />
          <circle cx="22" cy="22" r="2.2" {...stroke} />
        </Svg>
      )
    case "book":
      return (
        <Svg>
          <path
            d="M7 7.5A3.5 3.5 0 0110.5 4H25v20H10.5A3.5 3.5 0 007 20.5v-13z"
            {...stroke}
          />
          <path d="M10.5 4v20" {...stroke} />
        </Svg>
      )
    case "box":
      return (
        <Svg>
          <path d="M5 11l11-5 11 5-11 5L5 11z" {...stroke} />
          <path d="M5 11v10l11 5 11-5V11" {...stroke} />
          <path d="M16 16v10" {...stroke} />
        </Svg>
      )
    case "spark":
      return (
        <Svg>
          <path d="M16 5v6M16 21v6M5 16h6M21 16h6" {...stroke} />
          <path d="M9 9l4 4M19 9l-4 4M9 23l4-4M19 23l-4-4" {...stroke} />
        </Svg>
      )
    case "water":
      return (
        <Svg>
          <path
            d="M16 5c4 6 7 10 7 14a7 7 0 11-14 0c0-4 3-8 7-14z"
            {...stroke}
          />
        </Svg>
      )
    case "play":
      return (
        <Svg>
          <circle cx="16" cy="16" r="10" {...stroke} />
          <path d="M13 11l9 5-9 5V11z" {...stroke} />
        </Svg>
      )
    default:
      return null
  }
}
