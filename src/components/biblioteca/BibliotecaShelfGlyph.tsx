import type { BibliotecaShelfGlyph as GlyphKind } from "../../data/bibliotecaMock"
import { styles } from "../../styles/appStyles"

export function BibliotecaShelfGlyph({ kind }: { kind: GlyphKind }) {
  return (
    <svg
      style={styles.bibliotecaShelfGlyphSvg}
      viewBox="0 0 72 72"
      aria-hidden="true"
    >
      <rect
        width="72"
        height="72"
        rx="14"
        fill="rgba(255, 253, 249, 0.72)"
      />
      {kind === "paginas" && (
        <>
          <rect
            x="18"
            y="16"
            width="30"
            height="38"
            rx="3"
            fill="#f7efe5"
            stroke="#dcc9b4"
            strokeWidth="0.8"
            transform="rotate(-6 33 35)"
          />
          <rect
            x="24"
            y="20"
            width="28"
            height="36"
            rx="3"
            fill="#fffdf9"
            stroke="#879BAE"
            strokeWidth="0.65"
            opacity={0.55}
            transform="rotate(4 38 38)"
          />
          <path
            d="M 30 30 L 46 30 M 30 36 L 44 36"
            stroke="#e8d5c4"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
        </>
      )}
      {kind === "fichas" && (
        <>
          <rect
            x="16"
            y="22"
            width="24"
            height="30"
            rx="2"
            fill="#faf4ec"
            stroke="#d4c0ab"
            strokeWidth="0.7"
            transform="rotate(-8 28 37)"
          />
          <rect
            x="28"
            y="18"
            width="24"
            height="30"
            rx="2"
            fill="#fffdf9"
            stroke="#dcc9b4"
            strokeWidth="0.7"
          />
          <circle cx="40" cy="30" r="5" fill="#c9b39a" opacity={0.18} />
        </>
      )}
      {kind === "caderno" && (
        <>
          <rect
            x="20"
            y="18"
            width="34"
            height="40"
            rx="4"
            fill="#f7efe5"
            stroke="#dcc9b4"
            strokeWidth="0.8"
          />
          <path
            d="M 27 18 L 27 58"
            stroke="#c4a58d"
            strokeWidth="0.8"
            opacity={0.5}
          />
          <path
            d="M 32 28 L 48 28 M 32 34 L 46 34 M 32 40 L 44 40"
            stroke="#e8d5c4"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
        </>
      )}
      {kind === "colecoes" && (
        <>
          <rect
            x="18"
            y="24"
            width="36"
            height="28"
            rx="3"
            fill="#fffdf9"
            stroke="#d4c0ab"
            strokeWidth="0.7"
          />
          <circle cx="30" cy="38" r="6" fill="#b8987a" opacity={0.16} />
          <circle cx="42" cy="36" r="5" fill="#8c9770" opacity={0.14} />
          <rect
            x="22"
            y="20"
            width="14"
            height="10"
            rx="2"
            fill="#faf4ec"
            stroke="#dcc9b4"
            strokeWidth="0.6"
            transform="rotate(-10 29 25)"
          />
        </>
      )}
    </svg>
  )
}
