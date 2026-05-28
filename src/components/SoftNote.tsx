import { styles } from "../styles/appStyles"
import { tecaObjects, tecaRadius } from "../tecaVisual"

export function SoftNote({
  label,
  children,
  highlight = false,
}: {
  label: string
  children: string
  highlight?: boolean
}) {
  return (
    <article
      style={
        highlight
          ? {
              ...tecaObjects.noteHighlight(),
              marginBottom: "22px",
              textAlign: "left",
            }
          : {
              ...tecaObjects.note(tecaRadius.lg),
              marginBottom: "18px",
              textAlign: "left",
            }
      }
    >
      <p style={styles.tag}>{label}</p>
      <p style={styles.noteText}>{children}</p>
    </article>
  )
}
