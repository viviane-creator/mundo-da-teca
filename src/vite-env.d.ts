/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Link oficial do checkout Hotmart da Caixa Laboratório. */
  readonly VITE_HOTMART_CHECKOUT_URL?: string
  /** Força a página de pré-lançamento mesmo após a data de abertura. */
  readonly VITE_FORCE_PRE_LAUNCH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
