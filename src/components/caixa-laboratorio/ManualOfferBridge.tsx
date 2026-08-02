import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"

export function ManualOfferBridge() {
  const { offerBridge } = caixaLaboratorioData

  return (
    <section className="clx-bridge" aria-labelledby="clx-bridge-title">
      <div className="clx-bridge__rule" aria-hidden="true" />
      <BalancedLines
        as="h2"
        id="clx-bridge-title"
        className="clx-bridge__title"
        lines={offerBridge.titleLines}
      />
      <p className="clx-bridge__text">{offerBridge.text}</p>
      <div className="clx-bridge__rule" aria-hidden="true" />
    </section>
  )
}
