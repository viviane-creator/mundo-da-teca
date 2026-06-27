import type { ParticipationPlan } from "../data/participationPlans"
import { homeParticipationJourneys } from "../data/participationPlans"
import {
  clubInstitutionalCtaTone,
  clubPlanAccents,
  clubPlanCardShellStyle,
  clubPlanCtaTone,
  clubPlanSealStyle,
  clubPlanSpineStyle,
} from "../data/clubPlanAccent"
import { styles } from "../styles/appStyles"
import { homeCtaClassName, homeCtaStyle } from "../styles/homeCta"
import { tecaTilt } from "../tecaVisual"
import { FicharioEtiqueta } from "./fichario"

export function PlanCard({
  plan,
  onCta,
  tilt = 0,
  variant = "default",
}: {
  plan: ParticipationPlan
  onCta: () => void
  tilt?: number
  variant?: "default" | "home-path"
}) {
  const accent = clubPlanAccents[plan.id]

  if (variant === "home-path") {
    const journey = homeParticipationJourneys[plan.id]

    return (
      <article style={styles.homeV2PathCard}>
        {journey.decor.length > 0 ? (
          <div style={styles.homeV2PathCardDecor} aria-hidden="true">
            {journey.decor.map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt=""
                style={{
                  ...styles.homeV2PathCardDecorImg,
                  width: `${item.w}px`,
                  height: `${item.h}px`,
                  ...(item.top ? { top: item.top } : {}),
                  ...(item.bottom ? { bottom: item.bottom } : {}),
                  ...(item.left ? { left: item.left } : {}),
                  ...(item.right ? { right: item.right } : {}),
                  transform: `rotate(${item.rotate}deg)`,
                }}
              />
            ))}
          </div>
        ) : null}

        <div style={styles.homeV2PathCardInner}>
          <h3 style={styles.homeV2PathJourneyTitle}>{plan.title}</h3>
          <p style={styles.homeV2PathJourneyText}>{journey.journeyText}</p>
          <FicharioEtiqueta
            action
            onClick={onCta}
            className={homeCtaClassName(clubInstitutionalCtaTone)}
            style={{
              ...styles.homeV2PathButton,
              ...homeCtaStyle(clubInstitutionalCtaTone),
            }}
          >
            {journey.pathCta}
          </FicharioEtiqueta>
        </div>
      </article>
    )
  }

  return (
    <article
      style={{
        ...clubPlanCardShellStyle(plan.id),
        ...tecaTilt(tilt),
      }}
    >
      <span aria-hidden="true" style={clubPlanSpineStyle(plan.id)} />
      <div style={styles.clubPlanCardBody}>
        <span style={clubPlanSealStyle(plan.id)}>{accent.sealLabel}</span>
        <h3 style={styles.planCardTitle}>{plan.title}</h3>
        <ul style={styles.planBenefitsList}>
          {plan.benefits.map((benefit) => (
            <li key={benefit} style={styles.planBenefitItem}>
              {benefit}
            </li>
          ))}
        </ul>
        <FicharioEtiqueta
          action
          onClick={onCta}
          className={homeCtaClassName(clubPlanCtaTone(plan.id))}
          style={{
            ...styles.planCardButton,
            ...homeCtaStyle(clubPlanCtaTone(plan.id)),
          }}
        >
          {plan.ctaLabel}
        </FicharioEtiqueta>
      </div>
    </article>
  )
}
