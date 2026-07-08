import type { CSSProperties } from "react"
import { tecaColors, tecaFont } from "../tecaVisual"

const paperWash =
  "radial-gradient(ellipse 82% 58% at 50% 0%, rgba(255,253,249,0.96) 0%, transparent 70%)"

const watercolorMist =
  "radial-gradient(ellipse 62% 46% at 14% 18%, rgba(143,168,198,0.07) 0%, transparent 72%), radial-gradient(ellipse 54% 40% at 86% 82%, rgba(201,173,106,0.06) 0%, transparent 68%)"

export const launchPageStyles: Record<string, CSSProperties> = {
  page: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
    background: tecaColors.paper,
    backgroundImage: `${paperWash}, ${watercolorMist}`,
    textAlign: "center",
    padding:
      "clamp(28px, 7vw, 40px) clamp(22px, 5vw, 28px) clamp(24px, 6vw, 32px)",
  },

  logo: {
    width: "clamp(96px, 24vw, 124px)",
    height: "auto",
    marginBottom: "clamp(18px, 4.5vw, 24px)",
    flexShrink: 0,
  },

  title: {
    ...tecaFont.portalTitle,
    fontSize: "clamp(22px, 5.4vw, 28px)",
    fontWeight: 400,
    lineHeight: 1.08,
    margin: "0 0 14px",
    maxWidth: "18ch",
    color: tecaColors.text,
    flexShrink: 0,
  },

  textBlock: {
    margin: "0 0 clamp(16px, 4vw, 22px)",
    flexShrink: 0,
  },

  textLine: {
    ...tecaFont.poetic,
    fontSize: "clamp(15px, 3.8vw, 17px)",
    margin: "0 0 4px",
    color: tecaColors.muted,
    lineHeight: 1.45,
  },

  illustrationWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: 0,
    padding: "clamp(8px, 2vw, 14px) 0",
  },

  illustration: {
    display: "block",
    width: "100%",
    maxWidth: "min(100%, 360px)",
    maxHeight: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
    borderRadius: "18px",
    filter: "saturate(0.88) contrast(0.96) brightness(1.02)",
    boxShadow:
      "0 14px 36px rgba(120,90,60,0.08), 0 2px 8px rgba(120,90,60,0.04)",
  },

  ctaWrap: {
    flexShrink: 0,
    paddingTop: "clamp(14px, 3.5vw, 20px)",
  },

  cta: {
    ...tecaFont.heading,
    fontSize: "15px",
    fontWeight: 400,
    letterSpacing: "0.04em",
    padding: "11px 26px",
    borderRadius: "999px",
    border: `1px solid ${tecaColors.line}`,
    background: "rgba(255,253,249,0.62)",
    color: tecaColors.text,
    cursor: "pointer",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.82)",
    transition:
      "background-color 0.35s ease, border-color 0.35s ease, opacity 0.35s ease",
  },
}
