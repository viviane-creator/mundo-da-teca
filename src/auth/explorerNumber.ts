const EXPLORER_SEQ_KEY = "teca-explorer-seq"

export function generateExplorerNumber(): string {
  const current = Number.parseInt(localStorage.getItem(EXPLORER_SEQ_KEY) ?? "23", 10)
  const next = Number.isNaN(current) ? 24 : current + 1
  localStorage.setItem(EXPLORER_SEQ_KEY, String(next))
  return `EXP-${String(next).padStart(5, "0")}`
}

/** Número estável para contas legadas migradas sem serial */
export function explorerNumberFromEmail(email: string): string {
  let hash = 0
  for (const char of email) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  }
  const serial = (hash % 99999) + 1
  return `EXP-${String(serial).padStart(5, "0")}`
}
