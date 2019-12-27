import React, {useState} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import RoundButton from './RoundButton';
import backgroundImage from '../assets/stones.jpg';

const RoundChooser = (props) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.image} imageStyle={{height: '100%'}}>
        <View style={styles.container}>
            <RoundButton roundNum={1} text='1. A,S,T,E,D' color='#b0d5f560' startGame={props.startGame} />
            <RoundButton roundNum={2} text='2. + B,H,M,O' color='#b2f5f560' startGame={props.startGame} />
            <RoundButton roundNum={3} text='3. + P,I,F,L' color='#b2f5d460' startGame={props.startGame} />
            <RoundButton roundNum={4} text='4. + W,G,R' color='#b2f5b260' startGame={props.startGame} />
            <RoundButton roundNum={5} text='5. + Y,N,V' color='#d4f5b260' startGame={props.startGame} />
        </View>
        <View style={styles.container}>
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
        height: '50%',
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40
    },
});

export default RoundChooser