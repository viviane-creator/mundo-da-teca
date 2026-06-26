import type { UniverseId } from "../data/universeAssets"

const sealInk = "#8A7348"
const sealGold = "#B89A62"

const glyphStyle = {
  display: "block",
  width: "18px",
  height: "18px",
} as const

export function UniverseSealGlyph({ universeId }: { universeId: UniverseId }) {
  switch (universeId) {
    case "laboratorio":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden style={glyphStyle}>
          <path
            d="M10 4 H14 V9 C14 12.5 17 14.5 17 18 C17 20 15.5 21 12 21 C8.5 21 7 20 7 18 C7 14.5 10 12.5 10 9 Z"
            stroke={sealInk}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <path d="M9 4 H15" stroke={sealGold} strokeWidth="0.9" strokeLinecap="round" />
          <path d="M12 11 V15" stroke={sealGold} strokeWidth="0.7" strokeLinecap="round" opacity={0.7} />
        </svg>
      )
    case "cozinha":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden style={glyphStyle}>
          <path
            d="M12 4 C10 4 9 5.2 9 7 V11 C9 13 8 14.5 8 16.5 C8 18.2 9.2 19 12 19 C14.8 19 16 18.2 16 16.5 C16 14.5 15 13 15 11 V7 C15 5.2 14 4 12 4 Z"
            stroke={sealInk}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <ellipse cx="12" cy="7.5" rx="2.2" ry="1.2" fill={sealGold} opacity={0.35} />
        </svg>
      )
    case "oficina":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden style={glyphStyle}>
          <path
            d="M6 10 L9 7 L11 9 L8 12 Z"
            stroke={sealInk}
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M11 9 L17 15 L15 17 L9 11 Z"
            stroke={sealInk}
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M15 11 L18 8"
            stroke={sealGold}
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <circle cx="17.5" cy="7.5" r="1.2" stroke={sealGold} strokeWidth="0.8" />
        </svg>
      )
    case "faz-de-conta":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden style={glyphStyle}>
          <circle cx="9" cy="11" r="4.5" stroke={sealInk} strokeWidth="1.1" />
          <path
            d="M12.5 13.5 L18.5 19.5"
            stroke={sealInk}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M16.5 19.5 L18.5 17.5"
            stroke={sealGold}
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path d="M7.5 11 H10.5" stroke={sealGold} strokeWidth="0.7" strokeLinecap="round" />
        </svg>
      )
    case "quintal":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden style={glyphStyle}>
          <path
            d="M12 5 L16 11 H8 Z"
            stroke={sealInk}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <path d="M12 11 V18" stroke={sealInk} strokeWidth="1" strokeLinecap="round" />
          <path
            d="M8 18 Q12 15.5 16 18"
            stroke={sealGold}
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      )
    case "observatorio":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden style={glyphStyle}>
          <circle cx="12" cy="12" r="6.5" stroke={sealInk} strokeWidth="1.1" />
          <path d="M12 7.5 V12 L15 14" stroke={sealGold} strokeWidth="0.9" strokeLinecap="round" />
          <path d="M12 5.5 V6.8" stroke={sealInk} strokeWidth="0.8" strokeLinecap="round" />
          <path d="M12 17.2 V18.5" stroke={sealInk} strokeWidth="0.8" strokeLinecap="round" />
          <path d="M6.8 12 H5.5" stroke={sealInk} strokeWidth="0.8" strokeLinecap="round" />
          <path d="M18.5 12 H17.2" stroke={sealInk} strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      )
  }
}
