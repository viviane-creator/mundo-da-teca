import { floripaSoftLaunchCopy } from "../../config/floripaSoftLaunch"
import { BalancedLines } from "./BalancedLines"

export function FloripaIntro() {
  const { intro } = floripaSoftLaunchCopy

  return (
    <section className="clx-floripa-intro" aria-labelledby="clx-floripa-intro-title">
      <BalancedLines
        as="h2"
        id="clx-floripa-intro-title"
        className="clx-floripa-intro__title"
        lines={intro.titleLines}
      />
      <div className="clx-floripa-intro__copy">
        {intro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <BalancedLines
        as="p"
        className="clx-floripa-intro__closing"
        lines={intro.closingLines}
      />
    </section>
  )
}
