import { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Card from "../components/Card";
import { Ionicons } from '@expo/vector-icons'

import InstructionText from "../components/InstructionText";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const generateRandBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {

    const initialGuess = generateRandBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])


    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", 'You know this is wrong', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandBetween(
            minBoundary,
            maxBoundary,
            currentGuess);
        setCurrentGuess(newRndNum);
        setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds])
    }

    return (
        <View style={styles.screen}>
            <Title style={styles.title}>GameScreen</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons
                                name="md-remove"
                                size={24}
                                color='#fff'
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons
                                name="md-add"
                                size={24}
                                color='#fff'
                            />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 50
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    // marginBottom: 20
});