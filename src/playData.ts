export type PlayUniverseId =
  | "brincar-na-rua"
  | "dias-de-chuva"
  | "faz-de-conta"
  | "oficina"
  | "laboratorio"
  | "cozinha"

export type PlayExperienceDetail = {
  atmosphericVideo: string
  collectibleArt: string
  materialsExpanded: string
  rules: string
  howToStart: string
  tecaTouch: string
  whatIf: string
}

export type PlayExperience = {
  id: string
  title: string
  invite: string
  image: string
  materials: string
  people: string
  place: string
  isFree: boolean
  detail: PlayExperienceDetail
}

export type PlayUniverse = {
  id: PlayUniverseId
  title: string
  intro: string
  poetic: string
  image: string
  noteText: string
  experiences: PlayExperience[]
}

type ExperienceSeed = {
  id: string
  title: string
  invite: string
  materials: string
  people: string
  place: string
}

const universeCovers: Record<PlayUniverseId, string> = {
  "brincar-na-rua": "/cards/brincadeiras/brincar-na-rua.png",
  "dias-de-chuva": "/cards/brincadeiras/dias-de-chuva.png",
  "faz-de-conta": "/cards/brincadeiras/faz-de-conta.png",
  oficina: "/cards/brincadeiras/oficina.png",
  laboratorio: "/cards/brincadeiras/laboratorio.png",
  cozinha: "/cards/brincadeiras/cozinha.png",
}

function experienceImage(universeId: PlayUniverseId, experienceId: string): string {
  return `/cards/brincadeiras/experiencias/${universeId}/${experienceId}.png`
}

function placeholderDetail(seed: ExperienceSeed): PlayExperienceDetail {
  return {
    atmosphericVideo: "",
    collectibleArt: "",
    materialsExpanded: seed.materials,
    rules: "em breve, com calma e sem pressa.",
    howToStart: "em breve, passo a passo delicado.",
    tecaTouch: "em breve, um gesto da Teca.",
    whatIf: "em breve, variações para continuar brincando.",
  }
}

function buildExperiences(
  universeId: PlayUniverseId,
  seeds: ExperienceSeed[]
): PlayExperience[] {
  return seeds.map((seed, index) => ({
    ...seed,
    image: experienceImage(universeId, seed.id),
    isFree: index < 3,
    detail: placeholderDetail(seed),
  }))
}

