import { kitPageCopy } from "../../data/kitPageCopy"

export function KitSolution() {
  const { solution } = kitPageCopy

  return (
    <section
      className="kit-page__section kit-solution"
      aria-labelledby="kit-solution-title"
    >
      <figure className="kit-solution__figure">
        <img
          src={solution.image}
          alt={solution.imageAlt}
          width={1000}
          height={800}
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className="kit-solution__copy">
        <h2 id="kit-solution-title" className="kit-page__section-title">
          {solution.title}
        </h2>
        <p className="kit-page__section-text">{solution.text}</p>
        <ul className="kit-solution__list">
          {solution.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="kit-page__water-note">{solution.waterNote}</p>
      </div>
    </section>
  )
}
