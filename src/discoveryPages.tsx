import { useRef, useState, type CSSProperties } from "react"
import {
  buildDiaryDescription,
  discoveryCollections,
  formatPoeticDate,
  getCollectionDetail,
  type CollectionDetailScreen,
  type DiaryEntry,
} from "./discoveryData"
import {
  diaryMarkerChoices,
  displayMarker,
  tecaColors,
  tecaFont,
  tecaObjects,
  tecaRadius,
  tecaTilt,
  tecaType,
} from "./tecaVisual"

const theme = {
  text: "#6a4f3c",
  muted: "#8b7668",
  line: "#ead8c5",
  accent: "#c88757",
}

const s: Record<string, CSSProperties> = {
  subPage: {
    padding: "24px 24px 32px",
  },
  backButton: {
    border: "none",
    background: "transparent",
    fontFamily: "'Caveat', cursive",
    fontSize: "26px",
    color: "#9a7f6d",
    cursor: "pointer",
    padding: "0 0 16px",
    display: "block",
  },
  subPageImage: {
    width: "100%",
    maxWidth: "200px",
    borderRadius: "28px",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 22px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.06)",
  },
  pageIntroBlock: {
    textAlign: "center",
    marginBottom: "22px",
  },
  pageTitle: {
    margin: "0 0 8px",
    fontSize: "40px",
    ...tecaFont.portalTitle,
  },
  pageIntro: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "19px",
    lineHeight: 1.45,
    color: theme.muted,
    textAlign: "left",
  },
  notebookSheet: {
    ...tecaObjects.note(tecaRadius.md),
    marginBottom: "20px",
    ...tecaTilt(0.2),
  },
  autoDate: {
    margin: "0 0 18px",
    textAlign: "left",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    color: "#9a8475",
  },
  field: {
    marginBottom: "16px",
  },
  fieldLabel: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "18px",
    color: theme.text,
    lineHeight: 1.35,
  },
  fieldInput: {
    width: "100%",
    border: "none",
    borderBottom: `1px solid rgba(234, 216, 197, 0.95)`,
    background: "transparent",
    padding: "6px 0 8px",
    fontFamily: "'Caveat', cursive",
    fontSize: "26px",
    color: theme.text,
    outline: "none",
  },
  fieldTextarea: {
    width: "100%",
    minHeight: "72px",
    border: `1px solid ${theme.line}`,
    borderRadius: "18px",
    background: "rgba(255,253,249,0.65)",
    padding: "12px 14px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "18px",
    lineHeight: 1.45,
    color: theme.text,
    outline: "none",
    resize: "vertical",
  },
  imageFrame: {
    marginBottom: "16px",
    borderRadius: "20px",
    border: `1px dashed rgba(195, 150, 110, 0.45)`,
    background: "rgba(255,253,249,0.72)",
    minHeight: "140px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "14px",
    cursor: "pointer",
    overflow: "hidden",
  },
  imageFrameHint: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    color: theme.muted,
    textAlign: "center",
  },
  imagePreview: {
    width: "100%",
    maxHeight: "180px",
    objectFit: "cover",
    borderRadius: "14px",
  },
  markerRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "flex-start",
    marginBottom: "8px",
  },
  markerChoice: {
    border: `1px solid ${theme.line}`,
    background: tecaColors.paper,
    borderRadius: "999px",
    padding: "6px 12px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "15px",
    color: theme.muted,
    cursor: "pointer",
  },
  markerChoiceActive: {
    border: `1px solid ${theme.accent}`,
    color: theme.text,
    background: "#f3e8dc",
  },
  saveButton: {
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    borderRadius: "999px",
    padding: "16px 24px",
    color: "#fffaf5",
    fontSize: "20px",
    cursor: "pointer",
  },
  discoveryButton: {
    marginTop: "8px",
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    borderRadius: "999px",
    padding: "16px 24px",
    color: "#fffaf5",
    fontSize: "20px",
    cursor: "pointer",
  },
  diaryStack: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "18px",
  },
  diaryEntryCard: {
    background: tecaColors.paper,
    borderRadius: tecaRadius.md,
    border: `1px solid ${theme.line}`,
    padding: "14px 16px",
  },
  diaryEntryHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },
  diaryEntryMarker: {
    ...tecaObjects.etiqueta(),
    fontStyle: "normal",
    textTransform: "lowercase",
    letterSpacing: "1px",
  },
  diaryEntryDate: {
    margin: 0,
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
  },
  diaryEntryTitle: {
    margin: "0 0 6px",
    fontSize: "24px",
    ...tecaFont.heading,
  },
  diaryEntryText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    color: theme.muted,
    fontSize: "17px",
    lineHeight: 1.45,
  },
  collectionsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  collectionCard: {
    background: tecaColors.paper,
    borderRadius: tecaRadius.lg,
    border: `1px solid ${theme.line}`,
    padding: "14px 14px 16px",
  },
  collectionTop: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginBottom: "10px",
  },
  collectionThumb: {
    width: "66px",
    height: "66px",
    borderRadius: "14px",
    objectFit: "cover",
    border: `1px solid ${theme.line}`,
  },
  collectionTitle: {
    margin: "0 0 4px",
    fontSize: "26px",
    lineHeight: 1,
    ...tecaFont.heading,
  },
  collectionPoetic: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    color: theme.muted,
  },
  collectionProgressRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },
  collectionDots: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  collectionDot: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    border: `1px solid ${theme.line}`,
    background: "rgba(255,253,249,0.9)",
  },
  collectionDotFilled: {
    background: "#d9a06e",
    borderColor: "#d9a06e",
  },
  collectionCount: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    color: "#8a6f5d",
  },
  collectionButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "rgba(255,253,249,0.8)",
    borderRadius: "999px",
    padding: "10px 16px",
    fontFamily: "'Caveat', cursive",
    fontSize: "24px",
    color: theme.text,
    cursor: "pointer",
  },
  albumGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
    marginTop: "8px",
  },
  albumSlot: {
    borderRadius: tecaRadius.sm,
    border: `1px solid ${theme.line}`,
    background: tecaColors.paper,
    padding: "10px",
    minHeight: "168px",
    display: "flex",
    flexDirection: "column",
  },
  albumSlotEmpty: {
    borderStyle: "dashed",
    borderColor: "rgba(234, 216, 197, 0.95)",
    background:
      "linear-gradient(180deg, rgba(255,253,249,0.95) 0%, rgba(248,239,229,0.75) 100%)",
    alignItems: "center",
    justifyContent: "center",
  },
  albumSlotImage: {
    width: "100%",
    height: "88px",
    objectFit: "cover",
    borderRadius: "14px",
    marginBottom: "8px",
    border: `1px solid ${theme.line}`,
  },
  albumSlotSilhouette: {
    width: "72px",
    height: "72px",
    borderRadius: "16px",
    border: `1px dashed rgba(195, 150, 110, 0.35)`,
    background: "rgba(255,253,249,0.6)",
    marginBottom: "10px",
  },
  albumItemName: {
    margin: "0 0 4px",
    fontSize: "20px",
    lineHeight: 1.1,
    ...tecaFont.heading,
  },
  albumItemNote: {
    margin: "0 0 6px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "14px",
    lineHeight: 1.4,
    color: theme.muted,
    flex: 1,
  },
  albumItemDate: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 600,
  },
  albumWaitingText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "15px",
    color: "#b9a594",
    textAlign: "center",
    lineHeight: 1.4,
  },
  albumSummary: {
    margin: "0 0 16px",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    color: theme.muted,
  },
}

