import React from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, ImageBackground, BackHandler } from 'react-native';

import Morse from '../logic/morse';
import ReferenceCard from './ReferenceCard';
import COLOR from '../constants/color';

const Reference = (props) => {

    const back = () => props.setModalVisible(false);

    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}>
          
        <ImageBackground source={props.image} style={styles.image}>
            <TouchableHighlight onPress={back}>
                <View style={styles.container}>
                    <View style={{height: '90%', flexDirection: 'row', width: '100%', justifyItems: 'center', flexWrap: 'wrap'}}>
                        {
                        Morse.allCards().map((card, index) => {
                            return <ReferenceCard key={index} character={card.char} morse={card.morse} style={styles.refCard} numCards={6}/>
                        })
                        }
                        <View style={{alignSelf: 'flex-end', marginLeft: 200, paddingVertical: 20}}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>DONE</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </ImageBackground>
        </Modal>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        height: '90%', 
        borderRadius: 10, 
        paddingHorizontal: 15, 
        paddingVertical: 15, 
        marginTop: 10, 
        marginBottom: 20, 
        marginLeft: 10, 
        marginRight: 10, 
        backgroundColor: COLOR.lightBlue + '60'
    },
    refCard: {
        marginVertical: 5, 
        height: '20%'
    }
});

export default Reference