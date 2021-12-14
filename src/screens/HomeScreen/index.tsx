import React from "react";
import {View} from "react-native";
import {styles} from "./style";
import PokemonList from "./components/pokemonList";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <PokemonList/>
    </View>
  )
}

export default HomeScreen