const brincarNaRuaSeeds: ExperienceSeed[] = [
  {
    id: "caca-ao-vento",
    title: "caça ao vento",
    invite: "siga um papel ou uma folha até ela parar.",
    materials: "papel, folha seca ou fita leve",
    people: "sozinho ou em dupla",
    place: "calçada, praça, quintal",
  },
  {
    id: "sombras-no-chao",
    title: "sombras no chão",
    invite: "desenhe com o corpo a luz da tarde.",
    materials: "luz do sol, calçada ou terra",
    people: "sozinho ou com um amigo",
    place: "rua quieta, fim de tarde",
  },
  {
    id: "pedras-especiais",
    title: "pedras especiais",
    invite: "escolha três pedras diferentes e guarde histórias.",
    materials: "pedras, bolsa ou bolso",
    people: "sozinho",
    place: "caminho, parque, calçada",
  },
  {
    id: "giz-gigante",
    title: "giz gigante",
    invite: "desenhe um mapa enorme no chão.",
    materials: "giz de calçada ou giz grosso",
    people: "família ou amigos",
    place: "calçada ampla",
  },
  {
    id: "escuta-do-bairro",
    title: "escuta do bairro",
    invite: "feche os olhos e conte quantos sons ouviu.",
    materials: "atenção, um minuto de silêncio",
    people: "sozinho ou com adulto",
    place: "degrau, banco, janela aberta",
  },
  {
    id: "mapa-da-calcada",
    title: "mapa da calçada",
    invite: "siga rachaduras como rios em um mapa antigo.",
    materials: "olhos atentos, pés descalços",
    people: "sozinho",
    place: "calçada, pátio",
  },
  {
    id: "bolhas-ao-vento",
    title: "bolhas ao vento",
    invite: "veja para onde o vento leva cada bolha.",
    materials: "sabão de bolha, varinha",
    people: "criança e adulto",
    place: "quintal, praça",
  },
  {
    id: "mensagem-no-alto",
    title: "mensagem no alto",
    invite: "deixe um desenho onde o vento possa encontrar.",
    materials: "papel, barbante, pedra pequena",
    people: "sozinho",
    place: "muro baixo, grade, galho",
  },
  {
    id: "piquenique-minimo",
    title: "piquenique mínimo",
    invite: "um lanche simples num degrau, comendo devagar.",
    materials: "fruta, biscoito, toalha pequena",
    people: "dupla ou família",
    place: "degrau, banco da praça",
  },
  {
    id: "fila-de-pegadas",
    title: "fila de pegadas",
    invite: "ande só na sombra ou só nas pedras.",
    materials: "regra inventada, imaginação",
    people: "sozinho",
    place: "rua arborizada",
  },
  {
    id: "bolsa-de-folhas",
    title: "bolsa de folhas",
    invite: "colete folhas de formatos diferentes, como um museu.",
    materials: "saco de pano, folhas secas",
    people: "sozinho",
    place: "árvores na calçada",
  },
  {
    id: "fortaleza-de-galho",
    title: "fortaleza de galho",
    invite: "gravetos e pedras viram muralha baixa no chão.",
    materials: "gravetos, pedras, folhas",
    people: "sozinho ou em dupla",
    place: "terra sob árvore",
  },
  {
    id: "nuvem-deitada",
    title: "nuvem deitada",
    invite: "deite-se e diga o que a nuvem parece agora.",
    materials: "céu, tempo sem pressa",
    people: "sozinho ou com adulto",
    place: "grama, praça",
  },
  {
    id: "rio-de-pedras",
    title: "rio de pedras",
    invite: "faça um caminho que serpenteia no chão.",
    materials: "pedras de tamanhos variados",
    people: "sozinho",
    place: "terra, areia, calçada",
  },
  {
    id: "presente-para-passaro",
    title: "presente para o passarinho",
    invite: "deixe sementes num prato e observe de longe.",
    materials: "sementes, prato raso",
    people: "criança e adulto",
    place: "parapeito, quintal",
  },
]

