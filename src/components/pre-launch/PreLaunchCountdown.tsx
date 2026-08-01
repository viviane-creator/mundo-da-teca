import { useEffect, useState } from "react"
import {
  getCountdownParts,
  type CountdownParts,
} from "../../config/salesLaunch"
import { preLaunchCopy } from "../../data/preLaunchCopy"

function pad(value: number) {
  return String(value).padStart(2, "0")
}

const empty: CountdownParts = {
  totalMs: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isComplete: true,
}

export function PreLaunchCountdown() {
  const [parts, setParts] = useState<CountdownParts>(() => getCountdownParts())

  useEffect(() => {
    const tick = () => setParts(getCountdownParts())
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  const display = parts.isComplete ? empty : parts

  return (
    <div className="prelaunch-countdown" aria-live="polite">
      <p className="prelaunch-countdown__label">{preLaunchCopy.countdownLabel}</p>
      {parts.isComplete ? (
        <p className="prelaunch-countdown__done">O lançamento começou.</p>
      ) : (
        <div className="prelaunch-countdown__grid">
          <CountdownUnit value={display.days} label="dias" />
          <CountdownUnit value={display.hours} label="horas" />
          <CountdownUnit value={display.minutes} label="min" />
          <CountdownUnit value={display.seconds} label="seg" />
        </div>
      )}
    </div>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="prelaunch-countdown__unit">
      <span className="prelaunch-countdown__value">{pad(value)}</span>
      <span className="prelaunch-countdown__unit-label">{label}</span>
    </div>
  )
}
