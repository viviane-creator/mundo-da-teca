# PROJECT_STATE — Mundo da Teca

Estado atual aprovado do produto.  
Última atualização: reorganização informacional concluída (Etapas 1–5).

---

## 1. Visão do produto

**Mundo da Teca** é uma plataforma de experiências criativas para crianças explorarem o mundo real, registrarem descobertas e construírem sua própria coleção ao longo do tempo — longe das telas.

A experiência deve parecer:

- fichário
- álbum
- coleção construída devagar
- objeto físico mais do que software

**Não deve parecer:**

- dashboard
- app gamificado
- plataforma de cursos
- ecommerce agressivo

---

## 2. Arquitetura atual

Fonte de verdade: `src/config/productStrategy.ts`.

Fluxo principal de informação (fase atual):

```
INÍCIO → apresentação institucional simplificada
UNIVERSOS → 6 universos + experiências
MEU MUNDO → coleção digital / diário / biblioteca
ATELIÊ → área complementar (sem Baú/Fichário físicos por enquanto)
```

**Prioridade comercial atual:** validar a **Caixa Laboratório daTeca** (R$ 89,90 + frete R$ 10).  
Landing de conversão ainda não implementada.

**Clube antigo (4 modalidades):** descontinuado e desligado (`CLUB_MARKETING_ENABLED = false`).  
**Futuro:** um único Clube daTeca (assinatura única, sem planos/comparativos) — página ainda não criada.

Roteamento: state `screen` em `App.tsx` + render condicional. Sem router externo.

---

## 3. Menu principal

| # | Label | Screen | Peso |
|---|-------|--------|------|
| 1 | Início | `home` | Principal |
| 2 | Universos | `universos` | Principal |
| 3 | Meu Mundo | `meu-mundo` | Principal |
| 4 | Ateliê | `atelie` | Secundário |

Arquivo: `src/data/bottomNav.ts`  
Clube removido do menu até a nova página do Clube.

---

## 4. Universos oficiais

Os 6 universos oficiais do Mundo da Teca:

| Nome oficial | ID de exibição | Rota técnica atual (temporária) |
|--------------|----------------|----------------------------------|
| Laboratório | `laboratorio` | `laboratorio` |
| Cozinha | `cozinha` | `cozinha` |
| Oficina | `oficina` | `oficina` |
| Faz de Conta | `faz-de-conta` | `arte` |
| Brincar na Rua | `brincar-na-rua` | `natureza` |
| Dias de Chuva | `dias-de-chuva` | `movimento` |

**Importante:**

- Os nomes oficiais já aparecem visualmente em Brincadeiras (`src/data/brincadeirasCards.ts`) e Meu Fichário (`src/data/minhaColecaoMock.ts`).
- `playData.ts` ainda **não foi alterado** — continua usando `natureza`, `arte` e `movimento` internamente.
- Cada universo tem 15 experiências no código atual (não 12). A coleção física de 72 páginas (6 × 12) é conceito aprovado, mas ainda não refletida em `playData.ts`.

Conceito de coleção aprovado (futuro): **6 universos × 12 páginas = 72 páginas totais**.

---

## 5. Produto e Clube (nova estratégia)

### Descontinuado

Não existem mais as quatro modalidades:
Explorador Digital · Meu Mundo de Descobertas · Meu Mundo de Tesouros · Expedição Completa.

Sem planos. Sem comparativos. Sem escolha entre assinaturas.

### Produto de entrada (prioridade)

**Caixa Laboratório daTeca** — R$ 89,90 · frete R$ 10 para todo o Brasil · primeiro lote 100 unidades.

### Clube futuro (ainda não no site)

Um único **Clube daTeca**: assinatura fixa, envio físico mensal, sem upgrades.  
Primeiro envio = base da coleção (Caixa Laboratório + manual + ingredientes + frascos + materiais + ferramentas).  
Baú e Fichário físicos: existem no projeto, mas **não aparecem no site** nesta fase (`SHOW_BAU_AND_FICHARIO_PRODUCTS = false`).

Config: `src/config/productStrategy.ts`

---

## 6. Estrutura da Home

Arquivo: `src/pages/Home.tsx`

```
Hero (WorldPortalLayout)
  ↓
Faixa de pré-lançamento (opcional)
  ↓
"O que é a daTeca?"
  ↓
"Como funciona?" (jornada sem planos/modalidades)
```

