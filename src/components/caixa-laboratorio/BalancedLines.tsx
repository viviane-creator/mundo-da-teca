import { DaTecaInText } from "../brand/DaTecaInText"
import type { DaTecaWordmarkSize } from "../brand/DaTecaWordmark"

type BalancedLinesProps = {
  lines: readonly string[]
  as?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
  id?: string
  wordmarkSize?: DaTecaWordmarkSize
}

export function BalancedLines({
  lines,
  as: Tag = "span",
  className,
  id,
  wordmarkSize = "inherit",
}: BalancedLinesProps) {
  return (
    <Tag className={className} id={id}>
      {lines.map((line, index) => (
        <span key={line} className="clx-balanced-lines__line">
          {index > 0 ? <br aria-hidden="true" /> : null}
          <DaTecaInText text={line} wordmarkSize={wordmarkSize} />
        </span>
      ))}
    </Tag>
  )
}
