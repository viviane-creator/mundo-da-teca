import { conhecaPageCopy } from "../data/conhecaPageCopy"
import { conhecaPageStyles as s } from "../styles/conhecaPageStyles"
import "../styles/conhecaPage.css"

function ChapterDots() {
  return (
    <div style={s.chapterDots} aria-hidden="true">
      <span style={s.chapterDot} />
      <span style={{ ...s.chapterDot, ...s.chapterDotMid }} />
      <span style={s.chapterDot} />
    </div>
  )
}

export function ConhecaMundoPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const copy = conhecaPageCopy

  return (
    <article style={s.page}>
      <header className="conheca-hero">
        <div className="conheca-hero__paper" aria-hidden="true">
          <span className="conheca-hero__splash conheca-hero__splash--olive" />
          <span className="conheca-hero__splash conheca-hero__splash--gold" />
          <span className="conheca-hero__splash conheca-hero__splash--blue" />
          <span className="conheca-hero__splash conheca-hero__splash--terracotta" />
          <span className="conheca-hero__speckle" />
        </div>
        <div className="conheca-organic conheca-organic--paper conheca-organic--hero">
          <h1 className="conheca-hero-title">{copy.documentTitle}</h1>
          <p className="conheca-hero-lead">{copy.hero.text}</p>
        </div>
      </header>

      <section style={s.chapterFirst} aria-labelledby="conheca-curiosity">
        <h2 id="conheca-curiosity" style={s.sectionTitle}>
          {copy.curiosity.title}
        </h2>
        <div className="conheca-organic conheca-organic--olive">
          {copy.curiosity.lines.map((line) => (
            <p key={line} className="conheca-organic__text">
              {line}
            </p>
          ))}
          <p className="conheca-organic__emphasis">{copy.curiosity.closing}</p>
        </div>
      </section>

      <section style={s.chapterCompact} aria-labelledby="conheca-journey">
        <h2 id="conheca-journey" style={s.srOnly}>
          Informações essenciais
        </h2>
        {copy.journey.steps.length > 0 ? (
          <div className="conheca-organic conheca-organic--gold conheca-organic--compact">
            <ul className="conheca-organic__list">
              {copy.journey.steps.map((step) => (
                <li key={step} className="conheca-organic__check">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section style={s.sectionBreath} aria-labelledby="conheca-how">
        <h2 id="conheca-how" style={s.sectionTitle}>
          {copy.howItWorks.title}
        </h2>
        {copy.howItWorks.subtitle ? (
          <p style={s.sectionSubtitle}>{copy.howItWorks.subtitle}</p>
        ) : null}
        <div className="conheca-how">
          {copy.howItWorks.steps.map((step, index) => (
            <div key={step.title} className="conheca-how-step">
              <p className="conheca-how-step__body">
                <span className="conheca-how__number">{index + 1}.</span>
                <span className="conheca-how__title">{step.title}</span>
                <span className="conheca-how__text">{step.text}</span>
              </p>
              {index < copy.howItWorks.steps.length - 1 ? (
                <span className="conheca-how__arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section style={s.chapter} aria-labelledby="conheca-pillars">
        <ChapterDots />
        <h2 id="conheca-pillars" style={s.sectionTitle}>
          {copy.pillars.title}
        </h2>
        <p style={s.sectionSubtitle}>{copy.pillars.subtitle}</p>
        <div className="conheca-pillar-grid">
          {copy.pillars.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`conheca-pillar conheca-pillar--${item.id}${
                item.featured ? " conheca-pillar--featured" : ""
              }`}
              onClick={() => setScreen(item.screen)}
            >
              <span className="conheca-pillar__aba" aria-hidden="true">
                {item.abaLabel}
              </span>
              <span className="conheca-pillar__panel">
                <span className="conheca-pillar__cover-wrap">
                  <img
                    className="conheca-pillar__cover"
                    src={item.cover}
                    alt=""
                    width={168}
                    height={168}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    aria-hidden="true"
                  />
                </span>
                <span className="conheca-pillar__copy">
                  <span className="conheca-pillar__title">{item.title}</span>
                  <span className="conheca-pillar__text">{item.text}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section style={s.chapterCompact} aria-labelledby="conheca-audience">
        <h2 id="conheca-audience" style={s.sectionTitle}>
          {copy.audience.title}
        </h2>
        <div className="conheca-organic conheca-organic--blue">
          {copy.audience.paragraphs.map((paragraph) => (
            <p key={paragraph} className="conheca-organic__text">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section style={s.finalChapter} aria-labelledby="conheca-invitation">
        <ChapterDots />
        <div className="conheca-organic conheca-organic--warm conheca-organic--wide">
          <h2 id="conheca-invitation" className="conheca-organic__title">
            {copy.invitation.title}
          </h2>
          {copy.invitation.lines.map((line) => (
            <p key={line} className="conheca-organic__text">
              {line}
            </p>
          ))}
          <div className="conheca-organic__actions">
            <button
              type="button"
              className="home-organic-cta home-organic-cta--club"
              onClick={() => setScreen(copy.invitation.cta.screen)}
            >
              {copy.invitation.cta.label}
            </button>
            <button
              type="button"
              className="home-organic-cta home-organic-cta--club home-organic-cta--tilt-alt"
              onClick={() => setScreen(copy.invitation.secondaryCta.screen)}
            >
              {copy.invitation.secondaryCta.label}
            </button>
          </div>
        </div>
        <img
          src={copy.signature.logo}
          alt={copy.signature.logoAlt}
          width={400}
          height={120}
          loading="lazy"
          decoding="async"
          style={s.signatureLogo}
        />
      </section>
    </article>
  )
}
