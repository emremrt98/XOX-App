import React, { useState } from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import fonts from '../../styles/font.js';
import { useFonts } from 'expo-font';
const windowWidth = Dimensions.get('window').width;

const Input = ({ handleChangeText, text, placeholder }) => {

    return (
        <TextInput
            style={[styles.input, fonts.text]}
            value={text}
            onChangeText={handleChangeText}
            placeholder={placeholder}
            placeholderTextColor={'#868E96'}
            cursorColor={'#343A40'}
        />
    );
};
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#cfcfcf',
        backgroundColor: 'white',
        width: '100%',
        height: 48,
        borderRadius: 6,
        color: '#343A40',
        paddingLeft: 15,

    }
})
export default Input;