**Sem** seção de modalidades, **sem** CTA para o Clube antigo.  
Próxima etapa: landing de conversão da Caixa Laboratório.

---

## 7. Estrutura do Clube

Páginas antigas (`ClubPage`, `ClubModalityPage`) permanecem no código, mas **desligadas**.  
Rotas `/clube` e `/clube/*` redirecionam para a Home.

A nova página do Clube será criada do zero após a validação da Caixa Laboratório.

---

## 8. Estrutura de Brincadeiras

Arquivo: `App.tsx` (componente `Page`) + `src/data/brincadeirasCards.ts`

```
Capa (WorldPortalLayout)
  ↓
"Mundos de Brincar"
  ↓
6 cards horizontais (universos oficiais)
  ↓
→ PlayUniversePage (por universo)
    └── experiências (playData.ts — 15 por universo)
```

Cards usam nomes oficiais. Targets técnicos temporários para Faz de Conta, Brincar na Rua e Dias de Chuva apontam para `arte`, `natureza` e `movimento`.

---

## 9. Estrutura de Minha Coleção / Meu Fichário

**Menu:** Minha Coleção  
**Título na página:** meu fichário

Arquivo: `src/pages/MinhaColecaoPage.tsx`  
Dados mock: `src/data/minhaColecaoMock.ts`

```
Capa contemplativa
  "meu fichário"
  "um lugar para guardar descobertas, experiências e pequenas coleções."
  ↓
"seus universos"
  ↓
6 painéis acordeão (universos oficiais)
  ├── Laboratório — EXPANDIDO por padrão
  │   └── 12 slots visuais (mock):
  │       concluída · recebida · aguardando
  └── Cozinha, Oficina, Faz de Conta, Brincar na Rua, Dias de Chuva — recolhidos
  ↓
"também guardado por aqui"
  ├── Diário → screen diario
  └── Coleções de descoberta → screen colecoes
```

**Nesta fase:**

- Apenas visual / mock estático
- Sem persistência, sincronização ou lógica real
- Sem dashboard central (18/72, porcentagem ou barra de progresso no topo)
- Progresso aparece de forma secundária: `"X de 12 páginas guardadas"` dentro de cada universo
- Slots vazios: `"espaço reservado para futuras descobertas"` — sem cadeados

Componentes: `FicharioUniversePanel.tsx`, `CollectionPageSlot.tsx`

---

## 10. Estrutura do Ateliê

Arquivo: `src/atelierPages.tsx`

Área **complementar** — extensão do fichário e da coleção, não compete com Clube, Brincadeiras ou Meu Fichário.

```
Capa (WorldPortalLayout)
  ↓
Link Minha Caixa
  ↓
Título + tagline do portal
  ↓
"Tesouros do Mundo da Teca"
  "Pequenas coisas para guardar, trocar, colecionar
   e continuar brincando longe das telas."
  ↓
objetos do ateliê
  ↓
nota clube 30%
  ↓
Figurinhas (destaque → sub-universo figurinhas)
  ↓
seções de produtos (catálogo existente)
```

Sub-rotas preservadas: `figurinhas`, `minha-caixa`, páginas poéticas de produtos.

---

## 11. Descobertas como legado

**Fora do menu principal.** Rotas preservadas:

- `descobertas`
- `descoberta-do-dia`
- `diario` / `diario-guardar`
- `colecoes` / `colecao-*`
- `tesouros`

Acesso principal via atalhos em Meu Fichário. BottomNav destaca `minha-colecao` quando em fluxos de Diário/Coleções.

Protagonismo da coleção passou para **Minha Coleção / Meu Fichário**.

---

## 12. Arquivos principais por área

| Área | Arquivos |
|------|----------|
| **Roteamento** | `src/App.tsx` |
| **Nav** | `src/data/navigation.ts`, `src/components/BottomNav.tsx` |
| **Home** | `src/pages/Home.tsx`, `src/data/participationPlans.ts`, `src/components/PlanCard.tsx`, `src/components/ParticipationSection.tsx` |
| **Clube** | `src/pages/ClubPage.tsx`, `src/data/participationPlans.ts` |
| **Brincadeiras** | `src/data/brincadeirasCards.ts`, `src/playData.ts` |
| **Meu Fichário** | `src/pages/MinhaColecaoPage.tsx`, `src/data/minhaColecaoMock.ts`, `src/components/FicharioUniversePanel.tsx`, `src/components/CollectionPageSlot.tsx` |
| **Ateliê** | `src/atelierPages.tsx`, `src/figurinhasPage.tsx`, `src/atelierShopData.ts`, `src/atelierGoodCard.tsx` |
| **Descobertas** | `src/discoveryPages.tsx`, `src/discoveryData.ts` |
| **Visual / capas** | `src/tecaVisual.ts`, `src/worldPortal.tsx`, `src/styles/appStyles.ts` |

