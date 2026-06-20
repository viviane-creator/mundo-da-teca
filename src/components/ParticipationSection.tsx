import { participationPlans } from "../data/participationPlans"
import { styles } from "../styles/appStyles"
import { PlanCard } from "./PlanCard"

export function ParticipationSection({
  onGoToClube,
  variant = "default",
}: {
  onGoToClube: () => void
  variant?: "default" | "home-path"
}) {
  if (variant === "home-path") {
    return (
      <section style={styles.homeV2PathSection}>
        <p style={styles.homeV2SectionKicker}>continuar o fichário</p>
        <h2 style={styles.homeSectionHeading}>Escolha como começar.</h2>
        <p style={styles.homeSectionSubtitle}>
          Novas fichas chegam na caixa — para continuar a coleção em casa.
        </p>

        <div style={styles.homeV2PathStack}>
          {participationPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onCta={onGoToClube}
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
            onCta={onGoToClube}
            tilt={index === 0 ? 0.25 : -0.25}
          />
        ))}
      </div>
    </section>
  )
}
