import { useEffect, useState, type FormEvent } from "react"
import {
  formatBirthDateInput,
  isCompleteBirthDate,
} from "../auth/birthDateInput"
import { childProfileToUserFields } from "../auth/childProfile"
import { useAuth } from "../auth/authContext"
import {
  bemVindoDeVoltaText,
  descobertasEsperandoText,
  espacoProntoText,
} from "../auth/childPersonalization"
import { appRoutes } from "../navigation/appRoutes"
import { styles } from "../styles/appStyles"

type AccessStep = "welcome" | "signup" | "login" | "success" | "welcomeBack"

const RETURN_TITLE = "Bem-vindo ao Mundo da Teca."

function SignupTitle({ id }: { id?: string }) {
  return (
    <h2 id={id} style={styles.authModalTitleStack}>
      <span style={styles.authModalTitleLead}>Vamos preparar o seu</span>
      <span style={styles.authModalTitleBrand}>Mundo da Teca.</span>
    </h2>
  )
}

export function LoginModal({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const { loginModalOpen, closeLogin, register, loginByEmail } = useAuth()
  const [step, setStep] = useState<AccessStep>("welcome")
  const [guardianName, setGuardianName] = useState("")
  const [guardianEmail, setGuardianEmail] = useState("")
  const [childName, setChildName] = useState("")
  const [childBirthDate, setChildBirthDate] = useState("")
  const [welcomedChildName, setWelcomedChildName] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginError, setLoginError] = useState("")

  useEffect(() => {
    if (!loginModalOpen) return
    setStep("welcome")
    setGuardianName("")
    setGuardianEmail("")
    setChildName("")
    setChildBirthDate("")
    setWelcomedChildName("")
    setLoginEmail("")
    setLoginError("")
  }, [loginModalOpen])

  if (!loginModalOpen) return null

  const handleSignup = (event: FormEvent) => {
    event.preventDefault()
    const trimmedGuardian = guardianName.trim()
    const trimmedEmail = guardianEmail.trim()
    const trimmedChild = childName.trim()
    const trimmedBirthDate = childBirthDate.trim()
    if (
      !trimmedGuardian ||
      !trimmedEmail ||
      !trimmedChild ||
      !isCompleteBirthDate(trimmedBirthDate)
    ) {
      return
    }

    register(
      childProfileToUserFields(
        { name: trimmedChild, birthDate: trimmedBirthDate },
        { guardianName: trimmedGuardian, email: trimmedEmail },
      ),
      { keepModalOpen: true },
    )
    setWelcomedChildName(trimmedChild)
    setStep("success")
  }

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()
    const trimmedEmail = loginEmail.trim()
    if (!trimmedEmail) return

    const found = loginByEmail(trimmedEmail, { keepModalOpen: true })
    if (!found) {
      setLoginError(
        "Não encontramos este e-mail. Que tal preparar um Mundo da Teca?",
      )
      return
    }

    setWelcomedChildName(found.childName)
    setStep("welcomeBack")
  }

  const enterMeuMundo = () => {
    closeLogin()
    setScreen(appRoutes.minhaColecao)
  }

  return (
    <div
      style={styles.authOverlay}
      role="presentation"
      onClick={closeLogin}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="access-modal-title"
        style={styles.authModal}
        onClick={(event) => event.stopPropagation()}
      >
        <span aria-hidden style={styles.authModalSpine} />

        {step === "welcome" && (
          <div key="welcome" className="auth-modal-step">
            <p style={styles.authModalKicker}>primeiro acesso</p>
            <SignupTitle id="access-modal-title" />
            <p style={styles.authModalText}>
              Cada criança terá seu próprio espaço para guardar descobertas,
              registrar suas aventuras e construir sua coleção.
              <br />
              <br />
              Vamos começar?
            </p>
            <div style={styles.authActions}>
              <button
                type="button"
                onClick={() => setStep("signup")}
                style={styles.authButtonPrimary}
              >
                Começar
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setLoginError("")
                setStep("login")
              }}
              style={styles.authModeLink}
            >
              Já tenho acesso
            </button>
          </div>
        )}

        {step === "signup" && (
          <div key="signup" className="auth-modal-step">
            <p style={styles.authModalKicker}>primeiro acesso</p>
            <SignupTitle id="access-modal-title" />

            <form onSubmit={handleSignup} style={styles.authFormSignup}>
              <label style={styles.authField}>
                <span style={styles.authFieldLabel}>Nome da criança</span>
                <input
                  type="text"
                  value={childName}
                  onChange={(event) => setChildName(event.target.value)}
                  style={styles.authFieldInput}
                  autoComplete="off"
                  required
                  autoFocus
                />
              </label>

              <div style={styles.authField}>
                <label style={styles.authFieldInner}>
                  <span style={styles.authFieldLabel}>Data de nascimento</span>
                  <input
                    type="text"
                    value={childBirthDate}
                    onChange={(event) =>
                      setChildBirthDate(formatBirthDateInput(event.target.value))
                    }
                    style={styles.authFieldInput}
                    className="auth-field-input"
                    placeholder="DD/MM/AAAA"
                    inputMode="numeric"
                    autoComplete="bday"
                    required
                    maxLength={10}
                  />
                </label>
                <p style={styles.authFieldSupport}>
                  Usamos essa informação para sugerir experiências mais adequadas
                  à idade da criança.
                </p>
              </div>

              <label style={styles.authField}>
                <span style={styles.authFieldLabel}>Nome do responsável</span>
                <input
                  type="text"
                  value={guardianName}
                  onChange={(event) => setGuardianName(event.target.value)}
                  style={styles.authFieldInput}
                  autoComplete="name"
                  required
                />
              </label>

              <label style={styles.authField}>
                <span style={styles.authFieldLabel}>E-mail do responsável</span>
                <input
                  type="email"
                  value={guardianEmail}
                  onChange={(event) => setGuardianEmail(event.target.value)}
                  style={styles.authFieldInput}
                  autoComplete="email"
                  required
                />
              </label>

              <div style={styles.authActions}>
                <button type="submit" style={styles.authButtonPrimary}>
                  Preparar Meu Mundo
                </button>
              </div>
            </form>

            <button
              type="button"
              onClick={() => {
                setLoginError("")
                setStep("login")
              }}
              style={styles.authModeLink}
            >
              Já tenho acesso
            </button>
          </div>
        )}

        {step === "login" && (
          <div key="login" className="auth-modal-step">
            <h2 id="access-modal-title" style={styles.authModalTitle}>
              {RETURN_TITLE}
            </h2>
            <p style={styles.authModalText}>
              Seu Mundo da Teca está esperando por você.
            </p>

            <form onSubmit={handleLogin} style={styles.authForm}>
              <label style={styles.authField}>
                <span style={styles.authFieldLabel}>E-mail</span>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(event) => {
                    setLoginEmail(event.target.value)
                    if (loginError) setLoginError("")
                  }}
                  style={styles.authFieldInput}
                  autoComplete="email"
                  required
                  autoFocus
                />
              </label>

              {loginError ? (
                <p style={styles.authModalHint}>{loginError}</p>
              ) : null}

              <div style={styles.authActions}>
                <button type="submit" style={styles.authButtonPrimary}>
                  Entrar
                </button>
              </div>
            </form>

            <button
              type="button"
              onClick={() => {
                setLoginError("")
                setStep("welcome")
              }}
              style={styles.authModeLink}
            >
              É meu primeiro acesso
            </button>
          </div>
        )}

        {step === "success" && (
          <div key="success" className="auth-modal-step">
            <h2 id="access-modal-title" style={styles.authModalTitle}>
              Pronto!
            </h2>
            <p style={styles.authModalText}>
              {espacoProntoText(welcomedChildName)}
              <br />
              <br />
              Agora é hora de começar novas descobertas.
            </p>
            <div style={styles.authActions}>
              <button
                type="button"
                onClick={enterMeuMundo}
                style={styles.authButtonPrimary}
              >
                Entrar no Meu Mundo
              </button>
            </div>
          </div>
        )}

        {step === "welcomeBack" && (
          <div key="welcomeBack" className="auth-modal-step">
            <h2 id="access-modal-title" style={styles.authModalTitle}>
              {RETURN_TITLE}
            </h2>
            <p style={styles.authModalText}>
              {bemVindoDeVoltaText(welcomedChildName)}
              <br />
              <br />
              {descobertasEsperandoText(welcomedChildName)}
            </p>
            <div style={styles.authActions}>
              <button
                type="button"
                onClick={enterMeuMundo}
                style={styles.authButtonPrimary}
              >
                Entrar no Meu Mundo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
