import { Text, View, StyleSheet } from 'react-native'
import colors from '../constants/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numText}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.accent500,
        padding: 24,
        marginBottom: 24,
        marginHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numText: {
        color: colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
});