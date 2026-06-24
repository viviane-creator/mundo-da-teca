import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const UNIVERSE_IDS = [
  "laboratorio",
  "cozinha",
  "oficina",
  "faz-de-conta",
  "quintal",
  "observatorio",
]

const coverDir = path.resolve("public/images/universos")
const pngDir = path.join(coverDir, "png")

const legacyPngNames = {
  oficina: "oficina-capa.png",
  observatorio: "movimento-capa.png",
}

let hasError = false

for (const id of UNIVERSE_IDS) {
  const webpPath = path.join(coverDir, `${id}-capa.webp`)
  if (fs.existsSync(webpPath)) {
    console.log(`OK  ${id}-capa.webp`)
    continue
  }

  const candidates = [
    path.join(pngDir, `${id}-capa.png`),
    path.join(coverDir, `${id}-capa.png`),
    legacyPngNames[id]
      ? path.join(coverDir, legacyPngNames[id])
      : null,
  ].filter(Boolean)

  const source = candidates.find((candidate) => fs.existsSync(candidate))

  if (!source) {
    console.error(`MISSING ${id}-capa.webp (sem PNG de origem encontrado)`)
    hasError = true
    continue
  }

  await sharp(source)
    .webp({ quality: 82, effort: 6 })
    .toFile(webpPath)

  console.log(`CREATED ${id}-capa.webp ← ${path.relative(process.cwd(), source)}`)
}

if (hasError) {
  process.exit(1)
}
