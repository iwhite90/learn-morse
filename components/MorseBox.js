import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const MorseBox = (props) => {
    return (
        <View style= {[styles.box, props.style]}>
            <Text style= { styles.character }>{ props.character }</Text>
            <Text style = { styles.morse }>{ props.morse }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 130,
        width: '30%',
        backgroundColor: '#b0d5f5',
        borderRadius: 6,
        elevation: 10,
        alignItems: 'center',
        marginVertical: 100,
        marginHorizontal: 15,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    character: {
        flex: 3,
        fontSize: 60
    },
    morse: {
        flex: 2,
        fontSize: 18
    }
});

export default MorseBox