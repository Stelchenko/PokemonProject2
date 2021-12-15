import React, {FC} from "react";
import {Image, Text} from "react-native";
import Card from "../../../../components/Card";
import {styles} from "./style";
import {PokemonCardProps} from "./type";

const PokemonCard: FC<PokemonCardProps> = props => {
  const {pokemon, navigationHandler} = props
  return (
    <Card pokemon={pokemon} navigationHandler={navigationHandler} style={styles.container}>
      <Image style={{width: '90%', height: '90%',}} source={{uri: pokemon.image}}/>
      <Text>{pokemon.name}</Text>
    </Card>


  )
}

export default PokemonCard