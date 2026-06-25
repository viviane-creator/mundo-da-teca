import {
  getFigurinhasGoods,
  getFigurinhasSeasonalTeasers,
  type AtelierGood,
} from "./atelierShopData"
import { AtelierGoodCard } from "./atelierGoodCard"
import {
  WorldPortalCover,
  WorldPortalHeader,
  portalPages,
  worldPortalStyles as p,
} from "./worldPortal"
import { tecaFont, tecaRadius } from "./tecaVisual"

type SetScreen = (screen: string) => void

export function FigurinhasPage({
  setScreen,
  box,
  onAddToBox,
  onOpenProduct,
}: {
  setScreen: SetScreen
  box: { id: string }[]
  onAddToBox: (good: AtelierGood) => void
  onOpenProduct: (good: AtelierGood) => void
}) {
  const goods = getFigurinhasGoods()
  const teasers = getFigurinhasSeasonalTeasers()
  const portal = portalPages.figurinhas

  return (
    <>
      <WorldPortalCover cover={portal.cover} alt={portal.coverAlt} />

      <section style={p.body}>
        <button
          type="button"
          onClick={() => setScreen("atelie")}
          style={{
            border: "none",
            background: "transparent",
            fontSize: "17px",
            ...tecaFont.prose,
            color: "#9a7f6d",
            cursor: "pointer",
            padding: "0 0 12px",
            display: "block",
          }}
        >
          ← ateliê
        </button>

        <WorldPortalHeader
          title={portal.title}
          tagline={portal.tagline}
          breath="large"
        />

        <p
          style={{
            textAlign: "left",
            margin: "0 0 28px",
            fontSize: "17px",
            ...tecaFont.prose,
            lineHeight: 1.5,
            color: "#8b7668",
            padding: "0 4px",
          }}
        >
          envelopes fechados, figurinhas para trocar e um álbum que cresce com
          o tempo — sem pressa, sem placar.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {goods.map((good) => (
            <AtelierGoodCard
              key={good.id}
              good={good}
              inBox={box.some((item) => item.id === good.id)}
              onAddToBox={() => onAddToBox(good)}
              onOpenProduct={() => onOpenProduct(good)}
              onOpenPoetic={
                good.poeticScreen
                  ? () => setScreen(good.poeticScreen!)
                  : undefined
              }
              poeticLinkLabel={good.poeticLinkLabel}
            />
          ))}
        </div>

        {teasers.length > 0 && (
          <div style={{ marginTop: "32px" }}>
            <h2
              style={{
                textAlign: "left",
                margin: "0 0 16px",
                fontSize: "22px",
                color: "#9a8475",
                ...tecaFont.heading,
              }}
            >
              em breve
            </h2>
            {teasers.map((item) => (
              <article
                key={item.id}
                style={{
                  background: "#f8efe5",
                  borderRadius: tecaRadius.md,
                  border: "1px dashed rgba(234, 216, 197, 0.95)",
                  padding: "18px 16px",
                  marginBottom: "12px",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: "22px",
                    color: "#8a6f5d",
                    ...tecaFont.heading,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "15px",
                    color: "#b9a594",
                  }}
                >
                  {item.poetic}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