const diasDeChuvaSeeds: ExperienceSeed[] = [
  {
    id: "gotas-na-vidraça",
    title: "gotas na vidraça",
    invite: "siga uma gota até ela sumir.",
    materials: "janela, atenção",
    people: "sozinho",
    place: "quarto, sala",
  },
  {
    id: "barco-de-papel",
    title: "barco de papel",
    invite: "dobre um barco e veja se ele aguenta uma poça.",
    materials: "papel, tesoura opcional",
    people: "criança e adulto",
    place: "cozinha, varanda",
  },
  {
    id: "chuva-desenhada",
    title: "chuva desenhada",
    invite: "desenhe a chuva sem pressa de acertar.",
    materials: "lápis, giz, papel",
    people: "sozinho",
    place: "mesa da casa",
  },
  {
    id: "som-da-telhado",
    title: "som do telhado",
    invite: "invente uma palavra para o som da chuva.",
    materials: "ouvidos atentos",
    people: "sozinho",
    place: "sob o telhado",
  },
  {
    id: "janela-de-nevoa",
    title: "janela de névoa",
    invite: "desenhe no vidro antes que a névoa vá embora.",
    materials: "vidro embaçado, dedo",
    people: "sozinho",
    place: "janela",
  },
  {
    id: "casa-de-cobertor",
    title: "casa de cobertor",
    invite: "monte um abrigo baixo e quente.",
    materials: "cobertores, travesseiros, cadeiras",
    people: "família",
    place: "sala, quarto",
  },
  {
    id: "livro-lento",
    title: "livro lento",
    invite: "leia poucas páginas com voz calma.",
    materials: "livro ilustrado",
    people: "adulto e criança",
    place: "sofá, cama",
  },
  {
    id: "cha-de-ervas",
    title: "chá de ervas",
    invite: "segure a xícara com as duas mãos e espere.",
    materials: "xícara, chá suave",
    people: "família",
    place: "mesa da cozinha",
  },
  {
    id: "corredor-de-luz",
    title: "corredor de luz",
    invite: "ande pela casa devagar, como num museu pequeno.",
    materials: "luz baixa, passos lentos",
    people: "sozinho",
    place: "corredor, casa",
  },
  {
    id: "lista-de-cores",
    title: "lista de cores",
    invite: "encontre cinco tons de cinza na casa.",
    materials: "olhos atentos",
    people: "sozinho ou em dupla",
    place: "cômodos da casa",
  },
  {
    id: "quarto-sem-pressa",
    title: "quarto sem pressa",
    invite: "um canto quieto, um objeto, tempo para inventar.",
    materials: "objeto escolhido, silêncio",
    people: "sozinho",
    place: "quarto",
  },
  {
    id: "desenho-do-silencio",
    title: "desenho do silêncio",
    invite: "desenhe o que o silêncio parece hoje.",
    materials: "papel, lápis de cor",
    people: "sozinho",
    place: "mesa baixa",
  },
  {
    id: "ritual-de-arrumar",
    title: "ritual de arrumar",
    invite: "organize um canto pequeno com carinho.",
    materials: "caixa, tecido, objetos",
    people: "sozinho",
    place: "quarto, canto da sala",
  },
  {
    id: "mapa-do-travesseiro",
    title: "mapa do travesseiro",
    invite: "monte montanhas com tecidos e viaje sem sair.",
    materials: "travesseiros, lençóis",
    people: "sozinho",
    place: "cama, tapete",
  },
  {
    id: "janela-para-dentro",
    title: "janela para dentro",
    invite: "observe o que muda quando ninguém fala.",
    materials: "atenção, caderno opcional",
    people: "sozinho",
    place: "janela, poltrona",
  },
]

