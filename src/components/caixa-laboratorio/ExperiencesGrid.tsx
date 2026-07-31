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

      <figure className="clx-frame clx-experiences__collage">
        <LandingImage
          src={experiences.image}
          alt={experiences.imageAlt}
          width={1200}
          height={1500}
        />
      </figure>
    </section>
  )
}
