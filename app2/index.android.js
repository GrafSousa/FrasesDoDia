//Import
import React from 'react';
import { 
  Text,
  AppRegistry,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

//Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#548530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);
  
  var frases = Array();
  frases[0] = 'Estou sempre alegre. Essa é a melhor maneira de resolver os problemas da vida';
  frases[1] = 'O tempo dura bastante para aqueles que sabem aproveitá-lo';
  frases[2] = 'Se você encontrar um caminho sem obstáculos, ele provavelmente não leva a lugar nenhum';
  frases[3] = 'Não existe um caminho para a felicidade. A felicidade é o caminho';
  frases[4] = 'APP  criado no curso Desenvolvedor Multiplataforma Android/IOS com React & Redux';

  var fraseEscolhida = frases[numeroAleatorio];
  Alert.alert(null,fraseEscolhida);
};

//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity 
      onPress={gerarNovaFrase}
      style={botao}>
        <Text style={textoBotao}>Nova Frase </Text>
      </TouchableOpacity>
    </View>
    );
};

//Renderizar para o dispositivo;
AppRegistry.registerComponent('app2', () => App);
