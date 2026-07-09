/**
 * Gate temporário de lançamento.
 * `false` — Home aprovada em "/".
 * `true` — capa de lançamento em "/" e Home em "/home-preview".
 */
export const LAUNCH_MODE = false

/** Rota legada da Home durante o período de abertura (redireciona para "/") */
export const HOME_PREVIEW_PATH = "/home-preview"

/**
 * Faixa institucional de pré-lançamento na Home (abaixo do Hero).
 * `false` — remove o aviso sem apagar o componente.
 * No lançamento oficial: desligar aqui ou apagar HomePreLaunchNotice.
 */
export const SHOW_HOME_PRELAUNCH_NOTICE = true
