import type { CSSProperties, ReactNode } from "react"
import { tecaFichario } from "../../tecaVisual"

export function FicharioEtiqueta({
  children,
  onClick,
  action = false,
  style,
  type = "button",
}: {
  children: ReactNode
  onClick?: () => void
  action?: boolean
  style?: CSSProperties
  type?: "button" | "submit"
}) {
  const etiquetaStyle = action
    ? tecaFichario.etiquetaAction()
    : tecaFichario.etiqueta()

  if (onClick) {
    return (
      <button
        type={type}
        onClick={onClick}
        style={{ ...etiquetaStyle, ...style }}
      >
        {children}
      </button>
    )
  }

  return <span style={{ ...etiquetaStyle, ...style }}>{children}</span>
}
