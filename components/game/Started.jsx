import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../styles/font.js';
import Player from './Player.jsx';
import Card from './Card.jsx';
import Score from './Score.jsx';
import Button from '../home/shared/Button.jsx';
export default function Started() {
    const cardArray = new Array(9).fill(null);

    return (
        <View>
            <View>
                <Text style={[fonts.text, styles.title]}>XOX Oyununa Hoşgeldiniz</Text>
            </View>
            <Player />
            <View style={styles.cardContainer}>
                {
                    cardArray.map((card, index) => (
                        <Card key={index} />
                    ))
                }
            </View>
            <Score />

            <View style={styles.buttonContainer}>
                <Button title={'Ana Sayfa'} />
                <Button title={'Yeni Oyuna Başla'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        textAlign: 'center',
        color: 'white',
    },
    inputContainer: {
        marginTop: 20,
    },
    buttonContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 30,
        width: '100%',
    }
})
