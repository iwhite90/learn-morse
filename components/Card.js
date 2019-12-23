import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    let numCards = props.numCards;
    const width = (100 / numCards) + '%';

    return (
        <View style= {[styles.box, {width: width}, props.style]}>
            <Text style= { styles.character }>{ props.character }</Text>
            <Text style = { styles.morse }>{ props.morse }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        maxHeight: 130,
        height: 130,
        maxWidth: '30%',
        backgroundColor: '#b0d5f5',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',
        marginVertical: 100,
        marginHorizontal: 5,
        paddingVertical: 10
    },
    character: {
        flex: 3,
        fontSize: 60
    },
    morse: {
        flex: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },
    done: {
        backgroundColor: 'green'
    }
});

export default Card