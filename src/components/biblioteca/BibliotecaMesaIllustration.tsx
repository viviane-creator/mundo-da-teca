import { styles } from "../../styles/appStyles"

export function BibliotecaMesaIllustration() {
  return (
    <svg
      style={styles.bibliotecaMesaSvg}
      viewBox="0 0 360 200"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="bibliotecaMesaWash" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#fffdf9" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#efe3d4" stopOpacity="0.35" />
        </radialGradient>
      </defs>

      <rect width="360" height="200" fill="url(#bibliotecaMesaWash)" />

      <ellipse cx="180" cy="168" rx="118" ry="16" fill="#d9c4ad" opacity={0.12} />

      <rect
        x="118"
        y="88"
        width="92"
        height="68"
        rx="6"
        fill="#f7efe5"
        stroke="#dcc9b4"
        strokeWidth="0.8"
        opacity={0.92}
        transform="rotate(-4 164 122)"
      />
      <path
        d="M 126 96 L 202 96"
        stroke="#e8d5c4"
        strokeWidth="0.6"
        opacity={0.7}
        transform="rotate(-4 164 122)"
      />
      <path
        d="M 126 108 L 196 108"
        stroke="#e8d5c4"
        strokeWidth="0.5"
        opacity={0.55}
        transform="rotate(-4 164 122)"
      />
      <path
        d="M 126 120 L 188 120"
        stroke="#e8d5c4"
        strokeWidth="0.5"
        opacity={0.45}
        transform="rotate(-4 164 122)"
      />

      <rect
        x="54"
        y="72"
        width="52"
        height="64"
        rx="4"
        fill="#fffdf9"
        stroke="#d4c0ab"
        strokeWidth="0.7"
        opacity={0.88}
        transform="rotate(-11 80 104)"
      />
      <ellipse
        cx="72"
        cy="98"
        rx="10"
        ry="8"
        fill="#c9b39a"
        opacity={0.14}
        transform="rotate(-11 80 104)"
      />

      <rect
        x="228"
        y="78"
        width="48"
        height="58"
        rx="4"
        fill="#faf4ec"
        stroke="#d4c0ab"
        strokeWidth="0.7"
        opacity={0.86}
        transform="rotate(9 252 107)"
      />
      <circle cx="248" cy="100" r="7" fill="#b8987a" opacity={0.1} />

      <rect
        x="196"
        y="118"
        width="38"
        height="48"
        rx="3"
        fill="#fffdf9"
        stroke="#dcc9b4"
        strokeWidth="0.6"
        opacity={0.8}
        transform="rotate(6 215 142)"
      />

      <path
        d="M 286 126 L 302 82"
        stroke="#c88757"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity={0.45}
      />
      <path
        d="M 286 126 L 304 126"
        stroke="#c88757"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity={0.35}
      />

      <ellipse cx="92" cy="148" rx="9" ry="6" fill="#b8987a" opacity={0.22} />
      <ellipse cx="104" cy="152" rx="6" ry="4" fill="#8c9770" opacity={0.18} />
      <path
        d="M 268 150 Q 274 138, 282 146 Q 276 154, 268 150"
        fill="#8c9770"
        opacity={0.16}
      />

      <circle cx="48" cy="42" r="18" fill="#d9c4ad" opacity={0.08} />
      <circle cx="312" cy="36" r="14" fill="#c9b39a" opacity={0.07} />
    </svg>
  )
}
