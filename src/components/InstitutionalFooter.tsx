import { institutionalFooterCopy } from "../data/institutionalFooterCopy"
import { appRoutes } from "../navigation/appRoutes"
import { socialLinks } from "../data/socialLinks"
import { styles } from "../styles/appStyles"

export function InstitutionalFooter({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const copy = institutionalFooterCopy

  return (
    <footer style={styles.institutionalFooter}>
      <p style={styles.institutionalFooterTagline}>
        {copy.taglineLine1}
        <br />
        {copy.taglineLine2}
      </p>

      <div style={styles.institutionalFooterRuleSpaced} aria-hidden="true" />

      <div style={styles.institutionalFooterAboutBlock}>
        <p style={styles.institutionalFooterAboutTitle}>{copy.aboutTitle}</p>
        <button
          type="button"
          onClick={() => setScreen(appRoutes.conheca)}
          style={styles.institutionalFooterAboutLink}
        >
          {copy.aboutLink}
        </button>
      </div>

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
