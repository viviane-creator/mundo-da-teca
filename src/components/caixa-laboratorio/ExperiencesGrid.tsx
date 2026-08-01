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

      <aside className="clx-tenth" aria-labelledby="clx-tenth-title">
        <svg
          className="clx-tenth__doodle"
          viewBox="0 0 80 80"
          width="36"
          height="36"
          aria-hidden="true"
          focusable="false"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M34 18h12v8c0 8-3 14-6 14s-6-6-6-14v-8z" />
            <path d="M40 40v16" />
            <circle cx="40" cy="62" r="5" />
            <path d="M52 28c8 2 12 8 10 16" opacity="0.55" />
            <path d="M18 48c6-1 10 3 9 9" opacity="0.45" />
            <path d="M58 52l4 8 8 3-8 3-4 8-4-8-8-3 8-3z" opacity="0.45" />
          </g>
        </svg>
        <p className="clx-tenth__num" aria-hidden="true">
          10
        </p>
        <h3 id="clx-tenth-title" className="clx-tenth__title">
          {discoveries.tenthTitle}
        </h3>
        <p className="clx-tenth__lead">{discoveries.tenthLead}</p>
        <p className="clx-tenth__text">{discoveries.tenthText}</p>
        <div className="clx-tenth__open">
          <p className="clx-tenth__open-name">
            <span className="clx-tenth__open-num">10.</span> A descoberta que{" "}
            <span className="clx-tenth__emphasis">ainda</span> não existe.
          </p>
          <p className="clx-tenth__open-hint">
            {discoveries.tenthNameHintLead}
            <span className="clx-tenth__emphasis">
              {discoveries.tenthNameHintEmphasis}
            </span>
            {discoveries.tenthNameHintEnd}
          </p>
        </div>
      </aside>
    </section>
  )
}
