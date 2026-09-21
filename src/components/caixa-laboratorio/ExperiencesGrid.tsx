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
          <li
            key={item.name}
            className={[
              "clx-discovery-card",
              "variant" in item &&
              (item.variant === "tenth" || item.variant === "invent")
                ? "clx-discovery-card--tenth"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {"hideNum" in item && item.hideNum ? null : (
              <span className="clx-discovery-card__num">
                {String(item.num).padStart(2, "0")}
              </span>
            )}
            <figure className="clx-discovery-card__media">
              {"image" in item && item.image ? (
                <LandingImage
                  className="clx-discovery-card__image"
                  src={item.image}
                  alt={
                    "imageAlt" in item && item.imageAlt ? item.imageAlt : item.name
                  }
                  loading="lazy"
                />
              ) : (
                <div
                  className="clx-discovery-card__placeholder clx-placeholder"
                  aria-hidden="true"
                />
              )}
            </figure>
            <h3 className="clx-discovery-card__name">{item.name}</h3>
            <p className="clx-discovery-card__hint">{item.hint}</p>
            {"hintExtra" in item && item.hintExtra ? (
              <p className="clx-discovery-card__hint clx-discovery-card__hint--extra">
                {item.hintExtra}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
