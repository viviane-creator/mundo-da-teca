import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingImage } from "./LandingImage"
import { LandingCta } from "./LandingCta"

function HeroDecor() {
  return (
    <svg
      className="clx-hero__doodles"
      viewBox="0 0 360 420"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M42 78c10 14 12 28 0 42-12-14-10-28 0-42z" />
        <circle cx="88" cy="54" r="7" opacity="0.55" />
        <circle cx="108" cy="42" r="3.5" opacity="0.4" />
        <path d="M300 56l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" />
        <path d="M48 300c18-2 28 10 26 28" opacity="0.55" />
        <path d="M312 280v36m-10-10c6 8 14 8 20 0" opacity="0.55" />
        <path d="M330 150c-8 12-6 26 4 34" opacity="0.45" />
        <circle cx="318" cy="198" r="5" opacity="0.4" />
        <circle cx="304" cy="212" r="3" opacity="0.35" />
      </g>
    </svg>
  )
}

export function HeroLaboratorio() {
  const { hero } = caixaLaboratorioData
  const { ready } = hero.cards

  return (
    <section className="clx-hero clx-hero--presente-open" aria-labelledby="clx-hero-title">
      <div className="clx-hero__wash" aria-hidden="true" />
      <HeroDecor />

      <figure className="clx-hero__media clx-hero__media--presente">
        <LandingImage
          className="clx-hero__image clx-hero__image--presente"
          src={hero.image}
          alt={hero.imageAlt}
          loading="eager"
          fetchPriority="high"
        />
      </figure>

      <div className="clx-hero__offer clx-hero__offer--cta-only">
        <div className="clx-purchase-cta-wrap">
          <LandingCta
            label={hero.cta}
            origin="hero"
            purchaseHighlight
            priceHint={"ctaPriceHint" in hero ? hero.ctaPriceHint : undefined}
          />
        </div>
        {hero.dispatchNote ? (
          <p className="clx-hero__dispatch">{hero.dispatchNote}</p>
        ) : null}
      </div>

      <div className="clx-hero__copy">
        <h1 id="clx-hero-title" className="clx-sr-only">
          {hero.titleAccessible}
        </h1>
        <p className="clx-hero__subtitle">{hero.subtitle}</p>
      </div>

      <div className="clx-hero__cards">
        <article className="clx-hero-card clx-hero-card--water clx-hero-card--compact">
          <h2 className="clx-hero-card__title">{ready.title}</h2>
          {ready.text ? (
            <p className="clx-hero-card__text">{ready.text}</p>
          ) : null}
        </article>
      </div>

      <figure className="clx-hero__media clx-hero__media--poster-9">
        <LandingImage
          className="clx-hero__image clx-hero__image--poster-9"
          src={hero.poster9Guiadas}
          alt={hero.poster9GuiadasAlt}
          loading="eager"
          fetchPriority="high"
        />
      </figure>
    </section>
  )
}
