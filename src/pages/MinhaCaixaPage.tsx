import { useState } from "react"
import {
  atelierCoverImage,
  formatBRL,
  type AtelierGood,
} from "../atelierShopData"
import { toAtelierProductScreen } from "../atelierNavigation"
import { SoftNote } from "../components/SoftNote"
import { atelierCommerceCopy } from "../data/atelierCommerce"
import { styles } from "../styles/appStyles"

type SetScreen = (screen: string) => void

export function MinhaCaixaPage({
  setScreen,
  box,
}: {
  setScreen: SetScreen
  box: AtelierGood[]
}) {
  const [expeditionStarted, setExpeditionStarted] = useState(false)

  return (
    <section style={styles.subPage}>
      <button
        type="button"
        onClick={() => setScreen("atelie")}
        style={styles.backButton}
      >
        ← ateliê
      </button>

      <div style={styles.minhaCaixaHero}>
        <span style={styles.minhaCaixaBadge}>{atelierCommerceCopy.cartBadge}</span>
        <h1 style={styles.pageTitle}>{atelierCommerceCopy.cartTitle}</h1>
        {box.length > 0 && (
          <p style={styles.minhaCaixaSummary}>
            {atelierCommerceCopy.cartItemCount(box.length)}
          </p>
        )}
      </div>

      {box.length === 0 ? (
        <SoftNote label="vazio por enquanto">
          {atelierCommerceCopy.cartEmpty}
        </SoftNote>
      ) : (
        <>
          <div style={styles.paperStack}>
            {box.map((good) => (
              <article key={good.id} style={styles.boxItem}>
                <button
                  type="button"
                  onClick={() => setScreen(toAtelierProductScreen(good.id))}
                  style={styles.boxItemOpenButton}
                >
                  <img
                    src={good.image}
                    alt=""
                    style={styles.boxItemThumb}
                    onError={(event) => {
                      event.currentTarget.src = atelierCoverImage
                    }}
                  />
                  <div style={styles.boxItemContent}>
                    <p style={styles.boxItemTitle}>{good.title}</p>
                    <p style={styles.boxItemPoetic}>{good.poetic}</p>
                    <p style={styles.boxItemPrice}>
                      {formatBRL(good.price)} · clube {formatBRL(good.clubPrice)}
                    </p>
                  </div>
                </button>
              </article>
            ))}
          </div>

          {expeditionStarted ? (
            <SoftNote label="compra">
              {atelierCommerceCopy.checkoutPending}
            </SoftNote>
          ) : (
            <button
              type="button"
              onClick={() => setExpeditionStarted(true)}
              style={styles.minhaCaixaExpeditionButton}
            >
              {atelierCommerceCopy.finishPurchase}
            </button>
          )}
        </>
      )}

      <button
        type="button"
        onClick={() => setScreen("atelie")}
        style={styles.paperBackToShopButton}
      >
        {atelierCommerceCopy.continueShopping}
      </button>
    </section>
  )
}
