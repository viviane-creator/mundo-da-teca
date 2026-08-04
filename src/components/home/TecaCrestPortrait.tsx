import type { CSSProperties } from "react"
import "../../styles/tecaCrest.css"

type TecaCrestPortraitProps = {
  src?: string
  alt?: string
  caption?: string
  size?: CSSProperties["width"]
  className?: string
}

/** Retrato da Teca em brasão redondo — peça editorial reutilizável */
export function TecaCrestPortrait({
  src = "/images/teca.webp",
  alt = "Teca, anfitriã daTeca",
  caption = "Teca",
  size,
  className,
}: TecaCrestPortraitProps) {
  return (
    <div
      className={["teca-crest", className].filter(Boolean).join(" ")}
      style={size ? ({ ["--teca-crest-size" as string]: size } as CSSProperties) : undefined}
    >
      <span className="teca-crest__halo" aria-hidden="true" />

      <div className="teca-crest__shield">
        <span className="teca-crest__ring" aria-hidden="true" />
        <span className="teca-crest__points" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>

        <div className="teca-crest__portrait">
          <img
            src={src}
            alt={alt}
            width={240}
            height={240}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {caption ? (
        <span className="teca-crest__caption" aria-hidden="true">
          {caption}
        </span>
      ) : null}
    </div>
  )
}
