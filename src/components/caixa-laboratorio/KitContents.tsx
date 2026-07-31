import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

function ContentsDecor() {
  return (
    <svg
      className="clx-contents__doodles"
      viewBox="0 0 320 200"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M36 48v58c0 8 6 14 14 14h8c8 0 14-6 14-14V48" />
        <path d="M44 48h20" />
        <path d="M54 62v36" opacity="0.55" />
        <path d="M118 40c8 12 10 24 0 38-10-14-8-26 0-38z" />
        <path d="M168 52h28v10c0 10-6 18-14 18s-14-8-14-18V52z" />
        <path d="M182 80v28" />
        <circle cx="182" cy="118" r="5" />
        <path d="M236 44h36" />
        <path d="M244 44c0 10 4 16 14 22" />
        <path d="M268 44c0 10-4 16-14 22" />
        <path d="M40 150c14-2 22 8 20 22" opacity="0.5" />
        <circle cx="280" cy="150" r="6" opacity="0.45" />
        <circle cx="298" cy="138" r="3.5" opacity="0.35" />
      </g>
    </svg>
  )
}

export function KitContents() {
  const { contents } = caixaLaboratorioData

  return (
    <section
      className="clx-section clx-contents"
      aria-labelledby="clx-contents-title"
    >
      <ContentsDecor />
      <h2 id="clx-contents-title" className="clx-section__title">
        {contents.title}
      </h2>
      <p className="clx-section__text">{contents.text}</p>

      <ul className="clx-contents__list">
        {contents.items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
