import type { CSSProperties } from "react"
import { tecaColors } from "../tecaVisual"

/** Fade inferior padrão das capas — referência: página Universos */
export const heroCoverFadeStyle: CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "50%",
  background: `linear-gradient(180deg, rgba(246,237,226,0) 0%, rgba(255,251,245,0.32) 30%, rgba(246,237,226,0.68) 68%, ${tecaColors.shell} 100%)`,
  pointerEvents: "none",
  WebkitMaskImage:
    "linear-gradient(to top, #000 0%, #000 48%, transparent 100%)",
  maskImage: "linear-gradient(to top, #000 0%, #000 48%, transparent 100%)",
}
