import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

/**
 * Depoimentos reais: prints do WhatsApp recortados só no balão da mensagem
 * (sem nome, número, foto de perfil ou imagem de criança).
 * Os cartões passam devagar; pausam ao tocar/passar o mouse.
 */
export function TestimonialsSection() {
  const { testimonials } = caixaLaboratorioData
  const items = testimonials.items

  const renderItems = (copy: "a" | "b") =>
    items.map((item) => (
      <li
        key={`${copy}-${item.image}`}
        className="clx-proof__item"
        aria-hidden={copy === "b" ? true : undefined}
      >
        <img
          className="clx-proof__img"
          src={item.image}
          alt={copy === "a" ? item.alt : ""}
          loading="lazy"
          decoding="async"
        />
      </li>
    ))

  return (
    <section className="clx-proof" aria-labelledby="clx-proof-title">
      <h2 id="clx-proof-title" className="clx-proof__title">
        {testimonials.title}
      </h2>
      <p className="clx-proof__lead">{testimonials.lead}</p>
      <div className="clx-proof__viewport" tabIndex={0}>
        <ul className="clx-proof__track">
          {renderItems("a")}
          {renderItems("b")}
        </ul>
      </div>
      <p className="clx-proof__note">{testimonials.note}</p>
    </section>
  )
}
