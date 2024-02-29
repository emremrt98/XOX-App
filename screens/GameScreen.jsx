import { StyleSheet, View } from 'react-native'
import React from 'react'
import Started from '../components/game/Started'

export default function GameScreen() {
    return (
        <View style={styles.container}>
            <Started />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
})