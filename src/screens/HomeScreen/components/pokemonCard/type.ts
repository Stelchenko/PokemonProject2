import {PokemonListItem} from "../../../../types/pokemon";

export type PokemonCardProps = {
  pokemon: PokemonListItem,
  navigationHandler: (path: string, props: {}) => void,
}