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

      <div style={styles.institutionalFooterDestinations}>
        <div style={styles.institutionalFooterDestination}>
          <p style={styles.institutionalFooterDestinationTitle}>
            {copy.aboutTitle}
          </p>
          <button
            type="button"
            onClick={() => setScreen(appRoutes.conheca)}
            style={styles.institutionalFooterDestinationLink}
          >
            {copy.aboutLink}
          </button>
        </div>

        <div
          style={styles.institutionalFooterDestinationDivider}
          aria-hidden="true"
        />

        <div style={styles.institutionalFooterDestination}>
          <p style={styles.institutionalFooterDestinationTitle}>
            {copy.instagramLabel}
          </p>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.institutionalFooterDestinationLink}
          >
            {copy.handle}
          </a>
        </div>
      </div>
    </footer>
  )
}
