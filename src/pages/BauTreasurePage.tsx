import { useState } from "react"
import { FicharioEtiqueta } from "../components/fichario"
import { atelierCommerceCopy } from "../data/atelierCommerce"
import { bauTreasureContent } from "../data/bauTreasureContent"
import { styles } from "../styles/appStyles"
import { homeCtaClassName, homeCtaStyle } from "../styles/homeCta"

type SetScreen = (screen: string) => void

export function BauTreasurePage({
  setScreen,
  inBox,
  onAddToBox,
}: {
  setScreen: SetScreen
  inBox: boolean
  onAddToBox: () => void
}) {
  const [imageSrc, setImageSrc] = useState(bauTreasureContent.image)

  return (
    <section style={styles.subPage}>
      <button
        type="button"
        onClick={() => setScreen("atelie")}
        style={styles.backButton}
      >
        ← ateliê
      </button>

      <article style={styles.bauTreasurePage}>
        <div style={styles.bauTreasureImageWrap}>
          <img
            src={imageSrc}
            alt={bauTreasureContent.imageAlt}
            style={styles.bauTreasureImage}
            onError={() => {
              if (imageSrc !== bauTreasureContent.image) {
                setImageSrc(bauTreasureContent.image)
              }
            }}
          />
        </div>

        <div style={styles.bauTreasureBody}>
          <span style={styles.bauTreasureSeal}>{bauTreasureContent.seal}</span>
          <h1 style={styles.bauTreasureTitle}>{bauTreasureContent.title}</h1>

          {bauTreasureContent.description.map((paragraph) => (
            <p key={paragraph} style={styles.bauTreasureDescription}>
              {paragraph}
            </p>
          ))}

          <div style={styles.bauTreasureInfoList}>
            {bauTreasureContent.info.map((item) => (
              <div key={item.label} style={styles.bauTreasureInfoBlock}>
                <p style={styles.bauTreasureInfoLabel}>{item.label}</p>
                <p style={styles.bauTreasureInfoValue}>{item.value}</p>
              </div>
            ))}
          </div>

          {inBox ? (
            <FicharioEtiqueta style={styles.bauTreasureCtaMuted}>
              {atelierCommerceCopy.inCart}
            </FicharioEtiqueta>
          ) : (
            <FicharioEtiqueta
              action
              onClick={onAddToBox}
              className={homeCtaClassName("atelie")}
              style={{
                ...styles.bauTreasureCta,
                ...homeCtaStyle("atelie"),
              }}
            >
              {atelierCommerceCopy.addToCart}
            </FicharioEtiqueta>
          )}
        </div>
      </article>
    </section>
  )
}