const fazDeContaSeeds: ExperienceSeed[] = [
  {
    id: "loja-vazia",
    title: "loja vazia",
    invite: "objetos na mesa, preços inventados, moedas de folha.",
    materials: "objetos da casa, papel",
    people: "sozinho ou em dupla",
    place: "mesa, sala",
  },
  {
    id: "consultorio-de-boneca",
    title: "consultório de boneca",
    invite: "cure com carinho o que não está doente de verdade.",
    materials: "boneca, pano, caixa",
    people: "sozinho",
    place: "quarto, tapete",
  },
  {
    id: "viagem-de-onibus",
    title: "viagem de ônibus",
    invite: "cadeiras em fila, bilhete desenhado, paisagem na janela.",
    materials: "cadeiras, papel, lápis",
    people: "família",
    place: "sala",
  },
  {
    id: "restaurante-minimo",
    title: "restaurante mínimo",
    invite: "sirva algo simples como se fosse banquete.",
    materials: "pratos, guardanapo, comida leve",
    people: "criança e adulto",
    place: "mesa da cozinha",
  },
  {
    id: "radio-imaginario",
    title: "rádio imaginário",
    invite: "anuncie notícias do dia com voz baixa.",
    materials: "caixa, botões desenhados",
    people: "sozinho",
    place: "cantinho da casa",
  },
  {
    id: "telefone-de-barbante",
    title: "telefone de barbante",
    invite: "conversa longa com quem está no outro cômodo.",
    materials: "barbante, copos de papel",
    people: "dupla",
    place: "dois cômodos",
  },
  {
    id: "museu-da-sala",
    title: "museu da sala",
    invite: "três objetos apresentados como obras raras.",
    materials: "objetos escolhidos, etiquetas de papel",
    people: "sozinho ou família",
    place: "sala",
  },
  {
    id: "jornal-da-tarde",
    title: "jornal da tarde",
    invite: "escreva três notícias que aconteceram hoje em casa.",
    materials: "papel, lápis",
    people: "sozinho",
    place: "mesa",
  },
  {
    id: "festa-surpresa",
    title: "festa surpresa",
    invite: "celebração pequena para ninguém em especial.",
    materials: "fita, desenho, lanche",
    people: "família",
    place: "sala, quarto",
  },
  {
    id: "mapa-do-reino",
    title: "mapa do reino",
    invite: "desenhe um reino onde nada é urgente.",
    materials: "papel grande, lápis de cor",
    people: "sozinho",
    place: "chão, mesa",
  },
  {
    id: "caixa-de-historias",
    title: "caixa de histórias",
    invite: "três objetos decidem o começo da história.",
    materials: "caixa, objetos surpresa",
    people: "sozinho",
    place: "tapete, quarto",
  },
  {
    id: "voz-baixinha",
    title: "voz baixinha",
    invite: "conte uma história que só você escuta.",
    materials: "imaginação, silêncio",
    people: "sozinho",
    place: "canto quieto",
  },
  {
    id: "guardiao-do-tempo",
    title: "guardião do tempo",
    invite: "acompanhe a luz mudar sem pressa.",
    materials: "janela, relógio opcional",
    people: "sozinho",
    place: "quarto, varanda",
  },
  {
    id: "espelho-de-pensamentos",
    title: "espelho de pensamentos",
    invite: "invente um apelido novo só para hoje.",
    materials: "espelho, sorriso",
    people: "sozinho",
    place: "banheiro, quarto",
  },
  {
    id: "caminho-de-meias",
    title: "caminho de meias",
    invite: "ande pelo quarto como se cada passo fosse uma página.",
    materials: "meias ou pés descalços",
    people: "sozinho",
    place: "quarto",
  },
]

const oficinaSeeds: ExperienceSeed[] = [
  {
    id: "recorte-lento",
    title: "recorte lento",
    invite: "corte formas simples sem pressa de ficar perfeito.",
    materials: "papel, tesoura sem ponta",
    people: "criança e adulto",
    place: "mesa",
  },
  {
    id: "colagem-suave",
    title: "colagem suave",
    invite: "cole pedaços como quem monta um sonho fragmentado.",
    materials: "papel colorido, cola, pincel",
    people: "sozinho ou em dupla",
    place: "ateliê da mesa",
  },
  {
    id: "pincel-de-dedo",
    title: "pincel de dedo",
    invite: "pinte manchas que parecem nuvens.",
    materials: "tinta atóxica, papel grosso",
    people: "criança e adulto",
    place: "mesa protegida",
  },
  {
    id: "carimbo-caseiro",
    title: "carimbo caseiro",
    invite: "batata, esponja ou papelão viram marcas.",
    materials: "esponja, tinta, papel",
    people: "família",
    place: "cozinha ou sala",
  },
  {
    id: "mini-escultura",
    title: "mini escultura",
    invite: "modele algo que caiba na palma da mão.",
    materials: "massa de modelar, argila",
    people: "sozinho",
    place: "mesa baixa",
  },
  {
    id: "caixa-surpresa",
    title: "caixa surpresa",
    invite: "transforme uma caixa em casa com janela e porta.",
    materials: "caixa de papelão, cola, giz",
    people: "criança e adulto",
    place: "chão, sala",
  },
  {
    id: "mesa-de-restos",
    title: "mesa de restos",
    invite: "sobras bonitas viram um painel novo.",
    materials: "retalhos, fios, botões",
    people: "sozinho",
    place: "mesa",
  },
  {
    id: "torre-de-caixa",
    title: "torre de caixa",
    invite: "empilhe sem medo de cair. cair também ensina.",
    materials: "caixas, fita crepe",
    people: "sozinho ou dupla",
    place: "sala, quarto",
  },
  {
    id: "ponte-de-papelao",
    title: "ponte de papelão",
    invite: "ligue duas mesas com uma ponte que aguente um carrinho.",
    materials: "papelão, fita",
    people: "criança e adulto",
    place: "entre móveis",
  },
  {
    id: "casa-com-janela",
    title: "casa com janela",
    invite: "recorte uma janela e veja a luz entrar.",
    materials: "caixa, estilete com adulto",
    people: "família",
    place: "mesa, chão",
  },
  {
    id: "no-desajeitado",
    title: "nó desajeitado",
    invite: "amarre um nó e observe. imperfeito também serve.",
    materials: "barbante, corda leve",
    people: "sozinho",
    place: "sofá, tapete",
  },
  {
    id: "pulseira-lenta",
    title: "pulseira lenta",
    invite: "trança simples, feita com calma.",
    materials: "lã, barbante colorido",
    people: "adulto e criança",
    place: "mesa",
  },
  {
    id: "fantoche-de-meia",
    title: "fantoche de meia",
    invite: "dê olhos e voz a um pano com história.",
    materials: "meia, botões, lã",
    people: "família",
    place: "sala",
  },
  {
    id: "fortaleza-quente",
    title: "fortaleza quente",
    invite: "cobertores formam muralhas macias.",
    materials: "cobertores, travesseiros",
    people: "família",
    place: "sala",
  },
  {
    id: "bandeira-de-pano",
    title: "bandeira de pano",
    invite: "uma tira de tecido marca um território imaginário.",
    materials: "pano, graveto, barbante",
    people: "sozinho",
    place: "quintal, quarto",
  },
]

