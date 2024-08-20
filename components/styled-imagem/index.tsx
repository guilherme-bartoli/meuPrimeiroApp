import { Image, StyleSheet } from 'react-native'

export default function StyledImagem(){
    return (
        <Image source={require('../../assets/Wikimedia-logo.png')}
        style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '55%',
        height: '30%',
    }
})