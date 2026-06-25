import { FicharioEtiqueta } from "../fichario"
import { BibliotecaShelfGlyph } from "./BibliotecaShelfGlyph"
import type { BibliotecaCategory } from "../../data/bibliotecaAtlas"
import { bibliotecaCategoryTone } from "../../data/bibliotecaAtlas"
import type { BibliotecaShelfGlyph as GlyphKind } from "../../data/bibliotecaMock"
import { styles } from "../../styles/appStyles"

export function BibliotecaKitCard({
  glyph,
  category,
  title,
  text,
  openLabel,
  tilt,
  onOpen,
}: {
  glyph: GlyphKind
  category: BibliotecaCategory
  title: string
  text: string
  openLabel: string
  tilt: number
  onOpen: () => void
}) {
  const tone = bibliotecaCategoryTone[category]

  return (
    <article
      style={{
        ...styles.bibliotecaKitCard,
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <span style={styles.bibliotecaKitTwine} aria-hidden="true" />
      <div style={styles.bibliotecaKitTop}>
        <div style={styles.bibliotecaKitGlyphFrame}>
          <BibliotecaShelfGlyph kind={glyph} />
        </div>
        <div style={styles.bibliotecaKitBody}>
          <span
            style={{
              ...styles.bibliotecaKitCategory,
              background: tone.background,
              color: tone.color,
              borderColor: tone.border,
            }}
          >
            {category}
          </span>
          <h2 style={styles.bibliotecaKitTitle}>{title}</h2>
          <p style={styles.bibliotecaKitText}>{text}</p>
        </div>
      </div>
      <FicharioEtiqueta
        action
        onClick={onOpen}
        style={styles.bibliotecaKitButton}
      >
        {openLabel}
      </FicharioEtiqueta>
    </article>
  )
}
