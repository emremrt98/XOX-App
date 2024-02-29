import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import fonts from '../../styles/font.js';


export default function Score() {
    return (
        <View>
            <Text style={[styles.title, fonts.text]}>Kazanan</Text>
            <View style={styles.content}>
                <Text style={[fonts.text, styles.text]}>1. Oyuncu</Text>
                <AntDesign name="arrowright" size={20} color="white" />
                <Text style={[fonts.text, styles.text]}>Emre</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
        paddingBottom: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,
    }

})