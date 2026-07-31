import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingImage } from "./LandingImage"

export function KitContents() {
  const { contents } = caixaLaboratorioData

  return (
    <section className="clx-section clx-contents" aria-labelledby="clx-contents-title">
      <h2 id="clx-contents-title" className="clx-section__title">
        {contents.title}
      </h2>
      <p className="clx-section__lead">{contents.lead}</p>

      <figure className="clx-contents__single">
        <LandingImage
          className="clx-contents__single-image"
          src={contents.image}
          alt={contents.imageAlt}
          loading="eager"
        />
      </figure>

      <ul className="clx-contents__list">
        {contents.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
