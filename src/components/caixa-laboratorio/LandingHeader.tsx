import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"

export function LandingHeader() {
  const { header } = caixaLaboratorioData

  return (
    <header className="clx-header">
      <img
        className="clx-header__logo"
        src={header.logoSrc}
        alt={header.logoAlt}
        width={120}
        height={48}
        decoding="async"
      />
      <LandingCta label={header.cta} variant="order" className="clx-header__cta" />
    </header>
  )
}
