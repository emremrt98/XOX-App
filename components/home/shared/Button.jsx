import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import fonts from '../../../styles/font.js';
import { useFonts } from 'expo-font';
const Button = ({ title, onPress }) => {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={[styles.buttonText, fonts.text]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0B7285',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Button;
