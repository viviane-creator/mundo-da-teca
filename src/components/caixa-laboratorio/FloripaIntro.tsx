import { floripaSoftLaunchCopy } from "../../config/floripaSoftLaunch"

export function FloripaIntro() {
  const { intro } = floripaSoftLaunchCopy

  return (
    <section className="clx-floripa-intro" aria-labelledby="clx-floripa-intro-title">
      <h2 id="clx-floripa-intro-title" className="clx-floripa-intro__title">
        {intro.title}
      </h2>
      <div className="clx-floripa-intro__copy">
        {intro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="clx-floripa-intro__closing">{intro.closing}</p>
    </section>
  )
}
