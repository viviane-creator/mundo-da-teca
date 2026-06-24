import type { CSSProperties } from "react"
import { tecaColors, tecaFichario, tecaFont, tecaHierarchy, tecaObjects, tecaRadius, tecaSpacing, tecaType } from "../tecaVisual"

const theme = {
  text: "#6a4f3c",
  muted: "#8b7668",
  line: "#ead8c5",
  accent: "#c88757",
}
export const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background: "#e8e0d5",
    display: "flex",
    justifyContent: "center",
    padding: "12px 8px",
    fontFamily: "'Nunito', sans-serif",
  },

  appShell: {
    width: "100%",
    maxWidth: "520px",
    minHeight: "92vh",
    background: tecaColors.shell,
    borderRadius: "42px",
    overflow: "hidden",
    border: "1px solid rgba(232, 210, 190, 0.8)",
    boxShadow: "0 22px 70px rgba(90,60,30,0.13)",
    position: "relative",
    paddingBottom: "98px",
  },

  homeHeroWrap: {
    position: "relative",
    width: "100%",
  },

  homeHeroImage: {
    width: "100%",
    display: "block",
  },

  homeLogo: {
    position: "absolute",
    top: "52px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "185px",
    zIndex: 5,
    opacity: 0.96,
  },

  heroFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "130px",
    background:
      "linear-gradient(180deg, rgba(246,237,226,0) 0%, #f6ede2 92%)",
  },

  homeContent: {
    position: "relative",
    zIndex: 6,
    padding: "0 24px 28px",
    marginTop: "-24px",
  },

  kicker: {
    color: "#b3815f",
    fontSize: "10px",
    letterSpacing: "5px",
    textTransform: "uppercase",
    opacity: 0.75,
    textAlign: "center",
    margin: "0 0 12px",
  },

  homeTitle: {
    textAlign: "center",
    fontSize: "48px",
    margin: "0 0 12px",
    ...tecaFont.portalTitle,
  },

  homeIntro: {
    textAlign: "center",
    fontSize: "20px",
    margin: "0 10px 22px",
    ...tecaFont.prose,
  },

  coverWrap: {
    position: "relative",
    height: "270px",
    overflow: "hidden",
  },

  coverImage: {
    width: "100%",
    borderRadius: 28,
    objectFit: "cover",
    marginBottom: 34,
  },

  smallLogo: {
    position: "absolute",
    top: "28px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "118px",
    opacity: 0.92,
    zIndex: 5,
  },

  coverFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "110px",
    background:
      "linear-gradient(180deg, rgba(246,237,226,0) 0%, #f6ede2 92%)",
  },

  pageContent: {
    position: "relative",
    zIndex: 6,
    padding: "0 24px 28px",
    marginTop: "-22px",
  },

  pageTitle: {
    ...tecaHierarchy.l1PageTitle,
  },

  pageHeroBlock: {
    textAlign: "center",
    paddingTop: "8px",
    marginBottom: 0,
  },

  pageHeroTitle: {
    ...tecaHierarchy.l1PageTitle,
  },

  pageHeroPoetic: {
    ...tecaHierarchy.l2Poetic,
  },

  pageHeroSubtitle: {
    ...tecaHierarchy.l4Subtitle,
    marginTop: `${tecaSpacing.sectionTitleToSubtitle}px`,
    marginBottom: 0,
  },

  pageIntro: {
    fontSize: "17px",
    textAlign: "left",
    margin: "0 0 26px",
    ...tecaHierarchy.l5Body,
  },

  subPage: {
    padding: "24px 24px 28px",
  },

  backButton: {
    border: "none",
    background: "transparent",
    color: "#9a7f6d",
    fontSize: "17px",
    cursor: "pointer",
    padding: "0 0 18px",
    textAlign: "left",
    ...tecaFont.prose,
  },

  pageIntroBlock: {
    marginBottom: "8px",
  },

  subPageImage: {
    width: "100%",
    borderRadius: "28px",
    objectFit: "cover",
    display: "block",
    marginBottom: "22px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.06)",
  },

  /** Abertura de capítulo — página ilustrada, sem moldura de card */
  playUniverseChapterOpening: {
    display: "block",
    width: "calc(100% + 48px)",
    maxWidth: "none",
    margin: "0 -24px",
    aspectRatio: "1 / 1",
    objectFit: "contain",
    objectPosition: "center top",
    background:
      "linear-gradient(180deg, #faf6f0 0%, #f3ebe2 52%, #ebe3da 100%)",
    boxShadow: "0 18px 42px rgba(120,90,60,0.07)",
    border: "none",
    borderRadius: 0,
  },

  playUniverseInviteWrap: {
    margin: "24px 0 0",
    paddingTop: "0",
    borderTop: "none",
  },

  page: {
    padding: "24px 24px 28px",
    display: "flex",
    flexDirection: "column",
  },

  discoveryButton: {
    marginTop: 28,
    ...tecaFichario.etiquetaAction(),
    cursor: "pointer",
  },

  ficharioAction: {
    ...tecaFichario.etiquetaAction(),
  },

  tipBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    background: tecaColors.paperNote,
    borderRadius: tecaRadius.sm,
    padding: "14px 16px",
    marginTop: 12,
    color: "#6a4f3c",
    fontSize: "16px",
    lineHeight: 1.5,
    border: `1px solid ${theme.line}`,
    boxShadow: "0 2px 8px rgba(120,90,60,0.03)",
    fontFamily: "'Cormorant Garamond', serif",
    textAlign: "left",
  },

  tipDot: {
    ...tecaObjects.dot(),
    marginTop: "6px",
  },

  rewardBox: {
    marginTop: 28,
    background: tecaColors.paperWarm,
    borderRadius: tecaRadius.lg,
    padding: "22px 18px",
    textAlign: "left",
    color: "#6a4f3c",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 22px rgba(120,90,60,0.05)",
  },

  rewardTitle: {
    margin: "0 0 10px",
    fontSize: "26px",
    ...tecaFont.heading,
  },

  rewardItem: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
  },

  rewardNote: {
    margin: 0,
    fontSize: "13px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#9a8475",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },

  tag: {
    ...tecaType.labelSmall,
    textAlign: "center",
  },

  noteText: {
    ...tecaType.bodyProse,
    lineHeight: 1.75,
    textAlign: "center",
  },

  noteTextLong: {
    ...tecaType.bodyProse,
    lineHeight: 1.75,
    textAlign: "left",
  },

  sectionTitle: {
    textAlign: "center",
    color: "#8a6f5d",
    marginTop: "24px",
    marginBottom: "18px",
    fontSize: "30px",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 400,
  },

  homeSectionLead: {
    textAlign: "left",
    color: "#8a6f5d",
    marginTop: "4px",
    marginBottom: "22px",
    fontSize: "24px",
    lineHeight: 1.15,
    ...tecaFont.heading,
  },

  homeSectionBlock: {
    marginTop: `${tecaSpacing.poeticToSection}px`,
  },

  homeChapterSection: {
    marginTop: "4px",
  },

  homeChapterDivider: {
    margin: "44px 0 40px",
    height: "1px",
    background:
      "linear-gradient(90deg, rgba(194,165,141,0) 0%, rgba(194,165,141,0.45) 30%, rgba(194,165,141,0.45) 70%, rgba(194,165,141,0) 100%)",
  },

  homeV2MeuMundoCard: {
    position: "relative",
    padding: "2px 0 4px",
  },

  homeV2MeuMundoInner: {
    position: "relative",
    padding: "0",
  },

  homeV2MeuMundoSpine: {
    position: "absolute",
    left: 0,
    top: "10%",
    bottom: "16%",
    width: "5px",
    borderRadius: "0 3px 3px 0",
    background: "rgba(220,201,180,0.42)",
    boxShadow: "inset -1px 0 0 rgba(255,255,255,0.35)",
  },

  homeV2MeuMundoHeroWash: {
    position: "absolute",
    right: "-4px",
    top: "-10px",
    width: "108px",
    height: "72px",
    pointerEvents: "none",
    background:
      "radial-gradient(ellipse at 72% 28%, rgba(246,237,226,0.62) 0%, rgba(246,237,226,0) 68%)",
    opacity: 0.85,
  },

  homeV2MeuMundoPerforation: {
    display: "flex",
    gap: "5px",
    margin: "0 0 12px",
    paddingLeft: "1px",
  },

  homeV2MeuMundoFuro: {
    width: "5px",
    height: "5px",
    borderRadius: "999px",
    border: "1px solid rgba(196, 165, 141, 0.42)",
    background: "rgba(255,253,249,0.55)",
    flexShrink: 0,
  },

  homeV2MeuMundoHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "8px",
    marginBottom: "8px",
    flexWrap: "wrap",
  },

  homeV2MeuMundoIdEtiqueta: {
    ...tecaFichario.etiqueta(),
    fontSize: "8px",
    letterSpacing: "1.7px",
    padding: "4px 9px",
    background: "rgba(255,253,249,0.84)",
  },

  homeV2MeuMundoStamp: {
    ...tecaFont.micro,
    fontSize: "7px",
    letterSpacing: "1.3px",
    color: "#b8987a",
    border: "1px dashed rgba(196,165,141,0.42)",
    borderRadius: "999px",
    padding: "5px 9px",
    transform: "rotate(-7deg)",
    opacity: 0.7,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  homeSectionHeading: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    marginBottom: `${tecaSpacing.sectionTitleToSubtitle}px`,
  },

  homeSectionPoetic: {
    margin: "0 0 18px",
    ...tecaHierarchy.l5Body,
    textAlign: "left",
  },

  homeSectionSubtitle: {
    ...tecaHierarchy.l4Subtitle,
    marginTop: 0,
    lineHeight: 1.5,
    maxWidth: "36ch",
  },

  sectionHeading: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    marginBottom: `${tecaSpacing.subtitleToContent}px`,
  },

  homeEditorialDivider: {
    margin: "20px 0 18px",
    height: "1px",
    background:
      "linear-gradient(90deg, rgba(194,165,141,0) 0%, rgba(194,165,141,0.55) 30%, rgba(194,165,141,0.55) 70%, rgba(194,165,141,0) 100%)",
  },

  planCardsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "14px",
  },

  planCard: {
    padding: "18px 16px 16px",
    textAlign: "left",
    ...tecaFichario.ficha(),
    borderStyle: "dashed",
  },

  planCardTitle: {
    margin: "0 0 12px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "26px",
    fontWeight: 600,
    color: "#6a4f3c",
    lineHeight: 1.1,
  },

  planBenefitsList: {
    margin: "0 0 18px",
    padding: "0 0 0 18px",
    listStyle: "none",
  },

  planBenefitItem: {
    position: "relative",
    marginBottom: "8px",
    paddingLeft: "4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    lineHeight: 1.4,
    color: "#8b7668",
  },

  planCardButton: {
    ...tecaFichario.etiquetaAction(),
    marginTop: "8px",
    fontSize: "18px",
  },

  homeBrincadeirasButton: {
    width: "100%",
    marginTop: "4px",
    ...tecaObjects.buttonPrimary(),
    padding: "14px 20px",
    fontSize: "24px",
      },

  homeUniversosButton: {
    width: "100%",
    marginTop: "4px",
    ...tecaObjects.buttonPrimary(),
    padding: "14px 20px",
    fontSize: "24px",
      },

  homePathGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
  },

  homePathButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  },

  homePathCard: {
    position: "relative",
    borderRadius: "22px",
    border: "1px solid #ead8c5",
    overflow: "hidden",
    minHeight: "220px",
    backgroundColor: "#d9c9b9",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 10px 24px rgba(120,90,60,0.1)",
  },

  homePathOverlay: {
    minHeight: "220px",
    display: "flex",
    alignItems: "flex-end",
    background:
      "linear-gradient(180deg, rgba(248,239,228,0.22) 0%, rgba(242,230,216,0.52) 52%, rgba(236,223,208,0.86) 100%)",
    backdropFilter: "saturate(0.82)",
  },

  homePathLabel: {
    margin: "0",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "30px",
    lineHeight: 1,
    color: "#6a4f3c",
    fontWeight: 400,
    textAlign: "center",
  },

  homePathBody: {
    width: "100%",
    padding: "14px 14px 15px",
    minHeight: "96px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: "6px",
  },

  homePathText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    lineHeight: 1.2,
    color: "#7f6a5c",
    textAlign: "center",
  },

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
  },

  homePortalsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
    marginTop: "6px",
  },

  homePortalButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
  },

  homePortalCard: {
    ...tecaObjects.note(tecaRadius.md),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "156px",
    padding: "20px 12px 18px",
    textAlign: "center",
  },

  homePortalIcon: {
    fontSize: "52px",
    lineHeight: 1,
    marginBottom: "12px",
  },

  homePortalTitle: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    fontWeight: 500,
    color: theme.text,
    lineHeight: 1.15,
  },

  homePortalPhrase: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "13px",
    lineHeight: 1.35,
    color: theme.muted,
  },

  homeV2Journey: {
    position: "relative",
    padding: "6px 2px 4px 8px",
    borderRadius: "24px",
    border: `1px dashed rgba(196, 165, 141, 0.32)`,
    background:
      "linear-gradient(168deg, #fffdf9 0%, #f8efe5 48%, #f0e4d6 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.88)",
    overflow: "hidden",
  },

  homeFicharioSpine: {
    ...tecaFichario.divisoriaSpine(),
    zIndex: 0,
  },

  homeDivisoria: {
    ...tecaFichario.divisoria(),
    position: "relative",
    zIndex: 1,
    marginBottom: "14px",
  },

  homeDivisoriaAba: {
    ...tecaFichario.aba(),
  },

  homeDivisoriaAbaIcon: {
    ...tecaFichario.abaIcon(),
  },

  homeDivisoriaAbaLabel: {
    ...tecaFichario.abaLabel(),
    ...tecaHierarchy.l6Micro,
  },

  homeDivisoriaCorpo: {
    ...tecaFichario.divisoriaCorpo(),
  },

  homePlaceTitle: {
    ...tecaFont.portalTitle,
    fontSize: "clamp(28px, 8vw, 36px)",
    textAlign: "left",
    margin: `0 0 ${tecaSpacing.sectionTitleToSubtitle}px`,
    lineHeight: 0.95,
  },

  editorialDecorLayer: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
  },

  editorialDecorImage: {
    position: "absolute",
    objectFit: "cover",
    filter: "sepia(0.42) saturate(0.52) contrast(0.84) brightness(1.04)",
    mixBlendMode: "multiply",
  },

  editorialDecorContent: {
    position: "relative",
    zIndex: 1,
  },

  homeV2Manifesto: {
    position: "relative",
    overflow: "hidden",
    ...tecaObjects.note(tecaRadius.lg),
    borderLeft: "2px dashed rgba(195, 165, 141, 0.55)",
    padding: "22px 20px 22px 22px",
    background:
      "linear-gradient(135deg, rgba(255,253,249,0.98) 0%, rgba(248,239,228,0.92) 100%)",
  },

  homeV2SectionKicker: {
    ...tecaHierarchy.l6Micro,
  },

  homeV2UniversosWrap: {
    position: "relative",
    overflow: "visible",
    marginTop: "6px",
    padding: 0,
  },

  universosExploreMapWrap: {
    position: "relative",
    overflow: "hidden",
    marginTop: "8px",
  },

  /** Página colorida única — cobre título, subtítulo e mapa na Home */
  homeExploreSectionPaper: {
    margin: "-14px -12px -14px",
    padding: "14px 10px 12px",
    borderRadius: "0 16px 16px 0",
    background:
      "radial-gradient(ellipse at 20% 16%, rgba(217,196,173,0.14) 0%, transparent 54%), radial-gradient(ellipse at 82% 84%, rgba(210,220,228,0.18) 0%, transparent 50%), linear-gradient(168deg, #faf6f0 0%, #f4ece3 48%, #eef2f5 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
  },

  homeExploreMap: {
    position: "relative",
    width: "100%",
    marginTop: "8px",
  },

  homeExploreMapStage: {
    position: "relative",
    width: "100%",
    aspectRatio: "320 / 580",
    margin: "0 auto",
    overflow: "visible",
    boxSizing: "border-box",
  },

  homeExploreMapStageHome: {
    padding: "2px 2px 6px",
  },

  homeExploreMapStageFull: {
    padding: 0,
    aspectRatio: "864 / 1821",
  },

  homeExploreMapStops: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
  },

  /** Arte de fundo do atlas — apenas na página Universos */
  homeExploreMapAtlasBg: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(255, 253, 249, 0.08), rgba(255, 253, 249, 0.08)), url(/images/mapa-exploracao.webp)",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  homeExploreMapFull: {
    marginTop: 0,
  },

  universosExploreSection: {
    marginTop: "0",
  },

  universosExploreKicker: {
    ...tecaHierarchy.l6Micro,
    marginBottom: "8px",
  },

  homeExploreMapSvg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "visible",
    zIndex: 1,
  },

  homeExploreStop: {
    position: "absolute",
    border: "none",
    background: "transparent",
    padding: "0",
    margin: 0,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
    overflow: "visible",
    WebkitTapHighlightColor: "transparent",
  },

  /** Área clicável compacta — evita sobreposição entre medalhões vizinhos */
  homeExploreStopHit: {
    width: "104px",
    height: "104px",
    maxWidth: "none",
  },

  homeExploreStopHitFull: {
    width: "146px",
    height: "146px",
    maxWidth: "none",
  },

  homeExploreStopFull: {
    maxWidth: "none",
  },

  homeExploreStopTab: {
    ...tecaFichario.abaMapa(),
  },

  homeExploreStopBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
    padding: 0,
  },

  homeExploreStopCenter: {
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },

  homeExploreStopLeft: {
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },

  homeExploreStopRight: {
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },

  homeExploreMarker: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "287px",
    height: "287px",
    pointerEvents: "none",
  },

  homeExploreMarkerVisual: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  homeExploreMarkerFull: {
    width: "359px",
    height: "359px",
  },

  homeExploreMarkerRingOuter: {
    display: "none",
  },

  homeExploreMarkerRing: {
    position: "absolute",
    inset: "-2px",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    pointerEvents: "none",
    opacity: 0.85,
  },

  homeExploreMarkerIcon: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
  },

  universeIconMarker: {
    width: "132px",
    height: "132px",
    maxWidth: "min(132px, 30vw)",
    maxHeight: "min(132px, 30vw)",
    objectFit: "contain",
    display: "block",
  },

  universeIconMarkerFull: {
    width: "165px",
    height: "165px",
    maxWidth: "min(165px, 36vw)",
    maxHeight: "min(165px, 36vw)",
    objectFit: "contain",
    display: "block",
  },

  universeIconAba: {
    width: "18px",
    height: "18px",
    objectFit: "contain",
    display: "block",
  },

  universeIconPanel: {
    width: "72px",
    height: "72px",
    objectFit: "contain",
    display: "block",
  },

  universeIconEmblem: {
    width: "min(380px, 86vw)",
    height: "min(380px, 86vw)",
    objectFit: "contain",
    display: "block",
  },

  homeExploreStopTitle: {
    ...tecaFont.prose,
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: "0.35px",
    color: "#8a7468",
    marginTop: "2px",
    textAlign: "center",
  },

  homeV2TrailEnd: {
    textAlign: "center",
    margin: "8px 0 0",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    color: "#a89486",
    letterSpacing: "0.3px",
  },

  homeV2DestinationWrap: {
    position: "relative",
    margin: "20px 0 16px",
    padding: "8px 0",
  },

  homeV2Destination: {
    position: "relative",
    padding: "40px 26px 36px 32px",
    borderRadius: "36px",
    border: `1px solid ${theme.line}`,
    background:
      "radial-gradient(ellipse at 88% 12%, rgba(217,196,173,0.22) 0%, transparent 42%), linear-gradient(168deg, #fffdf9 0%, #f7efe5 42%, #efe3d4 78%, #e8dccf 100%)",
    boxShadow:
      "0 22px 52px rgba(120,90,60,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
    overflow: "hidden",
  },

  homeV2DestinationSpine: {
    position: "absolute",
    left: 0,
    top: "12%",
    bottom: "12%",
    width: "10px",
    borderRadius: "0 6px 6px 0",
    background:
      "linear-gradient(180deg, #dcc9b4 0%, #c9b39a 50%, #dcc9b4 100%)",
    boxShadow: "inset -1px 0 0 rgba(255,255,255,0.35)",
    opacity: 0.85,
  },

  homeV2DestinationArrow: {
    textAlign: "center",
    margin: "0 0 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    color: "#b3815f",
    letterSpacing: "0.8px",
  },

  homeV2FicharioIllustration: {
    position: "relative",
    height: "220px",
    margin: "0 auto 28px",
    maxWidth: "340px",
  },

  homeV2FicharioPage: {
    position: "absolute",
    width: "155px",
    height: "155px",
    objectFit: "cover",
    borderRadius: "18px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 12px 28px rgba(120,90,60,0.13)",
  },

  homeV2FicharioPageBack: {
    left: "4%",
    top: "22px",
    transform: "rotate(-10deg)",
    opacity: 0.88,
    zIndex: 1,
  },

  homeV2FicharioPageMid: {
    left: "50%",
    top: "4px",
    transform: "translateX(-50%) rotate(2deg)",
    zIndex: 2,
    width: "172px",
    height: "172px",
  },

  homeV2FicharioPageFront: {
    right: "2%",
    top: "26px",
    transform: "rotate(9deg)",
    opacity: 0.92,
    zIndex: 3,
  },

  homeV2DestinationHeading: {
    ...tecaHierarchy.l1PageTitle,
    marginBottom: `${tecaSpacing.titleToPoetic}px`,
  },

  homeV2DestinationPromise: {
    ...tecaHierarchy.l2Poetic,
    marginBottom: `${tecaSpacing.sectionTitleToSubtitle}px`,
  },

  homeV2DestinationTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    margin: "0 0 20px",
  },

  homeV2DestinationTag: {
    ...tecaFichario.etiqueta(),
    fontSize: "8px",
    letterSpacing: "1.8px",
    background: "rgba(255, 253, 249, 0.82)",
  },

  homeV2SoftButton: {
    ...tecaFichario.etiquetaAction(),
    marginTop: "12px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  },

  homeV2DestinationButton: {
    ...tecaFichario.etiquetaAction(),
    marginTop: "2px",
  },

  homeV2PathSection: {
    marginTop: "0",
    padding: 0,
    borderRadius: 0,
    border: "none",
    background: "transparent",
    textAlign: "left",
  },

  homeV2PathStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "4px",
  },

  homeV2PathCard: {
    position: "relative",
    overflow: "hidden",
    padding: "0",
    textAlign: "left",
    background: "transparent",
    borderRadius: 0,
    border: "none",
    boxShadow: "none",
  },

  homeV2PathCardInner: {
    position: "relative",
    zIndex: 1,
    ...tecaFichario.divisoriaCorpo(),
    borderRadius: "16px",
    padding: "18px 16px 16px",
  },

  homeV2PathCardDecor: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
  },

  homeV2PathCardDecorImg: {
    position: "absolute",
    objectFit: "contain",
    opacity: 0.42,
    filter: "saturate(0.85) sepia(0.12)",
  },

  homeV2PathJourneyTitle: {
    margin: "0 0 10px",
    ...tecaFont.portalTitle,
    fontSize: "26px",
    lineHeight: 1.05,
  },

  homeV2PathPlanName: {
    margin: "0 0 14px",
    ...tecaHierarchy.l6Micro,
    fontSize: "10px",
    opacity: 0.8,
  },

  homeV2PathJourneyText: {
    margin: "0 0 12px",
    ...tecaHierarchy.l5Body,
    fontSize: "16px",
    lineHeight: 1.5,
    color: theme.muted,
    textAlign: "left",
  },

  homeV2PathButton: {
    ...tecaFichario.etiquetaAction(),
    marginTop: "4px",
    fontSize: "18px",
  },

  homeV2AtelierShop: {
    position: "relative",
    padding: "2px 0 18px",
  },

  homeV2AtelierKicker: {
    ...tecaHierarchy.l6Micro,
    marginBottom: "8px",
  },

  homeV2AtelierFeatured: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 0,
    margin: "20px 0 0",
    padding: "18px 14px 16px",
    borderRadius: "18px",
    border: "1px dashed rgba(196, 165, 141, 0.38)",
    background:
      "radial-gradient(ellipse at 18% 82%, rgba(217,196,173,0.16) 0%, transparent 52%), radial-gradient(ellipse at 92% 8%, rgba(217,196,173,0.12) 0%, transparent 44%), rgba(255,253,249,0.94)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.92), 0 10px 28px rgba(120,90,60,0.06)",
  },

  homeV2AtelierFeaturedPedestal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "min(200px, 48vw)",
    marginBottom: "16px",
    borderRadius: "14px",
    background:
      "radial-gradient(ellipse at 50% 68%, rgba(217,196,173,0.22) 0%, transparent 68%), rgba(248,239,228,0.45)",
    border: "1px dashed rgba(196, 165, 141, 0.28)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
  },

  homeV2AtelierFeaturedImage: {
    width: "min(196px, 68vw)",
    height: "auto",
    maxHeight: "196px",
    objectFit: "contain",
    filter: "drop-shadow(0 10px 20px rgba(120,90,60,0.14))",
  },

  homeV2AtelierFeaturedTitle: {
    ...tecaFont.heading,
    fontSize: "clamp(24px, 6.5vw, 28px)",
    lineHeight: 1.08,
    margin: "0 0 10px",
    textAlign: "center",
  },

  homeV2AtelierFeaturedText: {
    ...tecaHierarchy.l5Body,
    fontSize: "16px",
    lineHeight: 1.55,
    margin: "0 0 16px",
    textAlign: "center",
    maxWidth: "none",
  },

  homeV2AtelierFeaturedButton: {
    ...tecaFichario.etiquetaAction(),
    marginTop: 0,
    fontSize: "18px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  },

  homeV2Cabinet: {
    display: "contents",
  },

  homeV2CabinetDecor: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 0,
  },

  homeV2CabinetDecorImg: {
    position: "absolute",
    objectFit: "cover",
    borderRadius: "10px",
    opacity: 0.09,
    filter: "saturate(0.75) sepia(0.15)",
  },

  homeV2CabinetDecorStamp: {
    position: "absolute",
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    border: "1px dashed rgba(196, 165, 141, 0.35)",
    opacity: 0.35,
  },

  homeV2CabinetInner: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },

  homeV2CabinetLead: {
    ...tecaHierarchy.l2Poetic,
    marginBottom: `${tecaSpacing.sectionTitleToSubtitle}px`,
  },

  homeV2CabinetShelf: {
    position: "absolute",
    left: "12px",
    right: "12px",
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(122,98,84,0.22), transparent)",
  },

  homeV2CabinetTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    margin: "0 0 18px",
  },

  homeV2CabinetTag: {
    ...tecaObjects.etiqueta(),
    fontSize: "8px",
    letterSpacing: "1.5px",
    background: "rgba(255, 253, 249, 0.75)",
  },

  worldsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  experienceCollection: {
    marginTop: "8px",
    paddingTop: "0",
  },

  experienceCollectionTitle: {
    ...tecaFont.portalTitle,
    fontSize: "28px",
    textAlign: "center",
    margin: "0 0 8px",
    lineHeight: 1,
  },

  experienceCollectionCount: {
    margin: "0 0 20px",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    color: theme.muted,
    letterSpacing: "0.2px",
  },

  experienceStack: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
  },

  experienceStackItem: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  experienceCardButton: {
    ...tecaFichario.fichaButton(),
  },

  experienceCard: {
    ...tecaFichario.ficha(),
  },

  experienceCardSelected: {
    ...tecaFichario.fichaSelected(),
  },

  experienceCardDiscoveryHeader: {
    ...tecaFichario.fichaHeader(),
  },

  experienceCardImage: {
    ...tecaFichario.fichaImage(),
  },

  experienceCardBody: {
    ...tecaFichario.fichaBody(),
  },

  experienceCardTitle: {
    ...tecaFichario.fichaTitle(),
  },

  clubeSeal: {
    flexShrink: 0,
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#a67c52",
    border: "1px solid #e2cdb8",
    borderRadius: "999px",
    padding: "5px 9px",
    background: "rgba(248, 236, 223, 0.7)",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    marginTop: "4px",
  },

  experienceCardInvite: {
    margin: "0 0 12px",
    ...tecaHierarchy.l5Body,
    fontSize: "16px",
    lineHeight: 1.5,
    color: theme.muted,
  },

  experienceCardMeta: {
    ...tecaFichario.registro(),
  },

  experienceCardMetaRow: {
    ...tecaFichario.registroRow(),
  },

  experienceCardMetaLabel: {
    ...tecaFichario.registroLabel(),
  },

  experienceCardMetaValue: {
    ...tecaFichario.registroValor(),
  },

  experienceDetail: {
    background: "transparent",
    borderRadius: tecaRadius.lg,
    padding: "12px 4px 4px",
    border: "none",
    borderTop: `1px dashed rgba(196, 165, 141, 0.35)`,
  },

  experienceDetailTitle: {
    margin: "0 0 14px",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "26px",
    color: theme.text,
  },

  experienceDetailSection: {
    marginBottom: "12px",
  },

  experienceDetailLabel: {
    margin: "0 0 4px",
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
  },

  experienceDetailText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    lineHeight: 1.5,
    color: "#7a6254",
  },

  atelierTopBar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "18px",
  },

  atelierIntroArea: {
    position: "relative",
    overflow: "hidden",
    marginBottom: 0,
    paddingBottom: 0,
  },

  atelierFichaKicker: {
    ...tecaHierarchy.l6Micro,
    textAlign: "left",
    marginBottom: "8px",
  },

  atelierShopHero: {
    position: "relative",
    textAlign: "center",
    marginBottom: 0,
  },

  atelierShopTitle: {
    ...tecaHierarchy.l1PageTitle,
  },

  atelierShopLead: {
    ...tecaHierarchy.l2Poetic,
  },

  atelierShopComplement: {
    ...tecaHierarchy.l4Subtitle,
    marginTop: `${tecaSpacing.sectionTitleToSubtitle}px`,
    marginBottom: 0,
  },

  atelierCategoryNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
    marginTop: "16px",
    marginBottom: 0,
  },

  atelierCategoryPill: {
    border: `1px dashed rgba(196, 165, 141, 0.45)`,
    background: "rgba(255, 253, 249, 0.82)",
    borderRadius: "999px",
    padding: "8px 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    color: theme.text,
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
  },

  atelierClubNote: {
    margin: "0 auto 24px",
    maxWidth: "320px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    lineHeight: 1.4,
    color: "#b5a090",
    textAlign: "center",
  },

  atelierCatalogSection: {
    marginBottom: "28px",
    scrollMarginTop: "12px",
  },

  atelierCatalogSectionFirst: {
    marginTop: `${tecaSpacing.poeticToSection}px`,
  },

  atelierCatalogSectionTitle: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    marginBottom: `${tecaSpacing.subtitleToContent}px`,
  },

  atelierCatalogStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  minhaCaixaLinkMain: {
    border: "none",
    background: "rgba(255, 253, 249, 0.75)",
    borderRadius: "999px",
    padding: "10px 20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    color: "#8a6f5d",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.line,
    boxShadow: "0 4px 14px rgba(120,90,60,0.05)",
  },

  minhaCaixaLink: {
    border: "none",
    background: "rgba(255, 253, 249, 0.6)",
    borderRadius: "999px",
    padding: "8px 14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    color: "#8a6f5d",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.line,
    flexShrink: 0,
  },

  minhaCaixaIcon: {
    fontSize: "16px",
    opacity: 0.85,
  },

  minhaCaixaCount: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "11px",
    background: "#efe0d0",
    color: "#8a6f5d",
    borderRadius: "999px",
    padding: "2px 7px",
    minWidth: "18px",
    textAlign: "center",
  },

  paperCatalog: {
    marginTop: "6px",
  },

  paperCatalogTitle: {
    textAlign: "center",
    color: "#8a6f5d",
    margin: "0 0 8px",
    fontSize: "28px",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 400,
  },

  paperCatalogIntro: {
    textAlign: "center",
    color: theme.muted,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    lineHeight: 1.5,
    margin: "0 2px 24px",
  },

  paperStack: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },

  paperCard: {
    background:
      "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "28px",
    overflow: "hidden",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.05)",
  },

  paperCardImage: {
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    display: "block",
  },

  paperCardBody: {
    padding: "18px 20px 22px",
  },

  paperCardTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "10px",
  },

  paperCollectionTag: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },

  paperStatusSeal: {
    fontSize: "9px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#9a7f6d",
    border: "1px solid #e8d8c8",
    borderRadius: "999px",
    padding: "4px 8px",
    background: "rgba(248, 240, 232, 0.8)",
    fontFamily: "'Nunito', sans-serif",
    textAlign: "right",
    lineHeight: 1.3,
  },

  paperCardTitleButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
  },

  paperCardTitle: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "34px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
  },

  paperCardPoetic: {
    margin: "0 0 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  paperPriceBlock: {
    marginBottom: "16px",
  },

  paperPrice: {
    margin: "0 0 4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    color: theme.text,
  },

  paperClubPrice: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    color: "#a67c52",
  },

  paperTakeHomeButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "linear-gradient(180deg, #f3e6d8 0%, #e8d5c3 100%)",
    borderRadius: "999px",
    padding: "14px 20px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "26px",
    color: theme.text,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(120,90,60,0.06)",
  },

  paperTakeHomeButtonDone: {
    opacity: 0.72,
    cursor: "default",
    background: "#f5ebe2",
  },

  paperCardDescription: {
    margin: "16px 0 0",
    paddingTop: "14px",
    borderTop: `1px solid ${theme.line}`,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    lineHeight: 1.55,
    color: "#7a6254",
  },

  paperPoeticLink: {
    marginTop: "12px",
    border: "none",
    background: "transparent",
    padding: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    color: "#9a7f6d",
    cursor: "pointer",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },

  minhaCaixaHero: {
    textAlign: "center",
    marginBottom: "8px",
  },

  minhaCaixaBadge: {
    ...tecaObjects.etiqueta(),
    marginBottom: "10px",
    display: "inline-block",
  },

  boxItem: {
    background: tecaColors.paper,
    borderRadius: tecaRadius.md,
    padding: "16px 18px",
    border: `1px solid ${theme.line}`,
  },

  boxItemTitle: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "28px",
    color: theme.text,
  },

  boxItemPoetic: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    color: theme.muted,
  },

  boxItemPrice: {
    margin: 0,
    fontSize: "13px",
    color: "#9a8475",
    fontFamily: "'Nunito', sans-serif",
  },

  paperBackToShopButton: {
    marginTop: "20px",
    width: "100%",
    border: "none",
    background: "transparent",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    color: "#9a7f6d",
    cursor: "pointer",
    padding: "12px",
  },

  minhaCaixaSummary: {
    margin: "8px 0 0",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
    color: "#8b7668",
    textAlign: "center",
  },

  minhaCaixaExpeditionButton: {
    marginTop: "24px",
    width: "100%",
    border: "none",
    borderRadius: "999px",
    padding: "16px 24px",
    background: "linear-gradient(135deg, #c88757 0%, #b8734a 100%)",
    color: "#fffaf5",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "28px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(195,133,87,0.18)",
  },

  boxItemOpenButton: {
    display: "flex",
    gap: "14px",
    alignItems: "flex-start",
    width: "100%",
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    textAlign: "left",
  },

  boxItemThumb: {
    width: "72px",
    height: "72px",
    objectFit: "cover",
    borderRadius: tecaRadius.md,
    flexShrink: 0,
    border: `1px solid ${theme.line}`,
  },

  boxItemContent: {
    flex: 1,
    minWidth: 0,
  },

  atelierProduct: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  atelierProductImageWrap: {
    borderRadius: tecaRadius.lg,
    overflow: "hidden",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 12px 32px rgba(120,90,60,0.06)",
  },

  atelierProductImage: {
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    display: "block",
  },

  atelierProductBody: {
    padding: "0 4px",
  },

  atelierProductMeta: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "8px 12px",
    marginBottom: "12px",
  },

  atelierProductCategory: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#9a7f6d",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },

  atelierProductCollection: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },

  atelierProductStatus: {
    fontSize: "9px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#9a7f6d",
    border: "1px solid #e8d8c8",
    borderRadius: "999px",
    padding: "4px 8px",
    background: "rgba(248, 240, 232, 0.8)",
    fontFamily: "'Nunito', sans-serif",
  },

  atelierProductTitle: {
    margin: "0 0 10px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "36px",
    color: theme.text,
    lineHeight: 1.15,
  },

  atelierProductPoetic: {
    margin: "0 0 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  atelierProductDescription: {
    margin: "0 0 20px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    lineHeight: 1.55,
    color: "#7a6254",
  },

  atelierProductPriceBlock: {
    marginBottom: "20px",
  },

  atelierProductPrice: {
    margin: "0 0 4px",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "20px",
    color: theme.text,
    fontWeight: 600,
  },

  atelierProductClubPrice: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    color: "#9a8475",
  },

  atelierProductSaveButton: {
    width: "100%",
    border: "none",
    borderRadius: "999px",
    padding: "16px 24px",
    background: "linear-gradient(135deg, #c88757 0%, #b8734a 100%)",
    color: "#fffaf5",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "28px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(195,133,87,0.18)",
  },

  atelierProductSaveButtonDone: {
    background: "rgba(248, 240, 232, 0.95)",
    color: "#9a8475",
    boxShadow: "none",
    cursor: "default",
  },

  atelierProductPoeticLink: {
    marginTop: "16px",
    border: "none",
    background: "transparent",
    fontSize: "17px",
    color: "#9a7f6d",
    cursor: "pointer",
    padding: 0,
    display: "block",
    fontFamily: "'Cormorant Garamond', serif",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },

  clubPage: {
    padding: "28px 24px 32px",
    maxWidth: "100%",
  },

  clubHeroImage: {
    width: "100%",
    maxWidth: "220px",
    display: "block",
    margin: "0 auto 24px",
    borderRadius: "20px",
    opacity: 0.92,
  },

  clubHeader: {
    textAlign: "center",
    marginBottom: "32px",
  },

  clubTitle: {
    margin: "0 0 10px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "42px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 1,
  },

  clubTagline: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  clubMemberCard: {
    ...tecaObjects.ficha(tecaRadius.lg),
    marginBottom: "24px",
    borderTop: `3px solid ${tecaColors.lineSoft}`,
  },

  clubFichaHint: {
    margin: "-8px 0 16px",
    fontSize: "14px",
    ...tecaFont.prose,
    color: "#9a8475",
  },

  clubMemberCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },

  clubSealBadge: {
    ...tecaObjects.seal(),
  },

  clubMemberNumber: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    color: "#9a8475",
  },

  clubMemberCardTitle: {
    margin: "0 0 6px",
    textAlign: "left",
    fontSize: "32px",
    ...tecaFont.portalTitle,
  },

  clubField: {
    marginBottom: "14px",
  },

  clubFieldLabel: {
    ...tecaType.labelSmall,
  },

  clubFieldLine: {
    ...tecaType.fichaLine,
  },

  clubBelongingCard: {
    ...tecaObjects.note(tecaRadius.md),
    marginBottom: "28px",
    textAlign: "left",
  },

  clubBelongingLead: {
    margin: "0 0 10px",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "16px",
    lineHeight: 1.55,
    color: theme.text,
    fontWeight: 600,
  },

  clubBelongingText: {
    ...tecaHierarchy.l5Body,
    ...tecaHierarchy.l5BodyCentered,
    margin: `0 auto ${tecaSpacing.poeticToSection}px`,
  },

  clubJoinButton: {
    ...tecaFichario.etiquetaAction(),
    fontSize: "20px",
  },

  clubPlansSection: {
    marginBottom: "8px",
    textAlign: "center",
  },

  clubPlanCardFocused: {
    borderRadius: "18px",
    boxShadow: "0 0 0 1px rgba(200,135,87,0.28), 0 10px 24px rgba(120,90,60,0.08)",
    transition: "box-shadow 0.35s ease",
  },

  clubEntryHeading: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    fontSize: "28px",
    marginBottom: "28px",
  },

  clubCarteirinhaSection: {
    marginTop: "8px",
    opacity: 0.92,
  },

  clubSecondaryLabel: {
    ...tecaHierarchy.l6Micro,
    fontStyle: "normal",
    marginBottom: "14px",
  },

  ficharioUniversosSection: {
    marginTop: "4px",
  },

  ficharioSectionLabel: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    textAlign: "left",
    marginBottom: `${tecaSpacing.sectionTitleToSubtitle}px`,
  },

  ficharioSectionIntro: {
    ...tecaHierarchy.l4Subtitle,
    textAlign: "left",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: `${tecaSpacing.subtitleToContent}px`,
  },

  ficharioUniversosStack: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  ficharioUniversePanel: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  ficharioUniverseHeaderButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    width: "100%",
    cursor: "pointer",
    textAlign: "left",
  },

  ficharioUniverseHeader: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "18px 14px 18px 16px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "22px",
    border: `1px dashed rgba(196, 165, 141, 0.38)`,
    background:
      "linear-gradient(180deg, rgba(255,253,249,0.95) 0%, rgba(248,239,228,0.78) 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65)",
    overflow: "hidden",
  },

  ficharioUniverseHeaderOpen: {
    borderColor: "rgba(200, 135, 87, 0.38)",
    background:
      "linear-gradient(180deg, #fffdf9 0%, #f7efe5 55%, #f0e4d6 100%)",
  },

  ficharioUniverseEmblemWatermark: {
    position: "absolute",
    right: "42px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "72px",
    height: "72px",
    objectFit: "contain",
    opacity: 0.07,
    pointerEvents: "none",
    userSelect: "none",
  },

  ficharioUniverseIcon: {
    fontSize: "28px",
    lineHeight: 1,
    flexShrink: 0,
    filter: "drop-shadow(0 1px 0 rgba(255,253,249,0.5))",
  },

  ficharioUniverseThumb: {
    width: "52px",
    height: "52px",
    objectFit: "cover",
    borderRadius: "12px",
    border: `1px solid ${theme.line}`,
    flexShrink: 0,
    opacity: 0.92,
  },

  ficharioUniverseHeaderBody: {
    flex: 1,
    minWidth: 0,
  },

  ficharioUniverseTitle: {
    position: "relative",
    zIndex: 1,
    margin: "0 0 4px",
    ...tecaFont.portalTitle,
    fontSize: "28px",
    lineHeight: 0.95,
    textAlign: "left",
  },

  ficharioUniversePoetic: {
    position: "relative",
    zIndex: 1,
    margin: "0 0 6px",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "13px",
    lineHeight: 1.4,
    color: theme.muted,
  },

  ficharioArchiveLabel: {
    position: "relative",
    zIndex: 1,
    margin: 0,
    fontFamily: "'Nunito', sans-serif",
    fontSize: "11px",
    lineHeight: 1.45,
    color: "#9a8475",
    letterSpacing: "0.1px",
  },

  ficharioProgressSecondary: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    color: "#9a8475",
    letterSpacing: "0.2px",
  },

  ficharioAlbumSpread: {
    padding: "4px 6px 8px",
    borderRadius: "0 0 20px 20px",
    border: `1px dashed rgba(196, 165, 141, 0.28)`,
    borderTop: "none",
    background: "rgba(255, 253, 249, 0.55)",
  },

  ficharioAlbumLegend: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    margin: "0 0 10px",
    paddingTop: "4px",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#b5a090",
  },

  ficharioAlbumLegendItem: {
    opacity: 0.85,
  },

  ficharioAlbumLegendDot: {
    opacity: 0.45,
  },

  ficharioAlbumGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "10px",
    padding: "0 2px 4px",
  },

  ficharioSlotsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0 4px 6px",
  },

  ficharioUniverseChevron: {
    position: "relative",
    zIndex: 1,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "28px",
    color: "#b3815f",
    lineHeight: 1,
    flexShrink: 0,
    opacity: 0.85,
  },

  ficharioSlot: {
    ...tecaFichario.fichaCompact(),
  },

  ficharioSlotGuardada: {
    background: "#fdfaf6",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
  },

  ficharioSlotConcluida: {
    background: "#fdfaf6",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
  },

  ficharioSlotRecebida: {
    background: "#f9f3ec",
    borderStyle: "dashed",
  },

  ficharioSlotAguardando: {
    background: "rgba(255,253,249,0.55)",
    borderStyle: "dotted",
    opacity: 0.88,
  },

  ficharioSlotHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "6px",
  },

  ficharioSlotIndex: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    color: "#9a8475",
    letterSpacing: "1px",
  },

  ficharioSlotSeal: {
    ...tecaObjects.etiqueta(),
    fontSize: "9px",
    padding: "3px 8px",
    letterSpacing: "1.2px",
    opacity: 0.9,
  },

  ficharioSlotTitle: {
    margin: "0 0 4px",
    ...tecaFont.portalTitle,
    fontSize: "22px",
    lineHeight: 0.95,
  },

  ficharioSlotNote: {
    margin: 0,
    fontFamily: "'Nunito', sans-serif",
    fontSize: "12px",
    lineHeight: 1.4,
    color: theme.muted,
  },

  ficharioSlotEmptyFrame: {
    width: "52px",
    height: "52px",
    margin: "0 auto 8px",
    borderRadius: "12px",
    border: `1px dashed rgba(196, 165, 141, 0.35)`,
    background: "rgba(255,253,249,0.55)",
  },

  ficharioSlotEmptyText: {
    margin: 0,
    fontFamily: "'Nunito', sans-serif",
    fontSize: "10px",
    letterSpacing: "0.5px",
    lineHeight: 1.4,
    color: "#b5a090",
    textAlign: "center",
  },

  ficharioComplementsSection: {
    marginTop: "4px",
    marginBottom: "8px",
  },

  ficharioComplementsLabel: {
    margin: "0 0 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
    color: "#9a8475",
    textAlign: "left",
  },

  ficharioComplementsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  ficharioComplementButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    margin: 0,
    width: "100%",
    cursor: "pointer",
    textAlign: "left",
  },

  ficharioComplementCard: {
    ...tecaObjects.note(tecaRadius.md),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "16px 18px",
  },

  ficharioComplementBody: {
    flex: 1,
    minWidth: 0,
  },

  ficharioComplementTitle: {
    margin: "0 0 4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 500,
    color: theme.text,
  },

  ficharioComplementText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    lineHeight: 1.35,
    color: theme.muted,
  },

  ficharioComplementArrow: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "26px",
    color: "#b3815f",
    flexShrink: 0,
  },

  meuMundoIntroSection: {
    marginTop: "4px",
    marginBottom: "8px",
  },

  meuMundoFicharioBinder: {
    position: "relative",
    marginTop: "4px",
    padding: "24px 18px 22px 28px",
    borderRadius: "28px",
    border: `1px dashed rgba(196, 165, 141, 0.4)`,
    background:
      "linear-gradient(168deg, #fffdf9 0%, #f9f3eb 52%, #f2ebe1 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
    overflow: "hidden",
  },

  meuMundoFicharioSpine: {
    position: "absolute",
    left: 0,
    top: "8%",
    bottom: "8%",
    width: "10px",
    borderRadius: "0 5px 5px 0",
    background:
      "linear-gradient(180deg, #dcc9b4 0%, #c9b39a 48%, #dcc9b4 100%)",
    opacity: 0.75,
  },

  meuMundoFicharioRings: {
    position: "absolute",
    left: "14px",
    top: "18%",
    bottom: "18%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    pointerEvents: "none",
    zIndex: 1,
  },

  meuMundoFicharioRing: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    border: `1px solid rgba(196, 165, 141, 0.45)`,
    background: "rgba(255, 253, 249, 0.65)",
    boxShadow: "inset 0 1px 2px rgba(120,90,60,0.08)",
  },

  meuMundoFicharioKicker: {
    ...tecaHierarchy.l6Micro,
    marginBottom: "16px",
    textAlign: "left",
  },

  meuMundoFicharioTabs: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  meuMundoFicharioTab: {
    display: "flex",
    alignItems: "stretch",
    gap: "0",
    width: "100%",
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
    WebkitTapHighlightColor: "transparent",
  },

  meuMundoFicharioTabStrip: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minWidth: "88px",
    padding: "14px 10px 12px",
    borderRadius: "14px 0 0 14px",
    border: `1px solid rgba(196, 165, 141, 0.35)`,
    borderRight: "none",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
    flexShrink: 0,
  },

  meuMundoFicharioTabStripDiario: {
    background:
      "linear-gradient(180deg, rgba(255,251,245,0.98) 0%, rgba(248,236,220,0.92) 100%)",
  },

  meuMundoFicharioTabStripColecoes: {
    background:
      "linear-gradient(180deg, rgba(255,249,244,0.98) 0%, rgba(245,232,218,0.92) 100%)",
  },

  meuMundoFicharioTabStripBiblioteca: {
    background:
      "linear-gradient(180deg, rgba(250,252,246,0.98) 0%, rgba(236,242,228,0.92) 100%)",
  },

  meuMundoFicharioTabIcon: {
    fontSize: "26px",
    lineHeight: 1,
  },

  meuMundoFicharioTabTitle: {
    ...tecaFont.portalTitle,
    fontSize: "22px",
    lineHeight: 0.95,
    writingMode: "horizontal-tb",
  },

  meuMundoFicharioTabBody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    padding: "14px 16px 14px 14px",
    borderRadius: "0 16px 16px 0",
    border: `1px dashed rgba(196, 165, 141, 0.34)`,
    background: "rgba(255, 253, 249, 0.72)",
  },

  meuMundoFicharioTabText: {
    ...tecaHierarchy.l5Body,
    fontSize: "15px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  meuMundoFicharioTabStats: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px 14px",
  },

  meuMundoFicharioTabStat: {
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    minWidth: "72px",
  },

  meuMundoFicharioTabStatValue: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    lineHeight: 1,
    color: theme.text,
  },

  meuMundoFicharioTabStatLabel: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "9px",
    letterSpacing: "1.1px",
    textTransform: "uppercase",
    color: "#b5a090",
    opacity: 0.85,
  },

  meuMundoHero: {
    position: "relative",
    margin: "0 0 28px",
    padding: "28px 20px 24px 26px",
    borderRadius: "32px",
    border: `1px solid ${theme.line}`,
    background:
      "radial-gradient(ellipse at 12% 18%, rgba(217,196,173,0.18) 0%, transparent 48%), radial-gradient(ellipse at 88% 72%, rgba(201,179,154,0.12) 0%, transparent 42%), linear-gradient(168deg, #fffdf9 0%, #f7efe5 45%, #efe3d4 100%)",
    boxShadow:
      "0 16px 40px rgba(120,90,60,0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
    overflow: "hidden",
  },

  meuMundoHeroSpine: {
    position: "absolute",
    left: 0,
    top: "10%",
    bottom: "10%",
    width: "9px",
    borderRadius: "0 5px 5px 0",
    background:
      "linear-gradient(180deg, #dcc9b4 0%, #c9b39a 50%, #dcc9b4 100%)",
    boxShadow: "inset -1px 0 0 rgba(255,255,255,0.35)",
    opacity: 0.82,
  },

  meuMundoHeroDecorSvg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    opacity: 0.9,
  },

  meuMundoFicharioIllustration: {
    position: "relative",
    height: "196px",
    margin: "0 auto 20px",
    maxWidth: "300px",
  },

  meuMundoFicharioPage: {
    position: "absolute",
    width: "138px",
    height: "138px",
    objectFit: "cover",
    borderRadius: "16px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 26px rgba(120,90,60,0.12)",
  },

  meuMundoFicharioPageBack: {
    left: "6%",
    top: "20px",
    transform: "rotate(-9deg)",
    opacity: 0.9,
    zIndex: 1,
  },

  meuMundoFicharioPageMid: {
    left: "50%",
    top: "4px",
    transform: "translateX(-50%) rotate(2deg)",
    zIndex: 2,
    width: "152px",
    height: "152px",
  },

  meuMundoFicharioPageFront: {
    right: "4%",
    top: "24px",
    transform: "rotate(8deg)",
    opacity: 0.92,
    zIndex: 3,
  },

  meuMundoHeroComplement: {
    ...tecaHierarchy.l4Subtitle,
    marginTop: `${tecaSpacing.sectionTitleToSubtitle}px`,
    marginBottom: 0,
  },

  meuMundoChoicesSection: {
    position: "relative",
    overflow: "hidden",
    marginTop: `${tecaSpacing.poeticToSection}px`,
    padding: "20px 14px 12px",
    borderRadius: "28px",
    border: `1px solid ${theme.line}`,
    background:
      "linear-gradient(180deg, rgba(255,253,249,0.88) 0%, rgba(248,239,228,0.62) 100%)",
  },

  meuMundoChoicesHeading: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    marginBottom: `${tecaSpacing.subtitleToContent}px`,
  },

  meuMundoChoicesStack: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  meuMundoChoice: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    padding: "18px 16px 18px 18px",
    border: `1px dashed rgba(196, 165, 141, 0.45)`,
    borderRadius: "22px",
    background:
      "linear-gradient(180deg, rgba(255,253,249,0.92) 0%, rgba(248,239,228,0.72) 100%)",
    boxShadow: "0 4px 14px rgba(120,90,60,0.05)",
    cursor: "pointer",
    textAlign: "left",
    WebkitTapHighlightColor: "transparent",
  },

  meuMundoChoiceIcon: {
    fontSize: "32px",
    lineHeight: 1,
    flexShrink: 0,
    filter: "drop-shadow(0 1px 0 rgba(255,253,249,0.6))",
  },

  meuMundoChoiceBody: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  meuMundoChoiceTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "32px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 1,
  },

  meuMundoChoiceHint: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    lineHeight: 1.35,
    color: "#a89486",
    opacity: 0.88,
  },

  meuMundoChoiceArrow: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    color: "#b3815f",
    flexShrink: 0,
    opacity: 0.65,
  },

  meuMundoSectionsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  meuMundoSectionCard: {
    ...tecaObjects.note(tecaRadius.md),
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px 16px",
  },

  meuMundoSectionImage: {
    width: "56px",
    height: "56px",
    objectFit: "cover",
    borderRadius: "14px",
    border: `1px solid ${theme.line}`,
    flexShrink: 0,
  },

  bibliotecaHero: {
    position: "relative",
    margin: "0 0 22px",
    padding: "24px 18px 20px 24px",
    borderRadius: "28px",
    border: `1px solid ${theme.line}`,
    background:
      "radial-gradient(ellipse at 14% 20%, rgba(217,196,173,0.16) 0%, transparent 50%), linear-gradient(168deg, #fffdf9 0%, #f7efe5 50%, #efe3d4 100%)",
    boxShadow: "0 14px 36px rgba(120,90,60,0.07)",
    overflow: "hidden",
  },

  bibliotecaHeroSpine: {
    position: "absolute",
    left: 0,
    top: "12%",
    bottom: "12%",
    width: "8px",
    borderRadius: "0 4px 4px 0",
    background:
      "linear-gradient(180deg, #dcc9b4 0%, #c9b39a 50%, #dcc9b4 100%)",
    opacity: 0.8,
  },

  bibliotecaHeroDecorSvg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },

  bibliotecaPagesIllustration: {
    position: "relative",
    height: "160px",
    maxWidth: "280px",
    margin: "0 auto",
  },

  bibliotecaPageSheet: {
    position: "absolute",
    width: "118px",
    height: "118px",
    objectFit: "cover",
    borderRadius: "14px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 22px rgba(120,90,60,0.1)",
  },

  bibliotecaPageSheetBack: {
    left: "8%",
    top: "16px",
    transform: "rotate(-8deg)",
    opacity: 0.88,
    zIndex: 1,
  },

  bibliotecaPageSheetMid: {
    left: "50%",
    top: "2px",
    transform: "translateX(-50%) rotate(1deg)",
    zIndex: 2,
    width: "128px",
    height: "128px",
  },

  bibliotecaPageSheetFront: {
    right: "6%",
    top: "18px",
    transform: "rotate(7deg)",
    opacity: 0.92,
    zIndex: 3,
  },

  bibliotecaKicker: {
    margin: "0 0 8px",
    fontSize: "9px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
    fontFamily: "'Nunito', sans-serif",
    textAlign: "left",
  },

  bibliotecaTitle: {
    margin: "0 0 10px",
    fontFamily: "'Caveat', cursive",
    fontSize: "48px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 0.95,
    textAlign: "left",
  },

  bibliotecaIntro: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    lineHeight: 1.45,
    color: theme.muted,
    textAlign: "left",
  },

  bibliotecaShelfLabel: {
    margin: "0 0 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 500,
    color: "#8a6f5d",
    textAlign: "left",
  },

  bibliotecaShelf: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "22px",
    paddingBottom: "10px",
  },

  bibliotecaShelfBoard: {
    position: "absolute",
    left: "-4px",
    right: "-4px",
    bottom: "0",
    height: "6px",
    borderRadius: "3px",
    background:
      "linear-gradient(180deg, #dcc9b4 0%, #c9b39a 55%, #b8987a 100%)",
    boxShadow: "0 2px 6px rgba(120,90,60,0.08)",
    opacity: 0.55,
  },

  bibliotecaShelfItem: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px 16px",
    borderRadius: "20px",
    border: `1px dashed rgba(196, 165, 141, 0.42)`,
    background:
      "linear-gradient(180deg, rgba(255,253,249,0.94) 0%, rgba(248,239,228,0.76) 100%)",
    boxShadow: "0 4px 12px rgba(120,90,60,0.04)",
  },

  bibliotecaShelfThumb: {
    width: "52px",
    height: "52px",
    objectFit: "cover",
    borderRadius: "10px",
    border: `1px solid ${theme.line}`,
    flexShrink: 0,
    opacity: 0.9,
  },

  bibliotecaShelfBody: {
    flex: 1,
    minWidth: 0,
  },

  bibliotecaShelfIcon: {
    display: "block",
    fontSize: "18px",
    lineHeight: 1,
    marginBottom: "4px",
    opacity: 0.85,
  },

  bibliotecaShelfTitle: {
    margin: "0 0 4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "28px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 1,
  },

  bibliotecaShelfText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    lineHeight: 1.38,
    color: "#a89486",
  },

  bibliotecaQuietNote: {
    padding: "18px 16px",
    borderRadius: "22px",
    border: `1px solid ${theme.line}`,
    background: "rgba(255,253,249,0.72)",
    textAlign: "left",
  },

  bibliotecaQuietLabel: {
    margin: "0 0 8px",
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 600,
    fontFamily: "'Nunito', sans-serif",
  },

  bibliotecaQuietText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  diaryStack: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "18px",
  },

  diaryEntryCard: {
    background: "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "22px",
    border: `1px solid ${theme.line}`,
    padding: "14px 16px",
  },

  diaryEntryHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },

  diaryEntryIcon: {
    fontSize: "16px",
  },

  diaryEntryDate: {
    margin: 0,
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
  },

  diaryEntryTitle: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "28px",
    color: theme.text,
    fontWeight: 400,
  },

  diaryEntryText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    color: theme.muted,
    fontSize: "17px",
    lineHeight: 1.45,
  },

  collectionsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  collectionCard: {
    background: "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "24px",
    border: `1px solid ${theme.line}`,
    padding: "14px 14px 16px",
  },

  collectionTop: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginBottom: "10px",
  },

  collectionThumb: {
    width: "66px",
    height: "66px",
    borderRadius: "14px",
    objectFit: "cover",
    border: `1px solid ${theme.line}`,
  },

  collectionTitle: {
    margin: "0 0 4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "30px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
  },

  collectionPoetic: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    color: theme.muted,
  },

  collectionProgressRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },

  collectionDots: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    maxWidth: "62%",
  },

  collectionDot: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    border: `1px solid ${theme.line}`,
    background: "#fffdf9",
  },

  collectionDotFilled: {
    background: "#e7c8a8",
    borderColor: "#d8b590",
  },

  collectionCount: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    color: "#8a6f5d",
  },

  collectionButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "rgba(255,253,249,0.8)",
    borderRadius: "999px",
    padding: "10px 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    color: theme.text,
    cursor: "pointer",
  },

  cardButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    width: "100%",
  },

  featureCard: {
    background: tecaColors.paper,
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 22px rgba(120,90,60,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
    minHeight: "100%",
    overflow: "hidden",
  },

  featureCardHorizontal: {
    borderRadius: tecaRadius.lg,
  },

  cardImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    display: "block",
  },

  cardImageHorizontal: {
    aspectRatio: "16 / 7",
    objectFit: "cover",
  },

  cardTextWrap: {
    padding: "14px 14px 16px",
    textAlign: "left",
  },

  cardTitle: {
    fontSize: "26px",
    margin: 0,
    ...tecaFont.heading,
  },

  cardTitleCompact: {
    fontSize: "22px",
    margin: 0,
    ...tecaFont.heading,
  },

  cardText: {
    margin: "8px 0 0 0",
    fontSize: "14px",
    textAlign: "left",
    ...tecaFont.prose,
  },

  primaryButton: {
    ...tecaFichario.etiquetaAction(),
    marginTop: "28px",
    cursor: "pointer",
  },

  bottomNav: {
    position: "absolute",
    left: "16px",
    right: "16px",
    bottom: "16px",
    height: "68px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...tecaObjects.navStrip(),
    borderRadius: "22px",
    padding: "0 10px",
    zIndex: 20,
  },

  navButton: {
    border: "none",
    background: "transparent",
    width: "20%",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  navIcon: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    marginBottom: "2px",
    transition: "0.2s ease",
  },

  navLabel: {
    ...tecaFont.navLabel,
    lineHeight: "1.05",
  },

  navButtonSecondary: {
    opacity: 0.72,
  },

  navIconSecondary: {
    width: "34px",
    height: "34px",
  },

  navLabelSecondary: {
    fontSize: "10px",
    opacity: 0.85,
  },

  atlasFooter: {
    position: "relative",
    overflow: "hidden",
    marginTop: "18px",
    padding: "28px 12px 24px",
    minHeight: "120px",
    textAlign: "center",
  },

  atlasFooterDecor: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },

  atlasFooterInner: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },

  atlasFooterTagline: {
    ...tecaFont.poetic,
    fontSize: "17px",
    lineHeight: 1.4,
    margin: 0,
    color: theme.muted,
  },

  atlasFooterSocial: {
    ...tecaFont.prose,
    fontSize: "13px",
    lineHeight: 1.3,
    color: theme.text,
    textDecoration: "none",
    opacity: 0.82,
    margin: "2px 0 4px",
  },

  atlasFooterDivider: {
    width: "72px",
    height: "1px",
    margin: "6px 0 8px",
    background:
      "linear-gradient(90deg, rgba(196,165,141,0) 0%, rgba(196,165,141,0.38) 50%, rgba(196,165,141,0) 100%)",
  },

  atlasFooterCopyright: {
    ...tecaFont.micro,
    fontSize: "8px",
    letterSpacing: "1.3px",
    margin: 0,
    color: "#a8886e",
    opacity: 0.72,
  },

  atlasFooterPoetic: {
    ...tecaFont.poetic,
    fontSize: "13px",
    lineHeight: 1.5,
    margin: 0,
    color: theme.muted,
    maxWidth: "30ch",
    opacity: 0.88,
  },
}

