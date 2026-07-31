import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingImage } from "./LandingImage"

export function ExperiencesGrid() {
  const { experiences } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-experiences"
      aria-labelledby="clx-experiences-title"
    >
      <h2 id="clx-experiences-title" className="clx-section__title">
        {experiences.title}
      </h2>
      <p className="clx-section__lead">{experiences.lead}</p>

      <ul className="clx-experiences__grid">
        {experiences.items.map((item) => (
          <li key={item.id} className="clx-experiences__item">
            <figure className="clx-frame clx-frame--square">
              <LandingImage
                src={item.image}
                alt={item.name}
                width={800}
                height={800}
              />
            </figure>
            <p className="clx-experiences__name">{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
