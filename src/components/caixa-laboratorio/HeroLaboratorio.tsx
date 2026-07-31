import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"
import { LandingImage } from "./LandingImage"

export function HeroLaboratorio() {
  const { hero } = caixaLaboratorioData

  return (
    <section className="clx-hero" aria-labelledby="clx-hero-title">
      <div className="clx-hero__copy">
        <p className="clx-hero__kicker">{hero.kicker}</p>
        <h1 id="clx-hero-title" className="clx-hero__title">
          {hero.title}
        </h1>
        <p className="clx-hero__text">{hero.text}</p>

        <ul className="clx-checklist">
          {hero.benefits.map((item) => (
            <li key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <figure className="clx-hero__media">
        <LandingImage
          className="clx-hero__image"
          src={hero.image}
          alt={hero.imageAlt}
          loading="eager"
          fetchPriority="high"
        />
      </figure>

      <div className="clx-hero__offer">
        <p className="clx-price">{hero.price}</p>
        <p className="clx-shipping">{hero.shipping}</p>
        <p className="clx-batch">{hero.batch}</p>
        <LandingCta label={hero.cta} />
        <p className="clx-note">{hero.note}</p>
      </div>
    </section>
  )
}
