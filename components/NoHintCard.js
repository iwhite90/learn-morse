import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import Card from './Card';

const NoHintCard = (props) => {
    return <Card character={props.character} numCards={props.numCards}/>;
}

export default NoHintCard