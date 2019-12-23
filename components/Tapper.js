import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import COLOR from '../constants/color';

const Tapper = (props) => {
    const [handSize, setHandSize] = useState(40);
    let handActive = props.handActive;

    useEffect(() => {
        let interval = null;
        let duration = 1000;
        if (handActive) {
            duration = handSize === 40 ? 1500 : 500;
            interval = setInterval(() => {
            handSize === 40 ? setHandSize(20) : setHandSize(40);
            }, duration);
        }
        else {
            clearInterval(interval);
            setHandSize(40);
        }
        return () => clearInterval(interval);
    }, [handSize, handActive]);

    return (
        <View style= { styles.tapper }>
            <TouchableOpacity 
                style={styles.button}
                onPressIn={props.onPressIn}
                onPressOut={props.onPressOut}
                onPress={() => props.submit('.')}
                onLongPress={() => props.submit('_')}
                delayLongPress={180}
                disabled={!props.takeInput}>
                <Text style={[styles.text, {fontSize: handSize}]}>👆</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tapper: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.orange,
        padding: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        elevation: 10
    },
    text: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
    }
});

export default Tapper