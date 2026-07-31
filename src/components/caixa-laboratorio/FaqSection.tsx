import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

export function FaqSection() {
  const { faq } = caixaLaboratorioData

  return (
    <section className="clx-section clx-faq" aria-labelledby="clx-faq-title">
      <h2 id="clx-faq-title" className="clx-section__title">
        {faq.title}
      </h2>
      <div className="clx-faq__list">
        {faq.items.map((item) => (
          <details key={item.question} className="clx-faq__item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
