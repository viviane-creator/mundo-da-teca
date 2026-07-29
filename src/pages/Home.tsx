import { SHOW_HOME_PRELAUNCH_NOTICE } from "../config/launchGate"
import { homeCopy } from "../data/homeCopy"
import { clubSealLabel } from "../data/clubModalities"
import { homePlanStainSrc } from "../data/homePlanStains"
import { appRoutes } from "../navigation/appRoutes"
import { clubModalityPath, clubModalityScreen } from "../navigation/clubNavigation"
import { styles } from "../styles/appStyles"
import { HomePreLaunchNotice } from "../components/home/HomePreLaunchNotice"
import { HomeTecaHostess } from "../components/home/HomeTecaHostess"
import { WorldPortalLayout, portalPages } from "../worldPortal"
import "../styles/homePage.css"

type HomeModality = (typeof homeCopy.participate.modalities)[number]

function HomeTextSection({
  id,
  title,
  paragraphs,
  closing,
  cta,
}: {
  id: string
  title: string
  paragraphs: readonly string[]
  closing?: string
  cta?: { label: string; onClick: () => void }
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
      {cta ? (
        <button
          type="button"
          className="home-organic-cta home-organic-cta--club home-organic-cta--tilt-alt home-what-is__cta"
          onClick={cta.onClick}
        >
          {cta.label}
        </button>
      ) : null}
    </section>
  )
}

function HomeParticipateInvite({
  modality,
  setScreen,
}: {
  modality: HomeModality
  setScreen: (screen: string) => void
}) {
  const stainSrc = homePlanStainSrc[modality.id]
  const modalityScreen = clubModalityScreen(modality.id)

  return (
    <a
      href={clubModalityPath(modality.id)}
      className={`home-participate-invite home-participate-invite--${modality.id}`}
      aria-label={`${clubSealLabel(modality.id)}. ${modality.name}. ${modality.summary}`}
      onClick={(event) => {
        event.preventDefault()
        setScreen(modalityScreen)
      }}
    >
      <span className="home-participate-invite__poster">
        <img
          className="home-participate-invite__stain"
          src={stainSrc}
          alt=""
          aria-hidden="true"
          decoding="async"
          draggable={false}
        />
        <span className="home-participate-invite__copy">
          <span className="home-participate-invite__seal" aria-hidden="true">
            {clubSealLabel(modality.id)}
          </span>
          <span className="home-participate-invite__title">{modality.name}</span>
          <span className="home-participate-invite__summary">{modality.summary}</span>
        </span>
      </span>
    </a>
  )
}

export function Home({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.home
  const copy = homeCopy
  const goToClube = () => setScreen(appRoutes.clube)

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

          <section className="home-how-it-works" aria-labelledby="home-how-it-works">
            <h2 id="home-how-it-works" className="home-chapter__title">
              {copy.howItWorks.title}
            </h2>
            {copy.howItWorks.subtitle ? (
              <p className="home-how-it-works__lead">{copy.howItWorks.subtitle}</p>
            ) : null}
            <ol className="home-how-it-works__flow">
              {copy.howItWorks.steps.map((step) => (
                <li key={step.title} className="home-how-it-works__flow-step">
                  <span className="home-how-it-works__flow-title">{step.title}</span>
                  <span className="home-how-it-works__flow-text">{step.text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="home-participate home-participate--sheet"
            aria-labelledby="home-participate"
          >
            <div className="home-participate__frame">
              <header className="home-participate__intro">
                <h2 id="home-participate" className="home-participate__title home-participate__title--club">
                  <span className="home-participate__title-text">{copy.participate.title}</span>
                </h2>
                {copy.participate.lead.map((line) => (
                  <p key={line} className="home-participate__lead">
                    {line}
                  </p>
                ))}
              </header>

              <div className="home-participate__invites">
              {copy.participate.modalities.map((modality) => (
                <HomeParticipateInvite
                  key={modality.id}
                  modality={modality}
                  setScreen={setScreen}
                />
              ))}
              </div>
            </div>
          </section>

          <section className="home-clube-cta" aria-label="Conhecer o Clube daTeca">
            <button
              type="button"
              className="home-organic-cta home-organic-cta--club"
              onClick={goToClube}
            >
              {copy.finalCta.label}
            </button>
          </section>
        </div>
      </div>
    </WorldPortalLayout>
  )
}
