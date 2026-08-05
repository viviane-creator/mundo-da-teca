import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"

export function BrandMomentSection() {
  const { brandMoment } = caixaLaboratorioData

  return (
    <section className="clx-brand" aria-labelledby="clx-brand-title">
      <BalancedLines
        as="h2"
        id="clx-brand-title"
        className="clx-brand__title"
        lines={brandMoment.titleLines}
      />
      <p className="clx-brand__text">{brandMoment.text}</p>
      <p className="clx-brand__note">{brandMoment.note}</p>
    </section>
  )
}
