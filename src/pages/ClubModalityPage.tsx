import { useEffect } from "react"
import {
  clubModalityById,
  clubModalityPagePlaceholders,
  clubSealLabel,
  type ClubModalityId,
} from "../data/clubModalities"
import { homePlanStainSrc } from "../data/homePlanStains"
import { appRoutes } from "../navigation/appRoutes"
import "../styles/clubModalityPage.css"

export function ClubModalityPage({
  modalityId,
  setScreen,
}: {
  modalityId: ClubModalityId
  setScreen: (screen: string) => void
}) {
  const modality = clubModalityById[modalityId]
  const placeholders = clubModalityPagePlaceholders

  useEffect(() => {
    document.title = `${modality.title} — Clube`
  }, [modality.title])

  return (
    <article className={`club-modality-page club-modality-page--${modalityId}`}>
      <button
        type="button"
        className="club-modality-page__back"
        onClick={() => setScreen(appRoutes.clube)}
      >
        ← Voltar ao Clube
      </button>

      <header className="club-modality-page__hero">
        <div className="club-modality-page__underlay" aria-hidden="true">
          <div className="club-modality-page__hero-copy club-modality-page__hero-copy--mirror">
            <span className="club-modality-page__seal club-modality-page__seal--spacer">
              {clubSealLabel(modalityId)}
            </span>
            <div className="club-modality-page__title-wrap">
              <img
                className="club-modality-page__stain"
                src={homePlanStainSrc[modalityId]}
                alt=""
                decoding="async"
                draggable={false}
                loading="eager"
              />
              <span className="club-modality-page__title club-modality-page__title--spacer">
                {modality.title}
              </span>
            </div>
          </div>
        </div>
        <div className="club-modality-page__hero-copy">
          <span className="club-modality-page__seal" aria-hidden="true">
            {clubSealLabel(modalityId)}
          </span>
          <div className="club-modality-page__title-wrap">
            <h1 className="club-modality-page__title">{modality.title}</h1>
          </div>
          <p className="club-modality-page__lead">{modality.description}</p>
          <p className="club-modality-page__price">{modality.price}</p>
        </div>
      </header>

      <section
        className="club-modality-page__section"
        aria-labelledby={`${modalityId}-renders`}
      >
        <h2 id={`${modalityId}-renders`} className="club-modality-page__section-title">
          {placeholders.renders.title}
        </h2>
        <p className="club-modality-page__section-text">
          {placeholders.renders.text}
        </p>
        <div className="club-modality-page__placeholder" aria-hidden="true">
          <p className="club-modality-page__placeholder-text">Render em breve</p>
        </div>
      </section>

      <section
        className="club-modality-page__section"
        aria-labelledby={`${modalityId}-how`}
      >
        <h2 id={`${modalityId}-how`} className="club-modality-page__section-title">
          {placeholders.howItWorks.title}
        </h2>
        <p className="club-modality-page__section-text">
          {placeholders.howItWorks.text}
        </p>
        <div className="club-modality-page__placeholder" aria-hidden="true">
          <p className="club-modality-page__placeholder-text">
            Conteúdo em elaboração
          </p>
        </div>
      </section>

      <section
        className="club-modality-page__section"
        aria-labelledby={`${modalityId}-faq`}
      >
        <h2 id={`${modalityId}-faq`} className="club-modality-page__section-title">
          {placeholders.faq.title}
        </h2>
        <p className="club-modality-page__section-text">{placeholders.faq.text}</p>
        <div className="club-modality-page__placeholder" aria-hidden="true">
          <p className="club-modality-page__placeholder-text">FAQ em breve</p>
        </div>
      </section>

      <section className="club-modality-page__subscribe" aria-labelledby={`${modalityId}-subscribe`}>
        <h2 id={`${modalityId}-subscribe`} className="club-modality-page__sr-only">
          Assinatura
        </h2>
        <button
          type="button"
          className="home-organic-cta home-organic-cta--club club-modality-page__subscribe-cta"
        >
          {placeholders.subscribe.label}
        </button>
        <p className="club-modality-page__subscribe-note">
          {placeholders.subscribe.note}
        </p>
      </section>
    </article>
  )
}
