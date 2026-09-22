import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"
import { LandingImage } from "./LandingImage"

export function FreeExplorationSection() {
  const { freeExploration } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-free-exploration"
      aria-labelledby="clx-free-exploration-title"
    >
      <div className="clx-discoveries-continue">
        <figure className="clx-discoveries-continue__media">
          <LandingImage
            className="clx-discoveries-continue__image"
            src={freeExploration.image}
            alt={freeExploration.imageAlt}
            loading="lazy"
          />
        </figure>
        <BalancedLines
          as="h2"
          id="clx-free-exploration-title"
          className="clx-discoveries-continue__title"
          lines={freeExploration.titleLines}
        />
        <div className="clx-discoveries-continue__body">
          <p className="clx-discoveries-continue__text">{freeExploration.text}</p>
        </div>
      </div>
    </section>
  )
}
