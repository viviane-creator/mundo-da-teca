import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitWater() {
  const { water } = kitPageCopy

  return (
    <section className="kit-water" aria-labelledby="kit-water-title">
      <KitReveal>
        <div className="kit-water__drop" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="72" height="72">
            <path
              d="M32 8c8 12 16 22 16 32a16 16 0 11-32 0c0-10 8-20 16-32z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 id="kit-water-title" className="kit-water__title">
          {water.title}
        </h2>
        <p className="kit-water__line">{water.line}</p>
        <p className="kit-water__whisper">{water.whisper}</p>
      </KitReveal>
    </section>
  )
}
