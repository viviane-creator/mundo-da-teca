import { bibliotecaAtlas } from "../../data/bibliotecaAtlas"
import { styles } from "../../styles/appStyles"

export function BibliotecaMesaIllustration() {
  return (
    <svg
      style={styles.bibliotecaMesaSvg}
      viewBox="0 0 360 220"
      aria-hidden="true"
      role="img"
    >
      <rect width="360" height="220" fill="#FBF7F1" />
      <path
        d="M0 28 H360 M0 56 H360 M0 84 H360 M0 112 H360 M0 140 H360 M0 168 H360 M0 196 H360"
        stroke="#E8DDD0"
        strokeWidth="0.5"
        opacity={0.45}
      />

      <ellipse cx="180" cy="188" rx="124" ry="14" fill="#D9C4AD" opacity={0.1} />

      <rect
        x="108"
        y="78"
        width="104"
        height="76"
        rx="5"
        fill="#FFFDF9"
        stroke="#DCC9B4"
        strokeWidth="0.8"
        transform="rotate(-3 160 116)"
      />
      <path
        d="M 118 92 H 202 M 118 104 H 196 M 118 116 H 188 M 118 128 H 194"
        stroke="#E8DDD0"
        strokeWidth="0.55"
        transform="rotate(-3 160 116)"
      />
      <rect
        x="124"
        y="84"
        width="34"
        height="12"
        rx="2"
        fill="rgba(126, 147, 168, 0.22)"
        stroke={bibliotecaAtlas.line}
        strokeWidth="0.5"
        transform="rotate(-3 141 90)"
      />
      <text
        x="128"
        y="93"
        fill={bibliotecaAtlas.deep}
        fontSize="5.5"
        fontFamily="Georgia, serif"
        opacity={0.75}
        transform="rotate(-3 141 90)"
      >
        expedição
      </text>

      <rect
        x="42"
        y="64"
        width="56"
        height="70"
        rx="4"
        fill="#F7EFE5"
        stroke="#D4C0AB"
        strokeWidth="0.7"
        transform="rotate(-12 70 99)"
      />
      <rect
        x="50"
        y="72"
        width="22"
        height="10"
        rx="1.5"
        fill="rgba(140, 151, 112, 0.16)"
        stroke="rgba(140, 151, 112, 0.34)"
        strokeWidth="0.45"
        transform="rotate(-12 61 77)"
      />

      <rect
        x="232"
        y="70"
        width="50"
        height="62"
        rx="4"
        fill="#FAF4EC"
        stroke="#D4C0AB"
        strokeWidth="0.7"
        transform="rotate(10 257 101)"
      />
      <rect
        x="240"
        y="78"
        width="26"
        height="11"
        rx="2"
        fill="rgba(126, 147, 168, 0.14)"
        stroke={bibliotecaAtlas.line}
        strokeWidth="0.45"
        transform="rotate(10 253 83)"
      />

      <rect
        x="188"
        y="112"
        width="42"
        height="52"
        rx="3"
        fill="#FFFDF9"
        stroke="#DCC9B4"
        strokeWidth="0.6"
        transform="rotate(5 209 138)"
      />
      <circle
        cx="209"
        cy="126"
        r="7"
        fill="none"
        stroke={bibliotecaAtlas.accent}
        strokeWidth="0.6"
        opacity={0.45}
        transform="rotate(5 209 138)"
      />

      <path
        d="M 292 138 L 310 88"
        stroke="#C88757"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M 292 138 L 312 138"
        stroke="#C88757"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity={0.38}
      />

      <path
        d="M 78 154 Q 86 146, 94 152"
        stroke="#8C9770"
        strokeWidth="0.7"
        fill="none"
        opacity={0.35}
      />
      <ellipse cx="88" cy="158" rx="8" ry="5" fill="#B8987A" opacity={0.18} />
      <ellipse cx="278" cy="162" rx="7" ry="4" fill="#8C9770" opacity={0.15} />

      <rect
        x="148"
        y="48"
        width="64"
        height="18"
        rx="3"
        fill="#F2EBE1"
        stroke={bibliotecaAtlas.line}
        strokeWidth="0.55"
        transform="rotate(-2 180 57)"
      />
      <text
        x="156"
        y="60"
        fill={bibliotecaAtlas.deep}
        fontSize="6"
        fontFamily="Georgia, serif"
        letterSpacing="1.2"
        opacity={0.7}
        transform="rotate(-2 180 57)"
      >
        materiais
      </text>

      <circle cx="52" cy="38" r="16" fill={bibliotecaAtlas.wash} />
      <circle cx="308" cy="34" r="12" fill={bibliotecaAtlas.wash} />
    </svg>
  )
}
