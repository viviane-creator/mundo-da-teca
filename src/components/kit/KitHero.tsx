import { kitPageCopy } from "../../data/kitPageCopy"
import { KitCta } from "./KitCta"

export function KitHero() {
  const { hero } = kitPageCopy

  return (
    <header className="kit-page__hero">
      <div className="kit-page__hero-media">
        <img
          className="kit-page__hero-cover"
          src={hero.image}
          alt={hero.imageAlt}
          width={1400}
          height={1000}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="kit-page__hero-wash" aria-hidden="true" />
        <div className="kit-page__hero-body">
          <img
            className="kit-page__hero-logo"
            src={hero.logo}
            alt={hero.logoAlt}
            width={160}
            height={68}
            loading="eager"
            decoding="async"
          />
          <h1 className="kit-page__hero-title">{hero.title}</h1>
          <p className="kit-page__hero-subtitle">{hero.subtitle}</p>
          <p className="kit-page__hero-highlight">{hero.highlight}</p>
          <KitCta label={hero.cta} variant="scroll" />
        </div>
      </div>
    </header>
  )
}
