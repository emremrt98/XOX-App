import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width - 20;

export default function Card() {

    return (
        <View style={styles.container}>
            <Text>Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: windowWidth / 3 - 10,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: 20,
    }
})