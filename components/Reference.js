import React from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, ImageBackground } from 'react-native';

import Morse from '../logic/morse';
import ReferenceCard from './ReferenceCard';
import COLOR from '../constants/color';

const Reference = (props) => {
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.modalVisible}>
          
        <ImageBackground source={require('../assets/sunset.jpg')} style={styles.image}>
          <View style={styles.container}>
            <View style={{height: 500, flexDirection: 'row', width: '100%', justifyItems: 'center', flexWrap: 'wrap'}}>
                {
                Morse.allCards().map((card, index) => {
                    return <ReferenceCard key={index} character={card.char} morse={card.morse} style={styles.refCard} numCards={6}/>
                })
                }
                <View style={{alignSelf: 'flex-end', marginLeft: 200, paddingVertical: 20}}>
                    <TouchableHighlight
                        onPress={() => {
                        props.setModalVisible(false);
                        }}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>DONE</Text>
                    </TouchableHighlight>
                </View>
            </View>
          </View>
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
        paddingVertical: 35, 
        marginTop: 20, 
        marginBottom: 20, 
        marginLeft: 10, 
        marginRight: 10, 
        backgroundColor: COLOR.lightBlue + '60'
    },
    refCard: {
        marginVertical: 10, 
        height: '20%'
    }
});

export default Reference