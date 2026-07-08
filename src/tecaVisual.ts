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

/** Caveat — títulos de portal e títulos de página (mesma voz do Ateliê) */
export const tecaPageTitleFontFamily = "'Caveat', cursive"

export const tecaFont = {
  portalTitle: {
    fontFamily: tecaPageTitleFontFamily,
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

  /** Microtextos / etiquetas — Cormorant */
  micro: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 600,
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
    ...tecaFont.portalTitle,
    fontSize: "28px",
    fontWeight: 400,
    color: "#705a4d",
    textAlign: "center",
    margin: `${tecaSpacing.sectionTop}px 0 0`,
    lineHeight: 1.08,
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

/**
 * Sistema visual do fichário de explorador.
 *
 * ÁTOMO CENTRAL: a FICHA — cada descoberta gera uma ficha.
 * Universos = coleções de fichas · Meu Mundo = fichário de fichas ·
 * Coleções = agrupamentos · Clube = novas fichas · Ateliê = objetos das fichas.
 *
 * Cinco componentes: 1 divisória · 2 aba · 3 ficha · 4 etiqueta · 5 registro
 */
const ficharioMaterial = {
  line: "rgba(196, 165, 141, 0.34)",
  lineDashed: "rgba(196, 165, 141, 0.38)",
  lineSoft: "rgba(196, 165, 141, 0.28)",
  paper: "rgba(255, 253, 249, 0.72)",
  paperSolid: tecaColors.paperFicha,
  abaPaper:
    "linear-gradient(180deg, rgba(255,251,245,0.98) 0%, rgba(248,236,220,0.9) 100%)",
  etiquetaPaper:
    "linear-gradient(180deg, rgba(255,253,249,0.98) 0%, rgba(248,239,228,0.88) 100%)",
  spine:
    "linear-gradient(180deg, #dcc9b4 0%, #c9b39a 48%, #dcc9b4 100%)",
} as const

export type FicharioChapterId = "exploracao" | "meuMundo" | "atelie" | "clube"

/** Marcadores de capítulo — abas laterais da Home */
export const ficharioChapterAba = {
  exploracao: { label: "exploração", background: "#7F95A6" },
  meuMundo: { label: "meu mundo", background: "#8A9870" },
  atelie: { label: "ateliê", background: "#B47A63" },
  clube: { label: "clube", background: "#B99B5C" },
} as const satisfies Record<
  FicharioChapterId,
  { label: string; background: string }
>

export const tecaFichario = {
  material: ficharioMaterial,

  /** COMPONENTE 1 — divisória: separa capítulos do fichário */
  divisoria: (): CSSProperties => ({
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    gap: 0,
    marginBottom: "12px",
    overflow: "hidden",
  }),

  divisoriaCorpo: (): CSSProperties => ({
    flex: 1,
    minWidth: 0,
    padding: "14px 12px 14px",
    borderRadius: "0 16px 16px 0",
    border: `1px dashed ${ficharioMaterial.line}`,
    background: ficharioMaterial.paper,
  }),

  divisoriaSpine: (): CSSProperties => ({
    position: "absolute",
    left: 0,
    top: "6%",
    bottom: "6%",
    width: "10px",
    borderRadius: "0 5px 5px 0",
    background: ficharioMaterial.spine,
    opacity: 0.72,
    zIndex: 0,
  }),

  /** COMPONENTE 2 — aba capítulo: bloco sólido editorial (sem ícone) */
  abaCapitulo: (background: string): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    width: "34px",
    minWidth: "34px",
    maxWidth: "34px",
    padding: "16px 4px",
    borderRadius: "12px 0 0 12px",
    border: "1px solid rgba(72, 48, 32, 0.1)",
    borderRight: "none",
    background,
    boxShadow: "inset -1px 0 0 rgba(255,255,255,0.08)",
    flexShrink: 0,
  }),

  abaCapituloLabel: (): CSSProperties => ({
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "11px",
    fontWeight: 500,
    fontStyle: "normal",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#F8F4EE",
    margin: 0,
    textAlign: "center",
    lineHeight: 1.15,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    whiteSpace: "nowrap",
  }),

  /** @deprecated Preferir abaCapitulo — aba papelada legada */
  aba: (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    width: "30px",
    minWidth: "30px",
    maxWidth: "30px",
    padding: "12px 3px",
    borderRadius: "12px 0 0 12px",
    border: `1px solid ${ficharioMaterial.line}`,
    borderRight: "none",
    background: ficharioMaterial.abaPaper,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
    flexShrink: 0,
  }),

  abaMapa: (): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    minHeight: "72px",
    marginRight: "-2px",
    borderRadius: "10px 0 0 10px",
    border: `1px solid ${ficharioMaterial.line}`,
    borderRight: "none",
    background: ficharioMaterial.abaPaper,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
    fontSize: "18px",
    lineHeight: 1,
    flexShrink: 0,
  }),

  abaIcon: (): CSSProperties => ({
    fontSize: "14px",
    lineHeight: 1,
    flexShrink: 0,
  }),

  abaLabel: (): CSSProperties => ({
    ...tecaFont.micro,
    fontSize: "8px",
    letterSpacing: "0.14em",
    margin: 0,
    textAlign: "center",
    lineHeight: 1.1,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    whiteSpace: "nowrap",
  }),

  /** COMPONENTE 3 — ficha: átomo do sistema (descoberta catalograda) */
  ficha: (): CSSProperties => ({
    position: "relative",
    background: ficharioMaterial.paper,
    borderRadius: tecaRadius.lg,
    overflow: "hidden",
    border: `1px dashed ${ficharioMaterial.lineDashed}`,
    boxShadow: "none",
    transition: "border-color 0.2s ease",
  }),

  fichaPerforacaoWrap: (): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    padding: "7px 14px 6px",
    borderBottom: `1px dashed ${ficharioMaterial.lineSoft}`,
    background: "rgba(248,239,228,0.38)",
  }),

  fichaPerforacao: (): CSSProperties => ({
    display: "flex",
    gap: "5px",
    alignItems: "center",
    flexShrink: 0,
  }),

  fichaFuro: (): CSSProperties => ({
    width: "5px",
    height: "5px",
    borderRadius: "999px",
    border: `1px solid rgba(196, 165, 141, 0.42)`,
    background: "rgba(255,253,249,0.55)",
    flexShrink: 0,
  }),

  fichaCodigo: (): CSSProperties => ({
    ...tecaFont.micro,
    fontSize: "9px",
    letterSpacing: "1.5px",
    color: "#b5a090",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  }),

  fichaCodigoCompact: (): CSSProperties => ({
    ...tecaFont.micro,
    fontSize: "8px",
    letterSpacing: "1.3px",
    color: "#b5a090",
    textTransform: "uppercase",
    marginBottom: "6px",
    display: "block",
  }),

  fichaReferencia: (): CSSProperties => ({
    position: "relative",
    background: ficharioMaterial.paper,
    borderRadius: tecaRadius.lg,
    overflow: "hidden",
    border: `1px dashed ${ficharioMaterial.lineDashed}`,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
    minHeight: "100%",
  }),

  /** Ficha de memória — diário do explorador */
  fichaMemoria: (): CSSProperties => ({
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    border: `1px dashed ${ficharioMaterial.line}`,
    background:
      "repeating-linear-gradient(180deg, transparent 0 25px, rgba(196,165,141,0.1) 25px 26px), rgba(255,253,249,0.92)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)",
  }),

  fichaMemoriaBody: (): CSSProperties => ({
    padding: "12px 16px 16px 22px",
    position: "relative",
  }),

  fichaMemoriaSpine: (): CSSProperties => ({
    position: "absolute",
    left: 0,
    top: "14%",
    bottom: "14%",
    width: "6px",
    borderRadius: "0 4px 4px 0",
    background: "rgba(220,201,180,0.45)",
    zIndex: 0,
  }),

  fichaMemoriaTitle: (): CSSProperties => ({
    margin: "0 0 8px",
    ...tecaFont.portalTitle,
    fontSize: "26px",
    lineHeight: 0.95,
    textAlign: "left",
  }),

  /** Ficha complemento — objetos do ateliê ligados às descobertas */
  fichaComplemento: (): CSSProperties => ({
    position: "relative",
    background: ficharioMaterial.paper,
    borderRadius: tecaRadius.lg,
    overflow: "hidden",
    border: `1px dashed ${ficharioMaterial.lineDashed}`,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
  }),

  fichaComplementoEnvelope: (): CSSProperties => ({
    background: "#f3e8dc",
    borderStyle: "dashed",
    borderColor: "rgba(195, 150, 110, 0.42)",
  }),

  fichaComplementoAlbum: (): CSSProperties => ({
    background: ficharioMaterial.paperSolid,
    border: `1px solid ${tecaColors.lineSoft}`,
    boxShadow:
      "0 10px 28px rgba(120,90,60,0.06), inset 0 0 0 1px rgba(255,253,249,0.5)",
  }),

  fichaComplementoTitle: (): CSSProperties => ({
    margin: 0,
    ...tecaFont.heading,
    fontSize: "20px",
    lineHeight: 1.1,
    textAlign: "left",
  }),

  fichaSelected: (): CSSProperties => ({
    border: `1px solid ${ficharioMaterial.line}`,
    boxShadow: "0 8px 22px rgba(120,90,60,0.06)",
  }),

  fichaCompact: (): CSSProperties => ({
    minHeight: "118px",
    padding: "12px 12px 11px",
    borderRadius: "16px",
    border: `1px solid ${tecaColors.line}`,
    background: ficharioMaterial.paperSolid,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }),

  fichaButton: (): CSSProperties => ({
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  }),

  fichaHeader: (): CSSProperties => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    padding: "16px 16px 10px",
  }),

  fichaTitle: (): CSSProperties => ({
    margin: 0,
    ...tecaFont.portalTitle,
    fontSize: "34px",
    lineHeight: 0.95,
    textAlign: "left",
  }),

  fichaImage: (): CSSProperties => ({
    width: "100%",
    aspectRatio: "5 / 3",
    objectFit: "cover",
    display: "block",
  }),

  /** Capa editorial — preenche o card inteiro */
  fichaEditorialCoverCard: (): CSSProperties => ({
    padding: 0,
    aspectRatio: "1 / 1",
    position: "relative",
    overflow: "hidden",
  }),

  fichaEditorialCapaImage: (): CSSProperties => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: tecaRadius.lg,
  }),

  fichaBody: (): CSSProperties => ({
    padding: "12px 16px 14px",
  }),

  /** COMPONENTE 4 — etiqueta: ações e marcadores (não é botão de app) */
  etiqueta: (): CSSProperties => ({
    display: "inline-block",
    fontSize: "11px",
    letterSpacing: "1.6px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    border: `1px dashed ${tecaColors.lineSoft}`,
    borderRadius: "4px",
    padding: "5px 12px",
    background: tecaColors.paper,
  }),

  etiquetaAction: (): CSSProperties => ({
    display: "block",
    width: "100%",
    border: `1px dashed rgba(196, 165, 141, 0.48)`,
    borderRadius: "6px",
    background: ficharioMaterial.etiquetaPaper,
    padding: "11px 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "0.35px",
    color: tecaColors.text,
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
    WebkitTapHighlightColor: "transparent",
  }),

  /** COMPONENTE 5 — registro: anotações de campo e metadados */
  registro: (): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    paddingTop: "10px",
    borderTop: `1px dashed ${ficharioMaterial.lineSoft}`,
  }),

  registroRow: (): CSSProperties => ({
    margin: 0,
    display: "flex",
    gap: "8px",
    alignItems: "baseline",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "11px",
    lineHeight: 1.4,
    color: "#b5a090",
  }),

  registroLabel: (): CSSProperties => ({
    flexShrink: 0,
    minWidth: "72px",
    fontSize: "10px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    fontWeight: 600,
    opacity: 0.75,
  }),

  registroValor: (): CSSProperties => ({
    opacity: 0.88,
  }),

  /** @deprecated Usar divisoriaCorpo */
  corpo: (): CSSProperties => tecaFichario.divisoriaCorpo(),

  /** @deprecated Usar divisoriaSpine */
  spine: (): CSSProperties => tecaFichario.divisoriaSpine(),

  /** @deprecated Usar etiquetaAction */
  action: (): CSSProperties => tecaFichario.etiquetaAction(),
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

  /** @deprecated Usar tecaFichario.ficha() ou fichaCompact() */
  ficha: (radius: number = tecaRadius.md): CSSProperties => ({
    ...tecaFichario.ficha(),
    borderRadius: radius,
    padding: "22px 18px 24px",
    border: `1px solid ${tecaColors.lineSoft}`,
    boxShadow: "0 6px 18px rgba(120,90,60,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
  }),

  /** @deprecated Usar tecaFichario.etiqueta() */
  etiqueta: (): CSSProperties => tecaFichario.etiqueta(),

  /** @deprecated Usar tecaFichario.etiquetaAction() */
  buttonPrimary: (): CSSProperties => tecaFichario.etiquetaAction(),

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
