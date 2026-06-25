import { useRef, useState, type CSSProperties } from "react"
import {
  buildDiaryDescription,
  formatPoeticDate,
  getCollectionDetail,
  type CollectionDetailScreen,
  type DiaryEntry,
} from "./discoveryData"
import {
  ficharioUniverses,
} from "./data/minhaColecaoMock"
import {
  buildInitialDiscoveryRegistry,
  discoverySlotKey,
} from "./data/discoveryRegistry"
import { getUniverseAccent } from "./data/universeAccent"
import type { UniverseId } from "./data/universeAssets"
import type { FicharioSlot } from "./data/minhaColecaoMock"
import { DiscoveryRegisterModal } from "./components/DiscoveryRegisterModal"
import { FicharioUniversePanel } from "./components/FicharioUniversePanel"
import {
  FicharioEtiqueta,
  FicharioFicha,
  formatMemoriaCodigo,
} from "./components/fichario"
import { formatDiscoveryTitle } from "./playData"
import { styles } from "./styles/appStyles"
import {
  diaryMarkerChoices,
  displayMarker,
  tecaColors,
  tecaFichario,
  tecaFont,
  tecaHierarchy,
  tecaObjects,
  tecaRadius,
  tecaSpacing,
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
    fontFamily: "'Cormorant Garamond', serif",
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
    ...tecaHierarchy.l1PageTitle,
  },
  pageIntro: {
    ...tecaHierarchy.l2Poetic,
    textAlign: "left",
    marginLeft: 0,
    marginRight: 0,
    marginBottom: `${tecaSpacing.poeticToSection}px`,
  },
  colecoesChapterHero: {
    position: "relative",
    margin: "0 0 36px",
    padding: "24px 20px 28px 28px",
    borderRadius: "26px",
    border: `1px dashed rgba(196, 165, 141, 0.38)`,
    background:
      "linear-gradient(168deg, #fffdf9 0%, #f9f3eb 55%, #f2ebe1 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
    overflow: "hidden",
  },
  colecoesChapterSpine: {
    position: "absolute",
    left: 0,
    top: "12%",
    bottom: "12%",
    width: "8px",
    borderRadius: "0 5px 5px 0",
    background:
      "linear-gradient(180deg, rgba(220,201,180,0.55) 0%, rgba(201,179,154,0.45) 50%, rgba(220,201,180,0.55) 100%)",
    opacity: 0.7,
  },
  colecoesHero: {
    position: "relative",
    margin: "0 auto 20px",
    maxWidth: "220px",
    padding: "8px 0",
  },
  colecoesHeroImage: {
    width: "100%",
    borderRadius: "20px",
    objectFit: "cover",
    display: "block",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 12px 28px rgba(120,90,60,0.1)",
    transform: "rotate(-2deg)",
  },
  colecoesKicker: {
    ...tecaHierarchy.l6Micro,
    textAlign: "left",
  },
  colecoesTitle: {
    ...tecaHierarchy.l1PageTitle,
    textAlign: "left",
    marginBottom: `${tecaSpacing.titleToPoetic}px`,
  },
  colecoesPageIntro: {
    ...tecaHierarchy.l2Poetic,
    textAlign: "left",
    marginLeft: 0,
    marginRight: 0,
    marginBottom: `${tecaSpacing.poeticToSection}px`,
  },
  colecoesPageSubtitle: {
    ...tecaHierarchy.l5Body,
    textAlign: "left",
    margin: 0,
    color: theme.muted,
    fontSize: "17px",
    lineHeight: 1.5,
  },
  colecoesSectionLabel: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    textAlign: "left",
    marginTop: "4px",
    marginBottom: "28px",
  },
  notebookSheet: {
    position: "relative",
    marginBottom: "20px",
    padding: "22px 18px 20px 28px",
    borderRadius: "22px",
    border: `1px dashed rgba(196, 165, 141, 0.38)`,
    background:
      "repeating-linear-gradient(180deg, transparent 0 27px, rgba(196,165,141,0.12) 27px 28px), linear-gradient(168deg, #fffdf9 0%, #faf4ec 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
    ...tecaTilt(0.15),
  },
  notebookSheetSpine: {
    position: "absolute",
    left: 0,
    top: "10%",
    bottom: "10%",
    width: "7px",
    borderRadius: "0 4px 4px 0",
    background:
      "linear-gradient(180deg, rgba(220,201,180,0.5) 0%, rgba(201,179,154,0.4) 50%, rgba(220,201,180,0.5) 100%)",
    opacity: 0.75,
  },
  autoDate: {
    margin: "0 0 20px",
    textAlign: "left",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "10px",
    letterSpacing: "1.4px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 600,
  },
  field: {
    marginBottom: "18px",
  },
  fieldLabel: {
    margin: "0 0 8px",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "12px",
    letterSpacing: "0.2px",
    color: "#9a8475",
    lineHeight: 1.4,
    fontWeight: 500,
  },
  fieldInput: {
    width: "100%",
    border: "none",
    borderBottom: `1px solid rgba(234, 216, 197, 0.85)`,
    background: "transparent",
    padding: "4px 0 10px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    color: theme.text,
    outline: "none",
  },
  fieldTextarea: {
    width: "100%",
    minHeight: "64px",
    border: "none",
    borderBottom: `1px solid rgba(234, 216, 197, 0.85)`,
    borderRadius: 0,
    background: "transparent",
    padding: "4px 0 10px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    lineHeight: 1.5,
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
    ...tecaFichario.etiquetaAction(),
    cursor: "pointer",
  },
  discoveryButton: {
    marginTop: "8px",
    ...tecaFichario.etiquetaAction(),
    cursor: "pointer",
  },
  diaryStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "20px",
  },
  diaryChapterHero: {
    position: "relative",
    margin: "0 0 22px",
    padding: "24px 20px 22px 28px",
    borderRadius: "26px",
    border: `1px dashed rgba(196, 165, 141, 0.38)`,
    background:
      "linear-gradient(168deg, #fffdf9 0%, #f9f3eb 55%, #f2ebe1 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
    overflow: "hidden",
  },
  diaryChapterSpine: {
    position: "absolute",
    left: 0,
    top: "12%",
    bottom: "12%",
    width: "8px",
    borderRadius: "0 5px 5px 0",
    background:
      "linear-gradient(180deg, rgba(220,201,180,0.55) 0%, rgba(201,179,154,0.45) 50%, rgba(220,201,180,0.55) 100%)",
    opacity: 0.7,
  },
  diaryKicker: {
    ...tecaHierarchy.l6Micro,
    textAlign: "left",
    marginBottom: "10px",
  },
  diaryTitle: {
    ...tecaFont.portalTitle,
    fontSize: "44px",
    textAlign: "left",
    margin: "0 0 10px",
    lineHeight: 0.95,
  },
  diaryIntro: {
    ...tecaHierarchy.l4Subtitle,
    textAlign: "left",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    fontSize: "16px",
  },
  diaryEntryCard: {
    position: "relative",
    background:
      "repeating-linear-gradient(180deg, transparent 0 25px, rgba(196,165,141,0.1) 25px 26px), #fffdf9",
    borderRadius: "20px",
    border: `1px dashed rgba(196, 165, 141, 0.34)`,
    padding: "16px 16px 16px 24px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)",
  },
  diaryPageSpine: {
    position: "absolute",
    left: 0,
    top: "14%",
    bottom: "14%",
    width: "6px",
    borderRadius: "0 4px 4px 0",
    background: "rgba(220,201,180,0.45)",
  },
  diaryEntryHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
  },
  diaryEntryMarker: {
    ...tecaObjects.etiqueta(),
    fontStyle: "normal",
    textTransform: "lowercase",
    letterSpacing: "1px",
    fontSize: "9px",
  },
  diaryEntryDate: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "1.3px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 600,
    fontFamily: "'Nunito', sans-serif",
  },
  diaryEntryTitle: {
    margin: "0 0 8px",
    ...tecaFont.portalTitle,
    fontSize: "26px",
    lineHeight: 0.95,
    textAlign: "left",
  },
  diaryEntryText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    color: theme.muted,
    fontSize: "16px",
    lineHeight: 1.5,
  },
  diaryNewPageTitle: {
    ...tecaFont.portalTitle,
    fontSize: "36px",
    textAlign: "left",
    margin: "0 0 6px",
    lineHeight: 0.95,
  },
  diaryNewPageIntro: {
    ...tecaHierarchy.l4Subtitle,
    textAlign: "left",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: `${tecaSpacing.subtitleToContent}px`,
    fontSize: "15px",
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
    fontSize: "16px",
    color: "#8a6f5d",
  },
  collectionButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "rgba(255,253,249,0.8)",
    borderRadius: "999px",
    padding: "10px 16px",
    fontFamily: "'Cormorant Garamond', serif",
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
    fontFamily: "'Nunito', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.6px",
    color: "#b9a594",
    textAlign: "center",
    lineHeight: 1.45,
  },
  albumSummary: {
    margin: "0 0 16px",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
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
        onClick={() => setScreen("meu-mundo")}
        style={s.backButton}
      >
        ← meu mundo
      </button>

      <div style={s.diaryChapterHero}>
        <span style={s.diaryChapterSpine} aria-hidden="true" />
        <p style={s.diaryKicker}>diário livre</p>
        <h1 style={s.diaryTitle}>Diário</h1>
        <p style={s.diaryIntro}>
          Um lugar para escrever, desenhar e registrar aquilo que chamou sua
          atenção.
        </p>
      </div>

      <div style={s.diaryStack}>
        {entries.map((entry, index) => (
          <FicharioFicha
            key={entry.id}
            variant="memoria"
            codigo={formatMemoriaCodigo(index)}
            seal={displayMarker(entry.icon)}
            title={entry.title}
            image={entry.imagePreview}
            tilt={index % 2 === 0 ? -0.25 : 0.2}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "10px",
                letterSpacing: "1.3px",
                textTransform: "uppercase",
                color: "#b3815f",
                fontWeight: 600,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {entry.datePoetic}
            </p>
            <p style={s.diaryEntryText}>{entry.description}</p>
          </FicharioFicha>
        ))}
      </div>

      <FicharioEtiqueta
        action
        onClick={() => setScreen("diario-guardar")}
        style={s.discoveryButton}
      >
        escrever no diário →
      </FicharioEtiqueta>
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
  const [attention, setAttention] = useState("")
  const [unexpected, setUnexpected] = useState("")
  const [observed, setObserved] = useState("")
  const [curious, setCurious] = useState("")
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
    const title = attention.trim() || "uma observação sem nome ainda"
    onSave({
      id: `diario-${Date.now()}`,
      title,
      datePoetic,
      description: buildDiaryDescription({ unexpected, observed, curious }),
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
        <p style={s.diaryKicker}>nova entrada</p>
        <h1 style={s.diaryNewPageTitle}>Registrar observação</h1>
        <p style={s.diaryNewPageIntro}>
          Escreva, desenhe ou registre o que chamou sua atenção — sem pressa, sem
          resposta certa.
        </p>
      </div>

      <article style={s.notebookSheet}>
        <span style={s.notebookSheetSpine} aria-hidden="true" />
        <p style={s.autoDate}>{datePoetic}</p>

        <NotebookField
          label="O que chamou sua atenção?"
          value={attention}
          onChange={setAttention}
        />
        <NotebookField
          label="O que aconteceu que você não esperava?"
          value={unexpected}
          onChange={setUnexpected}
        />
        <NotebookField
          label="O que você observou?"
          value={observed}
          onChange={setObserved}
          multiline
        />
        <NotebookField
          label="O que você gostaria de descobrir agora?"
          value={curious}
          onChange={setCurious}
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
              alt="desenho ou foto da observação"
              style={s.imagePreview}
            />
          ) : (
            <p style={s.imageFrameHint}>
              um desenho ou rabisco do que viu
              <br />
              <span style={{ fontSize: "13px" }}>toque para escolher</span>
            </p>
          )}
        </button>

        <p style={{ ...s.fieldLabel, marginBottom: "10px" }}>
          símbolo da observação
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

      <FicharioEtiqueta action onClick={handleSave} style={s.saveButton}>
        guardar no diário →
      </FicharioEtiqueta>
    </section>
  )
}

