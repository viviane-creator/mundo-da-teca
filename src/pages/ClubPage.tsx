import { useEffect } from "react"
import { useAuth } from "../auth/authContext"
import { clubPageCopy } from "../data/clubPageCopy"
import { clubPlanAccents } from "../data/clubPlanAccent"
import { clubParticipationPlans } from "../data/participationPlans"
import type { ParticipationPlanId } from "../data/participationPlans"
import { PlanCard } from "../components/PlanCard"
import { ClubMemberCard } from "../components/ClubMemberCard"
import { appRoutes } from "../navigation/appRoutes"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function ClubPage({
  setScreen,
  focusPlan = null,
}: {
  setScreen: (screen: string) => void
  focusPlan?: ParticipationPlanId | null
}) {
  const { childProfile } = useAuth()
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
        <h2 style={styles.clubEntryHeading}>{clubPageCopy.title}</h2>
        <p style={styles.clubFichaHint}>{clubPageCopy.intro}</p>
        <p style={{ ...styles.clubFichaHint, marginTop: "-4px" }}>
          {clubPageCopy.introFollow}
        </p>

        <div style={styles.planCardsStack}>
          {clubParticipationPlans.map((plan, index) => (
            <div
              key={plan.id}
              data-club-plan={plan.id}
              style={
                focusPlan === plan.id
                  ? {
                      ...styles.clubPlanCardFocused,
                      boxShadow: `0 0 0 2px ${clubPlanAccents[plan.id].borderHover}, 0 12px 28px rgba(120,90,60,0.1)`,
                    }
                  : undefined
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
        <ClubMemberCard profile={childProfile} />
      </section>
    </WorldPortalLayout>
  )
}
