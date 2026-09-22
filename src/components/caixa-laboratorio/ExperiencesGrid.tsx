import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"
import { LandingImage } from "./LandingImage"

function DiscoveryCard({
  name,
  hint,
  image,
  imageAlt,
  num,
}: {
  name: string
  hint: string
  image: string
  imageAlt: string
  num?: number
}) {
  return (
    <>
      {num != null ? (
        <span className="clx-discovery-card__num">
          {String(num).padStart(2, "0")}
        </span>
      ) : null}
      <figure className="clx-discovery-card__media">
        <LandingImage
          className="clx-discovery-card__image"
          src={image}
          alt={imageAlt}
          loading="lazy"
        />
      </figure>
      <h3 className="clx-discovery-card__name">{name}</h3>
      <p className="clx-discovery-card__hint">{hint}</p>
    </>
  )
}

export function ExperiencesGrid() {
  const { discoveries, freeExploration } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-discoveries"
      aria-labelledby="clx-discoveries-title"
    >
      {"introImage" in discoveries && discoveries.introImage ? (
        <figure className="clx-discoveries__intro">
          <LandingImage
            className="clx-discoveries__intro-image"
            src={discoveries.introImage}
            alt={
              "introImageAlt" in discoveries && discoveries.introImageAlt
                ? discoveries.introImageAlt
                : ""
            }
            loading="lazy"
          />
        </figure>
      ) : null}
      <BalancedLines
        as="h2"
        id="clx-discoveries-title"
        className="clx-section__title"
        lines={discoveries.titleLines}
      />
      <p className="clx-section__text">{discoveries.text}</p>

      <ol className="clx-discoveries__grid">
        {discoveries.items.map((item) => (
          <li key={item.name} className="clx-discovery-card">
            <DiscoveryCard
              num={item.num}
              name={item.name}
              hint={item.hint}
              image={item.image}
              imageAlt={item.name}
            />
          </li>
        ))}
        <li className="clx-discovery-card clx-discovery-card--continue">
          <DiscoveryCard
            name={freeExploration.titleLines.join(" ")}
            hint={freeExploration.text}
            image={freeExploration.image}
            imageAlt={freeExploration.imageAlt}
          />
        </li>
      </ol>
    </section>
  )
}
