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

/** Base da zona — névoa mais densa no pé da imagem */
const lowerMistBlobs: MistBlob[] = [
  { left: "-14%", bottom: "-28%", width: "72%", height: "88%", opacity: 0.34, blur: 100, rotate: -5 },
  { left: "2%", bottom: "-16%", width: "78%", height: "82%", opacity: 0.3, blur: 104, rotate: 3 },
  { left: "20%", bottom: "-20%", width: "66%", height: "86%", opacity: 0.32, blur: 96, rotate: -3 },
  { left: "42%", bottom: "-14%", width: "62%", height: "80%", opacity: 0.28, blur: 98, rotate: 5 },
  { left: "60%", bottom: "-8%", width: "58%", height: "76%", opacity: 0.26, blur: 102, rotate: -2 },
  { left: "-6%", bottom: "2%", width: "56%", height: "68%", opacity: 0.22, blur: 88, rotate: 4 },
  { left: "16%", bottom: "6%", width: "60%", height: "64%", opacity: 0.2, blur: 90, rotate: -4 },
  { left: "36%", bottom: "0%", width: "58%", height: "70%", opacity: 0.21, blur: 86, rotate: 3 },
  { left: "56%", bottom: "4%", width: "54%", height: "62%", opacity: 0.18, blur: 92, rotate: -3 },
]

const bottomSoftBleedBlobs: MistBlob[] = [
  { left: "-10%", bottom: "-38%", width: "120%", height: "95%", opacity: 0.22, blur: 110, spread: 98 },
  { left: "10%", bottom: "-28%", width: "80%", height: "82%", opacity: 0.18, blur: 106, spread: 96 },
  { left: "28%", bottom: "-18%", width: "68%", height: "72%", opacity: 0.14, blur: 100, spread: 94, rotate: -2 },
  { left: "44%", bottom: "-26%", width: "76%", height: "84%", opacity: 0.16, blur: 112, spread: 97, rotate: 3 },
]

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
  const peak = whiteTone ? 0.66 : 0.36
  const mid = whiteTone ? 0.3 : 0.14
  const fade = whiteTone ? 0.1 : 0.04

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

/** Névoa onde o texto emerge — contida na faixa inferior */
const textEmergenceMistBlobs: MistBlob[] = [
  { left: "0%", bottom: "-20%", width: "100%", height: "130%", opacity: 0.56, blur: 64, spread: 94, originY: "88%" },
  { left: "10%", bottom: "-10%", width: "80%", height: "118%", opacity: 0.48, blur: 70, spread: 92, originY: "90%" },
  { left: "20%", bottom: "0%", width: "64%", height: "108%", opacity: 0.4, blur: 76, spread: 90, originY: "92%" },
  { left: "8%", bottom: "12%", width: "84%", height: "92%", opacity: 0.34, blur: 56, spread: 88, originY: "94%" },
  { left: "26%", bottom: "18%", width: "48%", height: "78%", opacity: 0.28, blur: 48, spread: 86, originY: "96%" },
]

/** Faixa inferior da hero — névoa dissolve totalmente no topo (50% da foto) */
export const homeHeroMistZoneStyle: CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "50%",
  overflow: "hidden",
  zIndex: 2,
  pointerEvents: "none",
  WebkitMaskImage: "linear-gradient(to top, #000 0%, #000 52%, transparent 100%)",
  maskImage: "linear-gradient(to top, #000 0%, #000 52%, transparent 100%)",
}

/** Home — máscara mais suave para evitar faixa horizontal no Safari iOS */
export const homeHeroMistZoneStyleHome: CSSProperties = {
  ...homeHeroMistZoneStyle,
  WebkitMaskImage:
    "linear-gradient(to top, #000 0%, #000 38%, rgba(0,0,0,0.55) 62%, transparent 92%)",
  maskImage:
    "linear-gradient(to top, #000 0%, #000 38%, rgba(0,0,0,0.55) 62%, transparent 92%)",
}

export const homeHeroTextMistSlotStyle: CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "100%",
  pointerEvents: "none",
}

export function HomeHeroMist() {
  return (
    <div style={{ position: "absolute", inset: 0 }} aria-hidden="true">
      <MistBlobField blobs={lowerMistBlobs} offset={0} />
      <MistBlobField blobs={bottomSoftBleedBlobs} offset={20} />
    </div>
  )
}

export function HomeHeroTextMist() {
  return (
    <div style={homeHeroTextMistSlotStyle} aria-hidden="true">
      <MistBlobField blobs={textEmergenceMistBlobs} offset={40} whiteTone />
    </div>
  )
}
