import {PokemonListItem} from "../../types/pokemon";

export type DetailsScreenProps = {
  route: { params: { pokemon: PokemonListItem } },
  navigation: {
    setOptions: (options: {title: string}) => void
  }
}