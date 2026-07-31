import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"
import { LandingImage } from "./LandingImage"

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

  return (
    <section className="clx-hero" aria-labelledby="clx-hero-title">
      <div className="clx-hero__wash" aria-hidden="true" />
      <HeroDecor />

      <div className="clx-hero__copy">
        <p className="clx-hero__kicker">{hero.kicker}</p>
        <h1 id="clx-hero-title" className="clx-hero__title">
          <span className="clx-hero__title-num">9</span>
          {" descobertas dentro de uma caixa."}
        </h1>
        <p className="clx-hero__text">{hero.text}</p>
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

      <ul className="clx-checklist clx-hero__benefits">
        {hero.benefits.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <aside className="clx-hero__water" aria-label={hero.waterCallout.title}>
        <svg
          className="clx-hero__water-icon"
          viewBox="0 0 64 64"
          width="22"
          height="22"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M32 8c8 12 16 22 16 32a16 16 0 11-32 0c0-10 8-20 16-32z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="clx-hero__water-copy">
          <p className="clx-hero__water-title">{hero.waterCallout.title}</p>
          <p className="clx-hero__water-text">{hero.waterCallout.text}</p>
        </div>
      </aside>

      <div className="clx-hero__offer">
        <p className="clx-price">{hero.price}</p>
        <p className="clx-shipping">{hero.shipping}</p>
        <p className="clx-seal">
          <span className="clx-seal__line">{hero.batchSeal.line1}</span>
          <span className="clx-seal__line">{hero.batchSeal.line2}</span>
        </p>
        <LandingCta label={hero.cta} origin="hero" />
        <p className="clx-note">{hero.note}</p>
        <p className="clx-payment-note">
          <span className="clx-payment-note__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" focusable="false">
              <path
                d="M7 10V8a5 5 0 0110 0v2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <rect
                x="5"
                y="10"
                width="14"
                height="10"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
          </span>
          {hero.paymentNote}
        </p>
      </div>
    </section>
  )
}
