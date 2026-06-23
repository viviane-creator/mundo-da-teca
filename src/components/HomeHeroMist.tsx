import type { CSSProperties } from "react"

const shellRgb = "246, 237, 226"
const mistWhiteRgb = "255, 251, 245"

type MistBlob = {
  left: string
  bottom?: string
  top?: string
  width: string
  height: string
  opacity: number
  blur: number
  rotate?: number
  originY?: string
  spread?: number
  shape?: string
}

/** ~10% — topo e horizonte alto: quase imperceptível, preserva céu */
const upperMistBlobs: MistBlob[] = [
  { left: "8%", top: "4%", width: "84%", height: "26%", opacity: 0.05, blur: 96, spread: 98 },
  { left: "-6%", bottom: "58%", width: "46%", height: "20%", opacity: 0.05, blur: 92, rotate: -5, spread: 96 },
  { left: "58%", bottom: "54%", width: "42%", height: "18%", opacity: 0.04, blur: 94, rotate: 4, spread: 94 },
  { left: "30%", bottom: "60%", width: "38%", height: "16%", opacity: 0.04, blur: 90, rotate: -2, spread: 92 },
]

/** Horizonte — névoa mínima para não apagar a linha do mar */
const horizonMistBlobs: MistBlob[] = [
  { left: "-8%", bottom: "34%", width: "116%", height: "12%", opacity: 0.07, blur: 98, rotate: -1, spread: 99 },
  { left: "14%", bottom: "36%", width: "72%", height: "10%", opacity: 0.05, blur: 94, rotate: 2, spread: 97 },
]

/** ~20% — centro: envolve a menina, sobe devagar em direção ao texto */
const centerMistBlobs: MistBlob[] = [
  { left: "14%", bottom: "26%", width: "72%", height: "48%", opacity: 0.15, blur: 92, spread: 86 },
  { left: "26%", bottom: "32%", width: "56%", height: "42%", opacity: 0.13, blur: 96, rotate: 3, spread: 84 },
  { left: "38%", bottom: "28%", width: "50%", height: "40%", opacity: 0.12, blur: 90, rotate: -4, spread: 82 },
  { left: "20%", bottom: "36%", width: "60%", height: "36%", opacity: 0.11, blur: 94, rotate: 5, spread: 80 },
  { left: "32%", bottom: "40%", width: "48%", height: "32%", opacity: 0.09, blur: 88, rotate: -3 },
  { left: "46%", bottom: "34%", width: "44%", height: "34%", opacity: 0.1, blur: 92, rotate: 2 },
]

/** Ponte menina → texto */
const bridgeMistBlobs: MistBlob[] = [
  { left: "6%", bottom: "14%", width: "88%", height: "42%", opacity: 0.16, blur: 100, spread: 88, originY: "88%" },
  { left: "20%", bottom: "18%", width: "64%", height: "46%", opacity: 0.14, blur: 96, spread: 90, originY: "92%" },
  { left: "34%", bottom: "16%", width: "58%", height: "40%", opacity: 0.12, blur: 94, rotate: -2, originY: "90%" },
  { left: "48%", bottom: "20%", width: "46%", height: "34%", opacity: 0.1, blur: 92, rotate: 4, originY: "86%" },
]

/** Terço inferior — sem bordas retas; tudo dissolve para fora da hero */
const lowerThirdMistBlobs: MistBlob[] = [
  { left: "-14%", bottom: "-38%", width: "72%", height: "58%", opacity: 0.28, blur: 100, rotate: -5 },
  { left: "2%", bottom: "-24%", width: "78%", height: "52%", opacity: 0.24, blur: 104, rotate: 3 },
  { left: "20%", bottom: "-30%", width: "66%", height: "56%", opacity: 0.26, blur: 96, rotate: -3 },
  { left: "42%", bottom: "-26%", width: "62%", height: "54%", opacity: 0.22, blur: 98, rotate: 5 },
  { left: "60%", bottom: "-20%", width: "58%", height: "50%", opacity: 0.2, blur: 102, rotate: -2 },
  { left: "-6%", bottom: "-8%", width: "56%", height: "42%", opacity: 0.16, blur: 88, rotate: 4 },
  { left: "16%", bottom: "-4%", width: "60%", height: "40%", opacity: 0.14, blur: 90, rotate: -4 },
  { left: "36%", bottom: "-10%", width: "58%", height: "44%", opacity: 0.15, blur: 86, rotate: 3 },
  { left: "56%", bottom: "-6%", width: "54%", height: "38%", opacity: 0.12, blur: 92, rotate: -3 },
]

