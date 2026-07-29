import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitChildhood() {
  const { childhood } = kitPageCopy

  return (
    <section className="kit-chapter kit-childhood" aria-labelledby="kit-childhood-title">
      <KitReveal>
        <p className="kit-chapter__kicker">{childhood.kicker}</p>
        <h2 id="kit-childhood-title" className="kit-chapter__title">
          {childhood.title}
        </h2>
      </KitReveal>

      <div className="kit-childhood__layout">
        <KitReveal className="kit-childhood__copy" delay={80}>
          <ul className="kit-childhood__lines">
            {childhood.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="kit-childhood__closing">{childhood.closing}</p>
        </KitReveal>

        <KitReveal className="kit-childhood__media" delay={140}>
          <figure className="kit-frame kit-frame--portrait">
            <img
              src={childhood.image}
              alt={childhood.imageAlt}
              width={720}
              height={960}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </KitReveal>
      </div>
    </section>
  )
}
