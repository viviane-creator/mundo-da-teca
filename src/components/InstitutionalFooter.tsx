import { institutionalFooterCopy } from "../data/institutionalFooterCopy"
import { socialLinks } from "../data/socialLinks"
import { styles } from "../styles/appStyles"

export function InstitutionalFooter() {
  return (
    <footer style={styles.institutionalFooter}>
      <p style={styles.institutionalFooterPhrase}>
        {institutionalFooterCopy.phrase}
      </p>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.institutionalFooterHandle}
      >
        {institutionalFooterCopy.handle}
      </a>
      <div style={styles.institutionalFooterRule} aria-hidden="true" />
    </footer>
  )
}
