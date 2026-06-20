import type { CSSProperties } from "react"
import { tecaFichario } from "../../tecaVisual"

export function FicharioAba({
  variant = "capitulo",
  icon,
  label,
  decorative = false,
  style,
}: {
  variant?: "capitulo" | "mapa"
  icon: string
  label?: string
  decorative?: boolean
  style?: CSSProperties
}) {
  const baseStyle =
    variant === "mapa" ? tecaFichario.abaMapa() : tecaFichario.aba()

  return (
    <aside
      style={{ ...baseStyle, ...style }}
      aria-hidden={decorative || variant === "mapa" ? true : undefined}
    >
      <span
        style={
          variant === "mapa"
            ? { fontSize: "18px", lineHeight: 1 }
            : tecaFichario.abaIcon()
        }
      >
        {icon}
      </span>
      {label && variant === "capitulo" && (
        <span style={tecaFichario.abaLabel()}>{label}</span>
      )}
    </aside>
  )
}