const laboratorioSeeds: ExperienceSeed[] = [
  {
    id: "agua-colorida",
    title: "água colorida",
    invite: "misture cores devagar e veja a água mudar.",
    materials: "água, corante natural ou guache",
    people: "criança e adulto",
    place: "pia, mesa",
  },
  {
    id: "bolha-de-sabao",
    title: "bolha de sabão",
    invite: "qual bolha dura mais? observe sem competir.",
    materials: "sabão, água, arame ou canudo",
    people: "sozinho ou dupla",
    place: "varanda, quintal",
  },
  {
    id: "luz-e-sombra",
    title: "luz e sombra",
    invite: "aponte uma lanterna e veja a sombra dançar.",
    materials: "lanterna, parede clara",
    people: "adulto e criança",
    place: "quarto escuro",
  },
  {
    id: "papel-que-absorve",
    title: "papel que absorve",
    invite: "gota a gota, veja o papel mudar de cor.",
    materials: "papel absorvente, água, corante",
    people: "criança e adulto",
    place: "mesa",
  },
  {
    id: "som-do-vidro",
    title: "som do vidro",
    invite: "toque copos com cuidado e escute tons diferentes.",
    materials: "copos de vidro, água",
    people: "família",
    place: "mesa da cozinha",
  },
  {
    id: "terra-em-pote",
    title: "terra em pote",
    invite: "enterre uma semente e espere sem ansiedade.",
    materials: "vaso, terra, semente",
    people: "criança e adulto",
    place: "varanda, janela",
  },
  {
    id: "vento-na-bandeja",
    title: "vento na bandeja",
    invite: "sopre confete de papel e veja o padrão.",
    materials: "papel picado, bandeja",
    people: "sozinho",
    place: "mesa",
  },
  {
    id: "gelatina-tremula",
    title: "gelatina trêmula",
    invite: "observe algo mole balançar devagar.",
    materials: "gelatina preparada, tigela",
    people: "adulto e criança",
    place: "cozinha",
  },
  {
    id: "pergunta-no-caderno",
    title: "pergunta no caderno",
    invite: "escreva uma pergunta pequena e deixe o dia responder.",
    materials: "caderno, lápis",
    people: "sozinho",
    place: "mesa, janela",
  },
  {
    id: "ima-curioso",
    title: "ímã curioso",
    invite: "o que o ímã chama para perto?",
    materials: "ímã, clipes, moedas",
    people: "sozinho",
    place: "mesa",
  },
  {
    id: "copo-de-agua",
    title: "copo de água",
    invite: "veja o que flutua e o que afunda, sem explicar tudo.",
    materials: "copo, água, objetos leves",
    people: "criança e adulto",
    place: "pia, mesa",
  },
  {
    id: "cheiro-secreto",
    title: "cheiro secreto",
    invite: "adivinhe o que está no pote só pelo cheiro.",
    materials: "potinhos, especiarias, frutas",
    people: "família",
    place: "cozinha",
  },
  {
    id: "barulho-da-arvore",
    title: "barulho da árvore",
    invite: "encoste o ouvido no tronco e escute por dentro.",
    materials: "árvore, atenção",
    people: "sozinho com adulto",
    place: "quintal, praça",
  },
  {
    id: "semente-no-vaso",
    title: "semente no vaso",
    invite: "plante e volte amanhã. a espera faz parte.",
    materials: "vaso, terra úmida, semente",
    people: "criança e adulto",
    place: "varanda",
  },
  {
    id: "lago-de-pau",
    title: "lago de pau",
    invite: "bacia com água, gravetos como peixes, calma total.",
    materials: "bacia, água, gravetos",
    people: "sozinho",
    place: "quintal, varanda",
  },
]