---

## 13. O que foi implementado

### Etapa 1 — Navegação
- Novo menu: Início · Clube · Brincadeiras · Minha Coleção · Ateliê
- Descobertas removida do menu
- Ateliê secundário no BottomNav
- Rota `minha-colecao` registrada

### Etapa 2 — Home
- Seção "O que é o Mundo da Teca?"
- Seção "Escolha como participar" (Explorador / Colecionador)
- CTA "Ver brincadeiras"
- Removido grid antigo de caminhos e universos

### Etapa 3 — Clube
- Página de planos
- Carteirinha rebaixada para posição secundária

### Correções pós-Etapa 2
- Universos removidos da Home
- Nomes oficiais em `brincadeirasCards.ts`

### Etapa 4 — Meu Fichário
- Página visual completa com acordeão de universos
- Laboratório expandido por padrão
- 12 slots mock por universo
- Atalhos Diário e Coleções

### Etapa 5 — Ateliê
- Nota "Tesouros do Mundo da Teca" no topo
- Papel complementar reforçado

---

## 14. O que ficou pendente para fases futuras

### Dados e rotas
- [ ] Alterar `playData.ts` — IDs oficiais dos universos
- [ ] Renomear assets (`natureza-capa` → `brincar-na-rua-capa`, etc.)
- [ ] Ajustar quantidade de experiências (15 → 12 por universo, se aplicável)
- [ ] Alinhar títulos internos dos universos em `PlayUniversePage`

### Meu Fichário
- [ ] Lógica real de progresso (concluída / recebida / aguardando)
- [ ] Persistência (localStorage ou backend)
- [ ] Sincronização com fichário físico (Colecionador)
- [ ] Vincular slots a experiências reais de `playData.ts`

### Produto / negócio
- [ ] Checkout
- [ ] Login / autenticação
- [ ] Assinatura Explorador / Colecionador
- [ ] Regras operacionais (12 páginas/mês, 6 meses, envios)
- [ ] Desbloqueio de experiências exclusivas

### Descobertas
- [ ] Migração completa para Meu Fichário
- [ ] Backs apontando para Fichário em vez de Descobertas
- [ ] Integrar Descoberta do dia e Tesouros no hub

### Refatoração (opcional)
- [ ] Extrair páginas restantes de `App.tsx` (`Page`, `PlayUniversePage`, etc.)
- [ ] Unificar `participationPlans` Home e Clube se desejado

---

## 15. Regras técnicas que devem ser respeitadas

1. **`playData.ts` ainda está intocado** — não alterar sem fase dedicada e aprovação.
2. **Assets não renomeados** — capas `natureza`, `arte`, `movimento` ainda usadas como imagem temporária.
3. **Rotas técnicas temporárias** — `natureza`, `arte`, `movimento` ainda existem como screens; nomes oficiais são apenas camada de exibição.
4. **Minha Coleção é visual/mock nesta fase** — sem state complexo, localStorage ou sync.
5. **Sem checkout, login, persistência ou assinatura real.**
6. **Implementar uma etapa por vez** — build entre passos.
7. **Mostrar resumo antes de seguir** para próxima etapa.
8. **Preservar identidade visual** — tipografia, cores, atmosfera, componentes `tecaVisual` / `worldPortal`.
9. **Não transformar Meu Fichário em dashboard** — progresso secundário, tom contemplativo.
10. **Ateliê permanece complementar** — não competir com Clube, Brincadeiras ou Meu Fichário.

---

## Referência rápida — conceito vs. código

| Conceito aprovado | Estado no código |
|-------------------|------------------|
| 6 universos oficiais | Nomes visuais ✅ · IDs em playData ❌ |
| 72 páginas (6×12) | Conceito ✅ · playData tem 15/universo |
| Meu Fichário | Visual mock ✅ · lógica real ❌ |
| Planos Clube | UI ✅ · checkout ❌ |
| Descobertas | Legado ✅ · migração parcial |
