import { kitPageCopy } from "../../data/kitPageCopy"

export function KitDiscovery() {
  const { discovery } = kitPageCopy

  return (
    <section
      className="kit-page__section kit-discovery"
      aria-labelledby="kit-discovery-title"
    >
      <div className="kit-discovery__copy">
        <h2 id="kit-discovery-title" className="kit-page__section-title">
          {discovery.title}
        </h2>
        <p className="kit-page__section-text">{discovery.text}</p>
      </div>
      <figure className="kit-discovery__figure">
        <img
          src={discovery.image}
          alt={discovery.imageAlt}
          width={900}
          height={700}
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
