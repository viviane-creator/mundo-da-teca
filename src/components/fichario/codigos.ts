export function formatMemoriaCodigo(index: number): string {
  return `MEM-${String(index + 1).padStart(3, "0")}`
}

export function formatComplementoCodigo(goodId: string): string {
  const slug = goodId.replace(/[^a-z0-9]/gi, "").slice(0, 6).toUpperCase()
  return `ATL-${slug || "ITEM"}`
}
