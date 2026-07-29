import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitGallery() {
  const { gallery } = kitPageCopy

  return (
    <section className="kit-chapter kit-gallery" aria-labelledby="kit-gallery-title">
      <KitReveal>
        <p className="kit-chapter__kicker">{gallery.kicker}</p>
        <h2 id="kit-gallery-title" className="kit-chapter__title">
          {gallery.title}
        </h2>
      </KitReveal>

      <div className="kit-gallery__grid">
        {gallery.slots.map((slot, index) => (
          <KitReveal key={slot.id} delay={(index % 3) * 50}>
            <figure
              className={`kit-gallery__slot kit-gallery__slot--${slot.kind}${
                slot.src ? "" : " kit-gallery__slot--ready"
              }`}
            >
              {slot.src ? (
                <img
                  src={slot.src}
                  alt={slot.alt ?? slot.label}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="kit-gallery__ready">
                  <span className="kit-gallery__play" aria-hidden="true">
                    ▶
                  </span>
                  <figcaption>{slot.label}</figcaption>
                </div>
              )}
            </figure>
          </KitReveal>
        ))}
      </div>
    </section>
  )
}
