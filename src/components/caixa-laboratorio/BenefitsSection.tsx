import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

export function BenefitsSection() {
  const { benefits } = caixaLaboratorioData

  return (
    <section className="clx-section clx-benefits" aria-labelledby="clx-benefits-title">
      <h2 id="clx-benefits-title" className="clx-section__title">
        {benefits.title}
      </h2>
      <ul className="clx-benefits__list">
        {benefits.items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
