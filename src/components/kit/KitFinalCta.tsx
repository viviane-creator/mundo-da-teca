import { kitPageCopy } from "../../data/kitPageCopy"
import { KitCta } from "./KitCta"

export function KitFinalCta() {
  const { finalCta } = kitPageCopy

  return (
    <section
      className="kit-final"
      aria-labelledby="kit-final-title"
    >
      <div className="kit-final__media">
        <img
          src={finalCta.image}
          alt={finalCta.imageAlt}
          width={1400}
          height={900}
          loading="lazy"
          decoding="async"
        />
        <div className="kit-final__wash" aria-hidden="true" />
      </div>
      <div className="kit-final__body">
        <h2 id="kit-final-title" className="kit-final__title">
          {finalCta.title}
        </h2>
        <p className="kit-final__text">{finalCta.text}</p>
        <KitCta label={finalCta.cta} variant="order" large />
      </div>
    </section>
  )
}
