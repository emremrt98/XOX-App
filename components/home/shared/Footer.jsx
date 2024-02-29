import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View>
                <MaterialIcons name="dark-mode" size={24} color="white" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ color: 'white', fontSize: 14 }}>Türkçe</Text>
                <Entypo name="chevron-down" size={13} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#0B7285',
        width: '100%',
        height: 56,
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
})