import { Fragment } from "react"
import { DaTecaWordmark, type DaTecaWordmarkSize } from "./DaTecaWordmark"

type DaTecaInTextProps = {
  text: string
  wordmarkSize?: DaTecaWordmarkSize
}

export function DaTecaInText({
  text,
  wordmarkSize = "medium",
}: DaTecaInTextProps) {
  const parts = text.split(/(daTeca)/g)

  return (
    <>
      {parts.map((part, index) =>
        part === "daTeca" ? (
          <DaTecaWordmark key={index} size={wordmarkSize} />
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  )
}
