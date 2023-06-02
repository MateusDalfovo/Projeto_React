import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>

    <Image
        style={styles.logo}
        source={require('../assets/WSL-Logo.png')}
      />

<Text style={styles.nome}>WSL</Text>

    <Text style={styles.texto}>O surfe ou surf é um esporte feito na superfície (seu nome provém da palavra inglesa “surface”) da água. Basicamente, consiste no deslize pelas ondas do mar através de uma prancha. O surfe é originário da Polinésia, um conjunto de ilhas do Pacífico.</Text>  

      <Text style={styles.letras}>Index</Text>
      <Link href="/sobre">Ir para Sobre</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  letras:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 50,
  },

  logo:{
    height: '10%',
    width: '65%',
    top: -200
  },

  texto:{
    fontSize: 14,
    marginTop: -120,
  
  },

  nome: {
    fontSize: 25,
    top: -200,
    fontWeight: 'bold',
  }
});
