import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumHandler = (pickedNum) => {
    setUserNumber(pickedNum)
    setGameOver(false);
  }

  const gameOverHandler = (numOfRounds) => {
    setGameOver(true);
    setGuessRounds(numOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNum={pickedNumHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen userNmber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }


  return (
    <LinearGradient colors={[colors.accent500, colors.primary700]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/icon.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  }
});
