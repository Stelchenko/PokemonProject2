/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import {ApolloClient, ApolloProvider, gql, InMemoryCache} from '@apollo/client';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import HomeStackScreen from "../PokemonProject2/src/navigation/homeStackScreen";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  }
}

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });

// const GET_POKEMONS = gql`
//   query GetPokemons {
//     pokemon_v2_pokemon {
//       name
//       id
//     }
//   }
// `;

const App = () => {

  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer theme={MyTheme}>
        <HomeStackScreen/>
      </NavigationContainer>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App;
