import { whatIsMundoDaTeca } from "../data/participationPlans"
import { ParticipationSection } from "../components/ParticipationSection"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

const homePaths = [
  {
    title: "Universos",
    text: "explorar experiências e descobertas",
    image: "/covers/brincadeiras.png",
    screen: "universos",
  },
  {
    title: "Meu Mundo",
    text: "guardar descobertas, coleções e registros",
    image: "/covers/descobertas.png",
    screen: "meu-mundo",
  },
  {
    title: "Clube",
    text: "participar do Mundo da Teca",
    image: "/covers/clube.png",
    screen: "clube",
  },
  {
    title: "Ateliê",
    text: "colecionar papéis e pequenos tesouros",
    image: "/covers/atelie.png",
    screen: "atelie",
  },
]

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
        <h2 style={styles.homeSectionHeading}>Explore os universos</h2>
        <p style={styles.homeSectionPoetic}>
          Veja algumas experiências abertas e descubra como o Mundo da Teca ajuda
          as crianças a explorar o mundo real longe das telas.
        </p>
        <button
          type="button"
          style={styles.homePrimaryButton}
          onClick={() => setScreen("universos")}
        >
          Ver Universos
        </button>
      </section>

      <div style={styles.homeEditorialDivider} />

      <section style={styles.homeSectionBlock}>
        <h2 style={styles.homeSectionHeading}>Caminhos do Mundo da Teca</h2>
        <div style={styles.homePathGrid}>
          {homePaths.map((path) => (
            <button
              key={path.screen}
              type="button"
              style={styles.homePathButton}
              onClick={() => setScreen(path.screen)}
            >
              <article
                style={{
                  ...styles.homePathCard,
                  backgroundImage: `url(${path.image})`,
                }}
              >
                <div style={styles.homePathOverlay}>
                  <div style={styles.homePathBody}>
                    <h3 style={styles.homePathLabel}>{path.title}</h3>
                    <p style={styles.homePathText}>{path.text}</p>
                  </div>
                </div>
              </article>
            </button>
          ))}
        </div>
      </section>
    </WorldPortalLayout>
  )
}
