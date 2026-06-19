import { useState } from "react"
import {
  atelierCoverImage,
  formatBRL,
  getAtelierGoodStatus,
  getAtelierSectionTitle,
  type AtelierGood,
} from "../atelierShopData"
import { styles } from "../styles/appStyles"

type SetScreen = (screen: string) => void

export function AtelierProductPage({
  setScreen,
  good,
  inBox,
  onAddToBox,
}: {
  setScreen: SetScreen
  good: AtelierGood
  inBox: boolean
  onAddToBox: () => void
}) {
  const [imageSrc, setImageSrc] = useState(good.image)
  const status = getAtelierGoodStatus(good)
  const category = getAtelierSectionTitle(good.section)

  return (
    <section style={styles.subPage}>
      <button
        type="button"
        onClick={() => setScreen("atelie")}
        style={styles.backButton}
      >
        ← ateliê
      </button>

      <article style={styles.atelierProduct}>
        <div style={styles.atelierProductImageWrap}>
          <img
            src={imageSrc}
            alt={good.title}
            style={styles.atelierProductImage}
            onError={() => {
              if (imageSrc !== atelierCoverImage) setImageSrc(atelierCoverImage)
            }}
          />
        </div>

        <div style={styles.atelierProductBody}>
          <div style={styles.atelierProductMeta}>
            <p style={styles.atelierProductCategory}>{category}</p>
            {good.collection && (
              <p style={styles.atelierProductCollection}>{good.collection}</p>
            )}
            {status && (
              <span style={styles.atelierProductStatus}>{status.label}</span>
            )}
          </div>

          <header style={{ ...styles.pageHeroBlock, textAlign: "left" }}>
            <h1 style={{ ...styles.pageHeroTitle, textAlign: "left" }}>
              {good.title}
            </h1>
            <p
              style={{
                ...styles.pageHeroPoetic,
                textAlign: "left",
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              {good.poetic}
            </p>
          </header>
          <p style={styles.atelierProductDescription}>{good.description}</p>

          <div style={styles.atelierProductPriceBlock}>
            <p style={styles.atelierProductPrice}>{formatBRL(good.price)}</p>
            <p style={styles.atelierProductClubPrice}>
              membros do clube levam por {formatBRL(good.clubPrice)}
            </p>
          </div>

          <button
            type="button"
            onClick={onAddToBox}
            style={{
              ...styles.atelierProductSaveButton,
              ...(inBox ? styles.atelierProductSaveButtonDone : {}),
            }}
            disabled={inBox}
          >
            {inBox ? "Adicionado" : "Adicionar"}
          </button>

          {good.poeticScreen && (
            <button
              type="button"
              onClick={() => setScreen(good.poeticScreen!)}
              style={styles.atelierProductPoeticLink}
            >
              {good.poeticLinkLabel ?? "conhecer com calma"}
            </button>
          )}
        </div>
      </article>
    </section>
  )
}
