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

     <Text style={styles.letras}>Home</Text>
      <Link style={styles.puxe} href="/">Ir para Index</Link>

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

  puxe:{
    top: -200,
  },

  


  letras:{
    top: -200,
    fontSize: 25,
    fontWeight: 'bold'
  },

  logo:{
    height: '10%',
    width: '65%',
    top: -200
  }
});
