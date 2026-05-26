import { useState, type CSSProperties } from "react"
import {
  atelierCoverImage,
  formatBRL,
  getAtelierGoodStatus,
  type AtelierGood,
  type AtelierVisualKind,
} from "./atelierShopData"
import {
  tecaColors,
  tecaFont,
  tecaObjects,
  tecaRadius,
  tecaTilt,
} from "./tecaVisual"

const theme = {
  text: "#6a4f3c",
  muted: "#8b7668",
  line: "#ead8c5",
}

const s: Record<string, CSSProperties> = {
  paperCard: {
    background: tecaColors.paper,
    borderRadius: tecaRadius.lg,
    overflow: "hidden",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.05)",
  },
  paperCardEnvelope: {
    ...tecaObjects.envelope(),
  },
  paperCardAlbum: {
    ...tecaObjects.album(tecaRadius.lg),
  },
  paperCardCollab: {
    borderColor: "rgba(170, 150, 130, 0.4)",
    background: "#f6f0e8",
    borderRadius: tecaRadius.xl,
  },
  imageWrap: {
    position: "relative",
  },
  paperCardImage: {
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    display: "block",
  },
  paperCardImageEnvelope: {
    aspectRatio: "5 / 4",
    background: "#efe3d2",
  },
  envelopeSeal: {
    position: "absolute",
    top: "12px",
    right: "12px",
    ...tecaObjects.etiqueta(),
    fontSize: "8px",
    letterSpacing: "1.5px",
  },
  envelopeRibbon: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "8px 12px",
    background: "rgba(255,253,249,0.88)",
    borderTop: `1px solid ${theme.line}`,
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "13px",
    color: "#9a8475",
  },
  paperCardBody: {
    padding: "18px 20px 22px",
  },
  paperCardTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "10px",
  },
  paperCollectionTag: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },
  paperStatusSeal: {
    fontSize: "9px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#9a7f6d",
    border: "1px solid #e8d8c8",
    borderRadius: "999px",
    padding: "4px 8px",
    background: "rgba(248, 240, 232, 0.8)",
    fontFamily: "'Nunito', sans-serif",
    textAlign: "right",
    lineHeight: 1.3,
  },
  collabLine: {
    margin: "0 0 8px",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "15px",
    color: "#9a8475",
  },
  paperCardTitleButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  },
  paperCardTitle: {
    margin: "0 0 8px",
    fontSize: "24px",
    ...tecaFont.heading,
  },
  paperCardPoetic: {
    margin: "0 0 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.45,
    color: theme.muted,
  },
  paperPriceBlock: {
    marginBottom: "14px",
  },
  paperPrice: {
    margin: "0 0 4px",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "18px",
    color: theme.text,
    fontWeight: 600,
  },
  paperClubPrice: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "15px",
    color: "#9a8475",
  },
  paperTakeHomeButton: {
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    borderRadius: "999px",
    padding: "14px 20px",
    color: "#fffaf5",
    fontFamily: "'Caveat', cursive",
    fontSize: "26px",
    cursor: "pointer",
    boxShadow: "0 6px 16px rgba(195,133,87,0.12)",
  },
  paperTakeHomeButtonDone: {
    background: "rgba(248, 240, 232, 0.95)",
    color: "#9a8475",
    boxShadow: "none",
    cursor: "default",
  },
  paperCardDescription: {
    margin: "14px 0 0",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    lineHeight: 1.5,
    color: "#7a6254",
  },
  paperPoeticLink: {
    marginTop: "12px",
    border: "none",
    background: "transparent",
    fontSize: "17px",
    color: "#9a7f6d",
    cursor: "pointer",
    padding: 0,
    display: "block",
    ...tecaFont.poetic,
  },
}

function cardVariantStyle(visualKind: AtelierVisualKind): CSSProperties {
  if (visualKind === "envelope") return s.paperCardEnvelope
  if (visualKind === "album") return s.paperCardAlbum
  if (visualKind === "collab") return s.paperCardCollab
  return {}
}

export function AtelierGoodCard({
  good,
  inBox,
  expanded,
  onToggleExpand,
  onAddToBox,
  onOpenPoetic,
  poeticLinkLabel,
}: {
  good: AtelierGood
  inBox: boolean
  expanded: boolean
  onToggleExpand: () => void
  onAddToBox: () => void
  onOpenPoetic?: () => void
  poeticLinkLabel?: string
}) {
  const [imageSrc, setImageSrc] = useState(good.image)
  const status = getAtelierGoodStatus(good)
  const isEnvelope = good.visualKind === "envelope"

  return (
    <article
      style={{
        ...s.paperCard,
        ...cardVariantStyle(good.visualKind),
        ...(good.visualKind === "envelope" ? tecaTilt(-0.4) : {}),
        ...(good.visualKind === "album" ? tecaTilt(0.25) : {}),
      }}
    >
      <div style={s.imageWrap}>
        <img
          src={imageSrc}
          alt={good.title}
          style={{
            ...s.paperCardImage,
            ...(isEnvelope ? s.paperCardImageEnvelope : {}),
          }}
          onError={() => {
            if (imageSrc !== atelierCoverImage) setImageSrc(atelierCoverImage)
          }}
        />
        {isEnvelope && <span style={s.envelopeSeal}>selo</span>}
        {isEnvelope && (
          <p style={s.envelopeRibbon}>pacotinho surpresa</p>
        )}
      </div>

      <div style={s.paperCardBody}>
        {good.collabPartner && (
          <p style={s.collabLine}>{good.collabPartner}</p>
        )}

        <div style={s.paperCardTopRow}>
          <p style={s.paperCollectionTag}>{good.collection}</p>
          {status && (
            <span style={s.paperStatusSeal}>{status.label}</span>
          )}
        </div>

        <button
          type="button"
          onClick={onToggleExpand}
          style={s.paperCardTitleButton}
        >
          <h3 style={s.paperCardTitle}>{good.title}</h3>
        </button>

        <p style={s.paperCardPoetic}>{good.poetic}</p>

        <div style={s.paperPriceBlock}>
          <p style={s.paperPrice}>{formatBRL(good.price)}</p>
          <p style={s.paperClubPrice}>
            membros do clube levam por {formatBRL(good.clubPrice)}
          </p>
        </div>

        <button
          type="button"
          onClick={onAddToBox}
          style={{
            ...s.paperTakeHomeButton,
            ...(inBox ? s.paperTakeHomeButtonDone : {}),
          }}
          disabled={inBox}
        >
          {inBox ? "já está na sua caixa" : "levar pra casa"}
        </button>

        {expanded && (
          <>
            <p style={s.paperCardDescription}>{good.description}</p>
            {onOpenPoetic && (
              <button
                type="button"
                onClick={onOpenPoetic}
                style={s.paperPoeticLink}
              >
                {poeticLinkLabel ?? "conhecer com calma"}
              </button>
            )}
          </>
        )}
      </div>
    </article>
  )
}
