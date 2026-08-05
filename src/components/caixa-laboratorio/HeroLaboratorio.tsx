import { DaTecaInText } from "../brand/DaTecaInText"
import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"
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

function TenthCardArt() {
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
        <path d="M18 10h12v8c0 7-2.5 12-6 12s-6-5-6-12V10z" />
        <path d="M24 30v8" />
        <circle cx="24" cy="42" r="3.5" />
        <path d="M48 16l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" opacity="0.7" />
        <path d="M72 18c12 2 22 6 28 14" strokeDasharray="2 3" />
        <path d="M94 28l8 4-8 4" />
        <path d="M42 40h28" strokeDasharray="2 3" opacity="0.55" />
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
  const { tenth, ready } = hero.cards

  return (
    <section className="clx-hero" aria-labelledby="clx-hero-title">
      <div className="clx-hero__wash" aria-hidden="true" />
      <HeroDecor />

      <div className="clx-hero__copy">
        <p className="clx-hero__kicker">
          <DaTecaInText text={hero.kicker} wordmarkSize="inherit" />
        </p>
        <h1 id="clx-hero-title" className="clx-hero__title">
          <span className="clx-hero__title-num">{hero.titleNum}</span>
          <BalancedLines lines={hero.titleRestLines} />
        </h1>
        <p className="clx-hero__subtitle">{hero.subtitle}</p>
      </div>

      <figure className="clx-hero__media">
        <div className="clx-hero__blob" aria-hidden="true" />
        <LandingImage
          className="clx-hero__image"
          src={hero.image}
          alt={hero.imageAlt}
          loading="eager"
          fetchPriority="high"
        />
      </figure>

      <div className="clx-hero__cards">
        <article className="clx-hero-card clx-hero-card--tenth">
          <TenthCardArt />
          <p className="clx-hero-card__eyebrow">
            <span className="clx-hero-card__eyebrow-accent">
              {tenth.eyebrowPrefix}
            </span>
            {tenth.eyebrowSuffix}
          </p>
          <h2 className="clx-hero-card__title">
            <BalancedLines lines={tenth.titleLines} />
          </h2>
          <p className="clx-hero-card__text">{tenth.text}</p>
        </article>

        <article className="clx-hero-card clx-hero-card--water">
          <ReadyCardArt />
          <p className="clx-hero-card__eyebrow">{ready.eyebrow}</p>
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
    </section>
  )
}
