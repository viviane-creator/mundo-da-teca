import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

export function LandingFooter() {
  const { footer } = caixaLaboratorioData

  return (
    <footer className="clx-footer">
      <p className="clx-footer__brand">{footer.brand}</p>
      <p className="clx-footer__text">{footer.text}</p>
      <a
        className="clx-footer__link"
        href={footer.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {footer.instagramLabel}
      </a>
    </footer>
  )
}
