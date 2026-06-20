import { homeUniversePortals } from "../data/homeUniversePortals"
import { FicharioAba } from "./fichario"
import { styles } from "../styles/appStyles"

/** Coordenadas no viewBox 320×580 — trilha serpenteante */
const TRAIL_POINTS = [
  { x: 160, y: 36 },
  { x: 48, y: 128 },
  { x: 272, y: 220 },
  { x: 48, y: 312 },
  { x: 272, y: 404 },
  { x: 160, y: 496 },
] as const

const TRAIL_PATH =
  "M 160 36 C 130 72, 78 98, 48 128 C 88 168, 228 188, 272 220 C 238 268, 78 288, 48 312 C 88 352, 228 372, 272 404 C 228 448, 98 468, 160 496"

const TRAIL_PATH_SKETCH =
  "M 162 38 C 132 74, 80 100, 50 120 C 90 170, 230 190, 274 222 C 240 270, 80 290, 50 314 C 90 354, 230 374, 274 406 C 230 450, 100 470, 162 498"

function MapDecorations() {
  return (
    <>
      <ellipse cx="72" cy="248" rx="34" ry="26" fill="#d9c4ad" opacity={0.11} />
      <ellipse cx="252" cy="118" rx="26" ry="20" fill="#c9b39a" opacity={0.09} />
      <ellipse cx="228" cy="340" rx="30" ry="22" fill="#dcc9b4" opacity={0.1} />
      <ellipse cx="58" cy="420" rx="22" ry="18" fill="#e8dccf" opacity={0.12} />

      {homeUniversePortals.map((portal, index) => {
        const point = TRAIL_POINTS[index]
        return (
          <text
            key={`wm-${portal.id}`}
            x={point.x}
            y={point.y + 8}
            textAnchor="middle"
            fontSize="96"
            opacity={0.07}
            style={{ pointerEvents: "none" }}
          >
            {portal.icon}
          </text>
        )
      })}

      <path
        d="M 24 520 Q 38 508, 52 518 T 68 512"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.7"
        opacity={0.22}
        strokeLinecap="round"
      />
      <path
        d="M 248 88 Q 262 96, 256 108"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.6"
        opacity={0.2}
        strokeLinecap="round"
      />
      <path
        d="M 290 340 L 298 352 L 286 348"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.6"
        opacity={0.18}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 108 168 L 118 162 M 112 174 L 122 168"
        stroke="#b8987a"
        strokeWidth="0.5"
        opacity={0.2}
        strokeLinecap="round"
      />
      <path
        d="M 198 458 Q 210 452, 218 462"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.55"
        opacity={0.16}
        strokeLinecap="round"
      />

      <path
        d="M 28 96 Q 34 88, 40 96 Q 34 104, 28 96"
        fill="#b8c4a0"
        opacity={0.14}
      />
      <path
        d="M 284 268 Q 292 260, 298 270 Q 290 278, 284 268"
        fill="#a8b890"
        opacity={0.12}
      />
      <path
        d="M 14 380 L 18 368 L 22 382 Z"
        fill="#c4b896"
        opacity={0.1}
      />

      <text x="236" y="52" fill="#b8987a" fontSize="9" opacity={0.22}>
        ✦
      </text>
      <text x="38" y="200" fill="#b8987a" fontSize="7" opacity={0.18}>
        ✦
      </text>
      <text x="296" y="468" fill="#b8987a" fontSize="8" opacity={0.2}>
        ✦
      </text>
      <circle cx="128" cy="72" r="7" fill="none" stroke="#c4a58d" strokeWidth="0.5" opacity={0.2} strokeDasharray="1 2" />
      <circle cx="128" cy="72" r="1.5" fill="#c4a58d" opacity={0.25} />
      <circle cx="292" cy="188" r="6" fill="none" stroke="#c4a58d" strokeWidth="0.45" opacity={0.18} />
      <circle cx="292" cy="188" r="1.2" fill="#c4a58d" opacity={0.22} />

      <circle cx="42" cy="548" r="9" fill="none" stroke="#c4a58d" strokeWidth="0.6" strokeDasharray="2 3" opacity={0.24} />
      <text x="42" y="551" textAnchor="middle" fill="#b8987a" fontSize="7" opacity={0.28}>
        ✦
      </text>
      <rect x="268" y="8" width="18" height="18" rx="3" fill="none" stroke="#c4a58d" strokeWidth="0.5" opacity={0.18} transform="rotate(8 277 17)" />
      <text x="277" y="20" textAnchor="middle" fill="#b8987a" fontSize="6" opacity={0.22} transform="rotate(8 277 17)">
        ◎
      </text>

      <path d="M 18 18 L 18 42 M 18 18 L 42 18" stroke="#c4a58d" strokeWidth="0.8" opacity={0.28} strokeLinecap="round" />
      <path d="M 302 18 L 302 42 M 302 18 L 278 18" stroke="#c4a58d" strokeWidth="0.8" opacity={0.28} strokeLinecap="round" />

      <path
        d={TRAIL_PATH_SKETCH}
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.9"
        strokeDasharray="2 9 4 7 3 11"
        strokeLinecap="round"
        opacity={0.22}
      />
      <path
        d={TRAIL_PATH}
        fill="none"
        stroke="#b8987a"
        strokeWidth="1.2"
        strokeDasharray="5 8 3 10 6 7"
        strokeLinecap="round"
        opacity={0.48}
      />

      {TRAIL_POINTS.map((point, index) => (
        <g key={`stamp-${index}`}>
          <circle cx={point.x} cy={point.y} r="2.5" fill="none" stroke="#c4a58d" strokeWidth="0.6" opacity={0.35} />
          <text
            x={point.x}
            y={point.y - 14}
            textAnchor="middle"
            fill="#b8987a"
            fontSize="7"
            fontFamily="'Nunito', sans-serif"
            letterSpacing="1"
            opacity={0.45}
          >
            {index + 1}
          </text>
        </g>
      ))}

      <ellipse cx="156" cy="534" rx="12" ry="8" fill="none" stroke="#c4a58d" strokeWidth="0.5" opacity={0.2} transform="rotate(-12 156 534)" />
      <text x="156" y="536" textAnchor="middle" fill="#b8987a" fontSize="5" opacity={0.24} transform="rotate(-12 156 534)">
        EXP
      </text>

      <g opacity={0.085} transform="translate(108, 252) rotate(-6)">
        <circle cx="7" cy="5" r="4.5" fill="none" stroke="#6a4f3c" strokeWidth="0.75" />
        <path
          d="M 7 11 v14 M 7 16 L 0 22 M 7 16 L 14 20 M 7 25 v9"
          fill="none"
          stroke="#6a4f3c"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </g>
      <g opacity={0.075} transform="translate(188, 418)">
        <circle cx="14" cy="6" r="5.5" fill="none" stroke="#6a4f3c" strokeWidth="0.65" />
        <line x1="18" y1="10" x2="24" y2="16" stroke="#6a4f3c" strokeWidth="0.65" strokeLinecap="round" />
        <path
          d="M 10 14 v12 M 10 18 h-6 M 10 18 h5 M 6 26 h8"
          fill="none"
          stroke="#6a4f3c"
          strokeWidth="0.65"
          strokeLinecap="round"
        />
      </g>
      <g opacity={0.07} transform="translate(262, 318) rotate(8)">
        <rect x="2" y="12" width="12" height="16" rx="1" fill="none" stroke="#6a4f3c" strokeWidth="0.55" />
        <line x1="5" y1="16" x2="11" y2="16" stroke="#6a4f3c" strokeWidth="0.4" />
        <line x1="5" y1="20" x2="10" y2="20" stroke="#6a4f3c" strokeWidth="0.4" />
        <circle cx="8" cy="5" r="3.2" fill="none" stroke="#6a4f3c" strokeWidth="0.55" />
        <path d="M 8 9 v3" stroke="#6a4f3c" strokeWidth="0.55" strokeLinecap="round" />
      </g>
    </>
  )
}

