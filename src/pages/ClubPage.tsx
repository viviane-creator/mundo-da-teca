import { useEffect, useState } from "react"
import { clubParticipationPlans } from "../data/participationPlans"
import type { ParticipationPlanId } from "../data/participationPlans"
import { PlanCard } from "../components/PlanCard"
import { appRoutes } from "../navigation/appRoutes"
import { styles } from "../styles/appStyles"
import { tecaTilt } from "../tecaVisual"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function ClubPage({
  setScreen,
  focusPlan = null,
}: {
  setScreen: (screen: string) => void
  focusPlan?: ParticipationPlanId | null
}) {
  const [childName, setChildName] = useState("teca")
  const [birthday, setBirthday] = useState("12 de abril")
  const [memberSince, setMemberSince] = useState("maio de 2026")
  const portal = portalPages.clube

  useEffect(() => {
    if (!focusPlan) return

    const frame = window.requestAnimationFrame(() => {
      document
        .querySelector(`[data-club-plan="${focusPlan}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [focusPlan])

  return (
    <WorldPortalLayout {...portal} breath="large">
      <section style={styles.clubPlansSection}>
        <p style={styles.clubSecondaryLabel}>novas fichas chegando</p>
        <h2 style={styles.clubEntryHeading}>Como Participar</h2>
        <p style={styles.clubFichaHint}>
          O clube envia fichas novas para a coleção — online ou em casa.
        </p>

        <div style={styles.planCardsStack}>
          {clubParticipationPlans.map((plan, index) => (
            <div
              key={plan.id}
              data-club-plan={plan.id}
              style={
                focusPlan === plan.id ? styles.clubPlanCardFocused : undefined
              }
            >
              <PlanCard
                plan={plan}
                onCta={() =>
                  setScreen(
                    plan.id === "explorador"
                      ? appRoutes.minhaColecao
                      : appRoutes.atelie,
                  )
                }
                tilt={index === 0 ? 0.25 : -0.25}
              />
            </div>
          ))}
        </div>
      </section>

      <div style={styles.homeEditorialDivider} />

      <section style={styles.clubCarteirinhaSection}>
        <p style={styles.clubSecondaryLabel}>pertencimento</p>

        <article style={{ ...styles.clubMemberCard, ...tecaTilt(-0.35) }}>
          <div style={styles.clubMemberCardTop}>
            <span style={styles.clubSealBadge}>teca</span>
            <p style={styles.clubMemberNumber}>carteirinha nº 024</p>
          </div>

          <h2 style={styles.clubMemberCardTitle}>carteirinha da teca</h2>
          <p style={styles.clubFichaHint}>
            ficha de pertencimento — preencha com calma
          </p>

          <div style={styles.clubField}>
            <p style={styles.clubFieldLabel}>nome da criança</p>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              style={styles.clubFieldLine}
              aria-label="nome da criança"
            />
          </div>

          <div style={styles.clubField}>
            <p style={styles.clubFieldLabel}>aniversário</p>
            <input
              type="text"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              style={styles.clubFieldLine}
              aria-label="aniversário"
            />
          </div>

          <div style={styles.clubField}>
            <p style={styles.clubFieldLabel}>membro desde</p>
            <input
              type="text"
              value={memberSince}
              onChange={(e) => setMemberSince(e.target.value)}
              style={styles.clubFieldLine}
              aria-label="membro desde"
            />
          </div>
        </article>
      </section>
    </WorldPortalLayout>
  )
}
