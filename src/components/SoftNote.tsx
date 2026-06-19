import { styles } from "../styles/appStyles"
import { tecaObjects, tecaRadius } from "../tecaVisual"

export function SoftNote({
  label,
  children,
  highlight = false,
  centered = false,
}: {
  label: string
  children: string
  highlight?: boolean
  centered?: boolean
}) {
  const textAlign = centered ? "center" : "left"

  return (
    <article
      style={
        highlight
          ? {
              ...tecaObjects.noteHighlight(),
              marginBottom: "22px",
              textAlign,
            }
          : {
              ...tecaObjects.note(tecaRadius.lg),
              marginBottom: "18px",
              textAlign,
            }
      }
    >
      <p style={styles.tag}>{label}</p>
      <p style={centered ? styles.noteText : styles.noteTextLong}>
        {children}
      </p>
    </article>
  )
}