export function HomeExploreMap({
  onSelect,
  variant = "home",
}: {
  onSelect: (target: string) => void
  variant?: "home" | "full"
}) {
  return (
    <div
      style={{
        ...styles.homeExploreMap,
        ...(variant === "full" ? styles.homeExploreMapFull : {}),
      }}
    >
      <svg
        style={styles.homeExploreMapSvg}
        viewBox="0 0 320 580"
        aria-hidden="true"
      >
        <MapDecorations />
      </svg>

      {homeUniversePortals.map((portal, index) => {
        const point = TRAIL_POINTS[index]
        const align =
          point.x < 100 ? "left" : point.x > 220 ? "right" : "center"

        return (
          <button
            key={portal.id}
            type="button"
            aria-label={portal.title}
            style={{
              ...styles.homeExploreStop,
              left: `${(point.x / 320) * 100}%`,
              top: `${(point.y / 580) * 100}%`,
              flexDirection: align === "right" ? "row-reverse" : "row",
              ...(align === "left"
                ? styles.homeExploreStopLeft
                : align === "right"
                  ? styles.homeExploreStopRight
                  : styles.homeExploreStopCenter),
            }}
            onClick={() => onSelect(portal.target)}
          >
            <FicharioAba variant="mapa" icon={portal.icon} />
            <span style={styles.homeExploreStopBody}>
              <span style={styles.homeExploreMarker}>
                <svg
                  style={styles.homeExploreMarkerRingOuter}
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="48"
                    ry="46"
                    fill="none"
                    stroke="#c4a58d"
                    strokeWidth="0.6"
                    strokeDasharray="2 12 4 8"
                    opacity={0.22}
                    transform={`rotate(${index % 2 === 0 ? -6 : 7} 50 50)`}
                  />
                </svg>
                <svg
                  style={styles.homeExploreMarkerRing}
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="46"
                    ry="44"
                    fill="none"
                    stroke="#c4a58d"
                    strokeWidth="1"
                    strokeDasharray="4 7 2 8 3 6"
                    opacity={0.42}
                    transform={`rotate(${index % 2 === 0 ? -4 : 5} 50 50)`}
                  />
                </svg>
                <span style={styles.homeExploreMarkerIcon}>{portal.icon}</span>
              </span>
              <span style={styles.homeExploreStopTitle}>{portal.title}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
