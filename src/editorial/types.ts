/** Tipos físicos de peça editorial — reutilizáveis além da Home */

export type EditorialObjectKind =

  | "ficha-de-campo"

  | "pagina-de-fichario"

  | "envelope-de-expedicao"

  | "carta-de-expedicao"



/** Tipo curto usado pelo componente EditorialArtifact */

export type EditorialArtifactType =

  | "ficha-campo"

  | "pagina-fichario"

  | "envelope-expedicao"

  | "carta-oficial"



/** Área útil diagramada sobre o artefato — posição e dimensão por tipo */

export type EditorialContentRegion = {

  top: string

  left: string

  width: string

  height: string

}



export type EditorialObjectPigment = {

  /** Tinta principal — rótulos e tipografia */

  ink: string

}



export type EditorialObjectAssets = {

  /** WebP ilustrado — camada visual principal */

  surface: string

  width: number

  height: number

}



export type EditorialObjectComposition = {

  tilt: number

  offsetLeft?: string

  offsetRight?: string

}



export type EditorialObjectDefinition = {

  kind: EditorialObjectKind

  type: EditorialArtifactType

  label: string

  pigment: EditorialObjectPigment

  composition: EditorialObjectComposition

  assets: EditorialObjectAssets

  contentRegion: EditorialContentRegion

}


