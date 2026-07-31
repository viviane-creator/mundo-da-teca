import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

export function WaterOnlySection() {
  const { water } = caixaLaboratorioData

  return (
    <section className="clx-water" aria-labelledby="clx-water-title">
      <div className="clx-water__drop" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="40" height="40">
          <path
            d="M32 8c8 12 16 22 16 32a16 16 0 11-32 0c0-10 8-20 16-32z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 id="clx-water-title" className="clx-water__title">
        {water.title}
      </h2>
      <p className="clx-water__text">{water.text}</p>
      <p className="clx-water__note">{water.note}</p>
    </section>
  )
}
