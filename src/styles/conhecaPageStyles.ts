import type { CSSProperties } from "react"
import { tecaColors, tecaFont, tecaHierarchy } from "../tecaVisual"

const paperWash =
  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,253,249,0.9) 0%, transparent 72%)"

export const conhecaPageStyles: Record<string, CSSProperties> = {
  page: {
    position: "relative",
    background: tecaColors.shell,
    backgroundImage: paperWash,
    paddingBottom: "clamp(32px, 7vw, 48px)",
  },

  hero: {
    position: "relative",
    overflow: "hidden",
    minHeight: "min(72vh, 620px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  heroImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 38%",
    filter: "saturate(0.9) contrast(0.94) brightness(1.03)",
  },

  heroFade: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(180deg, rgba(246,237,226,0.08) 0%, rgba(246,237,226,0.42) 48%, ${tecaColors.shell} 100%)`,
    pointerEvents: "none",
  },

  heroVignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 96% 88% at 50% 44%, transparent 58%, rgba(72,48,32,0.06) 100%)",
    pointerEvents: "none",
  },

  heroBody: {
    position: "relative",
    zIndex: 2,
    padding:
      "clamp(28px, 7vw, 44px) clamp(22px, 5vw, 32px) clamp(36px, 8vw, 52px)",
    textAlign: "center",
  },

  heroTail: {
    height: "clamp(32px, 7vw, 48px)",
    background: tecaColors.shell,
  },

  pageKicker: {
    ...tecaHierarchy.l6Micro,
    margin: "0 0 12px",
    opacity: 0.8,
  },

  heroTitle: {
    ...tecaFont.heading,
    fontSize: "clamp(26px, 6vw, 38px)",
    fontWeight: 400,
    lineHeight: 1.24,
    margin: "0 auto 14px",
    maxWidth: "18ch",
    color: tecaColors.text,
    textShadow:
      "0 1px 3px rgba(255,253,249,0.92), 0 4px 24px rgba(255,253,249,0.82)",
  },

  heroText: {
    ...tecaFont.prose,
    fontSize: "clamp(16px, 3.8vw, 19px)",
    lineHeight: 1.52,
    margin: "0 auto 18px",
    maxWidth: "34ch",
    color: tecaColors.muted,
    textShadow: "0 1px 3px rgba(255,253,249,0.9)",
  },

  chapter: {
    padding:
      "clamp(56px, 12vw, 88px) clamp(22px, 5vw, 32px)",
  },

  chapterFirst: {
    padding:
      "clamp(64px, 14vw, 96px) clamp(22px, 5vw, 32px) clamp(72px, 16vw, 104px)",
  },

  chapterTextOnly: {
    padding:
      "clamp(64px, 13vw, 96px) clamp(22px, 5vw, 32px)",
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
      "clamp(72px, 15vw, 104px) clamp(22px, 5vw, 32px)",
  },

  proseCenter: {
    ...tecaFont.prose,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.58,
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "32ch",
    color: tecaColors.muted,
  },

  proseLine: {
    ...tecaFont.prose,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.62,
    textAlign: "center",
    margin: "0 auto 10px",
    maxWidth: "30ch",
    color: tecaColors.muted,
  },

  proseClosing: {
    ...tecaFont.heading,
    fontSize: "clamp(19px, 4.2vw, 23px)",
    fontWeight: 500,
    lineHeight: 1.35,
    textAlign: "center",
    margin: "clamp(28px, 6vw, 40px) auto 0",
    maxWidth: "28ch",
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
      "clamp(12px, 3vw, 20px) auto clamp(52px, 12vw, 72px)",
  },

  editorialImageWrapInset: {
    display: "flex",
    justifyContent: "center",
    margin: "clamp(36px, 8vw, 52px) auto clamp(40px, 9vw, 56px)",
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
    ...tecaFont.poetic,
    fontSize: "clamp(19px, 4.4vw, 24px)",
    fontStyle: "italic",
    lineHeight: 1.45,
    textAlign: "center",
    margin: "0 auto clamp(28px, 6vw, 40px)",
    maxWidth: "22ch",
    color: tecaColors.muted,
  },

  sectionTitle: {
    ...tecaFont.heading,
    fontSize: "clamp(24px, 5.5vw, 32px)",
    fontWeight: 500,
    textAlign: "center",
    margin: "0 auto clamp(20px, 4.5vw, 28px)",
    maxWidth: "20ch",
    lineHeight: 1.18,
    color: tecaColors.text,
  },

  sectionSubtitle: {
    ...tecaFont.prose,
    fontSize: "clamp(16px, 3.8vw, 19px)",
    lineHeight: 1.55,
    textAlign: "center",
    margin: "0 auto clamp(36px, 8vw, 52px)",
    maxWidth: "32ch",
    color: tecaColors.muted,
  },

  sectionLead: {
    ...tecaFont.prose,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.55,
    textAlign: "center",
    margin: "0 auto 8px",
    maxWidth: "30ch",
    color: tecaColors.muted,
  },

  journeySteps: {
    listStyle: "none",
    margin: "clamp(18px, 4vw, 24px) auto 0",
    padding: 0,
    maxWidth: "16ch",
    textAlign: "center",
  },

  journeyStep: {
    ...tecaFont.poetic,
    fontSize: "clamp(18px, 4.2vw, 22px)",
    fontStyle: "italic",
    lineHeight: 1.4,
    margin: "0 0 6px",
    color: tecaColors.text,
  },

  howItWorks: {
    margin: "clamp(48px, 11vw, 68px) auto",
    maxWidth: "280px",
    padding: "clamp(28px, 6vw, 36px) clamp(20px, 4.5vw, 28px)",
    borderRadius: "22px",
    border: "1px dashed rgba(196, 165, 141, 0.36)",
    background:
      "linear-gradient(168deg, rgba(255,253,249,0.92) 0%, rgba(248,239,228,0.78) 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.88)",
  },

  howStep: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    margin: 0,
    padding: 0,
  },

  howStepNumber: {
    ...tecaFont.heading,
    fontSize: "13px",
    letterSpacing: "0.12em",
    color: "rgba(179, 129, 95, 0.72)",
    margin: 0,
  },

  howStepText: {
    ...tecaFont.prose,
    fontSize: "clamp(16px, 3.8vw, 18px)",
    lineHeight: 1.4,
    textAlign: "center",
    margin: "0 0 2px",
    color: tecaColors.text,
  },

  howArrow: {
    display: "block",
    margin: "6px auto 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
    lineHeight: 1,
    color: "rgba(179, 129, 95, 0.45)",
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
    ...tecaFont.heading,
    fontSize: "clamp(20px, 4.5vw, 24px)",
    fontWeight: 500,
    margin: "0 0 8px",
    color: tecaColors.text,
  },

  pillarTitleFeatured: {
    fontSize: "clamp(24px, 5.5vw, 30px)",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    margin: "0 0 12px",
  },

  pillarText: {
    ...tecaFont.prose,
    fontSize: "clamp(15px, 3.5vw, 17px)",
    lineHeight: 1.48,
    margin: 0,
    color: tecaColors.muted,
  },

  philosophyBlock: {
    maxWidth: "34ch",
    margin: "0 auto",
    textAlign: "center",
    padding: "clamp(16px, 4vw, 24px) 0",
  },

  philosophyLead: {
    ...tecaFont.poetic,
    fontSize: "clamp(18px, 4vw, 21px)",
    margin: "0 0 clamp(20px, 4vw, 28px)",
    color: tecaColors.muted,
  },

  philosophyList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "clamp(14px, 3.5vw, 20px)",
  },

  philosophyItem: {
    ...tecaFont.prose,
    fontSize: "clamp(17px, 3.9vw, 19px)",
    lineHeight: 1.5,
    color: tecaColors.text,
    margin: 0,
  },

  closingChapter: {
    marginTop: "clamp(24px, 5vw, 36px)",
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
      "clamp(56px, 12vw, 80px) clamp(22px, 5vw, 32px) clamp(72px, 16vw, 112px)",
    textAlign: "center",
  },

  epilogueTitle: {
    ...tecaFont.heading,
    fontSize: "clamp(23px, 5.2vw, 30px)",
    fontWeight: 500,
    lineHeight: 1.28,
    margin: "0 auto clamp(18px, 4vw, 24px)",
    maxWidth: "22ch",
    color: tecaColors.text,
  },

  epilogueText: {
    ...tecaFont.prose,
    fontSize: "clamp(17px, 3.9vw, 20px)",
    lineHeight: 1.58,
    margin: "0 auto 12px",
    maxWidth: "36ch",
    color: tecaColors.muted,
  },

  epilogueEmphasis: {
    ...tecaFont.heading,
    fontSize: "clamp(18px, 4.2vw, 22px)",
    fontWeight: 500,
    lineHeight: 1.4,
    margin: "clamp(16px, 4vw, 22px) auto 0",
    maxWidth: "28ch",
    color: tecaColors.text,
  },

  invitationBlock: {
    padding:
      "clamp(72px, 16vw, 104px) clamp(22px, 5vw, 32px) clamp(72px, 16vw, 104px)",
    textAlign: "center",
  },

  invitationTitle: {
    ...tecaFont.heading,
    fontSize: "clamp(28px, 6.8vw, 38px)",
    fontWeight: 500,
    lineHeight: 1.18,
    margin: "0 auto clamp(36px, 8vw, 48px)",
    maxWidth: "16ch",
    color: tecaColors.text,
  },

  invitationActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    maxWidth: "min(100%, 360px)",
    margin: "0 auto",
    padding: "clamp(12px, 3vw, 20px) 0",
  },

  invitationCta: {
    width: "100%",
    fontSize: "clamp(17px, 4vw, 19px)",
    padding: "15px 28px",
    letterSpacing: "0.03em",
  },

  signatureBlock: {
    padding:
      "clamp(64px, 14vw, 96px) clamp(22px, 5vw, 32px) clamp(40px, 9vw, 56px)",
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
    margin: "clamp(48px, 11vw, 68px) auto 0",
    maxWidth: "34ch",
    color: tecaColors.muted,
  },

  signatureLogo: {
    display: "block",
    width: "clamp(248px, 62vw, 320px)",
    height: "auto",
    margin: "clamp(64px, 14vw, 96px) auto 0",
    opacity: 0.98,
    filter: "drop-shadow(0 8px 24px rgba(90,60,30,0.11))",
  },

  chapterDots: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    padding: "0 0 clamp(28px, 6vw, 40px)",
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