export function CollectionsPage({
  setScreen,
}: {
  setScreen: SetScreen
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [registeredKeys, setRegisteredKeys] = useState(buildInitialDiscoveryRegistry)
  const [activeRegistration, setActiveRegistration] = useState<{
    universeId: UniverseId
    slot: FicharioSlot
  } | null>(null)

  const confirmRegistration = () => {
    if (!activeRegistration) return

    const key = discoverySlotKey(
      activeRegistration.universeId,
      activeRegistration.slot.id,
    )
    setRegisteredKeys((current) => new Set(current).add(key))
    setActiveRegistration(null)
  }

  return (
    <section style={s.subPage}>
      <button
        type="button"
        onClick={() => setScreen("meu-mundo")}
        style={s.backButton}
      >
        ← meu mundo
      </button>

      <div style={s.colecoesChapterHero}>
        <span style={s.colecoesChapterSpine} aria-hidden="true" />
        <p style={s.colecoesKicker}>coleção pessoal</p>
        <h1 style={s.colecoesTitle}>Minhas Descobertas</h1>
        <p style={s.colecoesPageIntro}>
          As experiências que você já realizou e decidiu guardar.
        </p>
        <p style={s.colecoesPageSubtitle}>
          Cada descoberta registrada ganha seu lugar aqui.
        </p>
      </div>

      <p style={s.colecoesSectionLabel}>
        Organize suas experiências por universo.
      </p>

      <div style={styles.ficharioUniversosStack}>
        {ficharioUniverses.map((universe) => (
          <FicharioUniversePanel
            key={universe.id}
            universe={universe}
            expanded={expandedId === universe.id}
            registeredKeys={registeredKeys}
            onSlotRegisterRequest={(slot) =>
              setActiveRegistration({
                universeId: universe.id as UniverseId,
                slot,
              })
            }
            onToggle={() =>
              setExpandedId(expandedId === universe.id ? null : universe.id)
            }
          />
        ))}
      </div>

      {activeRegistration ? (
        <DiscoveryRegisterModal
          title={
            activeRegistration.slot.title
              ? formatDiscoveryTitle(activeRegistration.slot.title)
              : "Nova experiência"
          }
          accent={getUniverseAccent(activeRegistration.universeId)}
          onDismiss={() => setActiveRegistration(null)}
          onConfirm={confirmRegistration}
        />
      ) : null}
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
        ← minhas descobertas
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
        {foundCount}{" "}
        {foundCount === 1 ? "ficha guardada" : "fichas guardadas"} ·{" "}
        {total - foundCount} espaços para novas fichas
      </p>

      <div style={s.albumGrid}>
        {collection.items.map((item, index) =>
          item.found ? (
            <FicharioFicha
              key={item.id}
              compact
              variant="descoberta"
              codigo={item.id.slice(0, 8).toUpperCase()}
              title={item.name}
              image={item.image}
              tilt={index % 2 === 0 ? 0.1 : -0.1}
            >
              {item.note && <p style={s.albumItemNote}>{item.note}</p>}
              {item.dateFound && (
                <p style={s.albumItemDate}>{item.dateFound}</p>
              )}
            </FicharioFicha>
          ) : (
            <FicharioFicha
              key={item.id}
              compact
              empty
              variant="descoberta"
              codigo={item.id.slice(0, 8).toUpperCase()}
              emptyLabel="espaço para nova ficha"
              tilt={index % 2 === 0 ? 0.1 : -0.1}
            />
          ),
        )}
      </div>
    </section>
  )
}
