/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Link oficial do checkout Hotmart da Caixa Laboratório. */
  readonly VITE_HOTMART_CHECKOUT_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
