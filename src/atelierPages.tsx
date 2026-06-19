import { useState, type CSSProperties } from "react"
import { AtelierGoodCard } from "./atelierGoodCard"
import { getAtelierCatalogSections, type AtelierGood } from "./atelierShopData"
import { styles } from "./styles/appStyles"
import {
  tecaColors,
  tecaFont,
  tecaObjects,
  tecaRadius,
  tecaTilt,
} from "./tecaVisual"
import {
  WorldPortalCover,
  WorldPortalHeader,
  WorldPortalSectionIntro,
  portalPages,
  worldPortalStyles as p,
} from "./worldPortal"

const figurinhasPortalStyles: Record<string, CSSProperties> = {
  featuredCard: {
    width: "100%",
    ...tecaObjects.album(tecaRadius.xl),
    overflow: "hidden",
    padding: 0,
    cursor: "pointer",
    textAlign: "left",
    marginBottom: "32px",
    ...tecaTilt(0.3),
  },
  featuredImageWrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 10",
    overflow: "hidden",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  featuredFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "80px",
    background:
      "linear-gradient(180deg, rgba(255,253,249,0) 0%, rgba(255,253,249,0.95) 100%)",
  },
  featuredBody: {
    padding: "18px 20px 22px",
  },
  featuredKicker: {
    margin: "0 0 6px",
    fontSize: "9px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
    fontFamily: "'Nunito', sans-serif",
  },
  featuredTitle: {
    margin: "0 0 8px",
    fontSize: "34px",
    lineHeight: 1,
    ...tecaFont.portalTitle,
  },
  featuredPoetic: {
    margin: "0 0 12px",
    fontSize: "18px",
    ...tecaFont.poetic,
  },
  featuredCta: {
    margin: 0,
    fontSize: "17px",
    letterSpacing: "0.5px",
    color: "#c88757",
    ...tecaFont.body,
    fontWeight: 500,
  },
  featuredCtaButton: {
    margin: "12px 0 0",
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "17px",
    letterSpacing: "0.5px",
    color: "#c88757",
    ...tecaFont.body,
    fontWeight: 500,
  },
  softNote: {
    ...tecaObjects.note(tecaRadius.md),
    marginBottom: "28px",
    textAlign: "left",
  },
  softNoteLabel: {
    margin: "0 0 6px",
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
  },
  softNoteText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.45,
    color: "#8b7668",
    textAlign: "left",
  },
  atelierTreasuresNote: {
    ...tecaObjects.noteHighlight(),
    marginBottom: "24px",
    textAlign: "left",
  },
  atelierTreasuresTitle: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 500,
    color: tecaColors.text,
    lineHeight: 1.2,
    textAlign: "left",
  },
  atelierTreasuresText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.45,
    color: "#8b7668",
    textAlign: "left",
  },
  paperStack: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  drawerSection: {
    marginBottom: "32px",
  },
  drawerSectionTitle: {
    textAlign: "left",
    margin: "0 0 6px",
    fontSize: "22px",
    color: "#8a6f5d",
    ...tecaFont.heading,
  },
  drawerSectionIntro: {
    textAlign: "left",
    margin: "0 0 20px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    lineHeight: 1.5,
    color: "#8b7668",
    padding: "0 4px",
  },
  minhaCaixaLinkMain: {
    border: "none",
    background: "rgba(255, 253, 249, 0.75)",
    borderRadius: "999px",
    padding: "10px 20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "20px",
    color: "#8a6f5d",
    ...tecaFont.poetic,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ead8c5",
    boxShadow: "0 4px 14px rgba(120,90,60,0.05)",
    margin: "0 auto 20px",
  },
  minhaCaixaIcon: {
    fontSize: "16px",
    opacity: 0.85,
  },
  minhaCaixaCount: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "11px",
    background: "#efe0d0",
    color: "#8a6f5d",
    borderRadius: "999px",
    padding: "2px 7px",
    minWidth: "18px",
    textAlign: "center",
  },
  topBar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "4px",
  },
}

function FigurinhasPortalCard({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      style={figurinhasPortalStyles.featuredCard}
      onClick={onOpen}
    >
      <div style={figurinhasPortalStyles.featuredImageWrap}>
        <img
          src="/cards/atelie/album.png"
          alt="Figurinhas"
          style={figurinhasPortalStyles.featuredImage}
        />
        <div style={figurinhasPortalStyles.featuredFade} />
      </div>
      <div style={figurinhasPortalStyles.featuredBody}>
        <p style={figurinhasPortalStyles.featuredKicker}>Figurinhas</p>
        <h3 style={figurinhasPortalStyles.featuredTitle}>figurinhas</h3>
        <p style={figurinhasPortalStyles.featuredPoetic}>
          álbum das descobertas, pacotinhos surpresa e rituais de troca — um
          universo de colecionáveis para guardar devagar.
        </p>
        <p style={figurinhasPortalStyles.featuredCta}>Ver Figurinhas →</p>
      </div>
    </button>
  )
}

