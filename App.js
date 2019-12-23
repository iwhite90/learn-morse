import React, {useState} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

import Header from './components/Header';
import RoundChooser from './components/RoundChooser';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [showGameScreen, setShowGameScreen] = useState(false);
  const [game, setGame] = useState(0);

  const startGame = (r) => {
    setGame(r - 1);
    setShowGameScreen(true);
  }

  return (
    <View style={{width: '100%', height: '100%'}}>
    {!showGameScreen &&
      <View style={{flex: 1}}>
        <Header text='Learn Morse' />
        <RoundChooser startGame={startGame} />
      </View>
    }
    {showGameScreen && <GameScreen setShowGameScreen={setShowGameScreen} game={game} />}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center'
  }
});
