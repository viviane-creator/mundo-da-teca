import type { CSSProperties } from "react"
import type { ParticipationPlanId } from "./participationPlans"

export type ClubPlanAccent = {
  spine: string
  border: string
  borderHover: string
  badgeBg: string
  badgeBorder: string
  ink: string
  sealLabel: string
  ctaTone: "clubeExplorador" | "clubeColecionador"
}

export const clubPlanAccents: Record<ParticipationPlanId, ClubPlanAccent> = {
  explorador: {
    spine: "#7E96B8",
    border: "rgba(126, 150, 184, 0.38)",
    borderHover: "rgba(126, 150, 184, 0.52)",
    badgeBg: "rgba(126, 150, 184, 0.12)",
    badgeBorder: "rgba(126, 150, 184, 0.35)",
    ink: "#6E88AA",
    sealLabel: "plano digital",
    ctaTone: "clubeExplorador",
  },
  colecionador: {
    spine: "#C9AD6A",
    border: "rgba(201, 173, 106, 0.42)",
    borderHover: "rgba(201, 173, 106, 0.58)",
    badgeBg: "rgba(201, 173, 106, 0.14)",
    badgeBorder: "rgba(201, 173, 106, 0.4)",
    ink: "#A88E50",
    sealLabel: "plano físico",
    ctaTone: "clubeColecionador",
  },
}

export function clubPlanCardShellStyle(
  planId: ParticipationPlanId,
): CSSProperties {
  const accent = clubPlanAccents[planId]
  return {
    position: "relative",
    borderRadius: "18px",
    border: `1px solid ${accent.border}`,
    background:
      "linear-gradient(165deg, rgba(255,253,249,0.97) 0%, rgba(252,247,240,0.94) 100%)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.8), 0 6px 20px rgba(120,90,60,0.06)",
    overflow: "hidden",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  }
}

export function clubPlanSpineStyle(planId: ParticipationPlanId): CSSProperties {
  const accent = clubPlanAccents[planId]
  return {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "5px",
    background: accent.spine,
    opacity: 0.72,
    borderRadius: "18px 0 0 18px",
  }
}

export function clubPlanSealStyle(planId: ParticipationPlanId): CSSProperties {
  const accent = clubPlanAccents[planId]
  return {
    display: "inline-block",
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    color: accent.ink,
    border: `1px solid ${accent.badgeBorder}`,
    borderRadius: "999px",
    padding: "5px 10px",
    background: accent.badgeBg,
    marginBottom: "12px",
  }
}
