/**
 * Abertura oficial das vendas da Caixa Laboratório.
 * Até esta data, os botões de compra levam à página de pré-lançamento.
 */
export const SALES_LAUNCH_AT = new Date("2026-08-02T12:00:00-03:00")

const forcePreLaunch =
  String(import.meta.env.VITE_FORCE_PRE_LAUNCH ?? "").trim() === "true"

/** Vendas abertas (após 02/08) — a menos que o pré-lançamento esteja forçado. */
export function isSalesOpen(now: Date = new Date()): boolean {
  if (forcePreLaunch) return false
  return now.getTime() >= SALES_LAUNCH_AT.getTime()
}

export type CountdownParts = {
  totalMs: number
  days: number
  hours: number
  minutes: number
  seconds: number
  isComplete: boolean
}

export function getCountdownParts(
  now: Date = new Date(),
  target: Date = SALES_LAUNCH_AT,
): CountdownParts {
  const totalMs = Math.max(0, target.getTime() - now.getTime())
  const totalSeconds = Math.floor(totalMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
    isComplete: totalMs <= 0,
  }
}

function brazilCalendarDay(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}

export function getUrgencyLine(now: Date = new Date()): string {
  if (isSalesOpen(now)) {
    return "As vendas estão abertas. Bem-vindo ao lançamento."
  }
  const today = brazilCalendarDay(now)
  const launchDay = brazilCalendarDay(SALES_LAUNCH_AT)
  if (today === launchDay) {
    return "Falta pouco. Hoje, ao meio-dia, abrimos oficialmente o primeiro lote."
  }
  return "Falta muito pouco. Amanhã, ao meio-dia, abrimos oficialmente o primeiro lote."
}
