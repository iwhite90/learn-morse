import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import COLOR from '../constants/color';

const GameHeader = (props) => {
    const images = {
        0: require("../assets/tulip.jpg"),
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

    return (
        <ImageBackground source={images[props.game]} style={styles.image} imageStyle={{height: '100%'}}>
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
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '50%',
        borderBottomColor: 'green',
        borderBottomWidth: 1
    },
    container: {
        alignItems: 'center',
        height: '100%',
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

export default GameHeader