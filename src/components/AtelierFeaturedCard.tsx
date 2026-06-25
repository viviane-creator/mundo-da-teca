import { FicharioEtiqueta } from "./fichario"
import type { AtelierFeaturedItem } from "../data/atelierShowcase"
import { toAtelierProductScreen } from "../atelierNavigation"
import { styles } from "../styles/appStyles"
import { homeCtaClassName, homeCtaStyle } from "../styles/homeCta"

type SetScreen = (screen: string) => void

export function AtelierFeaturedCard({
  item,
  setScreen,
}: {
  item: AtelierFeaturedItem
  setScreen: SetScreen
}) {
  const isAvailable = item.state === "available" && item.productId

  return (
    <article style={styles.atelierShowcaseFeatured}>
      {item.image ? (
        <img
          src={item.image}
          alt={item.imageAlt}
          style={styles.atelierShowcaseFeaturedProductImage}
        />
      ) : null}

      <div style={styles.atelierShowcaseFeaturedBody}>
        <span style={styles.atelierShowcaseFeaturedSeal}>{item.seal}</span>
        <h2 style={styles.atelierShowcaseFeaturedTitle}>{item.title}</h2>
        <p style={styles.atelierShowcaseFeaturedText}>{item.description}</p>
        {item.complementaryText ? (
          <p style={styles.atelierShowcaseFeaturedComplement}>
            {item.complementaryText}
          </p>
        ) : null}

        {isAvailable ? (
          <FicharioEtiqueta
            action
            onClick={() => setScreen(toAtelierProductScreen(item.productId!))}
            className={homeCtaClassName("atelie")}
            style={{
              ...styles.atelierShowcaseFeaturedButton,
              ...homeCtaStyle("atelie"),
            }}
          >
            {item.ctaLabel}
          </FicharioEtiqueta>
        ) : (
          <FicharioEtiqueta style={styles.atelierShowcaseFeaturedButtonDisabled}>
            {item.ctaLabel}
          </FicharioEtiqueta>
        )}
      </div>
    </article>
  )
}
