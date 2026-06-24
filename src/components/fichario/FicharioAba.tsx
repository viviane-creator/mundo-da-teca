import type { CSSProperties } from "react"
import { isUniverseIconImage, UniverseIcon } from "../UniverseIcon"
import {
  ficharioChapterAba,
  type FicharioChapterId,
  tecaFichario,
} from "../../tecaVisual"

export function FicharioAba({
  variant = "capitulo",
  chapter,
  icon,
  label,
  decorative = false,
  style,
}: {
  variant?: "capitulo" | "mapa"
  chapter?: FicharioChapterId
  icon?: string
  label?: string
  decorative?: boolean
  style?: CSSProperties
}) {
  if (variant === "capitulo" && chapter) {
    const chapterAba = ficharioChapterAba[chapter]

    return (
      <aside
        style={{
          ...tecaFichario.abaCapitulo(chapterAba.background),
          ...style,
        }}
        aria-label={chapterAba.label}
        aria-hidden={decorative ? true : undefined}
      >
        <span style={tecaFichario.abaCapituloLabel()}>{chapterAba.label}</span>
      </aside>
    )
  }

  const baseStyle =
    variant === "mapa" ? tecaFichario.abaMapa() : tecaFichario.aba()

  return (
    <aside
      style={{ ...baseStyle, ...style }}
      aria-hidden={decorative || variant === "mapa" ? true : undefined}
    >
      {icon &&
        (isUniverseIconImage(icon) ? (
          <UniverseIcon src={icon} variant="aba" />
        ) : (
          <span
            style={
              variant === "mapa"
                ? { fontSize: "18px", lineHeight: 1 }
                : tecaFichario.abaIcon()
            }
          >
            {icon}
          </span>
        ))}
      {label && variant === "capitulo" && (
        <span style={tecaFichario.abaLabel()}>{label}</span>
      )}
    </aside>
  )
}
