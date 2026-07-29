import { kitPageCopy } from "../../data/kitPageCopy"
import { KitCta } from "./KitCta"

export function KitHero() {
  const { hero } = kitPageCopy

  return (
    <header className="kit-hero">
      <img
        className="kit-hero__image"
        src={hero.image}
        alt={hero.imageAlt}
        width={1600}
        height={1200}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="kit-hero__veil" aria-hidden="true" />
      <div className="kit-hero__content">
        <h1 className="kit-hero__title">{hero.title}</h1>
        <p className="kit-hero__subtitle">
          <span>{hero.subtitleLead}</span>
          <span>{hero.subtitleFollow}</span>
        </p>
        <KitCta label={hero.cta} variant="scroll" />
      </div>
    </header>
  )
}
