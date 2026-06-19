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
  paperCardImageButton: {
    display: "block",
    width: "100%",
    border: "none",
    padding: 0,
    background: "transparent",
    cursor: "pointer",
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
    fontSize: "15px",
    color: "#9a8475",
    ...tecaFont.prose,
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
    fontSize: "20px",
    ...tecaFont.heading,
  },
  paperCardPoetic: {
    margin: "0 0 14px",
    fontSize: "15px",
    lineHeight: 1.45,
    color: theme.muted,
    ...tecaFont.prose,
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
    fontSize: "15px",
    color: "#9a8475",
    ...tecaFont.prose,
  },
  paperCardActions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  paperSaveButton: {
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    borderRadius: "999px",
    padding: "14px 20px",
    color: "#fffaf5",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 6px 16px rgba(195,133,87,0.12)",
  },
  paperSaveButtonDone: {
    background: "rgba(248, 240, 232, 0.95)",
    color: "#9a8475",
    boxShadow: "none",
    cursor: "default",
  },
  paperOpenProductLink: {
    border: "none",
    background: "transparent",
    fontSize: "17px",
    color: "#9a7f6d",
    cursor: "pointer",
    padding: 0,
    display: "block",
    ...tecaFont.prose,
    textDecoration: "underline",
    textUnderlineOffset: "4px",
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
  onAddToBox,
  onOpenProduct,
  onOpenPoetic,
  poeticLinkLabel,
}: {
  good: AtelierGood
  inBox: boolean
  onAddToBox: () => void
  onOpenProduct: () => void
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
        <button
          type="button"
          onClick={onOpenProduct}
          style={s.paperCardImageButton}
          aria-label={`Ver ${good.title}`}
        >
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
        </button>
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
          onClick={onOpenProduct}
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

        <div style={s.paperCardActions}>
          <button
            type="button"
            onClick={onAddToBox}
            style={{
              ...s.paperSaveButton,
              ...(inBox ? s.paperSaveButtonDone : {}),
            }}
            disabled={inBox}
          >
            {inBox ? "Adicionado" : "Adicionar"}
          </button>

          <button
            type="button"
            onClick={onOpenProduct}
            style={s.paperOpenProductLink}
          >
            ver tesouro
          </button>

          {onOpenPoetic && (
            <button
              type="button"
              onClick={onOpenPoetic}
              style={s.paperOpenProductLink}
            >
              {poeticLinkLabel ?? "conhecer com calma"}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
