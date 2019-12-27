import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLOR from '../constants/color';

const RoundButton = (props) => {

    return (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <TouchableOpacity onPress={() => props.startGame(props.roundNum)}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        width: 150,
        marginBottom: 15,
        justifyContent: 'center',
        elevation: 5, 
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: COLOR.lightBlue, 
        paddingHorizontal: 5
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default RoundButton