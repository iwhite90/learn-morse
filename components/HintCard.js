import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import Card from './Card';

const HintCard = (props) => {
    return <Card character={props.character} morse={props.morse} numCards={props.numCards} style={props.style}/>;
}

export default HintCard