type SetScreen = (screen: string) => void

function NotebookField({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  multiline?: boolean
}) {
  return (
    <div style={s.field}>
      <p style={s.fieldLabel}>{label}</p>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={s.fieldTextarea}
          aria-label={label}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={s.fieldInput}
          aria-label={label}
        />
      )}
    </div>
  )
}

export function DiaryPage({
  setScreen,
  entries,
}: {
  setScreen: SetScreen
  entries: DiaryEntry[]
}) {
  return (
    <section style={s.subPage}>
      <button
        type="button"
        onClick={() => setScreen("descobertas")}
        style={s.backButton}
      >
        ← descobertas
      </button>

      <img
        src="/cards/descobertas/diario.png"
        alt="Diário"
        style={s.subPageImage}
      />

      <div style={s.pageIntroBlock}>
        <h1 style={s.pageTitle}>diário</h1>
        <p style={s.pageIntro}>
          um caderno de pequenas descobertas para guardar o que tocou o olhar.
        </p>
      </div>

      <div style={s.diaryStack}>
        {entries.map((entry) => (
          <article key={entry.id} style={s.diaryEntryCard}>
            <div style={s.diaryEntryHeader}>
              <span style={s.diaryEntryMarker}>
                {displayMarker(entry.icon)}
              </span>
              <p style={s.diaryEntryDate}>{entry.datePoetic}</p>
            </div>
            <h3 style={s.diaryEntryTitle}>{entry.title}</h3>
            {entry.imagePreview && (
              <img
                src={entry.imagePreview}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "120px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "8px",
                  border: `1px solid ${theme.line}`,
                }}
              />
            )}
            <p style={s.diaryEntryText}>{entry.description}</p>
          </article>
        ))}
      </div>

      <button
        type="button"
        style={s.discoveryButton}
        onClick={() => setScreen("diario-guardar")}
      >
        guardar uma descoberta
      </button>
    </section>
  )
}

