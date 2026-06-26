/**
 * Autenticação simbólica — fase de UX.
 * Persiste nome + e-mail no localStorage; sem backend nem provedor externo.
 * Substituir por auth real quando o Clube da Teca tiver integração.
 */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type TecaUser = {
  name: string
  email: string
}

type AuthContextValue = {
  user: TecaUser | null
  isAuthenticated: boolean
  login: (user: TecaUser) => void
  logout: () => void
  loginModalOpen: boolean
  accountModalOpen: boolean
  openLogin: () => void
  closeLogin: () => void
  openAccount: () => void
  closeAccount: () => void
}

const STORAGE_KEY = "teca-user"

function readStoredUser(): TecaUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as TecaUser
    if (parsed?.name && parsed?.email) return parsed
    return null
  } catch {
    return null
  }
}

function persistUser(user: TecaUser | null) {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(STORAGE_KEY)
  }
}

function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? ""
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<TecaUser | null>(() => readStoredUser())
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [accountModalOpen, setAccountModalOpen] = useState(false)

  const login = useCallback((nextUser: TecaUser) => {
    setUser(nextUser)
    persistUser(nextUser)
    setLoginModalOpen(false)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    persistUser(null)
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
      login,
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
      login,
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
  return firstName(user.name)
}

/** Rótulo do link no topo: "Entrar" ou "Olá, [nome]" / "Minha Conta" */
export function topAccessLabel(
  user: TecaUser | null,
  isAuthenticated: boolean,
): string {
  if (!isAuthenticated || !user) return "Entrar"
  const name = userDisplayName(user)
  return name ? `Olá, ${name}` : "Minha Conta"
}
