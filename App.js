import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [idade, setIdade] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');

  const verificarFaixaEtaria = () => {
    const idadeInt = parseInt(idade);
    if (idadeInt >= 0 && idadeInt <= 12) {
      setFaixaEtaria('Criança');
    } else if (idadeInt >= 13 && idadeInt <= 17) {
      setFaixaEtaria('Adolescente');
    } else if (idadeInt >= 18 && idadeInt <= 20) {
      setFaixaEtaria('Jovem');
    } else if (idadeInt >= 21 && idadeInt <= 60) {
      setFaixaEtaria('Adulto');
    } else if (idadeInt > 60) {
      setFaixaEtaria('Idoso');
    } else {
      setFaixaEtaria('Idade inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite sua idade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />
      <Button title="Verificar Faixa Etária" onPress={verificarFaixaEtaria} />
      <Text style={styles.resultado}>{faixaEtaria}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;

