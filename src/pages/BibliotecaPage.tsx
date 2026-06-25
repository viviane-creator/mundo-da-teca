import { BibliotecaKitCard } from "../components/biblioteca/BibliotecaKitCard"
import { BibliotecaMesaIllustration } from "../components/biblioteca/BibliotecaMesaIllustration"
import { bibliotecaAtlas } from "../data/bibliotecaAtlas"
import { bibliotecaContent } from "../data/bibliotecaContent"
import { bibliotecaShelfItems } from "../data/bibliotecaMock"
import { styles } from "../styles/appStyles"

const kitTilts = [-0.35, 0.28, -0.22, 0.3]

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

      <section
        style={{
          ...styles.bibliotecaHero,
          borderColor: bibliotecaAtlas.line,
        }}
      >
        <span
          style={{
            ...styles.bibliotecaHeroSpine,
            background: bibliotecaAtlas.accent,
          }}
          aria-hidden="true"
        />
        <BibliotecaMesaIllustration />
      </section>

      <div style={styles.pageIntroBlock}>
        <p
          style={{
            ...styles.bibliotecaKicker,
            color: bibliotecaAtlas.deep,
          }}
        >
          {bibliotecaContent.kicker}
        </p>
        <h1 style={styles.bibliotecaTitle}>{bibliotecaContent.title}</h1>
        <p style={styles.bibliotecaIntroLead}>{bibliotecaContent.introLead}</p>
        <p style={styles.bibliotecaIntro}>{bibliotecaContent.introBody}</p>
      </div>

      <p style={styles.bibliotecaShelfLabel}>
        {bibliotecaContent.shelfSectionTitle}
      </p>

      <div style={styles.bibliotecaKitStack}>
        {bibliotecaShelfItems.map((item, index) => (
          <BibliotecaKitCard
            key={item.id}
            glyph={item.glyph}
            category={item.category}
            title={item.title}
            text={item.text}
            openLabel={bibliotecaContent.openKitLabel}
            tilt={kitTilts[index % kitTilts.length]}
            onOpen={() => {}}
          />
        ))}
      </div>

      <article
        style={{
          ...styles.bibliotecaGrowthNote,
          borderColor: bibliotecaAtlas.line,
        }}
      >
        <span
          style={{
            ...styles.bibliotecaGrowthSpine,
            background: bibliotecaAtlas.accent,
          }}
          aria-hidden="true"
        />
        <h2 style={styles.bibliotecaGrowthTitle}>
          {bibliotecaContent.growthTitle}
        </h2>
        <p style={styles.bibliotecaGrowthText}>
          {bibliotecaContent.growthText}
        </p>
      </article>
    </section>
  )
}
