import type { ParticipationPlan } from "../data/participationPlans"
import { homeParticipationJourneys } from "../data/participationPlans"
import { styles } from "../styles/appStyles"
import { FicharioEtiqueta, FicharioFicha } from "./fichario"

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
  if (variant === "home-path") {
    const journey = homeParticipationJourneys[plan.id]

    return (
      <article style={styles.homeV2PathCard}>
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

        <div style={styles.homeV2PathCardInner}>
          <h3 style={styles.homeV2PathJourneyTitle}>{journey.journeyTitle}</h3>
          <p style={styles.homeV2PathJourneyText}>{journey.journeyText}</p>
          <p style={styles.homeV2PathPlanName}>{plan.title}</p>
          <FicharioEtiqueta action onClick={onCta} style={styles.homeV2PathButton}>
            {journey.pathCta}
          </FicharioEtiqueta>
        </div>
      </article>
    )
  }

  return (
    <FicharioFicha flat tilt={tilt}>
      <h3 style={styles.planCardTitle}>{plan.title}</h3>
      <ul style={styles.planBenefitsList}>
        {plan.benefits.map((benefit) => (
          <li key={benefit} style={styles.planBenefitItem}>
            {benefit}
          </li>
        ))}
      </ul>
      <FicharioEtiqueta action onClick={onCta} style={styles.planCardButton}>
        {plan.ctaLabel}
      </FicharioEtiqueta>
    </FicharioFicha>
  )
}
