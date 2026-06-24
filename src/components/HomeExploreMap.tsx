import { homeUniversePortals } from "../data/homeUniversePortals"
import { UniverseIcon } from "./UniverseIcon"
import { styles } from "../styles/appStyles"

const MAP_VIEW = { width: 320, height: 580 } as const

/** Referência de layout — remapeada para a área interna do mapa por variante */
const TRAIL_POINTS_RAW = [
  { x: 188, y: 22 },
  { x: 26, y: 102 },
  { x: 270, y: 218 },
  { x: 52, y: 316 },
  { x: 292, y: 372 },
  { x: 118, y: 552 },
] as const

type MapBounds = { x: number; y: number; width: number; height: number }

/** Área útil na Home — selos afastados da borda do papel */
const MAP_BOUNDS_HOME: MapBounds = {
  x: 34,
  y: 44,
  width: 252,
  height: 492,
}

/** Área útil na ilustração do atlas — dentro da margem do pergaminho */
const MAP_BOUNDS_FULL: MapBounds = {
  x: 54,
  y: 68,
  width: 212,
  height: 444,
}

function mapTrailPoints(bounds: MapBounds) {
  return TRAIL_POINTS_RAW.map((point) => ({
    x: bounds.x + (point.x / MAP_VIEW.width) * bounds.width,
    y: bounds.y + (point.y / MAP_VIEW.height) * bounds.height,
  }))
}

const TRAIL_POINTS_HOME = mapTrailPoints(MAP_BOUNDS_HOME)
const TRAIL_POINTS_FULL = mapTrailPoints(MAP_BOUNDS_FULL)

const STOP_OFFSETS = [
  { dx: 0, dy: 0 },
  { dx: 0, dy: 0 },
  { dx: 0, dy: 0 },
  { dx: 0, dy: 0 },
  { dx: 0, dy: 0 },
  { dx: 0, dy: 0 },
] as const

const STOP_ROTATIONS = [-1, 0.8, -0.6, 1, -0.8, 0.6] as const

