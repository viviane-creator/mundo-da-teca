import { institutionalFooterCopy } from "../data/institutionalFooterCopy"
import { appRoutes } from "../navigation/appRoutes"
import { socialLinks } from "../data/socialLinks"
import { styles } from "../styles/appStyles"

export function InstitutionalFooter({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  return (
    <footer style={styles.institutionalFooter}>
      <p style={styles.institutionalFooterPhrase}>
        {institutionalFooterCopy.phrase}
      </p>
      <button
        type="button"
        onClick={() => setScreen(appRoutes.conheca)}
        style={styles.institutionalFooterAboutLink}
      >
        {institutionalFooterCopy.aboutLink}
      </button>
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
