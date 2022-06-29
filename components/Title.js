import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        margin: 50,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12
    },

});