const cozinhaSeeds: ExperienceSeed[] = [
  {
    id: "mistura-lenta",
    title: "mistura lenta",
    invite: "mexa devagar e observe como a textura muda.",
    materials: "tigela, colher, ingredientes simples",
    people: "criança e adulto",
    place: "bancada",
  },
  {
    id: "bolinha-de-massa",
    title: "bolinha de massa",
    invite: "forme uma bolinha e deixe marcas com os dedos.",
    materials: "massa de pão ou massinha",
    people: "sozinho",
    place: "mesa da cozinha",
  },
  {
    id: "cheiro-da-terra",
    title: "cheiro da cozinha",
    invite: "feche os olhos e nomeie três cheiros do momento.",
    materials: "especiarias, frutas, pão",
    people: "família",
    place: "cozinha",
  },
  {
    id: "fruta-desenhada",
    title: "fruta desenhada",
    invite: "corte ao meio e desenhe o interior que apareceu.",
    materials: "fruta, faca com adulto, papel",
    people: "criança e adulto",
    place: "mesa",
  },
  {
    id: "mesa-posta",
    title: "mesa posta",
    invite: "arrume um prato bonito para uma refeição pequena.",
    materials: "prato, guardanapo, talher",
    people: "sozinho ou família",
    place: "mesa",
  },
  {
    id: "receita-sussurrada",
    title: "receita sussurrada",
    invite: "invente uma receita com três ingredientes e nome poético.",
    materials: "ingredientes simples, caderno",
    people: "criança e adulto",
    place: "cozinha",
  },
  {
    id: "gelo-misterioso",
    title: "gelo misterioso",
    invite: "observe o gelo derreter gota por gota.",
    materials: "cubos de gelo, tigela",
    people: "sozinho",
    place: "mesa, pia",
  },
  {
    id: "semente-no-pao",
    title: "semente no pão",
    invite: "sementes como estrelas em céu de farinha.",
    materials: "farinha, sementes, água",
    people: "família",
    place: "bancada",
  },
  {
    id: "cha-de-ervas",
    title: "chá de ervas",
    invite: "espere a água esfriar um pouco antes de beber.",
    materials: "ervas, água quente com adulto",
    people: "família",
    place: "mesa",
  },
  {
    id: "guardar-o-restinho",
    title: "guardar o restinho",
    invite: "sobrou um pouco? guarde com carinho para depois.",
    materials: "pote pequeno, papel",
    people: "criança e adulto",
    place: "cozinha",
  },
  {
    id: "bolo-minimo",
    title: "bolo mínimo",
    invite: "assar pouco, comer devagar, cheirar antes.",
    materials: "ingredientes básicos, forma pequena",
    people: "família",
    place: "forno com adulto",
  },
  {
    id: "salada-de-cores",
    title: "salada de cores",
    invite: "corte pedaços que parecem um arco-íris quieto.",
    materials: "legumes crus, tábua",
    people: "criança e adulto",
    place: "bancada",
  },
  {
    id: "manteiga-macia",
    title: "manteiga macia",
    invite: "espalhe devagar em torrada ainda quente.",
    materials: "pão, manteiga",
    people: "adulto e criança",
    place: "mesa do café",
  },
  {
    id: "sopa-de-historia",
    title: "sopa de história",
    invite: "cada ingrediente entra com um nome inventado.",
    materials: "legumes, água, panela",
    people: "família",
    place: "fogão com adulto",
  },
  {
    id: "copo-medidor",
    title: "copo medidor",
    invite: "meça com calma, como quem segue uma receita antiga.",
    materials: "copo medidor, farinha ou arroz",
    people: "criança e adulto",
    place: "mesa",
  },
]

