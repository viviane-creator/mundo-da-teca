import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"
import { LandingImage } from "./LandingImage"

export function ExperiencesGrid() {
  const { discoveries } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-discoveries"
      aria-labelledby="clx-discoveries-title"
    >
      <BalancedLines
        as="h2"
        id="clx-discoveries-title"
        className="clx-section__title"
        lines={discoveries.titleLines}
      />
      <p className="clx-section__text">{discoveries.text}</p>

      <ol className="clx-discoveries__grid">
        {discoveries.items.map((item) => {
          const cardNum = item.num

          return (
          <li
            key={`${item.num}-${item.name}`}
            className={[
              "clx-discovery-card",
              "variant" in item && item.variant === "freeLab"
                ? "clx-discovery-card--free-lab"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="clx-discovery-card__num">
              {String(cardNum).padStart(2, "0")}
            </span>
            <figure className="clx-discovery-card__media">
              <LandingImage
                className="clx-discovery-card__image"
                src={item.image}
                alt={"imageAlt" in item && item.imageAlt ? item.imageAlt : item.name}
                loading="lazy"
              />
            </figure>
            <h3 className="clx-discovery-card__name">{item.name}</h3>
            {"subtitle" in item && item.subtitle ? (
              <p className="clx-discovery-card__subtitle">{item.subtitle}</p>
            ) : null}
            <p className="clx-discovery-card__hint">{item.hint}</p>
            {"hintExtra" in item && item.hintExtra ? (
              <p className="clx-discovery-card__hint clx-discovery-card__hint--extra">
                {item.hintExtra}
              </p>
            ) : null}
          </li>
          )
        })}
      </ol>

      <aside
        className="clx-discoveries-continue"
        aria-labelledby="clx-discoveries-continue-title"
      >
        <BalancedLines
          as="h3"
          id="clx-discoveries-continue-title"
          className="clx-discoveries-continue__title"
          lines={discoveries.continuation.titleLines}
        />
        <div className="clx-discoveries-continue__body">
          {discoveries.continuation.paragraphs.map((paragraph) => (
            <p key={paragraph} className="clx-discoveries-continue__text">
              {paragraph}
            </p>
          ))}
        </div>
      </aside>
    </section>
  )
}
