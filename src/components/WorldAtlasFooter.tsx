import { socialLinks } from "../data/socialLinks"
import { styles } from "../styles/appStyles"

function AtlasFooterDecor() {
  return (
    <svg
      style={styles.atlasFooterDecor}
      viewBox="0 0 320 160"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        d="M 24 118 C 72 104, 108 88, 156 72 C 204 56, 248 44, 292 36"
        fill="none"
        stroke="#b8987a"
        strokeWidth="0.9"
        strokeDasharray="2 8 4 7"
        opacity={0.1}
        strokeLinecap="round"
      />

      <g opacity={0.11}>
        <circle cx="52" cy="38" r="1.2" fill="#a8886e" />
        <circle cx="68" cy="30" r="0.9" fill="#c4a58d" />
        <circle cx="82" cy="42" r="1" fill="#b8987a" />
        <path
          d="M 52 38 L 68 30 L 82 42"
          fill="none"
          stroke="#c4a58d"
          strokeWidth="0.45"
          strokeDasharray="1 4"
        />
      </g>

      <g opacity={0.1}>
        <circle cx="268" cy="48" r="1.1" fill="#a8886e" />
        <circle cx="284" cy="40" r="0.8" fill="#c4a58d" />
        <path
          d="M 268 48 L 284 40"
          fill="none"
          stroke="#c4a58d"
          strokeWidth="0.45"
          strokeDasharray="1 5"
        />
      </g>

      <g opacity={0.09}>
        <circle cx="160" cy="128" r="1.8" fill="none" stroke="#c4a58d" strokeWidth="0.55" strokeDasharray="2 3" />
        <path d="M 160 128 L 160 118 M 160 128 L 168 128" stroke="#b8987a" strokeWidth="0.45" />
      </g>
    </svg>
  )
}

export function WorldAtlasFooter() {
  return (
    <footer style={styles.atlasFooter}>
      <AtlasFooterDecor />

      <div style={styles.atlasFooterInner}>
        <p style={styles.atlasFooterTagline}>Observe. Descubra. Colecione.</p>

        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.atlasFooterSocial}
        >
          Instagram
        </a>

        <div style={styles.atlasFooterDivider} aria-hidden="true" />

        <p style={styles.atlasFooterCopyright}>© Mundo da Teca</p>
        <p style={styles.atlasFooterPoetic}>
          Para quem ainda acredita que existe um mundo inteiro esperando para
          ser descoberto.
        </p>
      </div>
    </footer>
  )
}
