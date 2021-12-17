import React, {FC} from "react";
import {View} from "react-native";
import {styles} from "./style";
import PokemonList from "../HomeScreen/components/pokemonList";
import {TypePokemonScreenProps} from "./type";


const TypePokemonScreen: FC<TypePokemonScreenProps> = props => {
  const {navigation, route} = props
  const typeName = route.params.typeName
  const navigationHandler = (path: string, props: {}) => {
    navigation.navigate(path, props)
  }
  navigation.setOptions({title: typeName})

  return (
    <View style={styles.screen}>
      <PokemonList typeName={typeName} navigationHandler={navigationHandler}/>
    </View>
  )
}

export default TypePokemonScreen