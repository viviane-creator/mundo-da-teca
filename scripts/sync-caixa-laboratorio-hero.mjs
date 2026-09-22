import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const dir = path.resolve("public/images/caixa-laboratorio")
const posterSource = path.join(dir, "caixa-fechada-9-guiadas 2.png")
const posterDest = path.join(dir, "caixa-fechada-9-guiadas-2.png")

if (fs.existsSync(posterSource)) {
  fs.copyFileSync(posterSource, posterDest)
  console.log("Pôster: caixa-fechada-9-guiadas 2.png → caixa-fechada-9-guiadas-2.png")
} else if (!fs.existsSync(posterDest)) {
  console.error("Fonte do pôster não encontrada:", posterSource)
  process.exit(1)
}

const maxWidth = 1200
const webpQuality = 82

async function pngToWebp(baseName) {
  const src = path.join(dir, `${baseName}.png`)
  const out = path.join(dir, `${baseName}.webp`)
  if (!fs.existsSync(src)) {
    console.warn("Ignorado (sem PNG):", baseName)
    return
  }
  const meta = await sharp(src).metadata()
  const width =
    meta.width && meta.width > maxWidth ? maxWidth : undefined
  await sharp(src)
    .resize(width ? { width, withoutEnlargement: true } : undefined)
    .webp({ quality: webpQuality, effort: 6 })
    .toFile(out)
  console.log("WebP:", `${baseName}.webp`)
}

await pngToWebp("abertura-crianca-9-guiadas")
await pngToWebp("caixa-fechada-9-guiadas-2")

console.log("Lembrete: suba CAIXA_IMAGE_VERSION em caixaLaboratorioData.ts")
