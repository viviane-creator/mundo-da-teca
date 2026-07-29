import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitBrand() {
  const { brand } = kitPageCopy

  return (
    <section className="kit-chapter kit-brand" aria-labelledby="kit-brand-title">
      <KitReveal>
        <p className="kit-chapter__kicker">{brand.kicker}</p>
        <h2 id="kit-brand-title" className="kit-chapter__title">
          {brand.title}
        </h2>
        <p className="kit-chapter__text">{brand.text}</p>
      </KitReveal>

      <div className="kit-brand__gallery">
        <KitReveal delay={60}>
          <figure className="kit-frame kit-frame--wide">
            <img
              src={brand.image}
              alt={brand.imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </KitReveal>
        <KitReveal delay={120}>
          <figure className="kit-frame kit-frame--offset">
            <img
              src={brand.secondaryImage}
              alt={brand.secondaryAlt}
              width={900}
              height={700}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </KitReveal>
      </div>
    </section>
  )
}
