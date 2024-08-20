import { Image, Text, StyleSheet, View } from 'react-native';

export default function StyledCards() {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/Wikimedia-logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam doloribus est vel officiis harum corrupti, sequi voluptate placeat, expedita neque maxime enim autem molestiae ducimus voluptatibus voluptates delectus corporis provident.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3, // Sombra no Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 5,
    height: 5,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    flex: 1, // Para o texto ocupar o espaço restante
  },
});
