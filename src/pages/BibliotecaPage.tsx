import { BibliotecaMesaIllustration } from "../components/biblioteca/BibliotecaMesaIllustration"
import { BibliotecaShelfGlyph } from "../components/biblioteca/BibliotecaShelfGlyph"
import { bibliotecaContent } from "../data/bibliotecaContent"
import { bibliotecaShelfItems } from "../data/bibliotecaMock"
import { styles } from "../styles/appStyles"

const shelfTilts = [-0.7, 0.55, -0.45, 0.65]

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

      <section style={styles.bibliotecaHero}>
        <span style={styles.bibliotecaHeroSpine} aria-hidden="true" />
        <BibliotecaMesaIllustration />
      </section>

      <div style={styles.pageIntroBlock}>
        <p style={styles.bibliotecaKicker}>{bibliotecaContent.kicker}</p>
        <h1 style={styles.bibliotecaTitle}>{bibliotecaContent.title}</h1>
        <p style={styles.bibliotecaIntroLead}>{bibliotecaContent.introLead}</p>
        <p style={styles.bibliotecaIntro}>{bibliotecaContent.introBody}</p>
      </div>

      <p style={styles.bibliotecaShelfLabel}>
        {bibliotecaContent.shelfSectionTitle}
      </p>

      <div style={styles.bibliotecaShelf}>
        <span style={styles.bibliotecaShelfBoard} aria-hidden="true" />
        <div style={styles.bibliotecaShelfGrid}>
          {bibliotecaShelfItems.map((item, index) => (
            <article
              key={item.id}
              style={{
                ...styles.bibliotecaShelfItem,
                transform: `rotate(${shelfTilts[index % shelfTilts.length]}deg)`,
              }}
            >
              <span style={styles.bibliotecaShelfEtiqueta}>{item.etiqueta}</span>
              <div style={styles.bibliotecaShelfGlyphWrap}>
                <BibliotecaShelfGlyph kind={item.glyph} />
              </div>
              <h2 style={styles.bibliotecaShelfTitle}>{item.title}</h2>
              <p style={styles.bibliotecaShelfText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <article style={styles.bibliotecaQuietNote}>
        <h2 style={styles.bibliotecaQuietTitle}>
          {bibliotecaContent.comingSoonTitle}
        </h2>
        <p style={styles.bibliotecaQuietText}>
          {bibliotecaContent.comingSoonText}
        </p>
      </article>
    </section>
  )
}
