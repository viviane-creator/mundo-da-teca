import { useCallback, useState } from "react"
import { launchPageCopy } from "../data/launchPageCopy"
import { launchPageStyles as s } from "../styles/launchPageStyles"
import { appRoutes } from "../navigation/appRoutes"
import "../styles/launchPage.css"

const EXIT_MS = 850

export function LaunchPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const copy = launchPageCopy
  const [exiting, setExiting] = useState(false)

  const openBook = useCallback(() => {
    if (exiting) return

    setExiting(true)
    window.setTimeout(() => {
      setScreen(appRoutes.home)
    }, EXIT_MS)
  }, [exiting, setScreen])

  return (
    <article
      style={s.page}
      aria-label="Capa da daTeca"
      className={`launch-cover${exiting ? " launch-cover--exit" : ""}`}
    >
      <img
        src={copy.logo}
        alt={copy.logoAlt}
        width={248}
        height={100}
        decoding="async"
        style={s.logo}
      />

      <h1 style={s.title}>{copy.title}</h1>

      <div style={s.textBlock}>
        {copy.text.map((line) => (
          <p key={line} style={s.textLine}>
            {line}
          </p>
        ))}
      </div>

      <div style={s.illustrationWrap}>
        <img
          src={copy.illustration}
          alt={copy.illustrationAlt}
          width={680}
          height={920}
          decoding="async"
          style={s.illustration}
        />
      </div>

      <div style={s.ctaWrap}>
        <button
          type="button"
          className="launch-cover__cta"
          style={s.cta}
          onClick={openBook}
          disabled={exiting}
        >
          {copy.cta}
        </button>
      </div>
    </article>
  )
}
