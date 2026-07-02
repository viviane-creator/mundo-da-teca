import { institutionalFooterCopy } from "../data/institutionalFooterCopy"
import { socialLinks } from "../data/socialLinks"
import { styles } from "../styles/appStyles"

export function InstitutionalFooter() {
  const copy = institutionalFooterCopy

  return (
    <footer style={styles.institutionalFooter}>
      <div style={styles.institutionalFooterSocialBlock}>
        <p style={styles.institutionalFooterSocialLabel}>{copy.instagramLabel}</p>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.institutionalFooterHandle}
        >
          {copy.handle}
        </a>
      </div>
    </footer>
  )
}