export const playUniverses: Record<PlayUniverseId, PlayUniverse> = {
  "brincar-na-rua": {
    id: "brincar-na-rua",
    title: "brincar na rua",
    intro: "aventuras do lado de fora",
    poetic: "o lado de fora guarda aventuras que não cabem na tela.",
    image: universeCovers["brincar-na-rua"],
    noteText: "saia sem pressa. o bairro também é um mapa.",
    experiences: buildExperiences("brincar-na-rua", brincarNaRuaSeeds),
  },
  "dias-de-chuva": {
    id: "dias-de-chuva",
    title: "dias de chuva",
    intro: "brincadeiras para dentro de casa",
    poetic: "quando a chuva bate na janela, a casa vira outro mundo.",
    image: universeCovers["dias-de-chuva"],
    noteText: "luz baixa, passos lentos, brincadeiras que cabem no quarto.",
    experiences: buildExperiences("dias-de-chuva", diasDeChuvaSeeds),
  },
  "faz-de-conta": {
    id: "faz-de-conta",
    title: "faz de conta",
    intro: "mundos imaginários e histórias inventadas",
    poetic: "mundos inventados nascem de objetos comuns e voz baixa.",
    image: universeCovers["faz-de-conta"],
    noteText: "deixe a criança conduzir a história, você só acompanha.",
    experiences: buildExperiences("faz-de-conta", fazDeContaSeeds),
  },
  oficina: {
    id: "oficina",
    title: "oficina",
    intro: "coisas feitas com as mãos",
    poetic: "fazer com as próprias mãos deixa a tarde mais presente.",
    image: universeCovers.oficina,
    noteText: "ferramentas leves, materiais simples, tempo generoso.",
    experiences: buildExperiences("oficina", oficinaSeeds),
  },
  laboratorio: {
    id: "laboratorio",
    title: "laboratório",
    intro: "experiências suaves e curiosas",
    poetic: "perguntas pequenas merecem experimentos suaves.",
    image: universeCovers.laboratorio,
    noteText: "observe o que muda devagar, sem querer explicar tudo.",
    experiences: buildExperiences("laboratorio", laboratorioSeeds),
  },
  cozinha: {
    id: "cozinha",
    title: "cozinha",
    intro: "misturas e descobertas",
    poetic: "misturar, cheirar e esperar ensina paciência nas mãos.",
    image: universeCovers.cozinha,
    noteText: "receitas simples, sem pressa e com adulto por perto.",
    experiences: buildExperiences("cozinha", cozinhaSeeds),
  },
}

export function isPlayUniverseScreen(screen: string): screen is PlayUniverseId {
  return screen in playUniverses
}
