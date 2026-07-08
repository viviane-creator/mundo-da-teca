import { conhecaPageCopy } from "../data/conhecaPageCopy"
import "../styles/conhecaPage.css"

function ConhecaDivider() {
  return (
    <div className="conheca-page__divider" aria-hidden="true">
      <span className="conheca-page__divider-dot" />
      <span className="conheca-page__divider-dot" />
      <span className="conheca-page__divider-dot" />
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
    <article className="conheca-page">
      <header className="conheca-page__hero">
        <h1 className="conheca-page__title">{copy.documentTitle}</h1>
        <p className="conheca-page__lead">{copy.hero.text}</p>
      </header>

      <div className="conheca-page__sheet">
        <section className="conheca-page__chapter" aria-labelledby="conheca-how">
          <h2 id="conheca-how" className="conheca-page__chapter-title">
            {copy.howItWorks.title}
          </h2>
          {copy.howItWorks.subtitle ? (
            <p className="conheca-page__chapter-lead">{copy.howItWorks.subtitle}</p>
          ) : null}
          <ol className="conheca-page__flow">
            {copy.howItWorks.steps.map((step) => (
              <li key={step.title} className="conheca-page__flow-step">
                <span className="conheca-page__flow-title">{step.title}</span>
                <span className="conheca-page__flow-text">{step.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <ConhecaDivider />

        <section className="conheca-page__chapter" aria-labelledby="conheca-pillars">
          <h2 id="conheca-pillars" className="conheca-page__chapter-title">
            {copy.pillars.title}
          </h2>
          <p className="conheca-page__chapter-lead">{copy.pillars.subtitle}</p>
          <div className="conheca-page__eco-grid">
            {copy.pillars.items.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`conheca-eco-card conheca-eco-card--${item.id}`}
                aria-label={`${item.title}. ${item.text}`}
                onClick={() => setScreen(item.screen)}
              >
                <span className="conheca-eco-card__layout">
                  <span className="conheca-eco-card__body">
                    <span className="conheca-eco-card__cover-wrap">
                      <img
                        className="conheca-eco-card__cover"
                        src={item.cover}
                        alt=""
                        width={72}
                        height={72}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="conheca-eco-card__copy">
                      <span className="conheca-eco-card__title">{item.title}</span>
                      <span className="conheca-eco-card__text">{item.text}</span>
                    </span>
                  </span>
                  <span className="conheca-eco-card__tab" aria-hidden="true">
                    {item.abaLabel}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <ConhecaDivider />

        <section className="conheca-page__chapter conheca-page__chapter--center" aria-labelledby="conheca-audience">
          <h2 id="conheca-audience" className="conheca-page__chapter-title">
            {copy.audience.title}
          </h2>
          <div className="conheca-page__prose conheca-page__prose--center">
            {copy.audience.paragraphs.map((paragraph) => (
              <p key={paragraph} className="conheca-page__text">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <ConhecaDivider />

        <section
          className="conheca-page__chapter conheca-page__chapter--final"
          aria-labelledby="conheca-invitation"
        >
          <h2 id="conheca-invitation" className="conheca-page__chapter-title">
            {copy.invitation.title}
          </h2>
          <div className="conheca-page__prose conheca-page__prose--center">
            {copy.invitation.lines.map((line) => (
              <p key={line} className="conheca-page__text">
                {line}
              </p>
            ))}
          </div>
          <div className="conheca-page__actions">
            <button
              type="button"
              className="conheca-page__link"
              onClick={() => setScreen(copy.invitation.cta.screen)}
            >
              {copy.invitation.cta.label}
            </button>
            <button
              type="button"
              className="conheca-page__link conheca-page__link--secondary"
              onClick={() => setScreen(copy.invitation.secondaryCta.screen)}
            >
              {copy.invitation.secondaryCta.label}
            </button>
          </div>
          <img
            className="conheca-page__signature"
            src={copy.signature.logo}
            alt={copy.signature.logoAlt}
            width={400}
            height={120}
            loading="lazy"
            decoding="async"
          />
        </section>
      </div>
    </article>
  )
}
