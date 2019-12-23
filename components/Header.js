import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import COLOR from '../constants/color';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.buttons}>
                { props.back && 
                <View style={styles.button}>
                    <TouchableOpacity style={styles.touchable} onPress={props.back}>
                        <Text style={styles.buttonText}>◄</Text>
                    </TouchableOpacity>
                </View> }
                { props.back && 
                <View style={styles.button}>
                    <TouchableOpacity style={styles.touchable} onPress={() => props.showRef(true)}>
                        <Text style={styles.buttonText}>?</Text>
                    </TouchableOpacity>
                </View> }
            </View>
            {props.children}
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
    touchable: {
        flex: 1,
        width: 40,
        height: 40,
        justifyContent:'center', 
        alignItems:'center'
    },
    header: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttons: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.blueGrey,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        elevation: 10
    },
    text: {
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