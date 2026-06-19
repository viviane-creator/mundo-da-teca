import type { ParticipationPlan } from "../data/participationPlans"
import { homeParticipationJourneys } from "../data/participationPlans"
import { styles } from "../styles/appStyles"
import { tecaObjects, tecaTilt } from "../tecaVisual"

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
        <div style={styles.homeV2PathJourneyHeader}>
          <span style={styles.homeV2PathJourneyIcon} aria-hidden="true">
            {journey.icon}
          </span>
          <h3 style={styles.homeV2PathJourneyTitle}>{journey.journeyTitle}</h3>
        </div>

        <p style={styles.homeV2PathJourneyPoetic}>{journey.journeyPoetic}</p>

        <p style={styles.homeV2PathPlanName}>{plan.title}</p>

        <button type="button" style={styles.homeV2PathButton} onClick={onCta}>
          {journey.pathCta}
        </button>
      </article>
    )
  }

  return (
    <article
      style={{
        ...styles.planCard,
        ...tecaObjects.card("md"),
        ...tecaTilt(tilt),
      }}
    >
      <h3 style={styles.planCardTitle}>{plan.title}</h3>

      <ul style={styles.planBenefitsList}>
        {plan.benefits.map((benefit) => (
          <li key={benefit} style={styles.planBenefitItem}>
            {benefit}
          </li>
        ))}
      </ul>

      <button type="button" style={styles.planCardButton} onClick={onCta}>
        {plan.ctaLabel}
      </button>
    </article>
  )
}