export function DiaryNewEntryPage({
  setScreen,
  onSave,
}: {
  setScreen: SetScreen
  onSave: (entry: DiaryEntry) => void
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [found, setFound] = useState("")
  const [where, setWhere] = useState("")
  const [color, setColor] = useState("")
  const [why, setWhy] = useState("")
  const [icon, setIcon] = useState("folha")
  const [imagePreview, setImagePreview] = useState<string | undefined>()
  const datePoetic = formatPoeticDate()

  const handleImagePick = (file: File | undefined) => {
    if (!file) {
      setImagePreview(undefined)
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === "string") setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleSave = () => {
    const title = found.trim() || "uma descoberta sem nome ainda"
    onSave({
      id: `diario-${Date.now()}`,
      title,
      datePoetic,
      description: buildDiaryDescription({ where, color, why }),
      icon,
      imagePreview,
    })
    setScreen("diario")
  }

  return (
    <section style={s.subPage}>
      <button
        type="button"
        onClick={() => setScreen("diario")}
        style={s.backButton}
      >
        ← diário
      </button>

      <div style={s.pageIntroBlock}>
        <h1 style={s.pageTitle}>guardar uma descoberta</h1>
      </div>

      <article style={s.notebookSheet}>
        <p style={s.autoDate}>{datePoetic}</p>

        <NotebookField
          label="o que você encontrou?"
          value={found}
          onChange={setFound}
        />
        <NotebookField
          label="onde estava?"
          value={where}
          onChange={setWhere}
        />
        <NotebookField
          label="que cor parecia ter?"
          value={color}
          onChange={setColor}
        />
        <NotebookField
          label="queria guardar isso por quê?"
          value={why}
          onChange={setWhy}
          multiline
        />

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => handleImagePick(e.target.files?.[0])}
        />
        <button
          type="button"
          style={s.imageFrame}
          onClick={() => fileRef.current?.click()}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="desenho ou foto da descoberta"
              style={s.imagePreview}
            />
          ) : (
            <p style={s.imageFrameHint}>
              um desenho ou foto
              <br />
              <span style={{ fontSize: "14px" }}>toque para escolher</span>
            </p>
          )}
        </button>

        <p style={{ ...s.fieldLabel, marginBottom: "10px" }}>
          marcador opcional
        </p>
        <div style={s.markerRow}>
          {diaryMarkerChoices.map((choice) => {
            const active = icon === choice.id
            return (
              <button
                key={choice.id}
                type="button"
                style={{
                  ...s.markerChoice,
                  ...(active ? s.markerChoiceActive : {}),
                }}
                onClick={() => setIcon(choice.id)}
                aria-label={`marcador ${choice.label}`}
              >
                {choice.label}
              </button>
            )
          })}
        </div>
      </article>

      <button type="button" style={s.saveButton} onClick={handleSave}>
        guardar no diário
      </button>
    </section>
  )
}

