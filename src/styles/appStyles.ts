import type { CSSProperties } from "react"
import { tecaColors, tecaFont, tecaObjects, tecaRadius, tecaType } from "../tecaVisual"

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
    fontSize: "44px",
    margin: "0 0 12px",
    ...tecaFont.portalTitle,
  },

  homeIntro: {
    textAlign: "center",
    fontSize: "20px",
    margin: "0 10px 22px",
    ...tecaFont.poetic,
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
    textAlign: "center",
    fontSize: "38px",
    margin: "0 0 8px",
    ...tecaFont.portalTitle,
  },

  pageIntro: {
    fontSize: "20px",
    textAlign: "left",
    margin: "0 0 26px",
    ...tecaFont.poetic,
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
    ...tecaFont.poetic,
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
    fontStyle: "italic",
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
    fontStyle: "italic",
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
  },

  noteText: {
    ...tecaType.bodyPoetic,
    fontSize: "19px",
    lineHeight: 1.75,
  },

  sectionTitle: {
    textAlign: "center",
    color: "#8a6f5d",
    marginTop: "24px",
    marginBottom: "18px",
    fontSize: "30px",
    fontFamily: "'Caveat', cursive",
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
    marginTop: "4px",
  },

  homeSectionHeading: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "30px",
    fontWeight: 500,
    color: "#705a4d",
    textAlign: "left",
    lineHeight: 1.05,
  },

  homeSectionPoetic: {
    margin: "0 0 18px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "18px",
    color: "#8b7668",
    lineHeight: 1.45,
    textAlign: "left",
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
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.4,
    color: "#8b7668",
  },

  planCardButton: {
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    padding: "14px 20px",
    fontSize: "24px",
    ...tecaFont.accentHand,
  },

  homePrimaryButton: {
    width: "100%",
    marginTop: "4px",
    ...tecaObjects.buttonPrimary(),
    padding: "14px 20px",
    fontSize: "24px",
    ...tecaFont.accentHand,
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
    fontFamily: "'Caveat', cursive",
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
    fontStyle: "italic",
    fontSize: "14px",
    lineHeight: 1.2,
    color: "#7f6a5c",
    textAlign: "center",
  },

  sectionHeading: {
    margin: "0 0 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    fontWeight: 500,
    color: "#7a6254",
    letterSpacing: "0.2px",
  },

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
  },

  worldsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  experienceCollection: {
    marginTop: "10px",
  },

  experienceCollectionTitle: {
    textAlign: "center",
    color: "#8a6f5d",
    margin: "4px 0 8px",
    fontSize: "28px",
    fontFamily: "'Caveat', cursive",
    fontWeight: 400,
  },

  experienceCollectionIntro: {
    textAlign: "center",
    color: theme.muted,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.5,
    margin: "0 2px 22px",
  },

  experienceStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  experienceStackItem: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
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
    background: tecaColors.paper,
    borderRadius: tecaRadius.md,
    overflow: "hidden",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 24px rgba(120,90,60,0.05)",
    transition: "box-shadow 0.2s ease",
  },

  experienceCardSelected: {
    border: "1px solid #dcc3aa",
    boxShadow: "0 10px 28px rgba(120,90,60,0.08)",
  },

  experienceCardImage: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    display: "block",
  },

  experienceCardBody: {
    padding: "16px 18px 18px",
  },

  experienceCardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "6px",
  },

  experienceCardTitle: {
    margin: 0,
    fontFamily: "'Caveat', cursive",
    fontSize: "30px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
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
    margin: "0 0 12px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "18px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  experienceCardMeta: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontSize: "12px",
    lineHeight: 1.4,
    color: "#9a8475",
    fontFamily: "'Nunito', sans-serif",
  },

  experienceDetail: {
    background: tecaColors.paperWarm,
    borderRadius: tecaRadius.sm,
    padding: "18px 16px",
    border: `1px solid ${theme.line}`,
  },

  experienceDetailTitle: {
    margin: "0 0 14px",
    textAlign: "center",
    fontFamily: "'Caveat', cursive",
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
    fontStyle: "italic",
    fontSize: "16px",
    lineHeight: 1.5,
    color: "#7a6254",
  },

  atelierTopBar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "18px",
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
    fontFamily: "'Caveat', cursive",
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
    fontFamily: "'Caveat', cursive",
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
    fontFamily: "'Caveat', cursive",
    fontWeight: 400,
  },

  paperCatalogIntro: {
    textAlign: "center",
    color: theme.muted,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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
    fontFamily: "'Caveat', cursive",
    fontSize: "34px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
  },

  paperCardPoetic: {
    margin: "0 0 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "19px",
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
    fontStyle: "italic",
    fontSize: "16px",
    color: "#a67c52",
  },

  paperTakeHomeButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "linear-gradient(180deg, #f3e6d8 0%, #e8d5c3 100%)",
    borderRadius: "999px",
    padding: "14px 20px",
    fontFamily: "'Caveat', cursive",
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
    fontStyle: "italic",
    fontSize: "16px",
    lineHeight: 1.55,
    color: "#7a6254",
  },

  paperPoeticLink: {
    marginTop: "12px",
    border: "none",
    background: "transparent",
    padding: 0,
    fontFamily: "'Caveat', cursive",
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
    fontFamily: "'Caveat', cursive",
    fontSize: "28px",
    color: theme.text,
  },

  boxItemPoetic: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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
    fontFamily: "'Caveat', cursive",
    fontSize: "24px",
    color: "#9a7f6d",
    cursor: "pointer",
    padding: "12px",
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
    fontFamily: "'Caveat', cursive",
    fontSize: "42px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 1,
  },

  clubTagline: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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
    ...tecaFont.poetic,
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
    fontStyle: "italic",
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
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.45,
    color: theme.muted,
    textAlign: "left",
  },

  clubJoinButton: {
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    padding: "18px 24px",
    fontSize: "28px",
    ...tecaFont.accentHand,
  },

  clubPlansSection: {
    marginBottom: "8px",
  },

  clubCarteirinhaSection: {
    marginTop: "8px",
    opacity: 0.92,
  },

  clubSecondaryLabel: {
    margin: "0 0 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    color: "#9a8475",
    textAlign: "left",
    letterSpacing: "0.3px",
  },

  ficharioUniversosSection: {
    marginTop: "4px",
  },

  ficharioSectionLabel: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "24px",
    fontWeight: 500,
    color: "#7a6254",
    textAlign: "left",
    lineHeight: 1.1,
  },

  ficharioSectionIntro: {
    margin: "0 0 20px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.45,
    color: "#8b7668",
    textAlign: "left",
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
    gap: "14px",
    padding: "14px",
    width: "100%",
    boxSizing: "border-box",
  },

  ficharioUniverseHeaderOpen: {
    borderColor: "rgba(200, 135, 87, 0.35)",
  },

  ficharioUniverseThumb: {
    width: "72px",
    height: "54px",
    objectFit: "cover",
    borderRadius: "14px",
    border: `1px solid ${theme.line}`,
    flexShrink: 0,
  },

  ficharioUniverseHeaderBody: {
    flex: 1,
    minWidth: 0,
  },

  ficharioUniverseTitle: {
    margin: "0 0 4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 600,
    color: theme.text,
    lineHeight: 1.1,
  },

  ficharioUniversePoetic: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "15px",
    lineHeight: 1.35,
    color: theme.muted,
  },

  ficharioProgressSecondary: {
    margin: 0,
    fontFamily: "'Nunito', sans-serif",
    fontSize: "12px",
    color: "#9a8475",
    letterSpacing: "0.2px",
  },

  ficharioUniverseChevron: {
    fontFamily: "'Caveat', cursive",
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
    justifyContent: "space-between",
    marginBottom: "8px",
  },

  ficharioSlotIndex: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "14px",
    color: "#9a8475",
    letterSpacing: "1px",
  },

  ficharioSlotSeal: {
    ...tecaObjects.etiqueta(),
    fontSize: "10px",
    padding: "3px 8px",
  },

  ficharioSlotTitle: {
    margin: "0 0 4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 500,
    color: theme.text,
    lineHeight: 1.2,
  },

  ficharioSlotNote: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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
    fontStyle: "italic",
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
    fontStyle: "italic",
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
    fontStyle: "italic",
    fontSize: "15px",
    lineHeight: 1.35,
    color: theme.muted,
  },

  ficharioComplementArrow: {
    fontFamily: "'Caveat', cursive",
    fontSize: "26px",
    color: "#b3815f",
    flexShrink: 0,
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
    fontFamily: "'Caveat', cursive",
    fontSize: "28px",
    color: theme.text,
    fontWeight: 400,
  },

  diaryEntryText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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
    fontFamily: "'Caveat', cursive",
    fontSize: "30px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
  },

  collectionPoetic: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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
    fontStyle: "italic",
    fontSize: "16px",
    color: "#8a6f5d",
  },

  collectionButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "rgba(255,253,249,0.8)",
    borderRadius: "999px",
    padding: "10px 16px",
    fontFamily: "'Caveat', cursive",
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
    ...tecaFont.poetic,
  },

  primaryButton: {
    width: "100%",
    background:
      "linear-gradient(180deg, #d9a06e 0%, #c88757 100%)",
    border: "none",
    borderRadius: "999px",
    padding: "20px",
    color: "#fffaf5",
    fontSize: "32px",
    marginTop: "28px",
    fontFamily: "'Caveat', cursive",
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

