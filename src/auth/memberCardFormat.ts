const MONTHS_LONG = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
] as const

export function formatBirthDateLong(ddmmyyyy: string): string {
  const match = ddmmyyyy.trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!match) return ddmmyyyy || "—"

  const day = match[1]
  const monthIndex = Number.parseInt(match[2], 10) - 1
  const year = match[3]

  if (monthIndex < 0 || monthIndex > 11) return ddmmyyyy

  return `${day} de ${MONTHS_LONG[monthIndex]} de ${year}`
}

export function formatExplorerSinceMonthYear(isoDate: string): string {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return "—"

  const month = MONTHS_LONG[date.getMonth()]
  const capitalized = month.charAt(0).toUpperCase() + month.slice(1)
  return `${capitalized} de ${date.getFullYear()}`
}
