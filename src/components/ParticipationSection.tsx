import { participationPlans } from "../data/participationPlans"
import { styles } from "../styles/appStyles"
import { PlanCard } from "./PlanCard"

export function ParticipationSection({ onGoToClube }: { onGoToClube: () => void }) {
  return (
    <section style={styles.homeSectionBlock}>
      <h2 style={styles.homeSectionHeading}>escolha como participar</h2>

      <div style={styles.planCardsStack}>
        {participationPlans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onCta={onGoToClube}
            tilt={index === 0 ? 0.25 : -0.25}
          />
        ))}
      </div>
    </section>
  )
}