/** Trilha suave passando exatamente por cada medalhão */
function buildTrailPath(
  points: readonly { x: number; y: number }[],
  tension = 6,
): string {
  if (points.length === 0) return ""
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`

  let path = `M ${points[0].x} ${points[0].y}`

  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[Math.max(0, index - 1)]
    const current = points[index]
    const next = points[index + 1]
    const after = points[Math.min(points.length - 1, index + 2)]

    const control1X = current.x + (next.x - previous.x) / tension
    const control1Y = current.y + (next.y - previous.y) / tension
    const control2X = next.x - (after.x - current.x) / tension
    const control2Y = next.y - (after.y - current.y) / tension

    path += ` C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${next.x} ${next.y}`
  }

  return path
}

const TRAIL_PATH_HOME = buildTrailPath(TRAIL_POINTS_HOME)
const TRAIL_PATH_SKETCH_HOME = buildTrailPath(
  TRAIL_POINTS_HOME.map((point) => ({ x: point.x + 2, y: point.y + 2 })),
)
const TRAIL_PATH_FULL = buildTrailPath(TRAIL_POINTS_FULL)
const TRAIL_PATH_SKETCH_FULL = buildTrailPath(
  TRAIL_POINTS_FULL.map((point) => ({ x: point.x + 2, y: point.y + 2 })),
)

function MapDecorations({
  points,
  trailPath,
  trailPathSketch,
  showCorners = true,
}: {
  points: readonly { x: number; y: number }[]
  trailPath: string
  trailPathSketch: string
  showCorners?: boolean
}) {
  return (
    <>
      {showCorners ? (
        <>
          <path d="M 18 18 L 18 42 M 18 18 L 42 18" stroke="#a8886e" strokeWidth="0.65" opacity={0.2} strokeLinecap="round" />
          <path d="M 302 18 L 302 42 M 302 18 L 278 18" stroke="#a8886e" strokeWidth="0.65" opacity={0.2} strokeLinecap="round" />
        </>
      ) : null}

      <path
        d={trailPath}
        fill="none"
        stroke="#f6ede2"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.48}
      />
      <path
        d={trailPathSketch}
        fill="none"
        stroke="#c4a58d"
        strokeWidth="1.6"
        strokeDasharray="2 10 5 8 3 12"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.44}
      />
      <path
        d={trailPath}
        fill="none"
        stroke="#8f7358"
        strokeWidth="2.2"
        strokeDasharray="5 7 4 9 6 8 3 11"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.84}
      />

      {points.map((point, index) => (
        <g key={`trail-node-${index}`}>
          <circle
            cx={point.x}
            cy={point.y}
            r="5.5"
            fill="none"
            stroke="#c4a58d"
            strokeWidth="0.9"
            strokeDasharray="2 3"
            opacity={0.45}
          />
          <circle
            cx={point.x}
            cy={point.y}
            r="2.8"
            fill="#a8886e"
            opacity={0.62}
          />
        </g>
      ))}

      {points.slice(0, -1).map((point, index) => {
        const next = points[index + 1]
        const midX = (point.x + next.x) / 2
        const midY = (point.y + next.y) / 2
        return (
          <g key={`trail-mid-${index}`} opacity={0.5}>
            <circle cx={midX} cy={midY} r="1.6" fill="#b8987a" />
            <circle
              cx={(point.x + midX) / 2}
              cy={(point.y + midY) / 2}
              r="1.1"
              fill="#c4a58d"
              opacity={0.7}
            />
            <circle
              cx={(next.x + midX) / 2}
              cy={(next.y + midY) / 2}
              r="1.1"
              fill="#c4a58d"
              opacity={0.7}
            />
          </g>
        )
      })}
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
  const trailPoints = variant === "full" ? TRAIL_POINTS_FULL : TRAIL_POINTS_HOME
  const trailPath = variant === "full" ? TRAIL_PATH_FULL : TRAIL_PATH_HOME
  const trailPathSketch =
    variant === "full" ? TRAIL_PATH_SKETCH_FULL : TRAIL_PATH_SKETCH_HOME

  return (
    <div
      data-atlas-map="exploracao"
      style={{
        ...styles.homeExploreMap,
        ...(variant === "full" ? styles.homeExploreMapFull : {}),
      }}
    >
      <div
        style={{
          ...styles.homeExploreMapStage,
          ...(variant === "full"
            ? styles.homeExploreMapStageFull
            : styles.homeExploreMapStageHome),
        }}
      >
        {variant === "full" ? (
          <div
            data-atlas-background=""
            style={styles.homeExploreMapAtlasBg}
            aria-hidden="true"
          />
        ) : null}

        <svg
          style={styles.homeExploreMapSvg}
          viewBox="0 0 320 580"
          preserveAspectRatio={
            variant === "full" ? "none" : "xMidYMid meet"
          }
          aria-hidden="true"
        >
          <MapDecorations
            points={trailPoints}
            trailPath={trailPath}
            trailPathSketch={trailPathSketch}
            showCorners={variant !== "full"}
          />
        </svg>

        <div style={styles.homeExploreMapStops}>
      {homeUniversePortals.map((portal, index) => {
        const point = trailPoints[index]
        const offset = STOP_OFFSETS[index]
        const x = point.x + offset.dx
        const y = point.y + offset.dy
        const align =
          x < 100 ? "left" : x > 220 ? "right" : "center"

        return (
          <button
            key={portal.id}
            type="button"
            aria-label={portal.title}
            style={{
              ...styles.homeExploreStop,
              ...(variant === "full"
                ? styles.homeExploreStopHitFull
                : styles.homeExploreStopHit),
              ...(variant === "full" ? styles.homeExploreStopFull : {}),
              left: `${(x / 320) * 100}%`,
              top: `${(y / 580) * 100}%`,
              zIndex: 10 + (homeUniversePortals.length - index),
              ...(align === "left"
                ? styles.homeExploreStopLeft
                : align === "right"
                  ? styles.homeExploreStopRight
                  : styles.homeExploreStopCenter),
            }}
            onClick={() => onSelect(portal.target)}
          >
            <span
              style={{
                ...styles.homeExploreStopBody,
                transform: `rotate(${STOP_ROTATIONS[index]}deg)`,
              }}
            >
              <span
                style={{
                  ...styles.homeExploreMarker,
                  ...styles.homeExploreMarkerVisual,
                  ...(variant === "full" ? styles.homeExploreMarkerFull : {}),
                }}
              >
                <svg
                  style={styles.homeExploreMarkerRing}
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="47"
                    ry="45"
                    fill="none"
                    stroke="#a8886e"
                    strokeWidth="0.75"
                    strokeDasharray="4 8 3 10 5 7"
                    opacity={0.32}
                    transform={`rotate(${index % 2 === 0 ? -5 : 6} 50 50)`}
                  />
                </svg>
                <span style={styles.homeExploreMarkerIcon}>
                  <UniverseIcon
                    src={portal.icon}
                    variant={variant === "full" ? "markerFull" : "marker"}
                  />
                </span>
              </span>
            </span>
          </button>
        )
      })}
      </div>
      </div>
    </div>
  )
}
