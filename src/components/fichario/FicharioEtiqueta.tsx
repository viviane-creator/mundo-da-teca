import type { CSSProperties, ReactNode } from "react"
import { tecaFichario } from "../../tecaVisual"

export function FicharioEtiqueta({
  children,
  onClick,
  action = false,
  style,
  className,
  type = "button",
}: {
  children: ReactNode
  onClick?: () => void
  action?: boolean
  style?: CSSProperties
  className?: string
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
        className={className}
        style={{ ...etiquetaStyle, ...style }}
      >
        {children}
      </button>
    )
  }

  return <span style={{ ...etiquetaStyle, ...style }}>{children}</span>
}