/** Dissolução suave na base — sem linha horizontal */
const bottomSoftBleedBlobs: MistBlob[] = [
  { left: "-10%", bottom: "-42%", width: "120%", height: "62%", opacity: 0.2, blur: 110, spread: 98 },
  { left: "10%", bottom: "-32%", width: "80%", height: "52%", opacity: 0.16, blur: 106, spread: 96 },
  { left: "28%", bottom: "-24%", width: "68%", height: "46%", opacity: 0.12, blur: 100, spread: 94, rotate: -2 },
  { left: "44%", bottom: "-34%", width: "76%", height: "54%", opacity: 0.14, blur: 112, spread: 97, rotate: 3 },
]

const mistWrap: CSSProperties = {
  position: "absolute",
  inset: 0,
  zIndex: 2,
  pointerEvents: "none",
  overflow: "hidden",
}

const organicShapes = [
  "48% 52% 42% 58% / 38% 44% 56% 62%",
  "52% 48% 58% 42% / 44% 38% 62% 56%",
  "44% 56% 50% 50% / 52% 40% 48% 60%",
  "56% 44% 46% 54% / 36% 52% 64% 48%",
  "50% 46% 54% 50% / 42% 48% 58% 52%",
  "46% 54% 48% 52% / 40% 46% 54% 60%",
]

function MistBlobLayer({
  blob,
  shapeIndex = 0,
  whiteTone = false,
}: {
  blob: MistBlob
  shapeIndex?: number
  whiteTone?: boolean
}) {
  const originY = blob.originY ?? "100%"
  const spread = blob.spread ?? 84
  const rgb = whiteTone ? mistWhiteRgb : shellRgb
  const peak = whiteTone ? 0.58 : 0.36
  const mid = whiteTone ? 0.24 : 0.14
  const fade = whiteTone ? 0.07 : 0.04

  return (
    <div
      style={{
        position: "absolute",
        left: blob.left,
        ...(blob.bottom !== undefined ? { bottom: blob.bottom } : {}),
        ...(blob.top !== undefined ? { top: blob.top } : {}),
        width: blob.width,
        height: blob.height,
        borderRadius: blob.shape ?? organicShapes[shapeIndex % organicShapes.length],
        background: `radial-gradient(
          ellipse 95% ${spread}% at 50% ${originY},
          rgba(${rgb}, ${peak}) 0%,
          rgba(${rgb}, ${mid}) 28%,
          rgba(${rgb}, ${fade}) 52%,
          rgba(${rgb}, 0) 76%
        )`,
        opacity: blob.opacity,
        filter: `blur(${blob.blur}px)`,
        transform: `rotate(${blob.rotate ?? 0}deg)`,
      }}
    />
  )
}

function MistBlobField({
  blobs,
  offset = 0,
  whiteTone = false,
}: {
  blobs: MistBlob[]
  offset?: number
  whiteTone?: boolean
}) {
  return (
    <>
      {blobs.map((blob, index) => (
        <MistBlobLayer
          key={`${offset + index}`}
          blob={blob}
          shapeIndex={offset + index}
          whiteTone={whiteTone}
        />
      ))}
    </>
  )
}

/** Névoa esbranquiçada onde o texto emerge */
const textEmergenceMistBlobs: MistBlob[] = [
  { left: "2%", top: "-130%", width: "96%", height: "220%", opacity: 0.42, blur: 58, spread: 94, originY: "76%" },
  { left: "14%", top: "-110%", width: "72%", height: "200%", opacity: 0.36, blur: 66, spread: 92, originY: "80%" },
  { left: "24%", top: "-90%", width: "56%", height: "175%", opacity: 0.3, blur: 74, spread: 90, originY: "84%" },
  { left: "10%", top: "-55%", width: "80%", height: "145%", opacity: 0.26, blur: 52, spread: 88, originY: "90%" },
  { left: "30%", top: "-35%", width: "44%", height: "120%", opacity: 0.22, blur: 44, spread: 86, originY: "94%" },
]

export function HomeHeroMist() {
  return (
    <div style={mistWrap} aria-hidden="true">
      <MistBlobField blobs={upperMistBlobs} offset={0} />
      <MistBlobField blobs={horizonMistBlobs} offset={10} />
      <MistBlobField blobs={centerMistBlobs} offset={20} />
      <MistBlobField blobs={bridgeMistBlobs} offset={30} />
      <MistBlobField blobs={lowerThirdMistBlobs} offset={40} />
      <MistBlobField blobs={bottomSoftBleedBlobs} offset={55} />
    </div>
  )
}

export function HomeHeroTextMist() {
  return (
    <div
      style={{
        position: "absolute",
        left: "-14%",
        right: "-14%",
        top: "-150%",
        bottom: "-40%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <MistBlobField blobs={textEmergenceMistBlobs} offset={60} whiteTone />
    </div>
  )
}
