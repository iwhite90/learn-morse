import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import COLOR from '../constants/color';

const Header = (props) => {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{props.text}</Text>
                </View> 
                <View style={{height: '100%', justifyContent: 'center'}}>
                    <Text style={styles.text}>. _ . .   .   . _</Text>
                    <Text style={styles.text}>. _ .   _ .</Text>
                    <Text style={styles.text}>_ _   _ _ _   . _ .</Text>
                    <Text style={styles.text}>. . .   .</Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '50%',
        padding: 50,
        backgroundColor: COLOR.darkBlue
    },
    text: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    },
    header: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonText: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: COLOR.lightBlue
    }
});

export default Header