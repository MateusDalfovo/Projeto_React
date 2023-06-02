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

  <Text style={styles.texto}>Surfe é um esporte individual, radical, praticado no mar. No surfe, o desafio é se manter o maior tempo possível em pé sob uma prancha, deslizando sob as ondas e realizando manobras radicais, com vários níveis de dificuldade.</Text>

      <Text style={styles.letras}>Sobre</Text>
      <Link href="/cadastro">Ir para Cadastro</Link>

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