type SetScreen = (screen: string) => void

function scrollToAtelierSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
}

export function AtelierShopPage({
  setScreen,
  box,
  onAddToBox,
}: {
  setScreen: SetScreen
  box: AtelierGood[]
  onAddToBox: (good: AtelierGood) => void
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const boxCount = box.length
  const catalog = getAtelierCatalogSections()
  const portal = portalPages.atelie

  return (
    <>
      <WorldPortalCover cover={portal.cover} alt={portal.coverAlt} />

      <section style={p.body}>
        <div style={figurinhasPortalStyles.topBar}>
          <button
            type="button"
            onClick={() => setScreen("minha-caixa")}
            style={figurinhasPortalStyles.minhaCaixaLinkMain}
          >
            <span style={tecaObjects.etiqueta()}>tesouros</span>
            escolhas guardadas
            {boxCount > 0 && (
              <span style={figurinhasPortalStyles.minhaCaixaCount}>
                {boxCount}
              </span>
            )}
          </button>
        </div>

        <WorldPortalHeader
          title={portal.title}
          tagline={portal.tagline}
          breath="large"
        />

        <article style={figurinhasPortalStyles.atelierTreasuresNote}>
          <p style={figurinhasPortalStyles.atelierTreasuresTitle}>
            Meu Mundo de Tesouros
          </p>
          <p style={figurinhasPortalStyles.atelierTreasuresText}>
            O coração físico do Ateliê — tesouros, colecionáveis e peças
            especiais para guardar, trocar e levar para casa.
          </p>
          <button
            type="button"
            style={figurinhasPortalStyles.featuredCtaButton}
            onClick={() => scrollToAtelierSection("atelier-tesouros")}
          >
            Ver Tesouros →
          </button>
        </article>

        <WorldPortalSectionIntro
          title="o ateliê da teca"
          intro="não é uma loja genérica: é o lugar dos tesouros, figurinhas, papelaria, produtos especiais e materiais colecionáveis do Mundo da Teca."
        />

        <div style={figurinhasPortalStyles.softNote}>
          <p style={figurinhasPortalStyles.softNoteLabel}>clube da teca</p>
          <p style={figurinhasPortalStyles.softNoteText}>
            assinantes do Clube têm desconto no Ateliê. aqui também existem
            compras avulsas — o Ateliê complementa a jornada do Clube, mas vive
            por si só.
          </p>
        </div>

        <button
          type="button"
          style={{ ...styles.clubJoinButton, marginBottom: "28px" }}
          onClick={() => setScreen("clube")}
        >
          Conhecer o Clube
        </button>

        <FigurinhasPortalCard onOpen={() => setScreen("figurinhas")} />

        <button
          type="button"
          style={{
            ...figurinhasPortalStyles.featuredCtaButton,
            margin: "0 0 28px",
          }}
          onClick={() => scrollToAtelierSection("atelier-papelaria")}
        >
          Ver Papelaria →
        </button>

        {catalog.map((section) => (
          <section
            key={section.id}
            id={
              section.id === "colecoes"
                ? "atelier-tesouros"
                : section.id === "papelaria"
                  ? "atelier-papelaria"
                  : undefined
            }
            style={figurinhasPortalStyles.drawerSection}
          >
            <h2 style={figurinhasPortalStyles.drawerSectionTitle}>
              {section.title}
            </h2>
            <p style={figurinhasPortalStyles.drawerSectionIntro}>
              {section.intro}
            </p>

            <div style={figurinhasPortalStyles.paperStack}>
              {section.goods.map((good) => (
                <AtelierGoodCard
                  key={good.id}
                  good={good}
                  inBox={box.some((item) => item.id === good.id)}
                  expanded={expandedId === good.id}
                  onToggleExpand={() =>
                    setExpandedId((current) =>
                      current === good.id ? null : good.id,
                    )
                  }
                  onAddToBox={() => onAddToBox(good)}
                  onOpenPoetic={
                    good.poeticScreen
                      ? () => setScreen(good.poeticScreen!)
                      : undefined
                  }
                  poeticLinkLabel={good.poeticLinkLabel}
                />
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
