import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingImage } from "./LandingImage"

export function ExperiencesGrid() {
  const { discoveries } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-discoveries"
      aria-labelledby="clx-discoveries-title"
    >
      <h2 id="clx-discoveries-title" className="clx-section__title">
        {discoveries.title}
      </h2>
      <p className="clx-section__text">{discoveries.text}</p>

      <div className="clx-discoveries__body">
        <ol className="clx-discoveries__list">
          {discoveries.items.map((name, index) => (
            <li key={name}>
              <span className="clx-discoveries__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{name}</span>
            </li>
          ))}
        </ol>

        <figure className="clx-media">
          <LandingImage
            className="clx-media__image"
            src={discoveries.image}
            alt={discoveries.imageAlt}
            loading="eager"
          />
        </figure>
      </div>

      <div className="clx-tenth">
        <h3 className="clx-tenth__title">{discoveries.tenthTitle}</h3>
        <p className="clx-tenth__text">{discoveries.tenthLead}</p>
        <p className="clx-tenth__text">{discoveries.tenthText}</p>
      </div>
    </section>
  )
}
