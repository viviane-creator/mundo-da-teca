import { useId, useState } from "react"
import { kitPageCopy } from "../../data/kitPageCopy"
import { KitReveal } from "./KitReveal"

export function KitFaq() {
  const { faq } = kitPageCopy
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="kit-faq" aria-labelledby="kit-faq-title">
      <KitReveal>
        <h2 id="kit-faq-title" className="kit-faq__title">
          {faq.title}
        </h2>
      </KitReveal>

      <div className="kit-faq__list">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `${baseId}-panel-${index}`
          const buttonId = `${baseId}-button-${index}`

          return (
            <KitReveal key={item.question} delay={index * 30}>
              <div className="kit-faq__item">
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
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="kit-faq__panel"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            </KitReveal>
          )
        })}
      </div>
    </section>
  )
}
