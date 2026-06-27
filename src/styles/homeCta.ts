import type { CSSProperties } from "react"

export type HomeCtaTone =
  | "meuMundo"
  | "atelie"
  | "clubeColecionador"
  | "clubeExplorador"

const toneTokens: Record<
  HomeCtaTone,
  {
    fill: string
    fillHover: string
    border: string
    borderHover: string
    text: string
    outline?: boolean
  }
> = {
  meuMundo: {
    fill: "#9BA88A",
    fillHover: "#8A9870",
    border: "#8A9870",
    borderHover: "#7A8860",
    text: "#FFFCF7",
  },
  atelie: {
    fill: "#C8947F",
    fillHover: "#B47A63",
    border: "#B47A63",
    borderHover: "#A66E58",
    text: "#FFFCF7",
  },
  clubeColecionador: {
    fill: "#C9AD6A",
    fillHover: "#B99B5C",
    border: "#B99B5C",
    borderHover: "#A88E50",
    text: "#FFFCF7",
  },
  clubeExplorador: {
    fill: "#8FA8C6",
    fillHover: "#7E96B8",
    border: "#7E96B8",
    borderHover: "#6E88AA",
    text: "#FFFCF7",
  },
}

export function homeCtaClassName(tone: HomeCtaTone): string {
  const base = "home-cta-accent"
  return toneTokens[tone].outline
    ? `${base} home-cta-accent--outline`
    : base
}

export function homeCtaStyle(tone: HomeCtaTone): CSSProperties {
  const token = toneTokens[tone]
  return {
    "--home-cta-fill": token.fill,
    "--home-cta-fill-hover": token.fillHover,
    "--home-cta-border": token.border,
    "--home-cta-border-hover": token.borderHover,
    "--home-cta-text": token.text,
    background: token.fill,
    border: `1px ${token.outline ? "dashed" : "solid"} ${token.border}`,
    color: token.text,
    boxShadow: token.outline
      ? "inset 0 1px 0 rgba(255, 255, 255, 0.9)"
      : "inset 0 1px 0 rgba(255, 255, 255, 0.28)",
  } as CSSProperties
}
