import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

export function LandingFooter() {
  const { footer } = caixaLaboratorioData

  return (
    <footer className="clx-footer">
      <img
        className="clx-footer__logo"
        src={footer.logoSrc}
        alt={footer.logoAlt}
        width={96}
        height={96}
        decoding="async"
      />
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
