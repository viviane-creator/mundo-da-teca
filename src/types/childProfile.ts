/**
 * Perfil da criança no Clube da Teca.
 * Camada de domínio consumida pela carteirinha e futuros recursos (selos, níveis, etc.).
 */
export type ChildProfile = {
  /** Nome completo da criança */
  name: string
  /** Data de nascimento no formato DD/MM/AAAA */
  birthDate?: string
  /** URL ou data URL da foto — opcional */
  photoUrl?: string
  /** Número de explorador — ex.: EXP-00024 */
  explorerNumber?: string
  /** Data de entrada no clube (ISO 8601) */
  joinedAt?: string
}

export const EMPTY_CHILD_PROFILE: ChildProfile = {
  name: "",
}

export function hasChildProfile(profile: ChildProfile | null): profile is ChildProfile {
  return profile !== null && profile.name.trim().length > 0
}
