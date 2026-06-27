import { HomeTecaHostess } from "./HomeTecaHostess"
import { styles } from "../../styles/appStyles"

function HomeChapterDivider() {
  return (
    <div style={styles.homeChapterDivider} aria-hidden="true">
      <span style={styles.homeChapterDividerDot} />
      <span style={{ ...styles.homeChapterDividerDot, ...styles.homeChapterDividerDotMid }} />
      <span style={styles.homeChapterDividerDot} />
    </div>
  )
}

export function HomeAboutSection() {
  return (
    <div style={styles.homeAboutChapter}>
      <HomeChapterDivider />

      <section style={styles.homeChapterOpener} aria-labelledby="home-about-title">
        <div style={styles.homeChapterOpenerIllustration}>
          <HomeTecaHostess />
        </div>

        <h2 id="home-about-title" style={styles.homeChapterOpenerTitle}>
          O que é o Mundo da Teca?
        </h2>

        <p style={styles.homeChapterOpenerProse}>
          O Mundo da Teca reúne brincadeiras, experiências e coleções que
          transformam a curiosidade das crianças em descobertas inesquecíveis.
        </p>
        <p style={styles.homeChapterOpenerProseFollow}>
          Cada descoberta pode ser registrada, guardada e revisitada, criando
          uma coleção que cresce junto com a infância.
        </p>
      </section>
    </div>
  )
}
