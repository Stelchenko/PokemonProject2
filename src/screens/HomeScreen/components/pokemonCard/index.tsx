import React, {FC} from "react";
import { Text } from "react-native";
import Card from "../../../../components/Card";
import {styles} from "./style";
import {PokemonCardProps} from "./type";

const PokemonCard: FC<PokemonCardProps> = props => {
  const {pokemon} = props
  return (
    <Card style={styles.container}>
      <Text>Id: {pokemon.id}</Text>
      <Text>Name: {pokemon.name}</Text>
    </Card>
  )
}

export default PokemonCard