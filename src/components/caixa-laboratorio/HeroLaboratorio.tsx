import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingImage } from "./LandingImage"
import { OfferPricing } from "./OfferPricing"

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

function ReadyCardArt() {
  return (
    <svg
      className="clx-hero-card__art"
      viewBox="0 0 120 48"
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
        <path d="M14 20h28v18H14z" />
        <path d="M14 20l14-8 14 8" />
        <path d="M28 28v10" opacity="0.55" />
        <path d="M58 24h18" strokeDasharray="2 3" opacity="0.65" />
        <path d="M58 32h24" strokeDasharray="2 3" opacity="0.45" />
        <circle cx="92" cy="18" r="3" opacity="0.5" />
        <circle cx="102" cy="24" r="2" opacity="0.4" />
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

      <div className="clx-hero__copy">
        <h1 id="clx-hero-title" className="clx-sr-only">
          {hero.titleAccessible}
        </h1>
        <p className="clx-hero__subtitle">{hero.subtitle}</p>
        <p className="clx-hero__age">{hero.ageNote}</p>
      </div>

      <div className="clx-hero__cards">
        <article className="clx-hero-card clx-hero-card--water">
          <ReadyCardArt />
          <h2 className="clx-hero-card__title">
            {ready.titleLead}
            <span className="clx-hero-card__emphasis">{ready.titleEmphasis}</span>
            {ready.titleEnd}
          </h2>
          <p className="clx-hero-card__text">{ready.text}</p>
        </article>
      </div>

      <ul className="clx-checklist clx-hero__benefits">
        {hero.benefits.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="clx-hero__offer">
        <OfferPricing origin="hero" />
      </div>

      <figure className="clx-hero__media clx-hero__media--poster-9">
        <LandingImage
          className="clx-hero__image clx-hero__image--poster-9"
          src={hero.poster9Guiadas}
          alt={hero.poster9GuiadasAlt}
          loading="lazy"
        />
      </figure>
    </section>
  )
}
