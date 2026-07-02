import { homeCopy } from "../../data/homeCopy"
import { HomeTecaHostess } from "./HomeTecaHostess"
import { styles } from "../../styles/appStyles"

function HomeChapterDivider() {
  return (
    <div style={styles.homeChapterDivider} aria-hidden="true">
      <span style={styles.homeChapterDividerDot} />
      <span style={{ ...styles.homeChapterDividerDot, ...styles.homeChapterDividerDotMid }} />
      <span style={styles.homeChapterDividerDot} />
    </div>
  )
}

export function HomeAboutSection({
  onOpenStory,
}: {
  onOpenStory: () => void
}) {
  const copy = homeCopy.about

  return (
    <div style={styles.homeAboutChapter}>
      <HomeChapterDivider />

      <section style={styles.homeChapterOpener} aria-labelledby="home-about-title">
        <div style={styles.homeChapterOpenerIllustration}>
          <HomeTecaHostess />
        </div>

        <h2 id="home-about-title" style={styles.homeChapterOpenerTitle}>
          {copy.title}
        </h2>

        <p style={styles.homeChapterOpenerProse}>{copy.prose}</p>
        <p style={styles.homeChapterOpenerProseFollow}>{copy.proseFollow}</p>

        <p style={styles.homeStoryBridgeTransition}>{copy.storyTransition}</p>

        <button
          type="button"
          onClick={onOpenStory}
          style={styles.homeStoryBridgeCard}
        >
          <span style={styles.homeStoryBridgeTitle}>{copy.storyCardTitle}</span>
          <span style={styles.homeStoryBridgeLink}>{copy.storyCardLink}</span>
        </button>
      </section>
    </div>
  )
}
