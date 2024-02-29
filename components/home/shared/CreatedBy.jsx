import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../../styles/font.js';
import { useFonts } from 'expo-font';
export default function CreatedBy() {

    return (
        <View style={styles.container}>
            <Text style={[fonts.text, styles.create]}>Created by Emre Mert</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    create: {
        color: 'white',
        fontSize: 11,
    },
    container: {
        alignItems: 'center',
    }
})