import React, {FC} from "react";
import {FlatList, LayoutAnimation} from "react-native";
import {styles} from "./style";
import PokemonCard from "../pokemonCard";
import {PokemonListViewProps} from "./type";
import {QueryResult} from "@apollo/client";

const PokemonListView: FC<PokemonListViewProps> = props => {
  const {pokemonsData, loadMore, pokemons, navigationHandler} = props
  const load = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    loadMore(pokemonsData)
  }
  const refetch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    pokemonsData.refetch()
  }

  return (
    <FlatList
      style={styles.flatList}
      data={pokemons}
      refreshing={pokemonsData.networkStatus === 4}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={() => refetch()}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={itemData => (
        <PokemonCard pokemon={itemData.item} navigationHandler={navigationHandler}/>
      )}
      numColumns={2}
      onEndReachedThreshold={0.8}
      onEndReached={() => load(pokemonsData)}
    />
  )
}

export default PokemonListView