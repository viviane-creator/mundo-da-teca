import type { CSSProperties } from "react"
import { styles } from "../styles/appStyles"

export function isUniverseIconImage(icon: string): boolean {
  return icon.startsWith("/")
}

export function UniverseIcon({
  src,
  variant = "marker",
  style,
}: {
  src: string
  variant?: "marker" | "aba" | "panel" | "emblem"
  style?: CSSProperties
}) {
  const variantStyle =
    variant === "marker"
      ? styles.universeIconMarker
      : variant === "aba"
        ? styles.universeIconAba
        : variant === "panel"
          ? styles.universeIconPanel
          : styles.universeIconEmblem

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      style={{ ...variantStyle, ...style }}
    />
  )
}
