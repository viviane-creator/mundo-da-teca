import { useState, type FormEvent } from "react"
import { useAuth } from "../auth/authContext"
import { styles } from "../styles/appStyles"

export function LoginModal() {
  const { loginModalOpen, closeLogin, login } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  if (!loginModalOpen) return null

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    if (!trimmedName || !trimmedEmail) return

    login({ name: trimmedName, email: trimmedEmail })
    setName("")
    setEmail("")
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
        aria-labelledby="login-modal-title"
        style={styles.authModal}
        onClick={(event) => event.stopPropagation()}
      >
        <span aria-hidden style={styles.authModalSpine} />
        <p style={styles.authModalKicker}>acesso ao clube</p>
        <h2 id="login-modal-title" style={styles.authModalTitle}>
          Entrar
        </h2>
        <p style={styles.authModalText}>
          Seu diário, descobertas e materiais exclusivos ficam aqui — com calma
          e privacidade.
        </p>

        <form onSubmit={handleSubmit} style={styles.authForm}>
          <label style={styles.authField}>
            <span style={styles.authFieldLabel}>Seu nome</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={styles.authFieldInput}
              autoComplete="name"
              required
            />
          </label>

          <label style={styles.authField}>
            <span style={styles.authFieldLabel}>E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={styles.authFieldInput}
              autoComplete="email"
              required
            />
          </label>

          <div style={styles.authActions}>
            <button
              type="button"
              onClick={closeLogin}
              style={styles.authButtonSecondary}
            >
              Voltar
            </button>
            <button type="submit" style={styles.authButtonPrimary}>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
