import { useState } from "react"
import {
  clubAtelierNote,
  clubIntroText,
  clubParticipationPlans,
  collectionConceptNote,
} from "../data/participationPlans"
import { PlanCard } from "../components/PlanCard"
import { SoftNote } from "../components/SoftNote"
import { styles } from "../styles/appStyles"
import { tecaTilt } from "../tecaVisual"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function ClubPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const [childName, setChildName] = useState("teca")
  const [birthday, setBirthday] = useState("12 de abril")
  const [memberSince, setMemberSince] = useState("maio de 2026")
  const portal = portalPages.clube

  return (
    <WorldPortalLayout {...portal} compactTitle breath="large">
      <section style={styles.clubPlansSection}>
        <p style={styles.clubBelongingText}>{clubIntroText}</p>

        <h2 style={styles.homeSectionHeading}>como participar</h2>

        <div style={styles.planCardsStack}>
          {clubParticipationPlans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onCta={() => {}}
              tilt={index === 0 ? 0.25 : -0.25}
            />
          ))}
        </div>
      </section>

      <SoftNote label="a coleção">{collectionConceptNote}</SoftNote>

      <SoftNote label="ateliê">{clubAtelierNote}</SoftNote>

      <button
        type="button"
        style={styles.clubJoinButton}
        onClick={() => setScreen("atelie")}
      >
        Conhecer o Ateliê
      </button>

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
