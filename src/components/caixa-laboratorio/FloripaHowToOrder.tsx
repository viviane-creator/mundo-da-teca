import { floripaSoftLaunchCopy } from "../../config/floripaSoftLaunch"
import { BalancedLines } from "./BalancedLines"

export function FloripaHowToOrder() {
  const { howTo } = floripaSoftLaunchCopy

  return (
    <section className="clx-floripa-howto" aria-labelledby="clx-floripa-howto-title">
      <BalancedLines
        as="h2"
        id="clx-floripa-howto-title"
        className="clx-floripa-howto__title"
        lines={howTo.titleLines}
      />
      <ol className="clx-floripa-howto__list">
        {howTo.steps.map((step, index) => (
          <li key={step}>
            <span className="clx-floripa-howto__num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
