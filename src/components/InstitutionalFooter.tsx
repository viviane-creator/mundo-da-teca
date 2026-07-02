import { institutionalFooterCopy } from "../data/institutionalFooterCopy"
import { socialLinks } from "../data/socialLinks"
import { styles } from "../styles/appStyles"

export function InstitutionalFooter() {
  const copy = institutionalFooterCopy

  return (
    <footer style={styles.institutionalFooter}>
      <p style={styles.institutionalFooterTagline}>
        {copy.taglineLine1}
        <br />
        {copy.taglineLine2}
      </p>

      <div style={styles.institutionalFooterRuleSpaced} aria-hidden="true" />

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
