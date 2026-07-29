import { kitPageCopy } from "../../data/kitPageCopy"
import { KitIcon } from "./KitIcons"

export function KitProblem() {
  const { problem } = kitPageCopy

  return (
    <section
      className="kit-page__section kit-problem"
      aria-labelledby="kit-problem-title"
    >
      <header className="kit-page__section-header">
        <h2 id="kit-problem-title" className="kit-page__section-title">
          {problem.title}
        </h2>
        <p className="kit-page__section-lead">{problem.lead}</p>
      </header>
      <ul className="kit-problem__grid">
        {problem.items.map((item) => (
          <li key={item.id} className="kit-problem__card">
            <span className="kit-problem__icon" aria-hidden="true">
              <KitIcon name={item.icon} />
            </span>
            <span className="kit-problem__label">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
