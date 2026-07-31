import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"

export function PricingSection() {
  const { buy } = caixaLaboratorioData

  return (
    <section
      id="clx-buy"
      className="clx-buy"
      aria-labelledby="clx-buy-title"
    >
      <h2 id="clx-buy-title" className="clx-buy__title">
        {buy.title}
      </h2>
      <p className="clx-buy__summary">{buy.summary}</p>
      <p className="clx-price">{buy.price}</p>
      <p className="clx-shipping">{buy.shipping}</p>
      <p className="clx-batch">{buy.batch}</p>
      <LandingCta label={buy.cta} origin="bloco_final" />
      <p className="clx-note">{buy.note}</p>
      <p className="clx-payment-note">
        <span className="clx-payment-note__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" focusable="false">
            <path
              d="M7 10V8a5 5 0 0110 0v2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <rect
              x="5"
              y="10"
              width="14"
              height="10"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        </span>
        {buy.paymentNote}
      </p>
    </section>
  )
}
