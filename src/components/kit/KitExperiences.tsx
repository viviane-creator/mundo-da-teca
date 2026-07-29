import { kitPageCopy } from "../../data/kitPageCopy"
import { KitExperienceCard } from "./KitExperienceCard"

export function KitExperiences() {
  const { experiences } = kitPageCopy

  return (
    <section
      className="kit-page__section kit-experiences"
      aria-labelledby="kit-experiences-title"
    >
      <header className="kit-page__section-header">
        <h2 id="kit-experiences-title" className="kit-page__section-title">
          {experiences.title}
        </h2>
        <p className="kit-page__section-lead">{experiences.subtitle}</p>
      </header>
      <div className="kit-page__experience-grid">
        {experiences.items.map((experience, index) => (
          <KitExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
