import { SHOW_HOME_PRELAUNCH_NOTICE } from "../config/launchGate"
import { homeCopy } from "../data/homeCopy"
import { styles } from "../styles/appStyles"
import { HomePreLaunchNotice } from "../components/home/HomePreLaunchNotice"
import { HomeFirstProductCard } from "../components/home/HomeFirstProductCard"
import { HomeTecaHostess } from "../components/home/HomeTecaHostess"
import { WorldPortalLayout, portalPages } from "../worldPortal"
import "../styles/homePage.css"

function HomeTextSection({
  id,
  title,
  paragraphs,
  closing,
}: {
  id: string
  title: string
  paragraphs: readonly string[]
  closing?: string
}) {
  return (
    <section className="home-what-is" aria-labelledby={id}>
      <div className="home-what-is__crest">
        <HomeTecaHostess />
      </div>
      <h2 id={id} className="home-chapter__title">
        {title}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className={
            index === 0
              ? "home-chapter__prose"
              : "home-chapter__prose home-chapter__prose--follow"
          }
        >
          {paragraph.split("\n").map((line, lineIndex, lines) => (
            <span key={line}>
              {line}
              {lineIndex < lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ))}
      {closing ? (
        <p className="home-chapter__prose home-chapter__prose--emphasis">{closing}</p>
      ) : null}
    </section>
  )
}

export function Home({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.home
  const copy = homeCopy

  return (
    <WorldPortalLayout {...portal} variant="home">
      <div className="home-sheet" style={styles.homeV2Journey}>
        <span className="home-sheet__spine" style={styles.homeFicharioSpine} aria-hidden="true" />

        <div className="home-sheet__content" style={styles.homeAboutChapter}>
          {SHOW_HOME_PRELAUNCH_NOTICE ? <HomePreLaunchNotice /> : null}

          <HomeTextSection
            id="home-what-is"
            title={copy.whatIs.title}
            paragraphs={copy.whatIs.paragraphs}
            closing={copy.whatIs.closing}
          />

          <HomeFirstProductCard setScreen={setScreen} />
        </div>
      </div>
    </WorldPortalLayout>
  )
}
