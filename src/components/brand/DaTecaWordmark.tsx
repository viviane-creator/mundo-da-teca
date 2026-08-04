import "./DaTecaWordmark.css"

export type DaTecaWordmarkSize = "small" | "medium" | "large" | "inherit"

const sizeClass: Record<DaTecaWordmarkSize, string> = {
  small: "dateca-wordmark--small",
  medium: "dateca-wordmark--medium",
  large: "dateca-wordmark--large",
  inherit: "dateca-wordmark--inherit",
}

type DaTecaWordmarkProps = {
  size?: DaTecaWordmarkSize
  className?: string
}

export function DaTecaWordmark({
  size = "medium",
  className,
}: DaTecaWordmarkProps) {
  return (
    <span
      className={["dateca-wordmark", sizeClass[size], className]
        .filter(Boolean)
        .join(" ")}
      aria-label="daTeca"
    >
      <span className="dateca-wordmark__da" aria-hidden="true">
        da
      </span>
      <span className="dateca-wordmark__teca" aria-hidden="true">
        Teca
      </span>
    </span>
  )
}
