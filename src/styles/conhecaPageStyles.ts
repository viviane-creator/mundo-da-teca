import type { CSSProperties } from "react"
import { tecaColors, tecaFont, tecaHierarchy, tecaSpacing } from "../tecaVisual"

const paperWash =
  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,253,249,0.9) 0%, transparent 72%)"

/** Larguras editoriais — coluna única, menos altura */
const proseWide = "min(100%, 48ch)"
const proseMid = "min(100%, 44ch)"
const proseNarrow = "min(100%, 40ch)"
const titleMid = "min(100%, 32ch)"
const titleWide = "min(100%, 36ch)"

export const conhecaPageStyles: Record<string, CSSProperties> = {
  page: {
    position: "relative",
    background: tecaColors.shell,
    backgroundImage: paperWash,
    paddingBottom: "clamp(32px, 7vw, 48px)",
  },

  heroBody: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    padding: 0,
    textAlign: "center",
  },

  heroTail: {
    height: "clamp(16px, 4vw, 24px)",
    background: tecaColors.shell,
  },

  pageKicker: {
    ...tecaHierarchy.l6Micro,
    margin: "0 0 12px",
    opacity: 0.8,
  },

  heroTitle: {
    ...tecaHierarchy.l3SectionTitle,
    fontSize: "clamp(28px, 6.5vw, 36px)",
    lineHeight: 1.06,
    margin: "0 auto 12px",
    maxWidth: titleMid,
    color: tecaColors.text,
  },

  heroText: {
    ...tecaHierarchy.l4Subtitle,
    fontSize: "clamp(16px, 3.8vw, 19px)",
    lineHeight: 1.52,
    margin: "0 auto",
    maxWidth: proseWide,
    color: tecaColors.muted,
  },

  chapter: {
    padding:
      "clamp(36px, 8vw, 56px) clamp(22px, 5vw, 32px)",
  },

  chapterFirst: {
    padding:
      "clamp(12px, 3vw, 18px) clamp(22px, 5vw, 32px) clamp(28px, 6.5vw, 40px)",
  },

  chapterTeca: {
    padding:
      "clamp(24px, 5.5vw, 36px) clamp(22px, 5vw, 32px) clamp(32px, 7vw, 48px)",
  },

  chapterCompact: {
    padding:
      "clamp(32px, 7vw, 48px) clamp(22px, 5vw, 32px)",
  },

  section: {
    padding:
      "clamp(56px, 12vw, 88px) clamp(22px, 5vw, 32px)",
  },

  sectionTight: {
    padding:
      "clamp(64px, 13vw, 96px) clamp(22px, 5vw, 32px)",
  },

  sectionBreath: {
    padding:
      "clamp(32px, 7vw, 48px) clamp(22px, 5vw, 32px)",
  },

  manifestoTitle: {
    ...tecaHierarchy.l6Micro,
    textAlign: "center",
    margin: "0 auto clamp(14px, 3.2vw, 20px)",
    opacity: 0.78,
    letterSpacing: "0.13em",
  },

  manifestoBlock: {
    maxWidth: proseWide,
    margin: "0 auto",
  },

  proseCenter: {
    ...tecaHierarchy.l5Body,
    ...tecaHierarchy.l5BodyCentered,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.58,
    maxWidth: proseMid,
    color: tecaColors.muted,
  },

  proseLine: {
    ...tecaHierarchy.l5Body,
    ...tecaHierarchy.l5BodyCentered,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.62,
    margin: "0 auto 10px",
    maxWidth: proseMid,
    color: tecaColors.muted,
  },

  proseClosing: {
    ...tecaFont.heading,
    fontSize: "clamp(18px, 4vw, 21px)",
    fontWeight: 500,
    lineHeight: 1.4,
    textAlign: "center",
    margin: "clamp(18px, 4vw, 24px) auto 0",
    maxWidth: proseNarrow,
    color: tecaColors.text,
  },

  proseClosingCompact: {
    ...tecaFont.heading,
    fontSize: "clamp(17px, 3.9vw, 20px)",
    fontWeight: 500,
    lineHeight: 1.38,
    textAlign: "center",
    margin: "clamp(16px, 3.8vw, 22px) auto 0",
    maxWidth: proseNarrow,
    color: tecaColors.text,
  },

  editorialImageWrap: {
    display: "flex",
    justifyContent: "center",
    margin: "clamp(40px, 9vw, 56px) auto",
  },

  editorialImageWrapLead: {
    display: "flex",
    justifyContent: "center",
    margin:
      "clamp(4px, 1.2vw, 10px) auto clamp(24px, 5.5vw, 36px)",
  },

  editorialImageWrapInset: {
    display: "flex",
    justifyContent: "center",
    margin: "clamp(20px, 4.5vw, 28px) auto clamp(24px, 5.5vw, 32px)",
  },

  tecaStoryCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "min(100%, 300px)",
    margin: "clamp(20px, 4.5vw, 28px) auto 0",
    padding: "clamp(12px, 3vw, 16px) clamp(14px, 3.2vw, 18px)",
    borderRadius: "16px",
    border: "1px dashed rgba(196, 165, 141, 0.3)",
    background: "rgba(255, 253, 249, 0.62)",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    font: "inherit",
    textAlign: "center",
    transition: "transform 0.22s ease, box-shadow 0.22s ease",
  },

  tecaStoryCardLabel: {
    ...tecaFont.heading,
    fontSize: "clamp(14px, 3.3vw, 16px)",
    fontWeight: 500,
    lineHeight: 1.3,
    color: tecaColors.text,
    letterSpacing: "0.01em",
  },

  editorialImageWrapTrail: {
    display: "flex",
    justifyContent: "center",
    margin: "clamp(48px, 11vw, 72px) auto 0",
  },

  editorialImageRound: {
    width: "clamp(132px, 34vw, 168px)",
    height: "auto",
    display: "block",
    borderRadius: "50%",
  },

  editorialImageWide: {
    width: "min(100%, 340px)",
    height: "auto",
    display: "block",
    borderRadius: "20px",
    boxShadow: "0 14px 36px rgba(90,60,30,0.08)",
  },

  chapterEpigraph: {
    ...tecaHierarchy.l2Poetic,
    fontSize: "clamp(18px, 4.2vw, 22px)",
    lineHeight: 1.45,
    margin: "0 auto clamp(16px, 3.8vw, 22px)",
    maxWidth: proseNarrow,
    color: tecaColors.muted,
  },

  sectionTitle: {
    ...tecaHierarchy.l3SectionTitle,
    fontSize: "clamp(24px, 5.5vw, 28px)",
    margin: `0 auto clamp(18px, 4vw, ${tecaSpacing.sectionTitleToSubtitle + 8}px)`,
    maxWidth: titleWide,
    lineHeight: 1.06,
    color: tecaColors.text,
  },

  sectionSubtitle: {
    ...tecaHierarchy.l4Subtitle,
    fontSize: "clamp(16px, 3.8vw, 19px)",
    lineHeight: 1.55,
    margin: `0 auto clamp(20px, 4.5vw, ${tecaSpacing.subtitleToContent + 8}px)`,
    maxWidth: proseMid,
    color: tecaColors.muted,
  },

  sectionLead: {
    ...tecaFont.prose,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.55,
    textAlign: "center",
    margin: "0 auto 8px",
    maxWidth: "min(100%, 44ch)",
    color: tecaColors.muted,
  },

  journeySteps: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    maxWidth: "100%",
    textAlign: "center",
  },

  journeyStep: {
    ...tecaHierarchy.l5Body,
    fontSize: "clamp(16px, 3.8vw, 18px)",
    fontStyle: "normal",
    lineHeight: 1.5,
    margin: "0 0 8px",
    color: tecaColors.ink,
  },

  pillarGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "clamp(18px, 4vw, 22px)",
    marginTop: 0,
  },

  pillarCard: {
    padding: "clamp(18px, 4vw, 22px) clamp(16px, 3.5vw, 20px)",
    borderRadius: "18px",
    border: "1px dashed rgba(196, 165, 141, 0.34)",
    background: "rgba(255, 253, 249, 0.72)",
    textAlign: "center",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    transition: "transform 0.22s ease, box-shadow 0.22s ease",
    font: "inherit",
    width: "100%",
  },

  pillarCardFeatured: {
    padding: "clamp(24px, 5.5vw, 30px) clamp(20px, 4.5vw, 26px)",
    borderRadius: "22px",
    border: "1px solid rgba(143, 168, 198, 0.42)",
    background:
      "linear-gradient(168deg, rgba(255,253,249,0.96) 0%, rgba(236,244,252,0.88) 100%)",
    boxShadow:
      "0 12px 32px rgba(90,60,30,0.07), inset 0 1px 0 rgba(255,255,255,0.92)",
  },

  pillarTitle: {
    ...tecaFont.portalTitle,
    fontSize: "clamp(20px, 4.5vw, 24px)",
    fontWeight: 400,
    lineHeight: 1.06,
    margin: "0 0 8px",
    color: tecaColors.text,
    textTransform: "none",
  },

  pillarTitleFeatured: {
    fontSize: "clamp(24px, 5.5vw, 28px)",
    margin: "0 0 10px",
    letterSpacing: "0.01em",
    textTransform: "none",
  },

  pillarText: {
    ...tecaHierarchy.l5Body,
    fontSize: "clamp(16px, 3.8vw, 18px)",
    lineHeight: 1.5,
    margin: 0,
    color: tecaColors.muted,
  },

  philosophyBlock: {
    maxWidth: proseWide,
    margin: "0 auto",
    textAlign: "center",
    padding: 0,
  },

  philosophyItem: {
    ...tecaHierarchy.l5Body,
    fontSize: "clamp(17px, 3.9vw, 19px)",
    lineHeight: 1.52,
    color: tecaColors.muted,
    margin: 0,
  },

  philosophyItemEmphasis: {
    ...tecaFont.heading,
    fontSize: "clamp(17px, 3.9vw, 19px)",
    fontWeight: 500,
    lineHeight: 1.48,
    color: tecaColors.text,
    margin: 0,
  },

  philosophyList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "clamp(14px, 3.5vw, 20px)",
  },

  closingChapter: {
    marginTop: "clamp(12px, 3vw, 20px)",
    padding: "0 0 clamp(8px, 2vw, 12px)",
    background: `
      linear-gradient(180deg,
        rgba(246, 237, 226, 0) 0%,
        rgba(240, 228, 214, 0.45) 18%,
        rgba(234, 220, 204, 0.62) 55%,
        rgba(228, 214, 198, 0.72) 100%
      )
    `,
  },

  epilogue: {
    padding:
      "clamp(40px, 9vw, 60px) clamp(22px, 5vw, 32px) clamp(48px, 11vw, 72px)",
    textAlign: "center",
  },

  epilogueTitle: {
    ...tecaFont.portalTitle,
    fontSize: "clamp(23px, 5.2vw, 30px)",
    fontWeight: 400,
    lineHeight: 1.08,
    margin: "0 auto clamp(18px, 4vw, 24px)",
    maxWidth: "min(100%, 32ch)",
    color: tecaColors.text,
  },

  epilogueText: {
    ...tecaFont.prose,
    fontSize: "clamp(17px, 3.9vw, 20px)",
    lineHeight: 1.58,
    margin: "0 auto 12px",
    maxWidth: "min(100%, 48ch)",
    color: tecaColors.muted,
  },

  epilogueEmphasis: {
    ...tecaFont.heading,
    fontSize: "clamp(18px, 4.2vw, 22px)",
    fontWeight: 500,
    lineHeight: 1.4,
    margin: "clamp(16px, 4vw, 22px) auto 0",
    maxWidth: "min(100%, 40ch)",
    color: tecaColors.text,
  },

  invitationBlock: {
    padding:
      "clamp(32px, 7.5vw, 48px) clamp(22px, 5vw, 32px) clamp(28px, 6.5vw, 40px)",
    textAlign: "center",
  },

  invitationTitle: {
    ...tecaFont.portalTitle,
    fontSize: "clamp(26px, 6.2vw, 32px)",
    fontWeight: 400,
    lineHeight: 1.06,
    margin: "0 auto clamp(18px, 4vw, 24px)",
    maxWidth: titleWide,
    color: tecaColors.text,
  },

  invitationActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(18px, 4.5vw, 24px)",
    margin: "clamp(24px, 5.5vw, 32px) auto 0",
    padding: 0,
  },

  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },

  signatureBlock: {
    padding:
      "clamp(36px, 8vw, 52px) clamp(22px, 5vw, 32px) clamp(24px, 5.5vw, 36px)",
    textAlign: "center",
  },

  mantraList: {
    listStyle: "none",
    margin: "0 auto",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(22px, 5.5vw, 36px)",
    maxWidth: "100%",
  },

  mantraWord: {
    ...tecaFont.heading,
    fontSize: "clamp(30px, 7.5vw, 42px)",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.06em",
    color: tecaColors.text,
    margin: 0,
  },

  signatureQuote: {
    ...tecaFont.poetic,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.55,
    margin: "clamp(28px, 6.5vw, 42px) auto 0",
    maxWidth: "min(100%, 48ch)",
    color: tecaColors.muted,
  },

  signatureLogo: {
    display: "block",
    width: "clamp(124px, 31vw, 160px)",
    height: "auto",
    margin: "clamp(32px, 7vw, 44px) auto 0",
    opacity: 0.98,
    filter: "drop-shadow(0 8px 24px rgba(90,60,30,0.11))",
  },

  finalChapter: {
    padding:
      "clamp(36px, 8vw, 52px) clamp(22px, 5vw, 32px) clamp(20px, 4.5vw, 28px)",
    textAlign: "center",
  },

  finalClosingLine: {
    ...tecaHierarchy.l5Body,
    fontSize: "clamp(17px, 3.9vw, 20px)",
    lineHeight: 1.55,
    margin: "0 auto 10px",
    maxWidth: proseWide,
    color: tecaColors.muted,
    textAlign: "center",
  },

  chapterDots: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    padding: "0 0 clamp(16px, 3.8vw, 24px)",
  },

  chapterDot: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "rgba(179, 129, 95, 0.28)",
  },

  chapterDotMid: {
    width: "5px",
    height: "5px",
    background: "rgba(179, 129, 95, 0.38)",
  },
}
