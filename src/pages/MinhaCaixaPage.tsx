import { useState } from "react"
import {
  atelierCoverImage,
  formatBRL,
  type AtelierGood,
} from "../atelierShopData"
import { toAtelierProductScreen } from "../atelierNavigation"
import { SoftNote } from "../components/SoftNote"
import { styles } from "../styles/appStyles"

type SetScreen = (screen: string) => void

function treasureCountLabel(count: number): string {
  if (count === 1) return "Você guardou 1 tesouro."
  return `Você guardou ${count} tesouros.`
}

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
        <span style={styles.minhaCaixaBadge}>tesouros</span>
        <h1 style={styles.pageTitle}>Minha Caixa</h1>
        {box.length > 0 && (
          <p style={styles.minhaCaixaSummary}>{treasureCountLabel(box.length)}</p>
        )}
      </div>

      {box.length === 0 ? (
        <SoftNote label="vazia por enquanto">
          nenhum tesouro ainda. volte ao ateliê e escolha com calma.
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
            <SoftNote label="expedição">
              o caminho até a sua casa ainda está sendo costurado com carinho.
              por enquanto, seus tesouros ficam guardados aqui.
            </SoftNote>
          ) : (
            <button
              type="button"
              onClick={() => setExpeditionStarted(true)}
              style={styles.minhaCaixaExpeditionButton}
            >
              Finalizar Expedição
            </button>
          )}
        </>
      )}

      <button
        type="button"
        onClick={() => setScreen("atelie")}
        style={styles.paperBackToShopButton}
      >
        continuar escolhendo
      </button>
    </section>
  )
}
