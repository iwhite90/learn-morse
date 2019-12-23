import React, {useState} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import RoundButton from './RoundButton';

const RoundChooser = (props) => {
  const images = {
    1: require("../assets/boat.jpg"),
    2: require("../assets/car.jpg"),
    3: require("../assets/berry.jpg"),
    4: require("../assets/rose.jpg"),
    5: require("../assets/mountain.jpg"),
    6: require("../assets/shed.jpg"),
    7: require("../assets/stones.jpg")
  }

  let picNum = Math.floor(Math.random() * 7) + 1;

  return (
    <ImageBackground source={images[picNum]} style={styles.image}>
        <View style={styles.container}>
            <RoundButton roundNum={1} text='1. A,S,T,E,D' color='#b0d5f560' startGame={props.startGame} />
            <RoundButton roundNum={2} text='2. + B,H,M,O' color='#b2f5f560' startGame={props.startGame} />
            <RoundButton roundNum={3} text='3. + P,I,F,L' color='#b2f5d460' startGame={props.startGame} />
            <RoundButton roundNum={4} text='4. + W,G,R' color='#b2f5b260' startGame={props.startGame} />
            <RoundButton roundNum={5} text='5. + Y,N,V' color='#d4f5b260' startGame={props.startGame} />
            <RoundButton roundNum={6} text='6. + U,Q' color='#f5f5b260' startGame={props.startGame} />
            <RoundButton roundNum={7} text='7. + C,K' color='#f5d4b260' startGame={props.startGame} />
            <RoundButton roundNum={8} text='8. + J' color='#f5b2b260' startGame={props.startGame} />
            <RoundButton roundNum={9} text='9. + Z' color='#f5b2c360' startGame={props.startGame} />
            <RoundButton roundNum={10} text='10. + X' color='#f5b2e560' startGame={props.startGame} />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '75%'
    },
    container: {
        width: '100%',
        height: '60%', 
        flexWrap: 'wrap', 
        alignContent: 'space-around',
        paddingTop: 40
    },
});

export default RoundChooser