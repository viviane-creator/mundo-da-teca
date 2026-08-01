import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

export function ManualGiftHero() {
  const { manualGift } = caixaLaboratorioData

  return (
    <section className="clx-manual" aria-labelledby="clx-manual-title">
      <div className="clx-manual__inner">
        <p className="clx-manual__kicker">{manualGift.kicker}</p>
        <h1 id="clx-manual-title" className="clx-manual__title">
          {manualGift.title}
        </h1>
        <div className="clx-manual__copy">
          {manualGift.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <a
          className="clx-cta clx-cta--primary clx-manual__download"
          href={manualGift.pdfHref}
          download={manualGift.pdfFileName}
        >
          {manualGift.cta}
        </a>

        <div className="clx-manual__welcome">
          {manualGift.welcomeLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
