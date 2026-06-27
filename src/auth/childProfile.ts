import type { TecaUser } from "./authContext"
import type { ChildProfile } from "../types/childProfile"

/** Converte a sessão local em perfil da criança para UI e recursos do Clube */
export function childProfileFromUser(user: TecaUser | null): ChildProfile | null {
  if (!user) return null

  return {
    name: user.childName,
    birthDate: user.childBirthDate || undefined,
    photoUrl: user.childPhoto,
    explorerNumber: user.explorerNumber || undefined,
    joinedAt: user.memberSince || undefined,
  }
}

/** Monta campos persistidos a partir do perfil — ponto único para evoluir o schema */
export function childProfileToUserFields(
  profile: Pick<ChildProfile, "name" | "birthDate">,
  account: { guardianName: string; email: string },
  metadata?: Pick<ChildProfile, "photoUrl" | "explorerNumber" | "joinedAt">,
): Pick<
  TecaUser,
  | "childName"
  | "childBirthDate"
  | "guardianName"
  | "email"
  | "childPhoto"
  | "explorerNumber"
  | "memberSince"
> {
  return {
    guardianName: account.guardianName,
    email: account.email,
    childName: profile.name,
    childBirthDate: profile.birthDate ?? "",
    childPhoto: metadata?.photoUrl,
    explorerNumber: metadata?.explorerNumber ?? "",
    memberSince: metadata?.joinedAt ?? "",
  }
}
