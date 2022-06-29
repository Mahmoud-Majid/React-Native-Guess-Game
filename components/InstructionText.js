import { StyleSheet, Text } from "react-native"
import colors from "../constants/colors";

const InstructionText = ({ children, style }) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: colors.accent500,
        fontSize: 24
    },
});