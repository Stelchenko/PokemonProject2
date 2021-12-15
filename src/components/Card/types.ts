import {PokemonListItem} from "../../types/pokemon";

export type CardProps = {
  style: {},
  navigationHandler: (path: string, props: {}) => void,
  pokemon: PokemonListItem
}