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

      {"closedImage" in contents && contents.closedImage ? (
        <figure className="clx-contents__media">
          <LandingImage
            className="clx-contents__image clx-contents__image--closed"
            src={contents.closedImage}
            alt={
              "closedImageAlt" in contents && contents.closedImageAlt
                ? contents.closedImageAlt
                : ""
            }
            loading="lazy"
          />
        </figure>
      ) : null}

      <figure className="clx-contents__media">
        <LandingImage
          className="clx-contents__image clx-contents__image--poster"
          src={contents.image}
          alt={contents.imageAlt}
          loading="lazy"
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

      {"closing" in contents && contents.closing ? (
        <p className="clx-contents__closing">{contents.closing}</p>
      ) : null}
    </section>
  )
}
