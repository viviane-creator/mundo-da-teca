import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitProduct() {
  const { product } = kitPageCopy

  return (
    <section className="kit-chapter kit-product" aria-labelledby="kit-product-title">
      <KitReveal>
        <p className="kit-chapter__kicker">{product.kicker}</p>
        <h2 id="kit-product-title" className="kit-chapter__title">
          {product.title}
        </h2>
        <p className="kit-chapter__text">{product.lead}</p>
      </KitReveal>

      <KitReveal delay={80}>
        <figure className="kit-frame kit-frame--hero">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={1400}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </KitReveal>

      <div className="kit-product__details">
        {product.details.map((detail, index) => (
          <KitReveal key={detail.id} delay={index * 70}>
            <figure className="kit-product__detail">
              <img
                src={detail.image}
                alt={detail.alt}
                width={640}
                height={640}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{detail.caption}</figcaption>
            </figure>
          </KitReveal>
        ))}
      </div>
    </section>
  )
}
