import React, {FC} from "react";
import {Text, TouchableOpacity} from "react-native";
import {TypeBorderColors, TypeCardProps, TypeColors} from "./type";
import {styles} from "./style";

const TypeCard: FC<TypeCardProps> = props => {
  const {typeName, navigationHandler} = props
  return (
    <TouchableOpacity onPress={() => navigationHandler('TypePokemons', {typeName: typeName})} style={[styles.card, {
      backgroundColor: TypeColors[typeName ?? 'default'],
      borderColor: TypeBorderColors[typeName]
    }]}>
      <Text style={styles.typeName}>
        {typeName?.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

export default TypeCard