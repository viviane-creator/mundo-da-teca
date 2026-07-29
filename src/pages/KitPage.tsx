import { useEffect } from "react"
import { KitExperienceCard } from "../components/kit/KitExperienceCard"
import { KitFaq } from "../components/kit/KitFaq"
import { applyKitPageMeta, clearKitPageMeta, kitPageCopy } from "../data/kitPageCopy"
import "../styles/kitPage.css"

function scrollToPricing() {
  document.getElementById("kit-pricing")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export function KitPage() {
  const copy = kitPageCopy

  useEffect(() => {
    applyKitPageMeta()
    return () => {
      clearKitPageMeta()
    }
  }, [])

  return (
    <article className="kit-page">
      <header className="kit-page__hero">
        <div className="kit-page__hero-media">
          <img
            className="kit-page__hero-cover"
            src={copy.hero.image}
            alt=""
            width={1200}
            height={900}
            loading="eager"
            decoding="async"
            aria-hidden="true"
          />
          <div className="kit-page__hero-wash" aria-hidden="true" />
          <div className="kit-page__hero-body">
            <img
              className="kit-page__hero-logo"
              src={copy.hero.logo}
              alt={copy.hero.logoAlt}
              width={160}
              height={68}
              loading="eager"
              decoding="async"
            />
            <h1 className="kit-page__hero-title">{copy.hero.title}</h1>
            <p className="kit-page__hero-subtitle">{copy.hero.subtitle}</p>
            <p className="kit-page__hero-highlight">{copy.hero.highlight}</p>
            <button
              type="button"
              className="home-organic-cta home-organic-cta--club kit-page__cta"
              onClick={scrollToPricing}
            >
              {copy.hero.cta}
            </button>
          </div>
        </div>
      </header>

      <section
        className="kit-page__section kit-page__section--lead"
        aria-labelledby="kit-discovery-title"
      >
        <h2 id="kit-discovery-title" className="kit-page__section-title">
          {copy.discovery.title}
        </h2>
        <p className="kit-page__section-text">{copy.discovery.text}</p>
      </section>

      <section className="kit-page__pair" aria-label="Problema e solução">
        <div className="kit-page__pair-block">
          <h2 className="kit-page__section-title kit-page__section-title--small">
            {copy.problem.title}
          </h2>
          <p className="kit-page__section-text">{copy.problem.text}</p>
        </div>
        <div className="kit-page__pair-block kit-page__pair-block--accent">
          <h2 className="kit-page__section-title kit-page__section-title--small">
            {copy.solution.title}
          </h2>
          <p className="kit-page__section-text">{copy.solution.text}</p>
          <p className="kit-page__water-note">{copy.waterNote}</p>
        </div>
      </section>

      <section
        className="kit-page__section"
        aria-labelledby="kit-contents-title"
      >
        <header className="kit-page__section-header">
          <h2 id="kit-contents-title" className="kit-page__section-title">
            {copy.contents.title}
          </h2>
          <p className="kit-page__section-lead">{copy.contents.subtitle}</p>
        </header>
        <ul className="kit-page__contents">
          {copy.contents.items.map((item) => (
            <li key={item} className="kit-page__contents-item">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        className="kit-page__section"
        aria-labelledby="kit-experiences-title"
      >
        <header className="kit-page__section-header">
          <h2 id="kit-experiences-title" className="kit-page__section-title">
            {copy.experiences.title}
          </h2>
          <p className="kit-page__section-lead">{copy.experiences.subtitle}</p>
        </header>
        <div className="kit-page__experience-grid">
          {copy.experiences.items.map((experience, index) => (
            <KitExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </section>

      <section
        className="kit-page__section"
        aria-labelledby="kit-gallery-title"
      >
        <header className="kit-page__section-header">
          <h2 id="kit-gallery-title" className="kit-page__section-title">
            {copy.gallery.title}
          </h2>
          <p className="kit-page__section-lead">{copy.gallery.subtitle}</p>
        </header>
        <div className="kit-page__gallery">
          {copy.gallery.images.map((image) => (
            <figure key={image.src} className="kit-page__gallery-item">
              <img
                src={image.src}
                alt={image.alt}
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>

      <section
        className="kit-page__section kit-page__section--center"
        aria-labelledby="kit-videos-title"
      >
        <h2 id="kit-videos-title" className="kit-page__section-title">
          {copy.videos.title}
        </h2>
        <p className="kit-page__section-lead">{copy.videos.subtitle}</p>
        <div className="kit-page__video-slot" aria-hidden="true">
          <p className="kit-page__video-placeholder">{copy.videos.placeholder}</p>
        </div>
      </section>

      <section
        className="kit-page__section"
        aria-labelledby="kit-benefits-title"
      >
        <h2 id="kit-benefits-title" className="kit-page__section-title">
          {copy.benefits.title}
        </h2>
        <ul className="kit-page__benefits">
          {copy.benefits.items.map((item) => (
            <li key={item} className="kit-page__benefit">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="kit-pricing"
        className="kit-page__pricing"
        aria-labelledby="kit-pricing-title"
      >
        <h2 id="kit-pricing-title" className="kit-page__section-title">
          {copy.pricing.title}
        </h2>
        <p className="kit-page__price">{copy.pricing.price}</p>
        <p className="kit-page__shipping">{copy.pricing.shipping}</p>
        <p className="kit-page__batch">{copy.pricing.batch}</p>
        <p className="kit-page__water-note">{copy.pricing.waterReminder}</p>
        <button
          type="button"
          className="home-organic-cta home-organic-cta--club kit-page__cta"
        >
          {copy.pricing.cta}
        </button>
      </section>

      <KitFaq />

      <section
        className="kit-page__final"
        aria-labelledby="kit-final-title"
      >
        <h2 id="kit-final-title" className="kit-page__section-title">
          {copy.finalCta.title}
        </h2>
        <p className="kit-page__section-text">{copy.finalCta.text}</p>
        <button
          type="button"
          className="home-organic-cta home-organic-cta--club kit-page__cta"
          onClick={scrollToPricing}
        >
          {copy.finalCta.cta}
        </button>
      </section>
    </article>
  )
}
