import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import TypePokemonScreen from "../../screens/TypePokemonScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen options={{headerShown: true, title: 'Pokedex'}} name={'Home'} component={HomeScreen}/>
      <HomeStack.Screen options={{headerShown: true, headerTintColor: "black"}} name={'Details'} component={DetailsScreen}/>
      <HomeStack.Screen options={{headerShown: true, headerTintColor: "black"}} name={'TypePokemons'} component={TypePokemonScreen}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen