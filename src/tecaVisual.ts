import type { CSSProperties } from "react"

export const tecaColors = {
  paper: "#fffdf9",
  paperWarm: "#f8efe5",
  paperNote: "#f7efe6",
  paperFicha: "#fdfaf6",
  shell: "#f6ede2",
  line: "#ead8c5",
  lineSoft: "#e8d8c8",
  text: "#6a4f3c",
  muted: "#8b7668",
  accent: "#c88757",
  accentSoft: "#d9a06e",
  ink: "#7a6254",
}

export const tecaRadius = {
  sm: 18,
  md: 22,
  lg: 28,
  xl: 34,
} as const

export type TecaRadiusKey = keyof typeof tecaRadius

const shadow = {
  soft: "0 8px 22px rgba(120,90,60,0.05)",
  card: "0 10px 26px rgba(120,90,60,0.06)",
  lift: "0 12px 28px rgba(120,90,60,0.07)",
  inset: "inset 0 1px 0 rgba(255,255,255,0.65)",
}

/** Caveat só em títulos de portal e nomes de universos */
export const tecaFont = {
  portalTitle: {
    fontFamily: "'Caveat', cursive",
    fontWeight: 400,
    lineHeight: 0.95,
    color: tecaColors.text,
  } satisfies CSSProperties,

  /** @deprecated Preferir Cormorant via buttonPrimary / heading em CTAs */
  accentHand: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 500,
    color: tecaColors.text,
  } satisfies CSSProperties,

  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 500,
    color: tecaColors.text,
    lineHeight: 1.1,
  } satisfies CSSProperties,

  /** Corpo e descrições — romano por padrão */
  prose: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 400,
    color: tecaColors.muted,
    lineHeight: 1.55,
  } satisfies CSSProperties,

  /** Frase poética de abertura — itálico reservado */
  poetic: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontWeight: 400,
    color: tecaColors.muted,
    lineHeight: 1.45,
  } satisfies CSSProperties,

  body: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 400,
    color: tecaColors.ink,
    lineHeight: 1.5,
  } satisfies CSSProperties,

  label: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 600,
  } satisfies CSSProperties,

  navLabel: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "10px",
    letterSpacing: "0.5px",
    fontWeight: 500,
  } satisfies CSSProperties,

  /** Nível 6 — microtextos / etiquetas editoriais */
  micro: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "10px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
  } satisfies CSSProperties,

  /** linhas de ficha / carteirinha */
  handLine: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 400,
    color: tecaColors.text,
    lineHeight: 1.2,
  } satisfies CSSProperties,
}

/** Ritmo vertical compartilhado entre páginas */
export const tecaSpacing = {
  titleToPoetic: 28,
  poeticToSection: 48,
  sectionTop: 48,
  sectionTitleToSubtitle: 10,
  subtitleToContent: 20,
} as const

/** Hierarquia tipográfica global — um livro, uma escala */
export const tecaHierarchy = {
  l1PageTitle: {
    ...tecaFont.portalTitle,
    fontSize: "48px",
    textAlign: "center",
    margin: `8px 0 ${tecaSpacing.titleToPoetic}px`,
  } satisfies CSSProperties,

  l2Poetic: {
    ...tecaFont.poetic,
    fontSize: "20px",
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "340px",
    lineHeight: 1.45,
  } satisfies CSSProperties,

  l3SectionTitle: {
    ...tecaFont.heading,
    fontSize: "28px",
    fontWeight: 500,
    color: "#705a4d",
    textAlign: "center",
    margin: `${tecaSpacing.sectionTop}px 0 0`,
    lineHeight: 1.1,
  } satisfies CSSProperties,

  l3SectionTitleFlush: {
    marginTop: 0,
  } satisfies CSSProperties,

  l4Subtitle: {
    ...tecaFont.prose,
    fontSize: "15px",
    textAlign: "center",
    margin: `${tecaSpacing.sectionTitleToSubtitle}px auto ${tecaSpacing.subtitleToContent}px`,
    maxWidth: "340px",
    lineHeight: 1.45,
    color: tecaColors.muted,
  } satisfies CSSProperties,

  l5Body: {
    ...tecaFont.prose,
    fontSize: "17px",
    lineHeight: 1.55,
    color: tecaColors.ink,
  } satisfies CSSProperties,

  l5BodyCentered: {
    textAlign: "center",
    maxWidth: "340px",
    margin: "0 auto",
  } satisfies CSSProperties,

  l6Micro: {
    ...tecaFont.micro,
    textAlign: "center",
    margin: "0 0 12px",
  } satisfies CSSProperties,

  pageHeroBreath: {
    height: `${tecaSpacing.poeticToSection}px`,
  } satisfies CSSProperties,
}

export function tecaTilt(degrees = 0.35): CSSProperties {
  return degrees === 0 ? {} : { transform: `rotate(${degrees}deg)` }
}

export const tecaObjects = {
  paper: (radius: number = tecaRadius.md): CSSProperties => ({
    background: tecaColors.paper,
    borderRadius: radius,
    border: `1px solid ${tecaColors.line}`,
    boxShadow: `${shadow.soft}, ${shadow.inset}`,
  }),

  card: (radius: TecaRadiusKey = "lg"): CSSProperties => ({
    background: tecaColors.paper,
    borderRadius: tecaRadius[radius],
    border: `1px solid ${tecaColors.line}`,
    boxShadow: shadow.card,
    overflow: "hidden",
  }),

  album: (radius: number = tecaRadius.lg): CSSProperties => ({
    background: tecaColors.paperFicha,
    borderRadius: radius,
    border: `1px solid ${tecaColors.lineSoft}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.06), inset 0 0 0 1px rgba(255,253,249,0.5)",
  }),

  envelope: (): CSSProperties => ({
    background: "#f3e8dc",
    borderRadius: tecaRadius.md,
    border: "1px dashed rgba(195, 150, 110, 0.42)",
    boxShadow: "0 8px 20px rgba(120,90,60,0.05)",
  }),

  note: (radius: number = tecaRadius.lg): CSSProperties => ({
    background: tecaColors.paperWarm,
    borderRadius: radius,
    padding: "20px 18px",
    border: `1px solid ${tecaColors.line}`,
    boxShadow: shadow.soft,
  }),

  noteHighlight: (): CSSProperties => ({
    background: "#f3e8dc",
    borderRadius: tecaRadius.xl,
    padding: "22px 18px",
    border: `1px solid ${tecaColors.line}`,
    boxShadow: shadow.soft,
  }),

  ficha: (radius: number = tecaRadius.md): CSSProperties => ({
    background: tecaColors.paperFicha,
    borderRadius: radius,
    padding: "22px 18px 24px",
    border: `1px solid ${tecaColors.lineSoft}`,
    boxShadow: "0 6px 18px rgba(120,90,60,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
  }),

  etiqueta: (): CSSProperties => ({
    display: "inline-block",
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    border: `1px solid ${tecaColors.lineSoft}`,
    borderRadius: "4px",
    padding: "4px 10px",
    background: tecaColors.paper,
  }),

  seal: (): CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "42px",
    height: "42px",
    borderRadius: "999px",
    border: `1px solid ${tecaColors.line}`,
    background: tecaColors.paper,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "12px",
    color: "#b3815f",
    letterSpacing: "0.8px",
    boxShadow: shadow.inset,
  }),

  dot: (): CSSProperties => ({
    width: "7px",
    height: "7px",
    borderRadius: "999px",
    background: "#d4a574",
    border: `1px solid ${tecaColors.line}`,
    flexShrink: 0,
  }),

  marker: (): CSSProperties => ({
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    color: "#9a8475",
    letterSpacing: "0.3px",
  }),

  buttonPrimary: (): CSSProperties => ({
    border: "none",
    background: tecaColors.accent,
    borderRadius: "999px",
    color: "#fffaf5",
    cursor: "pointer",
    boxShadow: "0 5px 14px rgba(195,133,87,0.12)",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 500,
    fontSize: "20px",
    letterSpacing: "0.3px",
  }),

  navStrip: (): CSSProperties => ({
    backgroundColor: "rgba(255, 253, 249, 0.96)",
    borderRadius: "20px",
    border: `1px solid ${tecaColors.line}`,
    boxShadow: "0 4px 16px rgba(90,60,38,0.06)",
  }),
}

export const tecaType = {
  editorialLeft: {
    textAlign: "left" as const,
  },
  bodyProse: {
    ...tecaFont.prose,
    fontSize: "17px",
    textAlign: "left" as const,
    margin: 0,
  },
  /** @deprecated use bodyProse */
  bodyPoetic: {
    ...tecaFont.prose,
    fontSize: "17px",
    textAlign: "left" as const,
    margin: 0,
  },
  labelSmall: {
    ...tecaFont.label,
    margin: "0 0 6px",
    textAlign: "left" as const,
  },
  fichaLine: {
    width: "100%",
    border: "none",
    borderBottom: `1px solid ${tecaColors.line}`,
    background: "transparent",
    padding: "4px 0 10px",
    outline: "none",
    textAlign: "left" as const,
    ...tecaFont.handLine,
  },
}

export const diaryMarkerChoices = [
  { id: "folha", label: "folha" },
  { id: "chuva", label: "chuva" },
  { id: "flor", label: "flor" },
  { id: "pedra", label: "pedra" },
  { id: "vento", label: "vento" },
  { id: "céu", label: "céu" },
  { id: "mar", label: "mar" },
  { id: "luz", label: "luz" },
] as const

export function isEmojiIcon(icon: string): boolean {
  return /[\u{1F300}-\u{1FAFF}]/u.test(icon)
}

export function displayMarker(icon: string): string {
  if (isEmojiIcon(icon)) return "descoberta"
  return icon
}

/** raios alternados para ritmo artesanal em listas */
export function tecaRadiusAt(index: number): number {
  const order = [tecaRadius.lg, tecaRadius.md, tecaRadius.xl, tecaRadius.sm]
  return order[index % order.length]
}
