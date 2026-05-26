export type AtelierSubPageParent = "atelie" | "figurinhas"

export type AtelierSubPageContent = {
  parent: AtelierSubPageParent
  title: string
  poetic: string
  image: string
  noteLabel: string
  noteText: string
}

export type AtelierPoeticScreen =
  | "album-descobertas"
  | "pacotinho-folhas"
  | "pacotinho-chuva"
  | "pacotinho-quintal"
  | "pacotinho-ceu"
  | "calendario-abuh"
  | "papelaria"

export const atelierPoeticPages: Record<
  AtelierPoeticScreen,
  AtelierSubPageContent
> = {
  "album-descobertas": {
    parent: "figurinhas",
    title: "álbum das descobertas",
    poetic:
      "páginas grossas esperando figurinhas — como um caderno onde o caminho vai parar.",
    image: "/cards/atelie/album.png",
    noteLabel: "ritual de guardar",
    noteText:
      "colar devagar é parte da brincadeira. não precisa completar tudo: cada página guarda um pedaço de atenção, como folhas pressionadas entre capítulos de um livro antigo.",
  },
  "pacotinho-folhas": {
    parent: "figurinhas",
    title: "pacotinho — folhas do mundo",
    poetic:
      "pequenas imagens para guardar descobertas do caminho, como quem encontra folhas dentro de um caderno antigo.",
    image: "/cards/atelie/pacotinho-folhas.png",
    noteLabel: "como abrir",
    noteText:
      "o envelope chega fechado com um selo ilustrado. dentro, figurinhas em papel fosco — veias, bordas e formas de folhas vistas de perto. dá para colar no álbum, trocar com quem também coleciona devagar, ou guardar na gaveta até o dia certo.",
  },
  "pacotinho-chuva": {
    parent: "figurinhas",
    title: "pacotinho — coisas da chuva",
    poetic:
      "figurinhas que parecem ter sido encontradas depois da chuva miúda, ainda com cheiro de terra molhada.",
    image: "/cards/atelie/pacotinho-chuva.png",
    noteLabel: "coleção do dia cinza",
    noteText:
      "gotas, nuvens e pequenos objetos de tarde fechada. cada pacote é um pouco diferente — como a chuva, que nunca cai do mesmo jeito duas vezes. abra com calma e escolha qual imagem fica na primeira página.",
  },
  "pacotinho-quintal": {
    parent: "figurinhas",
    title: "pacotinho — quintal",
    poetic:
      "um punhado de imagens do quintal — pedras, galhos, flores caídas — como tesouros de tarde calma.",
    image: "/cards/atelie/pacotinho-quintal.png",
    noteLabel: "tesouros de perto",
    noteText:
      "o quintal também é mundo. aqui vivem coisas pequenas que a pressa não vê: um galho curvo, uma flor no chão, uma pedra que cabe na palma. as figurinhas lembram que descobrir pode acontecer sem sair de casa.",
  },
  "pacotinho-ceu": {
    parent: "figurinhas",
    title: "pacotinho — céu e vento",
    poetic:
      "figurinhas leves de nuvens, pipas e brisa — para quem olha o céu sem pressa de nomear tudo.",
    image: "/cards/atelie/pacotinho-ceu.png",
    noteLabel: "coleção do alto",
    noteText:
      "papéis claros, traços suaves, sensação de ar. ideal para quem gosta de deitar no chão e inventar formas nas nuvens. troque as repetidas, guarde as favoritas, complete o álbum quando quiser — sem placar, sem corrida.",
  },
  "calendario-abuh": {
    parent: "atelie",
    title: "calendário de pequenas coisas",
    poetic:
      "dias pequenos também merecem ser guardados — um calendário para acompanhar o ano devagar.",
    image: "/cards/atelie/calendario-abuh.png",
    noteLabel: "ABUH × Mundo da Teca",
    noteText:
      "dois universos que acreditam em olhar devagar se encontram nesta peça de mesa. imagens contemplativas, papel espesso, argola de linho. não é publi — é convite para marcar o tempo com cuidado, mês após mês.",
  },
  papelaria: {
    parent: "atelie",
    title: "papelaria",
    poetic: "uma gaveta de tesouros — papéis, fitas e coleções que pedem tempo.",
    image: "/cards/atelie/papelaria.png",
    noteLabel: "canto do ateliê",
    noteText:
      "a papelaria não é outra loja: é um canto do ateliê. para levar algo pra casa, volte à página principal e escolha com calma o que combina com o seu dia.",
  },
}
