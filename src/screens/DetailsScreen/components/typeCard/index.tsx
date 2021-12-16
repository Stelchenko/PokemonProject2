import React, {FC} from "react";
import {View, Text} from "react-native";
import {TypeBorderColors, TypeCardProps, TypeColors} from "./type";
import {styles} from "./style";
import Svg from "react-native-svg";

const TypeCard: FC<TypeCardProps> = props => {
  const {typeName} = props
  return (
    <View style={[styles.card, {backgroundColor: TypeColors[typeName ?? 'default'], borderColor: TypeBorderColors[typeName]}]}>
      <Text style={styles.typeName}>
        {typeName?.toUpperCase()}
      </Text>
    </View>
  )
}

export default TypeCard