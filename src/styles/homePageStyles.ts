import type { CSSProperties } from "react"
import { tecaFont, tecaHierarchy } from "../tecaVisual"

const theme = {
  text: "#6a4f3c",
  muted: "#8b7668",
}

export const homePageStyles: Record<string, CSSProperties> = {
  tecaHostessWrap: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto clamp(18px, 4.5vw, 26px)",
  },

  textSection: {
    position: "relative",
    zIndex: 1,
    padding:
      "clamp(28px, 7vw, 40px) clamp(20px, 5vw, 28px) clamp(32px, 8vw, 44px)",
    textAlign: "center",
    background: "transparent",
  },

  philosophy: {
    position: "relative",
    zIndex: 1,
    margin: "0",
    padding: "clamp(28px, 7vw, 40px) clamp(20px, 5vw, 28px)",
    textAlign: "center",
    background: "transparent",
  },

  philosophyMark: {
    ...tecaHierarchy.l6Micro,
    margin: "0 0 clamp(18px, 4.5vw, 24px)",
    letterSpacing: "0.35em",
    opacity: 0.55,
  },

  philosophyLine: {
    ...tecaFont.poetic,
    fontSize: "clamp(17px, 4.2vw, 20px)",
    margin: "0 auto clamp(10px, 2.5vw, 14px)",
    maxWidth: "28ch",
    lineHeight: 1.48,
    color: theme.muted,
  },

  philosophyClosing: {
    ...tecaFont.prose,
    fontSize: "clamp(15px, 3.6vw, 17px)",
    margin: "clamp(22px, 5vw, 28px) auto 0",
    maxWidth: "32ch",
    lineHeight: 1.55,
    color: theme.text,
  },

  chaptersSection: {
    position: "relative",
    zIndex: 1,
    padding:
      "clamp(36px, 9vw, 48px) 0 clamp(12px, 3vw, 18px)",
    textAlign: "center",
    background: "transparent",
  },

  chaptersTitle: {
    ...tecaFont.heading,
    fontSize: "clamp(24px, 6vw, 30px)",
    fontWeight: 400,
    lineHeight: 1.2,
    margin: "0 auto clamp(12px, 3vw, 16px)",
    maxWidth: "18ch",
    color: theme.text,
  },

  chaptersEpigraph: {
    ...tecaFont.poetic,
    fontSize: "clamp(15px, 3.8vw, 17px)",
    margin: "0 auto clamp(12px, 3vw, 16px)",
    maxWidth: "26ch",
    lineHeight: 1.5,
    color: theme.muted,
  },

  finalSection: {
    position: "relative",
    zIndex: 1,
    padding:
      "clamp(36px, 9vw, 48px) clamp(20px, 5vw, 28px) clamp(48px, 12vw, 64px)",
    textAlign: "center",
    background: "transparent",
  },

  finalLine: {
    ...tecaFont.poetic,
    fontSize: "clamp(16px, 4vw, 18px)",
    margin: "0 auto 6px",
    maxWidth: "30ch",
    lineHeight: 1.5,
    color: theme.muted,
  },

  finalLineLast: {
    marginBottom: "clamp(24px, 6vw, 32px)",
  },
}
