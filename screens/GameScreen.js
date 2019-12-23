import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

import Header from '../components/Header';
import HintCard from '../components/HintCard';
import NoHintCard from '../components/NoHintCard';
import DoneCard from '../components/DoneCard';
import Tapper from '../components/Tapper';
import Reference from '../components/Reference';
import STATUS from '../constants/status';
import COLOR from '../constants/color';

import newState from '../logic/newState';
import resetCards from '../logic/resetCards';
import validateAnswer from '../logic/validation';
import rounds from '../logic/rounds';
import Morse from '../logic/morse';

const roundToCards = round => {
  return round.split('').map(char => Morse.getCard(char));
}

const GameScreen = (props) => {
  let game = rounds[props.game];
  let round = roundToCards(game[0]);
  const [answer, setAnswer] = useState([]);
  const [showNext, setShowNext] = useState(false);
  const [takeInput, setTakeInput] = useState(true);
  const [roundNum, setRoundNum] = useState(0);
  const [finished, setFinished] = useState(false);
  const [cards, setCards] = useState(resetCards(round, round.length === 1));
  const [trainingWheels, setTrainingWheels] = useState(cards.length === 1);
  const [startCard, setStartCard] = useState(true);
  const [good, setGood] = useState(true);
  const [timer, setTimer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [handActive, setHandActive] = useState(true);
  const [sound, setSound] = useState(new Audio.Sound());
  const [soundLoaded, setSoundLoaded] = useState(false);

  const loadSound = async () => {
    try {
        let source = require('../assets/beep.wav');
        await sound.loadAsync(source);
        setSoundLoaded(true);
      } catch (error) {
        console.log(error)
      }
    }
  
  if (!soundLoaded) {
    loadSound();
  }

  const handlePlaySound = async () => {
    try {
      await sound
        .playAsync()
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const submit = (char) => {
    if (!good) setGood(true);
    const result = startCard ? [char] : [...answer, char];
    if (startCard) setStartCard(false);
    setAnswer(result);

    if (result.length >= 5) {
      fail();
    } else {
      const t = setTimeout(() => finishedInput(result), 500);
      setTimer(t);
    }
  }

  const finishedInput = (result) => {
    const activeCard = cards.filter(card => card.active)[0];
    const status = validateAnswer(result, activeCard.morse);

    if (status === STATUS.Success) pass(status);
    if (status === STATUS.Fail || status === STATUS.Incomplete) fail();
  }

  const pass = (status) => {
      const newCardState = newState(status, cards);
      setCards(newCardState);
      setStartCard(true);
      setAnswer([]);
      if (allDone(newCardState)) {
        setTakeInput(false);
        setShowNext(true);
      }
  }

  const fail = () => {
      setTakeInput(false);
      setGood(false);
      setStartCard(true);
      setTimeout(() => {
        setTakeInput(true);
        setGood(true);
        setAnswer([]);
      },400);
  }

  const pressed = () => {
    if (timer) clearTimeout(timer);
    handlePlaySound();
    setHandActive(false);
  }

  const lifted = () => sound.stopAsync();

  const allDone = checkCards => 
    checkCards.filter(card => card.done).length === checkCards.length;
  

  const tryAgain = () => {
    setShowNext(false);
    setAnswer([]);
    setTimeout(() => {
      setCards(resetCards(cards, trainingWheels));
      setTakeInput(true);
    }, 200);
  }

  const next = () => {
    setAnswer([]);
    if (trainingWheels) {
      setTrainingWheels(false);
      setShowNext(false);
      setTimeout(() => {
        setCards(resetCards(cards, false));
        setTakeInput(true);
      }, 200);
    } else {
      nextRound();
    }
  }

  const nextRound = () => {
    const newRoundNum = roundNum === game.length - 1 ? 0 : roundNum + 1;
    setRoundNum(newRoundNum);
    const newCards = roundToCards(game[newRoundNum]);
    if (newCards.length === 1) setTrainingWheels(true);
    setShowNext(false);
    setTimeout(() => {
      setCards(resetCards(newCards, newCards.length === 1));
      setTakeInput(true);
      setHandActive(true);
    }, 200);
  }

  const showFinishScreen = () => {
    setTakeInput(false);
    setCards(resetCards(roundToCards('GREAT')), true);
    setFinished(true);
  }

  const back = () => props.setShowGameScreen(false);

  return (
    <View style={{flex:1}}>
        <Header text='Learn Morse' back={back} showRef={setModalVisible}>
          <View style={{flexDirection: 'row', flex:1}}>
          {
            cards.map((card, index) => {
              if (card.done) {
                return <DoneCard key={index} character={card.char} morse={card.morse} numCards={cards.length}/>
              }
              else if (card.hint) {
                return <HintCard key={index} character={card.char} morse={card.morse} numCards={cards.length}/>
              }
              else {
                return <NoHintCard key={index} character={card.char} numCards={cards.length}/>
              }
            })
          }
          </View>
        </Header>
          <View style={styles.bottomContainer}>
              <View style={ [styles.messageContainer, good ? styles.good : styles.bad] }>
                  <Text style={{flex: 1, color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 40}}>{answer.join(' ')}</Text>
              </View>
            <Tapper onPressIn={pressed} onPressOut={lifted} submit={submit} takeInput={takeInput} handActive={handActive}/>
            <View style={styles.nextView}>
              {showNext && 
                <View style= {styles.nextButton}>
                    <TouchableOpacity onPress={tryAgain} style={styles.touchable}>
                        <Text style={styles.buttonText}>⟲</Text>
                    </TouchableOpacity>
                </View> }
                {showNext && 
                <View style= {styles.nextButton}>
                    <TouchableOpacity onPress={next} style={styles.touchable}>
                        <Text style={styles.buttonText}>{trainingWheels ? '►' : '✓'}</Text>
                    </TouchableOpacity>
                </View> }
            </View>
          </View>
      <Reference image={require('../assets/strahan.jpg')} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
      width: '100%',
      height: '75%'
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 60,
  },
  buttonText: {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: COLOR.blueGrey
  },
  touchable: {
    flex: 1,
    width: 75,
    height: 60,
    justifyContent:'center', 
    alignItems:'center'
  },
  nextView: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    justifyContent: 'space-around'
  },
  again: {
    color: 'yellow',
    borderRadius: 4,
    elevation: 10,
    width: 50
  },
  next: {
    backgroundColor: 'green',
    borderRadius: 4,
    elevation: 10,
    width: 50
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 180,
    borderRadius: 20,
    borderColor: COLOR.darkBlue,
    borderWidth: 3
  },
  good: {
    backgroundColor: COLOR.mediumBlue
  },
  bad: {
    backgroundColor: COLOR.red
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.lightBlue,
    width: 75,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 4
  }
});

export default GameScreen