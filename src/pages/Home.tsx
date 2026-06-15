import { whatIsMundoDaTeca } from "../data/participationPlans"
import { ParticipationSection } from "../components/ParticipationSection"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function Home({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.home

  return (
    <WorldPortalLayout {...portal} variant="home">
      <section style={styles.homeSectionBlock}>
        <h2 style={styles.homeSectionHeading}>O que é o Mundo da Teca?</h2>
        <p style={styles.homeSectionPoetic}>{whatIsMundoDaTeca}</p>
      </section>

      <div style={styles.homeEditorialDivider} />

      <ParticipationSection onGoToClube={() => setScreen("clube")} />

      <div style={styles.homeEditorialDivider} />

      <section style={styles.homeSectionBlock}>
        <h2 style={styles.homeSectionHeading}>Conheça as brincadeiras</h2>
        <p style={styles.homeSectionPoetic}>
          Veja algumas experiências abertas e descubra como o Mundo da Teca ajuda
          as crianças a explorar o mundo real longe das telas.
        </p>
        <button
          type="button"
          style={styles.homeBrincadeirasButton}
          onClick={() => setScreen("brincadeiras")}
        >
          Ver brincadeiras
        </button>
      </section>
    </WorldPortalLayout>
  )
}
