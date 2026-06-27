import { childFirstName } from "./childPersonalization"
import {
  formatBirthDateLong,
  formatExplorerSinceMonthYear,
} from "./memberCardFormat"
import type { ChildProfile } from "../types/childProfile"
import { hasChildProfile } from "../types/childProfile"

const EMPTY_LABEL = "—"

export type ChildProfileCardLabels = {
  displayName: string
  birthDate: string
  joinedAt: string
  explorerNumber: string
}

/** Rótulos formatados para a carteirinha e futuras superfícies do Clube */
export function childProfileCardLabels(
  profile: ChildProfile | null,
): ChildProfileCardLabels {
  if (!hasChildProfile(profile)) {
    return {
      displayName: EMPTY_LABEL,
      birthDate: EMPTY_LABEL,
      joinedAt: EMPTY_LABEL,
      explorerNumber: "EXP-00000",
    }
  }

  return {
    displayName: childFirstName(profile.name) || profile.name,
    birthDate: profile.birthDate
      ? formatBirthDateLong(profile.birthDate)
      : EMPTY_LABEL,
    joinedAt: profile.joinedAt
      ? formatExplorerSinceMonthYear(profile.joinedAt)
      : EMPTY_LABEL,
    explorerNumber: profile.explorerNumber ?? "EXP-00000",
  }
}
