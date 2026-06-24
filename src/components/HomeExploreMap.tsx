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
const TRAIL_PATH_FULL = buildTrailPath(TRAIL_POINTS_FULL)

function MapDecorations({ trailPath }: { trailPath: string }) {
  return (
    <>
      <path
        d={trailPath}
        fill="none"
        stroke="#f0e4d4"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.35}
      />
      <path
        d={trailPath}
        fill="none"
        stroke="#7a6249"
        strokeWidth="2"
        strokeDasharray="5 7 4 9 6 8 3 11"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.72}
      />
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
        <div
          data-atlas-background=""
          style={styles.homeExploreMapAtlasBg}
          aria-hidden="true"
        />

        <svg
          style={styles.homeExploreMapSvg}
          viewBox="0 0 320 580"
          preserveAspectRatio={
            variant === "full" ? "none" : "xMidYMid meet"
          }
          aria-hidden="true"
        >
          <MapDecorations trailPath={trailPath} />
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
                  ...(variant === "full" ? styles.homeExploreMarkerFull : {}),
                }}
              >
                <UniverseIcon
                  src={portal.icon}
                  variant={variant === "full" ? "markerFull" : "marker"}
                />
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
