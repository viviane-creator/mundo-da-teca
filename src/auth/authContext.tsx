/**
 * Autenticação simbólica — fase de UX.
 * Responsável + criança persistidos no localStorage; sem backend nem provedor externo.
 */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { childFirstName, olaChild } from "./childPersonalization"
import { generateExplorerNumber, explorerNumberFromEmail } from "./explorerNumber"

export type TecaUser = {
  guardianName: string
  email: string
  childName: string
  childBirthDate: string
  memberSince: string
  explorerNumber: string
  childPhoto?: string
}

type AuthContextValue = {
  user: TecaUser | null
  isAuthenticated: boolean
  register: (user: TecaUser, options?: { keepModalOpen?: boolean }) => void
  loginByEmail: (
    email: string,
    options?: { keepModalOpen?: boolean },
  ) => TecaUser | null
  logout: () => void
  loginModalOpen: boolean
  accountModalOpen: boolean
  openLogin: () => void
  closeLogin: () => void
  openAccount: () => void
  closeAccount: () => void
}

const SESSION_KEY = "teca-user"
const REGISTRY_KEY = "teca-registry"

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

function normalizeUser(raw: unknown): TecaUser | null {
  if (!raw || typeof raw !== "object") return null
  const record = raw as Record<string, unknown>

  if (typeof record.childName === "string" && typeof record.email === "string") {
    const childName = record.childName.trim()
    const email = normalizeEmail(record.email)
    if (!childName || !email) return null
    return {
      guardianName:
        typeof record.guardianName === "string" ? record.guardianName.trim() : "",
      email,
      childName,
      childBirthDate:
        typeof record.childBirthDate === "string" ? record.childBirthDate.trim() : "",
      memberSince:
        typeof record.memberSince === "string" ? record.memberSince.trim() : "",
      explorerNumber:
        typeof record.explorerNumber === "string"
          ? record.explorerNumber.trim()
          : "",
      childPhoto:
        typeof record.childPhoto === "string" ? record.childPhoto : undefined,
    }
  }

  if (typeof record.name === "string" && typeof record.email === "string") {
    const name = record.name.trim()
    const email = normalizeEmail(record.email)
    if (!name || !email) return null
    return {
      guardianName: name,
      email,
      childName: name,
      childBirthDate: "",
      memberSince: "",
      explorerNumber: "",
    }
  }

  return null
}

function readRegistry(): Record<string, TecaUser> {
  try {
    const raw = localStorage.getItem(REGISTRY_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, unknown>
      const registry: Record<string, TecaUser> = {}
      for (const [email, value] of Object.entries(parsed)) {
        const user = normalizeUser(value)
        if (user) registry[email] = user
      }
      return registry
    }
  } catch {
    /* ignore */
  }

  const session = readSessionUser()
  if (session) return { [session.email]: session }
  return {}
}

function persistRegistry(registry: Record<string, TecaUser>) {
  localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry))
}

function readSessionUser(): TecaUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const user = normalizeUser(JSON.parse(raw))
    return user ? ensureUserMetadata(user) : null
  } catch {
    return null
  }
}

function persistSession(user: TecaUser | null) {
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(SESSION_KEY)
  }
}

function ensureUserMetadata(user: TecaUser): TecaUser {
  const needsMemberSince = !user.memberSince
  const needsExplorer = !user.explorerNumber

  if (!needsMemberSince && !needsExplorer) return user

  const enriched: TecaUser = {
    ...user,
    memberSince: user.memberSince || new Date().toISOString(),
    explorerNumber:
      user.explorerNumber || explorerNumberFromEmail(user.email),
  }

  persistSession(enriched)
  const registry = readRegistry()
  registry[enriched.email] = enriched
  persistRegistry(registry)
  return enriched
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<TecaUser | null>(() => readSessionUser())
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [accountModalOpen, setAccountModalOpen] = useState(false)

  const register = useCallback(
    (nextUser: TecaUser, options?: { keepModalOpen?: boolean }) => {
      const registry = readRegistry()
      const email = normalizeEmail(nextUser.email)
      const existing = registry[email]

      const normalized: TecaUser = {
        guardianName: nextUser.guardianName.trim(),
        email,
        childName: nextUser.childName.trim(),
        childBirthDate: nextUser.childBirthDate.trim(),
        memberSince: existing?.memberSince ?? new Date().toISOString(),
        explorerNumber: existing?.explorerNumber ?? generateExplorerNumber(),
        childPhoto: existing?.childPhoto,
      }
      registry[normalized.email] = normalized
      persistRegistry(registry)
      setUser(normalized)
      persistSession(normalized)
      if (!options?.keepModalOpen) {
        setLoginModalOpen(false)
      }
    },
    [],
  )

  const loginByEmail = useCallback(
    (email: string, options?: { keepModalOpen?: boolean }) => {
      const registry = readRegistry()
      const found = registry[normalizeEmail(email)]
      if (!found) return null
      const user = ensureUserMetadata(found)
      setUser(user)
      persistSession(user)
      if (!options?.keepModalOpen) {
        setLoginModalOpen(false)
      }
      return user
    },
    [],
  )

  const logout = useCallback(() => {
    setUser(null)
    persistSession(null)
    setAccountModalOpen(false)
  }, [])

  const openLogin = useCallback(() => {
    setAccountModalOpen(false)
    setLoginModalOpen(true)
  }, [])

  const closeLogin = useCallback(() => {
    setLoginModalOpen(false)
  }, [])

  const openAccount = useCallback(() => setAccountModalOpen(true), [])
  const closeAccount = useCallback(() => setAccountModalOpen(false), [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      register,
      loginByEmail,
      logout,
      loginModalOpen,
      accountModalOpen,
      openLogin,
      closeLogin,
      openAccount,
      closeAccount,
    }),
    [
      user,
      register,
      loginByEmail,
      logout,
      loginModalOpen,
      accountModalOpen,
      openLogin,
      closeLogin,
      openAccount,
      closeAccount,
    ],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}

export function userDisplayName(user: TecaUser): string {
  return childFirstName(user.childName)
}

export function topAccessLabel(
  user: TecaUser | null,
  isAuthenticated: boolean,
): string {
  if (!isAuthenticated || !user) return "Entrar"
  return olaChild(user.childName)
}
