import type { KitExperience } from "../../data/kitPageCopy"

export function KitExperienceCard({
  experience,
  index,
}: {
  experience: KitExperience
  index: number
}) {
  return (
    <article
      className="kit-experience-card"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="kit-experience-card__media">
        <img
          className="kit-experience-card__image"
          src={experience.image}
          alt=""
          width={480}
          height={480}
          loading="lazy"
          decoding="async"
          draggable={false}
          aria-hidden="true"
        />
      </div>
      <h3 className="kit-experience-card__name">{experience.name}</h3>
    </article>
  )
}
