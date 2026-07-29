import { kitPageCopy } from "../../data/kitPageCopy"
import { KitIcon } from "./KitIcons"

export function KitContents() {
  const { contents } = kitPageCopy

  return (
    <section
      className="kit-page__section kit-contents"
      aria-labelledby="kit-contents-title"
    >
      <header className="kit-page__section-header">
        <h2 id="kit-contents-title" className="kit-page__section-title">
          {contents.title}
        </h2>
        <p className="kit-page__section-lead">{contents.subtitle}</p>
      </header>
      <div className="kit-contents__layout">
        <figure className="kit-contents__figure">
          <img
            src={contents.image}
            alt={contents.imageAlt}
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <ul className="kit-contents__grid">
          {contents.items.map((item) => (
            <li key={item.id} className="kit-contents__card">
              <span className="kit-contents__icon" aria-hidden="true">
                <KitIcon name={item.icon} />
              </span>
              <span className="kit-contents__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
