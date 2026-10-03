import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Produto from './src/Telas/produto';
import Itens from './src/Telas/items';

export default function App() {
  return (
    <View style={estilos.container}>
      <Produto />
      <Itens />
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
