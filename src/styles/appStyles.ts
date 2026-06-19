import type { CSSProperties } from "react"
import { tecaColors, tecaFont, tecaHierarchy, tecaObjects, tecaRadius, tecaSpacing, tecaType } from "../tecaVisual"

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
    padding: "24px 16px",
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

  playUniverseChapterHero: {
    position: "relative",
    marginBottom: "8px",
    padding: "48px 20px 32px",
    textAlign: "center",
    overflow: "hidden",
    borderRadius: "30px",
    border: `1px dashed rgba(196, 165, 141, 0.45)`,
    background:
      "radial-gradient(ellipse at 50% 42%, rgba(217,196,173,0.14) 0%, transparent 58%), linear-gradient(168deg, #fffdf9 0%, #f7efe5 52%, #efe3d4 100%)",
    boxShadow:
      "0 14px 36px rgba(120,90,60,0.06), inset 0 1px 0 rgba(255,255,255,0.88)",
  },

  playUniverseCoverFade: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.14,
    filter: "saturate(0.75) sepia(0.25) contrast(0.92)",
    pointerEvents: "none",
    zIndex: 0,
  },

  playUniverseEmblemWatermark: {
    position: "absolute",
    left: "50%",
    top: "44%",
    transform: "translate(-50%, -50%)",
    fontSize: "min(300px, 72vw)",
    lineHeight: 1,
    opacity: 0.14,
    filter: "grayscale(0.2) sepia(0.35) contrast(0.85)",
    pointerEvents: "none",
    userSelect: "none",
    zIndex: 0,
  },

  playUniverseTitle: {
    position: "relative",
    zIndex: 1,
    ...tecaHierarchy.l1PageTitle,
    marginBottom: `${tecaSpacing.titleToPoetic}px`,
  },

  playUniversePoetic: {
    position: "relative",
    zIndex: 1,
    ...tecaHierarchy.l2Poetic,
  },

  playUniverseInviteWrap: {
    margin: `${tecaSpacing.poeticToSection}px 0 0`,
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
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    padding: "16px 24px",
    fontSize: "20px",
    cursor: "pointer",
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
    padding: "20px 18px 18px",
    textAlign: "left",
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
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    padding: "14px 20px",
    fontSize: "24px",
    textAlign: "center",
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
    overflow: "hidden",
    marginTop: "8px",
    padding: "12px 8px 16px",
    borderRadius: "24px",
    background:
      "radial-gradient(ellipse at 18% 22%, rgba(217,196,173,0.14) 0%, transparent 52%), radial-gradient(ellipse at 82% 68%, rgba(201,179,154,0.1) 0%, transparent 48%), linear-gradient(180deg, rgba(255,253,249,0.55) 0%, rgba(248,239,228,0.35) 100%)",
  },

  homeExploreMap: {
    position: "relative",
    width: "100%",
    minHeight: "760px",
    marginTop: "4px",
  },

  homeExploreMapFull: {
    minHeight: "820px",
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
  },

  homeExploreStop: {
    position: "absolute",
    border: "none",
    background: "transparent",
    padding: "4px 2px",
    margin: 0,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    maxWidth: "148px",
    zIndex: 2,
    WebkitTapHighlightColor: "transparent",
  },

  homeExploreStopCenter: {
    transform: "translate(-50%, -22%)",
    textAlign: "center",
  },

  homeExploreStopLeft: {
    transform: "translate(-6%, -22%)",
    textAlign: "left",
    alignItems: "flex-start",
  },

  homeExploreStopRight: {
    transform: "translate(-94%, -22%)",
    textAlign: "right",
    alignItems: "flex-end",
  },

  homeExploreMarker: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "158px",
    height: "158px",
  },

  homeExploreMarkerRingOuter: {
    position: "absolute",
    inset: "-4px",
    width: "calc(100% + 8px)",
    height: "calc(100% + 8px)",
    pointerEvents: "none",
  },

  homeExploreMarkerRing: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },

  homeExploreMarkerIcon: {
    position: "relative",
    fontSize: "80px",
    lineHeight: 1,
    zIndex: 1,
    filter: "drop-shadow(0 2px 4px rgba(120,90,60,0.08))",
  },

  homeExploreStopTitle: {
    ...tecaFont.portalTitle,
    fontSize: "28px",
    lineHeight: 1,
    letterSpacing: "0.2px",
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
    ...tecaObjects.etiqueta(),
    fontSize: "8px",
    letterSpacing: "1.8px",
    background: "rgba(255, 253, 249, 0.82)",
  },

  homeV2DestinationButton: {
    width: "100%",
    marginTop: "2px",
    border: `1px solid rgba(200, 135, 87, 0.4)`,
    background: "rgba(255, 253, 249, 0.92)",
    borderRadius: "999px",
    padding: "16px 22px",
    fontSize: "30px",
    color: theme.text,
    cursor: "pointer",
    textAlign: "center",
        boxShadow: "0 6px 16px rgba(120,90,60,0.07)",
  },

  homeV2SoftButton: {
    width: "100%",
    marginTop: "4px",
    border: `1px solid ${theme.line}`,
    background: "rgba(255, 253, 249, 0.88)",
    borderRadius: "999px",
    padding: "14px 20px",
    fontSize: "26px",
    color: theme.text,
    cursor: "pointer",
    textAlign: "center",
        boxShadow: "0 4px 12px rgba(120,90,60,0.05)",
  },

  homeV2PathSection: {
    marginTop: "4px",
    padding: "26px 20px 24px",
    borderRadius: "28px",
    border: "none",
    background:
      "linear-gradient(180deg, rgba(255,253,249,0.45) 0%, rgba(248,239,228,0.25) 100%)",
    textAlign: "center",
  },

  homeV2PathQuestion: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    marginBottom: `${tecaSpacing.sectionTitleToSubtitle}px`,
  },

  homeV2PathIntro: {
    margin: "0 0 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
    lineHeight: 1.45,
    color: theme.muted,
    textAlign: "left",
  },

  homeV2PathFork: {
    ...tecaHierarchy.l4Subtitle,
    marginTop: 0,
    opacity: 0.92,
  },

  homeV2PathStack: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  homeV2PathCard: {
    padding: "22px 18px 20px",
    textAlign: "center",
    background: "transparent",
    borderRadius: "24px",
    border: `1px dashed rgba(196, 165, 141, 0.42)`,
    boxShadow: "none",
  },

  homeV2PathJourneyHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "6px",
  },

  homeV2PathJourneyIcon: {
    fontSize: "34px",
    lineHeight: 1,
    flexShrink: 0,
  },

  homeV2PathJourneyTitle: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "38px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 1,
  },

  homeV2PathPlanName: {
    margin: "0 0 12px",
    fontSize: "8px",
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    color: "#b5a090",
    fontWeight: 500,
    fontFamily: "'Nunito', sans-serif",
    opacity: 0.75,
  },

  homeV2PathJourneyPoetic: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    lineHeight: 1.4,
    color: "#a89486",
    opacity: 0.85,
  },

  homeV2PathBenefitsHint: {
    margin: "0 0 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "13px",
    lineHeight: 1.4,
    color: "#b5a090",
    opacity: 0.9,
  },

  homeV2PathLabel: {
    margin: "0 0 8px",
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
    fontFamily: "'Nunito', sans-serif",
  },

  homeV2PathCardTitle: {
    margin: "0 0 10px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    fontWeight: 500,
    color: theme.text,
    lineHeight: 1.1,
  },

  homeV2PathBenefits: {
    margin: "0 0 16px",
    padding: 0,
    listStyle: "none",
  },

  homeV2PathBenefitItem: {
    marginBottom: "6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    lineHeight: 1.4,
    color: theme.muted,
  },

  homeV2PathButton: {
    width: "100%",
    border: "none",
    background: "transparent",
    borderRadius: "0",
    padding: "4px 0 0",
    fontSize: "24px",
    color: "#a06840",
    cursor: "pointer",
    textAlign: "center",
        textDecoration: "underline",
    textDecorationColor: "rgba(200, 135, 87, 0.35)",
    textUnderlineOffset: "4px",
  },

  homeV2Cabinet: {
    position: "relative",
    padding: "28px 22px 26px",
    borderRadius: "28px",
    border: `1px solid ${theme.line}`,
    background:
      "linear-gradient(180deg, #f0e4d6 0%, #e8ddd0 55%, #e2d4c4 100%)",
    boxShadow: "inset 0 2px 0 rgba(255,255,255,0.35)",
    overflow: "hidden",
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
    marginTop: 0,
    paddingTop: 0,
  },

  experienceCollectionTitle: {
    ...tecaFont.portalTitle,
    fontSize: "28px",
    textAlign: "center",
    margin: "0 0 20px",
    lineHeight: 1,
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
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  },

  experienceCard: {
    background: "rgba(255, 253, 249, 0.72)",
    borderRadius: tecaRadius.lg,
    overflow: "hidden",
    border: `1px dashed rgba(196, 165, 141, 0.42)`,
    boxShadow: "none",
    transition: "border-color 0.2s ease",
  },

  experienceCardSelected: {
    border: "1px solid rgba(196, 165, 141, 0.55)",
    boxShadow: "0 8px 22px rgba(120,90,60,0.06)",
  },

  experienceCardImage: {
    width: "100%",
    aspectRatio: "5 / 3",
    objectFit: "cover",
    display: "block",
  },

  experienceCardBody: {
    padding: "14px 16px 16px",
  },

  experienceCardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "10px",
  },

  experienceCardTitle: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "36px",
    lineHeight: 0.95,
    color: theme.text,
    fontWeight: 400,
    letterSpacing: "0.2px",
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
  },

  experienceCardInvite: {
    margin: "0 0 10px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    lineHeight: 1.45,
    color: "#9a8475",
  },

  experienceCardMeta: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    fontSize: "11px",
    lineHeight: 1.38,
    color: "#b5a090",
    fontFamily: "'Cormorant Garamond', serif",
    opacity: 0.88,
    paddingTop: "2px",
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
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    padding: "18px 24px",
    fontSize: "28px",
    textAlign: "center",
      },

  clubPlansSection: {
    marginBottom: "8px",
    textAlign: "center",
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
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 14px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "22px",
    border: `1px dashed rgba(196, 165, 141, 0.42)`,
    background:
      "linear-gradient(180deg, rgba(255,253,249,0.95) 0%, rgba(248,239,228,0.78) 100%)",
    boxShadow: "0 4px 14px rgba(120,90,60,0.05)",
  },

  ficharioUniverseHeaderOpen: {
    borderColor: "rgba(200, 135, 87, 0.38)",
    background:
      "linear-gradient(180deg, #fffdf9 0%, #f7efe5 55%, #f0e4d6 100%)",
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
    margin: "0 0 3px",
    fontFamily: "'Caveat', cursive",
    fontSize: "28px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 1,
  },

  ficharioUniversePoetic: {
    margin: "0 0 5px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    lineHeight: 1.35,
    color: theme.muted,
  },

  ficharioArchiveLabel: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    color: "#9a8475",
    letterSpacing: "0.2px",
  },

  ficharioProgressSecondary: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    color: "#9a8475",
    letterSpacing: "0.2px",
  },

  ficharioDrawerHint: {
    margin: "4px 0 0",
    padding: "8px 4px 2px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "13px",
    lineHeight: 1.4,
    color: "#b5a090",
    textAlign: "center",
    letterSpacing: "0.4px",
    opacity: 0.85,
  },

  ficharioUniverseChevron: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "28px",
    color: "#b3815f",
    lineHeight: 1,
    flexShrink: 0,
    opacity: 0.85,
  },

  ficharioSlotsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0 4px 6px",
  },

  ficharioSlot: {
    padding: "14px 16px",
    borderRadius: "18px",
    border: `1px solid ${theme.line}`,
    textAlign: "left",
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
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    fontWeight: 500,
    color: theme.text,
    lineHeight: 1.2,
  },

  ficharioSlotNote: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    lineHeight: 1.4,
    color: theme.muted,
  },

  ficharioSlotEmptyFrame: {
    height: "28px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: `1px dashed rgba(234, 216, 197, 0.95)`,
    background:
      "repeating-linear-gradient(135deg, rgba(248,239,228,0.35) 0 6px, rgba(255,253,249,0.2) 6px 12px)",
  },

  ficharioSlotEmptyText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    lineHeight: 1.4,
    color: "#a89486",
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
    width: "100%",
    background:
      "linear-gradient(180deg, #d9a06e 0%, #c88757 100%)",
    border: "none",
    borderRadius: "999px",
    padding: "20px",
    color: "#fffaf5",
    fontSize: "20px",
    marginTop: "28px",
    ...tecaObjects.buttonPrimary(),
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(195,133,87,0.18)",
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
}

