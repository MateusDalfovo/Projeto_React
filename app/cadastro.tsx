import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Link } from "expo-router";
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';





export default function App() {

  const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Useless Text');
  
    <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </SafeAreaView>
  }
  
    return (
      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../assets/WSL-Logo.png')}
        />

        <Text style={styles.letras}>Cadastro</Text>
        <Link style={styles.puxe} href="/home">Ir para Home</Link>

        
        <StatusBar style="auto" />
      </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },



  letras: {
    fontSize: 25,
    fontWeight: 'bold',
    top: -200,
  },

  puxe: {
    top: -200,
  },

  logo: {
    height: '10%',
    width: '65%',
    top: -200
  },

  input: {
    height: 10,
    margin: 12,
    borderWidth: 1,
    padding: 1,
  },
});
