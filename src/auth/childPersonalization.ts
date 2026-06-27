export function childFirstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? ""
}

export function mundoDaChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `O Mundo da ${name}` : "Meu Mundo"
}

export function diarioDaChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Diário da ${name}` : "Diário"
}

export function colecaoDaChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Coleção da ${name}` : "Minhas Descobertas"
}

export function bibliotecaDaChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Biblioteca da ${name}` : "Biblioteca"
}

export function olaChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Olá, ${name}` : "Minha Conta"
}

export function prepararMundoTitle(childName: string): string {
  const trimmed = childName.trim()
  if (!trimmed) return "Vamos preparar um Mundo da Teca?"
  const name = childFirstName(trimmed) || trimmed
  return `Vamos preparar o Mundo da ${name}?`
}

export function mundoProntoText(childName: string): string {
  const name = childFirstName(childName)
  return name
    ? `O Mundo da ${name} já está preparado.`
    : "Seu Mundo da Teca já está preparado."
}
