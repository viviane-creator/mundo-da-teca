import { kitPageCopy } from "../../data/kitPageCopy"

export function KitFaq() {
  const { faq } = kitPageCopy

  return (
    <section className="kit-page__section" aria-labelledby="kit-faq-title">
      <header className="kit-page__section-header">
        <h2 id="kit-faq-title" className="kit-page__section-title">
          {faq.title}
        </h2>
      </header>
      <div className="kit-faq">
        {faq.items.map((item) => (
          <details key={item.question} className="kit-faq__item">
            <summary className="kit-faq__question">{item.question}</summary>
            <p className="kit-faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
