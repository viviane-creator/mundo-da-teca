import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const source = path.resolve("public/characters/hero-home-original.png")
const originalOutput = path.resolve("public/characters/hero-home-original.webp")
const heroOutput = path.resolve("public/images/hero-home.webp")
const maxWidth = 1600
const originalQuality = 88
const heroQuality = 80

if (!fs.existsSync(source)) {
  console.error(`Source not found: ${source}`)
  process.exit(1)
}

const originalBytes = fs.statSync(source).size
const metadata = await sharp(source).metadata()
const targetWidth = Math.min(metadata.width ?? maxWidth, maxWidth)

await sharp(source)
  .webp({ quality: originalQuality, effort: 6 })
  .toFile(originalOutput)

await sharp(source)
  .resize({ width: targetWidth, withoutEnlargement: true })
  .webp({ quality: heroQuality, effort: 6 })
  .toFile(heroOutput)

const originalWebpBytes = fs.statSync(originalOutput).size
const heroWebpBytes = fs.statSync(heroOutput).size
const reduction = ((1 - originalWebpBytes / originalBytes) * 100).toFixed(1)
const formatKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`

const originalMeta = await sharp(originalOutput).metadata()
const heroMeta = await sharp(heroOutput).metadata()

console.log("Hero image optimization")
console.log(`  PNG source:  ${formatKb(originalBytes)} (${metadata.width}x${metadata.height})`)
console.log(`  Original:    ${formatKb(originalWebpBytes)} (${originalMeta.width}x${originalMeta.height}) — hero-home-original.webp`)
console.log(`  Production:  ${formatKb(heroWebpBytes)} (${heroMeta.width}x${heroMeta.height}) — images/hero-home.webp`)
console.log(`  Reduction (PNG → original.webp): ${reduction}%`)
