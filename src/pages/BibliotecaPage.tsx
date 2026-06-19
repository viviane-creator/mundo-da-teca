import { SoftNote } from "../components/SoftNote"
import { styles } from "../styles/appStyles"

export function BibliotecaPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  return (
    <section style={styles.subPage}>
      <button
        type="button"
        onClick={() => setScreen("meu-mundo")}
        style={styles.backButton}
      >
        ← meu mundo
      </button>

      <div style={styles.pageIntroBlock}>
        <h1 style={styles.pageTitle}>biblioteca</h1>
        <p style={styles.pageIntro}>
          páginas lidas, relidas e guardadas — um canto quieto para voltar
          quando quiser.
        </p>
      </div>

      <SoftNote label="em breve">
        esta biblioteca está sendo preparada com calma. por enquanto, continue
        guardando descobertas no diário e nas coleções.
      </SoftNote>
    </section>
  )
}
