import { useEffect } from "react"
import { clubPageCopy } from "../data/clubPageCopy"
import {
  clubComparisonCopy,
  clubModalities,
  clubSealLabel,
} from "../data/clubModalities"
import { homePlanStainSrc } from "../data/homePlanStains"
import { pageCovers } from "../data/pageCovers"
import { clubModalityScreen } from "../navigation/clubNavigation"
import "../styles/clubPage.css"

function ComparisonMark({ included }: { included: boolean }) {
  return (
    <span
      className={
        included
          ? "club-compare-sheet__mark club-compare-sheet__mark--yes"
          : "club-compare-sheet__mark club-compare-sheet__mark--no"
      }
      aria-hidden={!included}
    >
      {included ? "✓" : "—"}
    </span>
  )
}

export function ClubPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const copy = clubPageCopy

  useEffect(() => {
    document.title = copy.documentTitle
  }, [copy.documentTitle])

  return (
    <article className="club-page">
      <header className="club-page__hero">
        <div className="club-page__hero-media">
          <img
            className="club-page__hero-cover"
            src={pageCovers.clube}
            alt=""
            width={1200}
            height={800}
            loading="eager"
            decoding="async"
            aria-hidden="true"
          />
          <div className="club-page__hero-wash" aria-hidden="true" />
          <div className="club-page__hero-body">
            <img
              className="club-page__hero-logo"
              src={copy.hero.logo}
              alt={copy.hero.logoAlt}
              width={190}
              height={80}
              loading="eager"
              decoding="async"
            />
            <h1 className="club-page__hero-title">{copy.hero.title}</h1>
            {copy.hero.lines.map((line) => (
              <p key={line} className="club-page__hero-text">
                {line}
              </p>
            ))}
          </div>
        </div>
      </header>

      <section
        id="club-modalities"
        className="club-page__choice"
        aria-labelledby="club-choice-title"
      >
        <header className="club-page__choice-header">
          <h2 id="club-choice-title" className="club-page__choice-title">
            <span className="club-page__choice-title-text">{copy.choice.title}</span>
          </h2>
          <p className="club-page__choice-subtitle">{copy.choice.subtitle}</p>
        </header>

        <div className="club-page__modalities">
          {clubModalities.map((modality, index) => (
            <article
              key={modality.id}
              className={`club-modality-block club-modality-block--${modality.id}`}
              aria-labelledby={`club-modality-${modality.id}`}
            >
              <div className="club-modality-block__underlay" aria-hidden="true">
                <div className="club-modality-block__intro club-modality-block__intro--mirror">
                  <span className="club-modality-block__seal club-modality-block__seal--spacer">
                    {clubSealLabel(modality.id)}
                  </span>
                  <div className="club-modality-block__title-wrap">
                    <img
                      className="club-modality-block__stain"
                      src={homePlanStainSrc[modality.id]}
                      alt=""
                      decoding="async"
                      draggable={false}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <span className="club-modality-block__title club-modality-block__title--spacer">
                      {modality.title}
                    </span>
                  </div>
                </div>
              </div>
              <div className="club-modality-block__content">
                <div className="club-modality-block__intro">
                  <span className="club-modality-block__seal" aria-hidden="true">
                    {clubSealLabel(modality.id)}
                  </span>
                  <div className="club-modality-block__title-wrap">
                    <h3
                      id={`club-modality-${modality.id}`}
                      className="club-modality-block__title"
                    >
                      {modality.title}
                    </h3>
                  </div>
                </div>
                <div className="club-modality-block__layout">
                <div className="club-modality-block__copy">
                  <p className="club-modality-block__description">
                    {modality.description}
                  </p>
                  <ul className="club-modality-block__benefits">
                    {modality.benefits.map((benefit) => (
                      <li key={benefit} className="club-modality-block__benefit">
                        <span className="club-modality-block__check" aria-hidden="true">
                          ✓
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="club-modality-block__price">{modality.price}</p>
                </div>
                <button
                  type="button"
                  className="club-modality-block__cta"
                  onClick={() => setScreen(clubModalityScreen(modality.id))}
                >
                  {modality.ctaLabel}
                </button>
              </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="club-page__compare"
        aria-labelledby="club-compare-title"
      >
        <h2 id="club-compare-title" className="club-page__compare-title">
          {clubComparisonCopy.title}
        </h2>
        <p className="club-page__compare-lead">{clubComparisonCopy.lead}</p>

        <div className="club-compare-sheet" role="group" aria-label="Comparação entre modalidades">
          <div className="club-compare-sheet__columns">
            <div className="club-compare-sheet__column-spacer" aria-hidden="true" />
            {clubComparisonCopy.columns.map((column) => (
              <div key={column.key} className="club-compare-sheet__column">
                <img
                  className="club-compare-sheet__illustration"
                  src={column.illustration}
                  alt={column.illustrationAlt}
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
                <p className="club-compare-sheet__column-label">{column.label}</p>
              </div>
            ))}
          </div>

          {clubComparisonCopy.rows.map((row) => (
            <div key={row.modalityId} className="club-compare-sheet__row">
              <p className="club-compare-sheet__row-label">{row.label}</p>
              <div className="club-compare-sheet__marks">
                <ComparisonMark included={row.plataforma} />
                <ComparisonMark included={row.fichario} />
                <ComparisonMark included={row.bau} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="club-page__final" aria-labelledby="club-final-title">
        <h2 id="club-final-title" className="club-page__final-title">
          {copy.finalCta.title}
        </h2>
        <p className="club-page__final-text">{copy.finalCta.text}</p>
      </section>
    </article>
  )
}
