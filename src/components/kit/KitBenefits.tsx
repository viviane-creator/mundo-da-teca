import { kitPageCopy } from "../../data/kitPageCopy"

export function KitBenefits() {
  const { benefits } = kitPageCopy

  return (
    <section
      className="kit-page__section kit-benefits"
      aria-labelledby="kit-benefits-title"
    >
      <header className="kit-page__section-header">
        <h2 id="kit-benefits-title" className="kit-page__section-title">
          {benefits.title}
        </h2>
      </header>
      <ul className="kit-benefits__grid">
        {benefits.items.map((item, index) => (
          <li
            key={item.id}
            className="kit-benefits__card"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <h3 className="kit-benefits__title">{item.title}</h3>
            <p className="kit-benefits__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
