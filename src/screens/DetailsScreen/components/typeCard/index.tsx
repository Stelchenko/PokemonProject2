import React, {FC} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {TypeBorderColors, TypeCardProps, TypeColors} from "./type";
import {styles} from "./style";
import Svg from "react-native-svg";

const TypeCard: FC<TypeCardProps> = props => {
  const {typeName, navigationHandler} = props
  return (
    <TouchableOpacity onPress={() => navigationHandler('TypePokemons', {typeName: typeName})} style={[styles.card, {backgroundColor: TypeColors[typeName ?? 'default'], borderColor: TypeBorderColors[typeName]}]}>
      <Text style={styles.typeName}>
        {typeName?.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

export default TypeCard