

export type AbilityEffect = {
  effect: string
}

export type Ability = {
  name: string,
  abilityEffects: AbilityEffect[]
}

export type PokemonListItem = {
  id: number,
  name: string,
  image: string,
  height?: number | null | undefined,
  weight?: number | null | undefined,
}


export type PokemonQueryItem = {
  id: number,
  name: string,
  height?: number | null | undefined,
  weight?: number | null | undefined,
}