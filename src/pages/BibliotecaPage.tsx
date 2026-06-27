import { BibliotecaKitCard } from "../components/biblioteca/BibliotecaKitCard"
import { useAuth } from "../auth/authContext"
import { bibliotecaDeChild } from "../auth/childPersonalization"
import { bibliotecaAtlas } from "../data/bibliotecaAtlas"
import { bibliotecaContent } from "../data/bibliotecaContent"
import { bibliotecaShelfItems } from "../data/bibliotecaMock"
import { styles } from "../styles/appStyles"
import {
  WorldPortalCover,
  WorldPortalHeader,
  worldPortalStyles,
} from "../worldPortal"

const kitTilts = [-0.35, 0.28, -0.22, 0.3]

export function BibliotecaPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const { user, isAuthenticated } = useAuth()
  const libraryTitle =
    isAuthenticated && user
      ? bibliotecaDeChild(user.childName)
      : bibliotecaContent.title

  return (
    <>
      <WorldPortalCover
        cover={bibliotecaContent.cover}
        alt={bibliotecaContent.coverAlt}
      />

      <section style={worldPortalStyles.body}>
        <button
          type="button"
          onClick={() => setScreen("meu-mundo")}
          style={styles.backButton}
        >
          ← meu mundo
        </button>

        <WorldPortalHeader
          kicker={bibliotecaContent.kicker}
          title={libraryTitle}
          tagline={bibliotecaContent.introLead}
          compactTitle
          breath="large"
        />

        <p style={styles.bibliotecaIntro}>{bibliotecaContent.introBody}</p>

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
    </>
  )
}
