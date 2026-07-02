import { FicharioEtiqueta } from "../components/fichario"
import { conhecaPageCopy } from "../data/conhecaPageCopy"
import { conhecaPageStyles as s } from "../styles/conhecaPageStyles"
import { homeCtaClassName, homeCtaStyle } from "../styles/homeCta"

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
      <header style={s.hero}>
        <img
          src={copy.hero.image}
          alt={copy.hero.imageAlt}
          width={1000}
          height={1500}
          loading="eager"
          decoding="async"
          style={s.heroImage}
        />
        <div style={s.heroVignette} aria-hidden="true" />
        <div style={s.heroFade} aria-hidden="true" />
        <div style={s.heroBody}>
          <p style={s.pageKicker}>{copy.documentTitle}</p>
          <h1 style={s.heroTitle}>{copy.hero.title}</h1>
          <p style={s.heroText}>{copy.hero.text}</p>
        </div>
      </header>

      <section style={s.chapterFirst} aria-labelledby="conheca-curiosity">
        <h2 id="conheca-curiosity" style={s.manifestoTitle}>
          {copy.curiosity.title}
        </h2>
        <div style={s.manifestoBlock}>
          {copy.curiosity.lines.map((line) => (
            <p key={line} style={s.proseLine}>
              {line}
            </p>
          ))}
          <p style={s.proseClosing}>{copy.curiosity.closing}</p>
        </div>
      </section>

      <section style={s.chapter} aria-labelledby="conheca-journey">
        <ChapterDots />
        <p style={s.chapterEpigraph}>{copy.journey.epigraph}</p>
        <h2 id="conheca-journey" style={s.sectionTitle}>
          {copy.journey.title}
        </h2>
        <div style={s.editorialImageWrapInset}>
          <img
            src={copy.journey.image}
            alt={copy.journey.imageAlt}
            width={680}
            height={480}
            loading="lazy"
            decoding="async"
            style={s.editorialImageWide}
          />
        </div>
        <p style={s.sectionLead}>{copy.journey.body}</p>
        <ul style={s.journeySteps}>
          {copy.journey.steps.map((step) => (
            <li key={step} style={s.journeyStep}>
              {step}
            </li>
          ))}
        </ul>
        <p style={s.proseClosing}>{copy.journey.closing}</p>
      </section>

      <section style={s.sectionBreath} aria-labelledby="conheca-how">
        <h2 id="conheca-how" style={s.sectionTitle}>
          {copy.howItWorks.title}
        </h2>
        <div style={s.howItWorks}>
          {copy.howItWorks.steps.map((step, index) => (
            <div key={step}>
              <p style={s.howStep}>
                <span style={s.howStepNumber}>{index + 1}.</span>
                <span style={s.howStepText}>{step}</span>
              </p>
              {index < copy.howItWorks.steps.length - 1 ? (
                <span style={s.howArrow} aria-hidden="true">
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
        <div style={s.pillarGrid}>
          {copy.pillars.items.map((item) => (
            <button
              key={item.id}
              type="button"
              style={{
                ...s.pillarCard,
                ...(item.featured ? s.pillarCardFeatured : {}),
              }}
              onClick={() => setScreen(item.screen)}
            >
              <h3
                style={{
                  ...s.pillarTitle,
                  ...(item.featured ? s.pillarTitleFeatured : {}),
                }}
              >
                {item.title}
              </h3>
              <p style={s.pillarText}>{item.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section style={s.chapterCompact} aria-labelledby="conheca-audience">
        <p style={s.chapterEpigraph}>{copy.audience.opener}</p>
        <h2 id="conheca-audience" style={s.sectionTitle}>
          {copy.audience.title}
        </h2>
        <p style={s.proseCenter}>{copy.audience.text}</p>
        <p style={s.proseClosingCompact}>{copy.audience.closing}</p>
      </section>

      <section style={s.chapterCompact} aria-labelledby="conheca-philosophy">
        <div style={s.philosophyBlock}>
          <p style={s.chapterEpigraph}>{copy.philosophy.lead}</p>
          <h2 id="conheca-philosophy" style={s.sectionTitle}>
            {copy.philosophy.title}
          </h2>
          <ul style={s.philosophyList}>
            {copy.philosophy.principles.map((principle) => (
              <li key={principle} style={s.philosophyItem}>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={s.finalChapter} aria-labelledby="conheca-invitation">
        <ChapterDots />
        <h2 id="conheca-invitation" style={s.invitationTitle}>
          {copy.invitation.title}
        </h2>
        {copy.invitation.lines.map((line) => (
          <p key={line} style={s.finalClosingLine}>
            {line}
          </p>
        ))}
        <div style={s.invitationActions}>
          <FicharioEtiqueta
            action
            onClick={() => setScreen(copy.invitation.cta.screen)}
            className={homeCtaClassName(copy.invitation.cta.tone)}
            style={{
              ...homeCtaStyle(copy.invitation.cta.tone),
              ...s.invitationCta,
            }}
          >
            {copy.invitation.cta.label}
          </FicharioEtiqueta>
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
