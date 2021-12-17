import React, {FC} from "react";
import {View} from "react-native";
import {styles} from "./style";
import PokemonList from "./components/pokemonList";
import {HomeScreenProps} from "./type";

const HomeScreen: FC<HomeScreenProps> = props => {
  const {navigation} = props
  const navigationHandler = (path: string, props: {}) => {
    navigation.navigate(path, props)
  }

  return (
    <View style={styles.screen}>
      <PokemonList  navigationHandler={navigationHandler}/>
    </View>
  )
}

export default HomeScreen