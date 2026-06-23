import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const source = path.resolve("public/characters/teca-estrelinha-praia.png")
const output = path.resolve("public/images/hero-home.webp")
const maxWidth = 1600
const quality = 80

const originalBytes = fs.statSync(source).size
const metadata = await sharp(source).metadata()

const pipeline = sharp(source).resize({
  width: Math.min(metadata.width ?? maxWidth, maxWidth),
  withoutEnlargement: true,
})

await pipeline.webp({ quality, effort: 6 }).toFile(output)

const finalBytes = fs.statSync(output).size
const reduction = ((1 - finalBytes / originalBytes) * 100).toFixed(1)
const formatKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`

const outMeta = await sharp(output).metadata()

console.log("Hero image optimization")
console.log(`  Original: ${formatKb(originalBytes)} (${metadata.width}x${metadata.height})`)
console.log(`  Final:    ${formatKb(finalBytes)} (${outMeta.width}x${outMeta.height})`)
console.log(`  Reduction: ${reduction}%`)

if (finalBytes < 400 * 1024 || finalBytes > 900 * 1024) {
  console.warn(
    `  Note: final size ${formatKb(finalBytes)} is outside 400–900 KB target; adjust quality if needed.`,
  )
}
