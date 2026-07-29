import { useId, useState } from "react"
import { kitPageCopy } from "../../data/kitPageCopy"

export function KitFaq() {
  const { faq } = kitPageCopy
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="kit-page__section" aria-labelledby="kit-faq-title">
      <header className="kit-page__section-header">
        <h2 id="kit-faq-title" className="kit-page__section-title">
          {faq.title}
        </h2>
      </header>
      <div className="kit-faq" role="list">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `${baseId}-panel-${index}`
          const buttonId = `${baseId}-button-${index}`

          return (
            <div key={item.question} className="kit-faq__item" role="listitem">
              <h3 className="kit-faq__heading">
                <button
                  id={buttonId}
                  type="button"
                  className="kit-faq__question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="kit-faq__chevron" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="kit-faq__panel"
              >
                <p className="kit-faq__answer">{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
