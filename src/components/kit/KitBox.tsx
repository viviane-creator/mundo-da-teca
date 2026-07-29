import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitBox() {
  const { box } = kitPageCopy

  return (
    <section className="kit-chapter kit-box" aria-labelledby="kit-box-title">
      <KitReveal>
        <p className="kit-chapter__kicker">{box.kicker}</p>
        <h2 id="kit-box-title" className="kit-chapter__title">
          {box.title}
        </h2>
        <p className="kit-chapter__text">{box.lead}</p>
      </KitReveal>

      <div className="kit-box__mosaic">
        {box.frames.map((frame, index) => (
          <KitReveal key={frame.id} delay={index * 60}>
            <figure
              className={`kit-box__frame kit-box__frame--${index + 1}`}
            >
              <img
                src={frame.image}
                alt={frame.alt}
                width={900}
                height={700}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{frame.caption}</figcaption>
            </figure>
          </KitReveal>
        ))}
      </div>
    </section>
  )
}