export function CollectionsPage({
  setScreen,
}: {
  setScreen: SetScreen
}) {
  return (
    <section style={s.subPage}>
      <button
        type="button"
        onClick={() => setScreen("descobertas")}
        style={s.backButton}
      >
        ← descobertas
      </button>

      <img
        src="/cards/descobertas/colecoes.png"
        alt="Coleções"
        style={s.subPageImage}
      />

      <div style={s.pageIntroBlock}>
        <h1 style={s.pageTitle}>coleções</h1>
        <p style={s.pageIntro}>
          um álbum em andamento, com espaços vazios esperando novos achados.
        </p>
      </div>

      <div style={s.collectionsStack}>
        {discoveryCollections.map((collection) => (
          <article key={collection.id} style={s.collectionCard}>
            <div style={s.collectionTop}>
              <img
                src={collection.image}
                alt={collection.name}
                style={s.collectionThumb}
              />
              <div>
                <h3 style={s.collectionTitle}>{collection.name}</h3>
                <p style={s.collectionPoetic}>{collection.poetic}</p>
              </div>
            </div>

            <div style={s.collectionProgressRow}>
              <div style={s.collectionDots}>
                {Array.from({ length: collection.total }).map((_, idx) => {
                  const filled = idx < collection.found
                  return (
                    <span
                      key={`${collection.id}-${idx}`}
                      style={{
                        ...s.collectionDot,
                        ...(filled ? s.collectionDotFilled : {}),
                      }}
                    />
                  )
                })}
              </div>
              <p style={s.collectionCount}>
                {collection.found} de {collection.total} guardadas
              </p>
            </div>

            <button
              type="button"
              style={s.collectionButton}
              onClick={() => setScreen(collection.screen)}
            >
              ver coleção
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export function CollectionDetailPage({
  setScreen,
  screen,
}: {
  setScreen: SetScreen
  screen: CollectionDetailScreen
}) {
  const collection = getCollectionDetail(screen)
  if (!collection) return null

  const foundCount = collection.items.filter((item) => item.found).length
  const total = collection.items.length

  return (
    <section style={s.subPage}>
      <button
        type="button"
        onClick={() => setScreen("colecoes")}
        style={s.backButton}
      >
        ← coleções
      </button>

      <img
        src={collection.image}
        alt={collection.name}
        style={s.subPageImage}
      />

      <div style={s.pageIntroBlock}>
        <h1 style={s.pageTitle}>{collection.name}</h1>
        <p style={s.pageIntro}>{collection.poetic}</p>
      </div>

      <p style={s.albumSummary}>
        {foundCount} guardadas · {total - foundCount} ainda esperando
      </p>

      <div style={s.albumGrid}>
        {collection.items.map((item) =>
          item.found ? (
            <article key={item.id} style={s.albumSlot}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={s.albumSlotImage}
                />
              )}
              <h3 style={s.albumItemName}>{item.name}</h3>
              {item.note && <p style={s.albumItemNote}>{item.note}</p>}
              {item.dateFound && (
                <p style={s.albumItemDate}>{item.dateFound}</p>
              )}
            </article>
          ) : (
            <article
              key={item.id}
              style={{ ...s.albumSlot, ...s.albumSlotEmpty }}
            >
              <div style={s.albumSlotSilhouette} />
              <p style={s.albumWaitingText}>
                aguardando
                <br />
                descoberta
              </p>
            </article>
          ),
        )}
      </div>
    </section>
  )
}
