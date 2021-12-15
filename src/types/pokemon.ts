import {Pokemon_V2_Pokemonability} from "../__generated__/types";

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
  abilities: Pokemon_V2_Pokemonability[]
}


export type PokemonQueryItem = {
  id: number,
  name: string,
  height?: number | null | undefined,
  weight?: number | null | undefined,
  pokemon_v2_pokemonabilities: Pokemon_V2_Pokemonability[]
}