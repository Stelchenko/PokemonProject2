import {useGetPokemonsQuery} from "../../../../queries/pokemonList/__generated__/pokemonQuery";
import DefaultActivityIndicator from "../../../../components/activityIndicator";
import {Text, View} from "react-native";
import React from "react";
import PokemonListView from "./pokemonListView";
import {QueryResult} from "@apollo/client";

const PokemonList = () => {
  const pokemonsData = useGetPokemonsQuery({variables: {offset: 0}})
  if (pokemonsData.loading) return <DefaultActivityIndicator/>
  if (pokemonsData.error) return <Text>ERROR!</Text>

  const loadMore = (data: QueryResult) => data.fetchMore({
    variables: { offset: data.data?.pokemon_v2_pokemon.length},
  })

  return (
    <View>
      <PokemonListView pokemonsData={pokemonsData} loadMore={loadMore}/>
    </View>

  )
}

export default PokemonList