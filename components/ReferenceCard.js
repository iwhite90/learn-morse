import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReferenceCard = (props) => {
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
        maxHeight: 80,
        height: 80,
        maxWidth: '30%',
        backgroundColor: 'white',
        borderRadius: 6,
        elevation: 10,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        paddingVertical: 5
    },
    character: {
        flex: 3,
        fontSize: 40
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

export default ReferenceCard