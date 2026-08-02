import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingImage } from "./LandingImage"

export function KitContents() {
  const { contents } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-contents"
      aria-labelledby="clx-contents-title"
    >
      <h2 id="clx-contents-title" className="clx-section__title">
        {contents.title}
      </h2>
      <p className="clx-section__text">{contents.text}</p>

      <figure className="clx-contents__media">
        <LandingImage
          className="clx-contents__image"
          src={contents.image}
          alt={contents.imageAlt}
        />
      </figure>

      <ul className="clx-contents__list">
        {contents.items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
