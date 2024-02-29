import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Started from '../components/home/Started'
import Input from '../components/home/Input'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Started />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
})