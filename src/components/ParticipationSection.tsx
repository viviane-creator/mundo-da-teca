import type { ParticipationPlanId } from "../data/participationPlans"
import { participationPlans } from "../data/participationPlans"
import { styles } from "../styles/appStyles"
import { PlanCard } from "./PlanCard"

export function ParticipationSection({
  onGoToClube,
  variant = "default",
}: {
  onGoToClube: (planId: ParticipationPlanId) => void
  variant?: "default" | "home-path"
}) {
  if (variant === "home-path") {
    return (
      <section style={styles.homeV2PathSection}>
        <h2 style={styles.homePlaceTitle}>Clube</h2>
        <p style={styles.homeSectionHeading}>Escolha como deseja explorar.</p>
        <p style={styles.homeSectionSubtitle}>
          Duas formas de participar da expedição.
        </p>

        <div style={styles.homeV2PathStack}>
          {participationPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onCta={() => onGoToClube(plan.id)}
              variant="home-path"
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section style={styles.homeSectionBlock}>
      <h2 style={styles.sectionHeading}>Como Participar</h2>

      <div style={styles.planCardsStack}>
        {participationPlans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onCta={() => onGoToClube(plan.id)}
            tilt={index === 0 ? 0.25 : -0.25}
          />
        ))}
      </div>
    </section>
  )
}
