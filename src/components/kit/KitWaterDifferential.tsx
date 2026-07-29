import { kitPageCopy } from "../../data/kitPageCopy"
import { KitIcon } from "./KitIcons"

export function KitWaterDifferential() {
  const { water } = kitPageCopy

  return (
    <section
      className="kit-water"
      aria-labelledby="kit-water-title"
    >
      <div className="kit-water__inner">
        <span className="kit-water__icon" aria-hidden="true">
          <KitIcon name="water" />
        </span>
        <h2 id="kit-water-title" className="kit-water__title">
          {water.title}
        </h2>
        <p className="kit-water__text">{water.text}</p>
      </div>
    </section>
  )
}
