import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';
import StyledImagem from '../components/styled-imagem';
import { router } from 'expo-router';

export default function Login() {

    const handleLogin = () => {
        router.replace('home')
    }

  return (
    <View style={styles.container}>

      <StyledImagem/>

      <Text>Login</Text>
      <StyledInput
      placeholder='Digite seu login'
      onChangeText={(texto) => console.log(texto)}
      />
      <StyledInput
      placeholder='Digite sua Senha'
      onChangeText={(texto) => console.log(texto)}
      />
      <StyledButton text='Entrar' 
      onClick={handleLogin}
      color='blue'
      />
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
});