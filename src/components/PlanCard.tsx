import type { ParticipationPlan } from "../data/participationPlans"
import { styles } from "../styles/appStyles"
import { tecaObjects, tecaTilt } from "../tecaVisual"

export function PlanCard({
  plan,
  onCta,
  tilt = 0,
}: {
  plan: ParticipationPlan
  onCta: () => void
  tilt?: number
}) {
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
