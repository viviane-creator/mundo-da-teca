/** Incrementar ao substituir assets em public/assets/editorial/artifacts/ */
export const EDITORIAL_ASSET_VERSION = "20260707-webp"

const ARTIFACT_BASE = "/assets/editorial/artifacts"

export function editorialArtifactUrl(filename: string): string {
  return `${ARTIFACT_BASE}/${filename}?v=${EDITORIAL_ASSET_VERSION}`
}
