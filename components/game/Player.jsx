import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../styles/font.js';
export default function Player() {
    return (
        <View style={styles.container}>
            <View style={styles.player}>
                <Text style={[styles.default, fonts.text]}>1. Oyuncu</Text>
                <Text style={[styles.active, fonts.text]}>Emre</Text>
            </View>
            <View style={styles.player}>
                <Text style={[styles.default, fonts.text]}>2. Oyuncu</Text>
                <Text style={[styles.active, fonts.text]}>Mert</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginTop: 30
    },
    player: {
        backgroundColor: '#F1F3F5',
        borderRadius: 6,
        textAlign: 'center',
        width: '48%',
        alignItems: 'center',
    },
    default: {
        color: '#868E96',
        fontSize: 13
    },
    active: {
        color: '#343A40',
        fontSize: 18
    }

})