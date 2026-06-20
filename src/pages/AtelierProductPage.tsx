import { useState } from "react"
import {
  atelierCoverImage,
  formatBRL,
  getAtelierGoodStatus,
  getAtelierSectionTitle,
  type AtelierGood,
} from "../atelierShopData"
import {
  FicharioEtiqueta,
  FicharioFicha,
  FicharioRegistro,
  formatComplementoCodigo,
} from "../components/fichario"
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

      <FicharioFicha
        variant="complemento"
        codigo={formatComplementoCodigo(good.id)}
        seal={status?.label ?? "complemento"}
        title={good.title}
        image={imageSrc}
        imageAlt={good.title}
        onImageError={() => {
          if (imageSrc !== atelierCoverImage) setImageSrc(atelierCoverImage)
        }}
      >
        <FicharioRegistro
          fields={[
            { label: "Gaveta", value: category },
            { label: "Coleção", value: good.collection },
            { label: "Valor", value: formatBRL(good.price) },
            {
              label: "Clube",
              value: `membros levam por ${formatBRL(good.clubPrice)}`,
            },
          ]}
          style={{ marginBottom: "14px" }}
        />

        <p style={styles.atelierProductDescription}>{good.description}</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "18px",
          }}
        >
          {inBox ? (
            <FicharioEtiqueta style={{ fontSize: "20px", opacity: 0.75 }}>
              na gaveta
            </FicharioEtiqueta>
          ) : (
            <FicharioEtiqueta
              action
              onClick={onAddToBox}
              style={{ fontSize: "20px" }}
            >
              colocar na gaveta →
            </FicharioEtiqueta>
          )}

          {good.poeticScreen && (
            <FicharioEtiqueta
              action
              onClick={() => setScreen(good.poeticScreen!)}
              style={{ fontSize: "17px" }}
            >
              {good.poeticLinkLabel ?? "conhecer com calma →"}
            </FicharioEtiqueta>
          )}
        </div>
      </FicharioFicha>
    </section>
  )
}
