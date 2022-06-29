import { useState } from "react"
import { TextInput, View, StyleSheet, Alert, Text } from "react-native"
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton"
import Title from "../components/Title";
import colors from "../constants/colors";

const StartGameScreen = ({ onPickNum }) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInptHandler = (text) => {
        setEnteredNumber(text);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 'Num is less than 1 or greater than 99',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }]
            )
        }

        onPickNum(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    onChangeText={numberInptHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            style={styles.buttonContainer}
                            onPress={confirmInputHandler}
                        >
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});