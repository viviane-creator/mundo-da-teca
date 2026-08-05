import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"
import { LandingImage } from "./LandingImage"

export function KitContents() {
  const { contents } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-contents"
      aria-labelledby="clx-contents-title"
    >
      <BalancedLines
        as="h2"
        id="clx-contents-title"
        className="clx-section__title"
        lines={contents.titleLines}
      />
      <p className="clx-contents__lead">{contents.lead}</p>

      <figure className="clx-contents__media">
        <LandingImage
          className="clx-contents__image"
          src={contents.image}
          alt={contents.imageAlt}
          loading="eager"
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

      <p className="clx-contents__closing">{contents.closing}</p>
    </section>
  )
}
