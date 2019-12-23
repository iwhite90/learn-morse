import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import Card from './Card';

const DoneCard = (props) => {
    return <Card character={props.character} morse={props.morse}  numCards={props.numCards} style={styles.done}/>;
}

const styles = StyleSheet.create({
    done: {
        backgroundColor: 'green'
    }
});

export default DoneCard