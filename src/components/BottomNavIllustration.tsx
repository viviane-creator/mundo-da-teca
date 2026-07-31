import type { CSSProperties, ReactElement } from "react"
import type { BottomNavIllustrationId } from "../data/bottomNav"
import type { NavIconPalette } from "../data/bottomNavTheme"
import {
  navIconPaletteCapsule,
  navIconPalettePaper,
} from "../data/bottomNavTheme"

const svgStyle: CSSProperties = {
  display: "block",
  width: "100%",
  height: "100%",
}

function NavCompassRose({ p }: { p: NavIconPalette }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden style={svgStyle}>
      <circle cx="24" cy="24" r="17" fill={p.main} opacity={0.1} />
      <path
        d="M24 8 L24 40 M8 24 L40 24 M13 13 L35 35 M35 13 L13 35"
        stroke={p.soft}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity={0.72}
      />
      <path d="M24 11 L21 22 L24 19 L27 22 Z" fill={p.main} opacity={0.92} />
      <path d="M24 19 L18 24 L24 21 L30 24 Z" fill={p.soft} opacity={0.62} />
      <path d="M24 27 L21 36 L24 33 L27 36 Z" fill={p.muted} opacity={0.55} />
      <circle cx="24" cy="24" r="2.2" fill={p.main} opacity={0.88} />
    </svg>
  )
}

function NavFoldedMap({ p }: { p: NavIconPalette }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden style={svgStyle}>
      <path
        d="M10 14 L24 10 L38 14 L38 36 L24 40 L10 36 Z"
        fill={p.soft}
        stroke={p.main}
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity={0.88}
      />
      <path d="M24 10 L24 40" stroke={p.main} strokeWidth="0.7" opacity={0.45} />
      <path
        d="M14 18 C18 20 20 22 24 21 C28 20 30 22 34 18"
        stroke={p.main}
        strokeWidth="1"
        strokeLinecap="round"
        opacity={0.7}
      />
      <path
        d="M13 26 C17 28 20 30 24 29 C28 28 31 30 35 26"
        stroke={p.muted}
        strokeWidth="0.85"
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity={0.62}
      />
      <circle cx="30" cy="30" r="1.4" fill={p.main} opacity={0.8} />
    </svg>
  )
}

function NavFichario({ p }: { p: NavIconPalette }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden style={svgStyle}>
      <rect
        x="12"
        y="9"
        width="24"
        height="30"
        rx="2.5"
        fill={p.soft}
        stroke={p.main}
        strokeWidth="0.9"
        opacity={0.92}
      />
      <path
        d="M18 9 L18 39 M24 9 L24 39 M30 9 L30 39"
        stroke={p.main}
        strokeWidth="0.55"
        opacity={0.42}
      />
      <circle cx="18" cy="15" r="1.5" fill={p.muted} stroke={p.main} strokeWidth="0.5" />
      <circle cx="24" cy="15" r="1.5" fill={p.muted} stroke={p.main} strokeWidth="0.5" />
      <circle cx="30" cy="15" r="1.5" fill={p.muted} stroke={p.main} strokeWidth="0.5" />
      <path
        d="M16 22 H32 M16 27 H29 M16 32 H31"
        stroke={p.main}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity={0.58}
      />
    </svg>
  )
}

function NavExplorerCard({ p }: { p: NavIconPalette }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden style={svgStyle}>
      <rect
        x="11"
        y="13"
        width="26"
        height="22"
        rx="3"
        fill={p.soft}
        stroke={p.main}
        strokeWidth="0.9"
        opacity={0.9}
      />
      <circle cx="24" cy="11" r="2.2" fill="none" stroke={p.main} strokeWidth="0.8" opacity={0.75} />
      <path
        d="M24 13 L24 15.5"
        stroke={p.main}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity={0.75}
      />
      <circle cx="17" cy="22" r="4" fill={p.muted} stroke={p.main} strokeWidth="0.7" opacity={0.85} />
      <path
        d="M23 20 H33 M23 24 H31 M23 28 H29"
        stroke={p.main}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity={0.62}
      />
    </svg>
  )
}

function NavTreasureChest({ p }: { p: NavIconPalette }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden style={svgStyle}>
      <path
        d="M10 22 H38 C38 22 36 16 24 14 C12 16 10 22 10 22 Z"
        fill={p.muted}
        stroke={p.main}
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity={0.88}
      />
      <rect
        x="10"
        y="22"
        width="28"
        height="14"
        rx="1.5"
        fill={p.soft}
        stroke={p.main}
        strokeWidth="0.9"
        opacity={0.92}
      />
      <path d="M10 22 H38" stroke={p.main} strokeWidth="1" opacity={0.45} />
      <rect
        x="21"
        y="25"
        width="6"
        height="5"
        rx="0.8"
        fill={p.main}
        stroke={p.soft}
        strokeWidth="0.6"
        opacity={0.82}
      />
      <path
        d="M24 14 V11"
        stroke={p.main}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity={0.55}
      />
    </svg>
  )
}

const illustrations: Record<
  BottomNavIllustrationId,
  (props: { p: NavIconPalette }) => ReactElement
> = {
  home: NavCompassRose,
  universos: NavFoldedMap,
  meuMundo: NavFichario,
  atelie: NavTreasureChest,
}

export function BottomNavIllustration({
  id,
  active = false,
}: {
  id: BottomNavIllustrationId
  active?: boolean
}) {
  const Illustration = illustrations[id]
  const palette = active ? navIconPaletteCapsule : navIconPalettePaper
  return <Illustration p={palette} />
}
