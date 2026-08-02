import {
  floripaSoftLaunchCopy,
  isFloripaSoftLaunchActive,
} from "../../config/floripaSoftLaunch"
import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"

const PRESALE_SHIPPING_ANSWER =
  "Na pré-venda, o frete é fixo de R$ 20 para todo o Brasil. Para endereços no município de Florianópolis, a entrega é gratuita. O pedido e o combinado da entrega são feitos pelo WhatsApp."

export function FaqSection() {
  const { faq } = caixaLaboratorioData
  const presaleActive = isFloripaSoftLaunchActive()

  return (
    <section className="clx-section clx-faq" aria-labelledby="clx-faq-title">
      <h2 id="clx-faq-title" className="clx-section__title">
        {faq.title}
      </h2>
      <div className="clx-faq__list">
        {faq.items.map((item) => {
          const answer =
            presaleActive && item.question === "Como é calculado o frete?"
              ? PRESALE_SHIPPING_ANSWER
              : item.answer

          return (
            <details key={item.question} className="clx-faq__item">
              <summary>{item.question}</summary>
              <p>{answer}</p>
            </details>
          )
        })}
      </div>
      {presaleActive ? (
        <BalancedLines
          as="p"
          className="clx-faq__floripa-note"
          lines={floripaSoftLaunchCopy.intro.closingLines}
        />
      ) : null}
    </section>
  )
}
