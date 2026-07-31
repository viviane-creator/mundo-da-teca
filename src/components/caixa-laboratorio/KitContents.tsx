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

      <div className="clx-contents__media">
        <figure className="clx-frame">
          <LandingImage
            src={contents.image}
            alt={contents.imageAlt}
            width={1200}
            height={900}
          />
        </figure>
        <figure className="clx-frame">
          <LandingImage
            src={contents.materialsImage}
            alt={contents.materialsAlt}
            width={1200}
            height={900}
          />
        </figure>
      </div>

      <ul className="clx-contents__list">
        {contents.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
