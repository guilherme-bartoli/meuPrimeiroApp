import { View, Text, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import StyledCards from "../components/styled-cards";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login com sucesso!</Text>
            <StyledCards />
            <StyledCards />
            <StyledCards />
            <Link href='/' style={styles.link}>Voltar para home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    link: {
        marginTop: 20,
        color: '#1e90ff',
        textAlign: 'center',
    }
});
