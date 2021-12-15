import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import HomeStackScreen from "../PokemonProject2/src/navigation/homeStackScreen";
import {ApolloProvider} from "@apollo/client";
import {client} from "./src/config/apollo/apolloClient";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  }
}

const App = () => {

  return (
    <SafeAreaView style={styles.screen}>
      <ApolloProvider client={client}>
        <NavigationContainer theme={MyTheme}>
          <HomeStackScreen/>
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App;
