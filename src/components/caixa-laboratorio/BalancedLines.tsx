type BalancedLinesProps = {
  lines: readonly string[]
  as?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
  id?: string
}

export function BalancedLines({
  lines,
  as: Tag = "span",
  className,
  id,
}: BalancedLinesProps) {
  return (
    <Tag className={className} id={id}>
      {lines.map((line, index) => (
        <span key={line} className="clx-balanced-lines__line">
          {index > 0 ? <br aria-hidden="true" /> : null}
          {line}
        </span>
      ))}
    </Tag>
  )
}
