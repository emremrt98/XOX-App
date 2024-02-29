import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../styles/font.js';
import Input from './Input.jsx';
import Button from './shared/Button.jsx';
export default function Started() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={[fonts.text, styles.title]}>XOX Oyununa Hoşgeldiniz</Text>
            </View>
            <View style={styles.inputContainer}>
                <Input placeholder={"1. Oyuncuyu Giriniz"} />
            </View>
            <View style={styles.inputContainer}>
                <Input placeholder={"2. Oyuncuyu Giriniz"} />
            </View >
            <View style={styles.buttonContainer}>
                <Button title={"Oyuna Başla"} />
            </View>
        </View >
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
        marginTop: 20,
    },
    container: {
        width: '100%',
        paddingHorizontal: 20,
    }
})

