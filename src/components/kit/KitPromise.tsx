import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitPromise() {
  const { promise } = kitPageCopy

  return (
    <section className="kit-chapter kit-promise" aria-labelledby="kit-promise-title">
      <KitReveal>
        <p className="kit-chapter__kicker">{promise.kicker}</p>
        <h2 id="kit-promise-title" className="kit-chapter__title">
          {promise.title}
        </h2>
      </KitReveal>

      <ul className="kit-promise__list">
        {promise.items.map((item, index) => (
          <KitReveal key={item} delay={index * 55}>
            <li className="kit-promise__item">{item}</li>
          </KitReveal>
        ))}
      </ul>

      <KitReveal delay={120}>
        <p className="kit-promise__closing">{promise.closing}</p>
      </KitReveal>
    </section>
  )
}
