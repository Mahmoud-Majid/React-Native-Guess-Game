import { StyleSheet, View } from "react-native"
import colors from "../constants/colors";

const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});