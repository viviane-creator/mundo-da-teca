import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitAdventures() {
  const { adventures } = kitPageCopy

  return (
    <section className="kit-chapter kit-adventures" aria-labelledby="kit-adventures-title">
      <KitReveal>
        <p className="kit-chapter__kicker">{adventures.kicker}</p>
        <h2 id="kit-adventures-title" className="kit-chapter__title">
          {adventures.title}
        </h2>
        <p className="kit-chapter__text">{adventures.lead}</p>
      </KitReveal>

      <div className="kit-adventures__stack">
        {adventures.items.map((item, index) => (
          <article
            key={item.id}
            className={`kit-adventure kit-adventure--${index % 2 === 0 ? "a" : "b"}`}
          >
            <KitReveal>
              <figure className="kit-adventure__figure">
                <img
                  src={item.image}
                  alt=""
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
              </figure>
            </KitReveal>
            <KitReveal delay={90}>
              <div className="kit-adventure__copy">
                <h3 className="kit-adventure__name">{item.name}</h3>
                <p className="kit-adventure__line">{item.line}</p>
              </div>
            </KitReveal>
          </article>
        ))}
      </div>
    </section>
  )
}
