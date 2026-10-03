import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Itens() {
  const [quantidadeSacola, setQuantidadeSacola] = useState(0);

  const listaProdutos = [
    { id: '1', nome: 'X-Salada', preco: 'R$ 22,00', imagem: require('../../assets/xrudo.jpg') },
    { id: '2', nome: 'Batata Frita', preco: 'R$ 12,00', imagem: require('../../assets/saladoaz.jpg') },
    { id: '3', nome: 'Refrigerante', preco: 'R$ 8,00', imagem: require('../../assets/pepsi.jpg') },
  ];

  return (
    <ScrollView style={estilos.container} showsVerticalScrollIndicator={false}>
      <View style={estilos.topoLista}>
        <Text style={estilos.titulo}>Outros Lanches</Text>
        <Text style={estilos.sacola}>🛒 Sacola: {quantidadeSacola}</Text>
      </View>
      
      {listaProdutos.map((produto) => (
        <View key={produto.id} style={estilos.itemContainer}>
          <Image source={produto.imagem} style={estilos.fotoProduto} />
          
          <View style={estilos.infoContainer}>
            <Text style={estilos.nomeProduto} numberOfLines={1}>{produto.nome}</Text>
            <Text style={estilos.precoProduto}>{produto.preco}</Text>
          </View>

          <TouchableOpacity 
            style={estilos.botaoComprar} 
            onPress={() => setQuantidadeSacola(quantidadeSacola + 1)}
          >
            <Text style={estilos.textoBotao}>Comprar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
 
const estilos = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 16, 
    backgroundColor: '#fff' 
  },
  topoLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ECECEC',
  },
  titulo: { 
    fontSize: 20, 
    color: '#464646',
    fontWeight: 'bold',
  },
  sacola: { 
    fontSize: 14, 
    color: '#2A9F85', 
    fontWeight: 'bold',
  },
  itemContainer: { 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA', 
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    width: '100%', 
  },
  fotoProduto: { 
    width: 55, 
    height: 55, 
    borderRadius: 27.5, 
  },
  infoContainer: { 
    flex: 1, 
    marginHorizontal: 14,
  },
  nomeProduto: { 
    fontSize: 16, 
    color: '#464646',
    fontWeight: 'bold',
  },
  precoProduto: { 
    fontSize: 14, 
    color: '#2A9F85', 
    marginTop: 4,
    fontWeight: 'bold',
  },
  botaoComprar: { 
    backgroundColor: '#2A9F85', 
    paddingVertical: 8, 
    paddingHorizontal: 14, 
    borderRadius: 6,
    elevation: 2, 
    alignItems: 'center', 
  },
  textoBotao: { 
    color: '#fff', 
    fontSize: 14,
    fontWeight: 'bold',
  }
});