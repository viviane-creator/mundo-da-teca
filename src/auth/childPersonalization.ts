export function childFirstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? ""
}

export function mundoDeChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `O Mundo de ${name}` : "Meu Mundo"
}

export function diarioDeChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Diário de ${name}` : "Diário"
}

export function colecaoDeChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Coleção de ${name}` : "Minhas Descobertas"
}

export function bibliotecaDeChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Biblioteca de ${name}` : "Biblioteca"
}

export function olaChild(childName: string): string {
  const name = childFirstName(childName)
  return name ? `Olá, ${name}` : "Minha Conta"
}

export function espacoProntoText(childName: string): string {
  const name = childFirstName(childName)
  return name
    ? `O espaço de ${name} já está preparado.`
    : "Seu espaço já está preparado."
}

export function bemVindoDeVoltaText(childName: string): string {
  const name = childFirstName(childName)
  return name
    ? `Que bom te ver de novo, ${name}.`
    : "Que bom te ver de novo."
}

export function descobertasEsperandoText(childName: string): string {
  const name = childFirstName(childName)
  return name
    ? `As descobertas de ${name} estão esperando por você.`
    : "Suas descobertas estão esperando por você."
}
