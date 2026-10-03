import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import lanche from '../../assets/saladoaz.jpg';   // coloque uma foto de hambúrguer ou lanche
import logo from '../../assets/xrudo.jpg';       // pode usar a mesma logo

const { width, height } = Dimensions.get('window');

export default function Produto() {
  return (
    <View style={estilos.topo}>
      <Image 
        source={lanche} 
        style={estilos.imagemTopo} 
        resizeMode="cover" 
      />
      
      <Text style={estilos.texto}>Detalhe do Pedido</Text>

      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>X-Burger Especial</Text> 

        <View style={estilos.loja}>
          <Image source={logo} style={estilos.imagemLogo} />
          <Text style={estilos.nomeLoja}>Lanchonete do Ze</Text> 
        </View>

        <Text style={estilos.descricao}>
          Hamburguer artesanal com queijo, alface, tomate e molho especial da casa. Preparado na hora!
        </Text>
        <Text style={estilos.preco}>R$ 28,90</Text>
      </View>
    </View> 
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
  },
  imagemTopo: {
    width: width,
    height: height * 0.3,
  },
  texto: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
    fontWeight: 'bold',
    padding: 16,
  },
  conteudo: {
    paddingVertical: 8,
    paddingHorizontal: 16, 
  },
  titulo: {
    fontSize: 26,
    lineHeight: 42, 
    color: '#464646',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  loja: {
    flexDirection: 'row',   
    alignItems: 'center',
    paddingVertical: 12,
  },
  imagemLogo: {
    width: 32,
    height: 32,
  },
  nomeLoja: {
    color: '#464646',
    fontSize: 16,
    lineHeight: 26, 
    marginLeft: 12,
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 42,
    marginTop: 8,
  },
});