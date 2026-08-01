import { useEffect, useState } from "react"
import {
  PreLaunchCountdown,
  PreLaunchGiftIcon,
} from "../components/pre-launch"
import { getUrgencyLine } from "../config/salesLaunch"
import { preLaunchCopy } from "../data/preLaunchCopy"
import { appRoutes } from "../navigation/appRoutes"
import "./preLaunch.css"

type PreLaunchPageProps = {
  setScreen: (screen: string) => void
}

export function PreLaunchPage({ setScreen }: PreLaunchPageProps) {
  const [urgency, setUrgency] = useState(() => getUrgencyLine())

  useEffect(() => {
    document.title = preLaunchCopy.documentTitle
    const id = window.setInterval(() => setUrgency(getUrgencyLine()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <article className="prelaunch-page">
      <div className="prelaunch-page__card">
        <PreLaunchGiftIcon />

        <h1 className="prelaunch-page__title">{preLaunchCopy.title}</h1>

        <p className="prelaunch-page__urgency">{urgency}</p>

        <div className="prelaunch-page__copy">
          {preLaunchCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="prelaunch-page__closing">{preLaunchCopy.closing}</p>
        </div>

        <PreLaunchCountdown />

        <div className="prelaunch-page__actions">
          <button
            type="button"
            className="clx-cta clx-cta--primary prelaunch-page__primary"
            onClick={() => setScreen(appRoutes.home)}
          >
            {preLaunchCopy.primaryCta}
          </button>
          <button
            type="button"
            className="prelaunch-page__secondary"
            onClick={() => setScreen(appRoutes.home)}
          >
            {preLaunchCopy.secondaryCta}
          </button>
        </div>

        <p className="prelaunch-page__footer">{preLaunchCopy.footer}</p>
      </div>
    </article>
  )
}
