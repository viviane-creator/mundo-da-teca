import { homeCopy } from "../../data/homeCopy"
import { appRoutes } from "../../navigation/appRoutes"

type HomeFirstProductCardProps = {
  setScreen: (screen: string) => void
}

export function HomeFirstProductCard({ setScreen }: HomeFirstProductCardProps) {
  const copy = homeCopy.firstProduct

  return (
    <section
      className="home-first-product"
      aria-labelledby="home-first-product-title"
    >
      <div className="home-first-product__card">
        <p className="home-first-product__eyebrow">{copy.eyebrow}</p>
        <h2 id="home-first-product-title" className="home-first-product__title">
          {copy.title}
        </h2>
        <p className="home-first-product__text">{copy.text}</p>
        <button
          type="button"
          className="home-first-product__cta"
          onClick={() => setScreen(appRoutes.caixaLaboratorio)}
        >
          {copy.cta}
        </button>
      </div>
    </section>
  )
}
