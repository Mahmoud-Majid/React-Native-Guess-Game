import { Image, StyleSheet, Text, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNmber, onStartNewGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/adaptive-icon.png')} />
            </View>
            <Text style={styles.summaryText}>
                You needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess number <Text style={styles.highlight}>{userNmber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 47
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontWeight: 'bold',
        color: colors.primary500
    }
});

