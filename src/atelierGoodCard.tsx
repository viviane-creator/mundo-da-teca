import { useState, type CSSProperties } from "react"
import {
  atelierCoverImage,
  formatBRL,
  getAtelierGoodStatus,
  type AtelierGood,
  type AtelierVisualKind,
} from "./atelierShopData"
import { tecaFichario } from "./tecaVisual"
import {
  FicharioEtiqueta,
  FicharioFicha,
  FicharioRegistro,
  formatComplementoCodigo,
} from "./components/fichario"

function complementoVariantStyle(
  visualKind: AtelierVisualKind,
): CSSProperties {
  if (visualKind === "envelope") return tecaFichario.fichaComplementoEnvelope()
  if (visualKind === "album") return tecaFichario.fichaComplementoAlbum()
  if (visualKind === "collab") {
    return {
      borderColor: "rgba(170, 150, 130, 0.4)",
      background: "#f6f0e8",
      borderRadius: tecaFichario.fichaComplemento().borderRadius,
    }
  }
  return {}
}

function complementoTilt(visualKind: AtelierVisualKind): number {
  if (visualKind === "envelope") return -0.4
  if (visualKind === "album") return 0.25
  return 0
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

  return (
    <FicharioFicha
      variant="complemento"
      codigo={formatComplementoCodigo(good.id)}
      seal={status?.label ?? "complemento"}
      title={good.title}
      image={imageSrc}
      imageAlt={good.title}
      tilt={complementoTilt(good.visualKind)}
      style={complementoVariantStyle(good.visualKind)}
      onImageError={() => {
        if (imageSrc !== atelierCoverImage) setImageSrc(atelierCoverImage)
      }}
    >
      {good.collabPartner && (
        <p
          style={{
            margin: "0 0 8px",
            textAlign: "center",
            fontSize: "15px",
            color: "#9a8475",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {good.collabPartner}
        </p>
      )}

      <p
        style={{
          margin: "0 0 12px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "15px",
          lineHeight: 1.45,
          color: "#8b7668",
        }}
      >
        {good.poetic}
      </p>

      <FicharioRegistro
        fields={[
          { label: "Coleção", value: good.collection },
          { label: "Valor", value: formatBRL(good.price) },
          {
            label: "Clube",
            value: `membros levam por ${formatBRL(good.clubPrice)}`,
          },
        ]}
        style={{ marginBottom: "14px" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {inBox ? (
          <FicharioEtiqueta style={{ fontSize: "18px", opacity: 0.75 }}>
            na gaveta
          </FicharioEtiqueta>
        ) : (
          <FicharioEtiqueta
            action
            onClick={onAddToBox}
            style={{ fontSize: "18px" }}
          >
            colocar na gaveta →
          </FicharioEtiqueta>
        )}

        <FicharioEtiqueta
          action
          onClick={onOpenProduct}
          style={{ fontSize: "17px" }}
        >
          ver complemento →
        </FicharioEtiqueta>

        {onOpenPoetic && (
          <button
            type="button"
            onClick={onOpenPoetic}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "16px",
              color: "#9a7f6d",
              cursor: "pointer",
              padding: 0,
              fontFamily: "'Cormorant Garamond', serif",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textAlign: "center",
            }}
          >
            {poeticLinkLabel ?? "conhecer com calma"}
          </button>
        )}
      </div>
    </FicharioFicha>
  )
}
