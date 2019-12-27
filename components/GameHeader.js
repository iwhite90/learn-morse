import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import COLOR from '../constants/color';

import tulip from "../assets/tulip.jpg";

const GameHeader = (props) => {
    const images = {
        0: tulip,
        1: require("../assets/boat.jpg"),
        2: require("../assets/fern.jpg"),
        3: require("../assets/foxgloves.jpg"),
        4: require("../assets/rose.jpg"),
        5: require("../assets/mountain.jpg"),
        6: require("../assets/shed.jpg"),
        7: require("../assets/flower.jpg"),
        8: require("../assets/redsunset.jpg"),
        9: require("../assets/acer.jpg"),
    }

    const buttonStyle = props.rendered ? [styles.button, {elevation: 10}] : styles.button;

    return (
        <ImageBackground source={images[props.game]} style={styles.image} imageStyle={{height: '100%'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
                <View style={styles.buttons}>
                    { props.back && 
                    <View style={buttonStyle}>
                        <TouchableOpacity style={styles.touchable} onPress={props.back} disabled={!props.rendered}>
                            <Text style={styles.buttonText}>◄</Text>
                        </TouchableOpacity>
                    </View> }
                    { props.back && 
                    <View style={buttonStyle}>
                        <TouchableOpacity style={styles.touchable} onPress={() => props.showRef(true)} disabled={!props.rendered}>
                            <Text style={styles.buttonText}>?</Text>
                        </TouchableOpacity>
                    </View> }
                </View>
                {props.children}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        height: '50%',
        borderBottomColor: 'green',
        borderBottomWidth: 1
    },
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 50
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
        borderColor: 'white'
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

export default GameHeader