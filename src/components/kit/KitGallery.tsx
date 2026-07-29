import { kitPageCopy } from "../../data/kitPageCopy"
import { KitIcon } from "./KitIcons"

export function KitGallery() {
  const { gallery } = kitPageCopy

  return (
    <section
      className="kit-page__section kit-gallery"
      aria-labelledby="kit-gallery-title"
    >
      <header className="kit-page__section-header">
        <h2 id="kit-gallery-title" className="kit-page__section-title">
          {gallery.title}
        </h2>
        <p className="kit-page__section-lead">{gallery.subtitle}</p>
      </header>
      <div className="kit-gallery__grid">
        {gallery.slots.map((slot) => (
          <figure
            key={slot.id}
            className={`kit-gallery__slot kit-gallery__slot--${slot.kind}${
              slot.src ? "" : " kit-gallery__slot--ready"
            }`}
          >
            {slot.src ? (
              <img
                src={slot.src}
                alt={slot.alt ?? slot.label}
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="kit-gallery__ready">
                <span className="kit-gallery__ready-icon" aria-hidden="true">
                  <KitIcon name={slot.kind === "video" ? "play" : "spark"} />
                </span>
                <figcaption className="kit-gallery__ready-label">
                  {slot.label}
                </figcaption>
              </div>
            )}
            {slot.src ? (
              <figcaption className="kit-gallery__caption">{slot.label}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  )
}
