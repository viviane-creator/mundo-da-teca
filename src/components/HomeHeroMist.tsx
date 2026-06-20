import type { CSSProperties } from "react"
import { tecaColors } from "../tecaVisual"

const shellRgb = "246, 237, 226"

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
  { left: "14%", bottom: "26%", width: "72%", height: "48%", opacity: 0.17, blur: 92, spread: 86 },
  { left: "26%", bottom: "32%", width: "56%", height: "42%", opacity: 0.15, blur: 96, rotate: 3, spread: 84 },
  { left: "38%", bottom: "28%", width: "50%", height: "40%", opacity: 0.14, blur: 90, rotate: -4, spread: 82 },
  { left: "20%", bottom: "36%", width: "60%", height: "36%", opacity: 0.13, blur: 94, rotate: 5, spread: 80 },
  { left: "32%", bottom: "40%", width: "48%", height: "32%", opacity: 0.11, blur: 88, rotate: -3 },
  { left: "46%", bottom: "34%", width: "44%", height: "34%", opacity: 0.12, blur: 92, rotate: 2 },
  { left: "24%", bottom: "44%", width: "52%", height: "28%", opacity: 0.09, blur: 86, rotate: -5 },
  { left: "42%", bottom: "42%", width: "46%", height: "26%", opacity: 0.08, blur: 84, rotate: 3 },
]

/** Ponte menina → texto: névoa que sobe entre figura e tipografia */
const bridgeMistBlobs: MistBlob[] = [
  { left: "6%", bottom: "18%", width: "88%", height: "46%", opacity: 0.2, blur: 100, spread: 88, originY: "88%" },
  { left: "20%", bottom: "24%", width: "64%", height: "50%", opacity: 0.18, blur: 96, spread: 90, originY: "92%" },
  { left: "34%", bottom: "20%", width: "58%", height: "44%", opacity: 0.16, blur: 94, rotate: -2, originY: "90%" },
  { left: "48%", bottom: "26%", width: "46%", height: "38%", opacity: 0.13, blur: 92, rotate: 4, originY: "86%" },
  { left: "16%", bottom: "32%", width: "70%", height: "40%", opacity: 0.14, blur: 98, spread: 86, originY: "94%" },
]

/** ~70% — terço inferior: densidade principal, transição suave para o conteúdo */
const lowerThirdMistBlobs: MistBlob[] = [
  { left: "-14%", bottom: "-34%", width: "70%", height: "54%", opacity: 0.36, blur: 88, rotate: -5 },
  { left: "2%", bottom: "-20%", width: "76%", height: "48%", opacity: 0.32, blur: 94, rotate: 3 },
  { left: "20%", bottom: "-26%", width: "64%", height: "52%", opacity: 0.34, blur: 82, rotate: -3 },
  { left: "42%", bottom: "-22%", width: "60%", height: "50%", opacity: 0.3, blur: 86, rotate: 5 },
  { left: "60%", bottom: "-18%", width: "56%", height: "46%", opacity: 0.28, blur: 90, rotate: -2 },
  { left: "-6%", bottom: "0%", width: "54%", height: "38%", opacity: 0.26, blur: 78, rotate: 4 },
  { left: "16%", bottom: "4%", width: "58%", height: "36%", opacity: 0.28, blur: 80, rotate: -4 },
  { left: "36%", bottom: "-2%", width: "56%", height: "40%", opacity: 0.26, blur: 76, rotate: 3 },
  { left: "56%", bottom: "2%", width: "52%", height: "34%", opacity: 0.24, blur: 84, rotate: -3 },
  { left: "6%", bottom: "10%", width: "48%", height: "30%", opacity: 0.22, blur: 72, rotate: 2 },
  { left: "26%", bottom: "8%", width: "50%", height: "32%", opacity: 0.24, blur: 74, rotate: -5 },
  { left: "48%", bottom: "12%", width: "46%", height: "28%", opacity: 0.2, blur: 78, rotate: 6 },
  { left: "68%", bottom: "6%", width: "42%", height: "30%", opacity: 0.18, blur: 82, rotate: -2 },
  { left: "30%", bottom: "16%", width: "44%", height: "26%", opacity: 0.16, blur: 70, rotate: 3, spread: 90 },
  { left: "52%", bottom: "18%", width: "40%", height: "24%", opacity: 0.14, blur: 68, rotate: -4, spread: 88 },
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

function MistBlobLayer({ blob, shapeIndex = 0 }: { blob: MistBlob; shapeIndex?: number }) {
  const originY = blob.originY ?? "100%"
  const spread = blob.spread ?? 84

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
          rgba(${shellRgb}, 0.36) 0%,
          rgba(${shellRgb}, 0.14) 30%,
          rgba(${shellRgb}, 0.04) 54%,
          rgba(${shellRgb}, 0) 72%
        )`,
        opacity: blob.opacity,
        filter: `blur(${blob.blur}px)`,
        transform: `rotate(${blob.rotate ?? 0}deg)`,
      }}
    />
  )
}

function MistBlobField({ blobs, offset = 0 }: { blobs: MistBlob[]; offset?: number }) {
  return (
    <>
      {blobs.map((blob, index) => (
        <MistBlobLayer
          key={`${offset + index}`}
          blob={blob}
          shapeIndex={offset + index}
        />
      ))}
    </>
  )
}

function OrganicMistWaves() {
  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "58%",
        opacity: 0.72,
        filter: "blur(20px)",
      }}
      viewBox="0 0 400 260"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,118 C34,96 68,126 108,102 C148,78 178,112 218,94 C258,76 302,108 342,88 C366,80 384,92 400,86 L400,260 L0,260 Z"
        fill={tecaColors.shell}
        opacity={0.09}
      />
      <path
        d="M0,142 C48,128 90,148 142,130 C194,112 242,140 298,122 C332,112 366,130 400,118 L400,260 L0,260 Z"
        fill={tecaColors.shell}
        opacity={0.07}
      />
      <path
        d="M0,168 C42,158 86,172 130,162 C174,152 218,168 262,158 C306,148 350,164 400,154 L400,260 L0,260 Z"
        fill={tecaColors.shell}
        opacity={0.05}
      />
      <path
        d="M0,192 C36,184 80,196 124,188 C168,180 212,194 256,186 C300,178 344,192 400,184 L400,260 L0,260 Z"
        fill={tecaColors.shell}
        opacity={0.035}
      />
    </svg>
  )
}

export function HomeHeroMist() {
  return (
    <div style={mistWrap} aria-hidden="true">
      <MistBlobField blobs={upperMistBlobs} offset={0} />
      <MistBlobField blobs={horizonMistBlobs} offset={10} />
      <MistBlobField blobs={centerMistBlobs} offset={20} />
      <MistBlobField blobs={bridgeMistBlobs} offset={30} />
      <MistBlobField blobs={lowerThirdMistBlobs} offset={40} />
      <OrganicMistWaves />
    </div>
  )
}

const titleMistBlobs: MistBlob[] = [
  { left: "14%", bottom: "38%", width: "72%", height: "48%", opacity: 0.1, blur: 42 },
  { left: "27%", bottom: "44%", width: "46%", height: "40%", opacity: 0.07, blur: 46 },
]

export function HomeHeroTextMist() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <MistBlobField blobs={titleMistBlobs} offset={50} />
    </div>
  )
}
