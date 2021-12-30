import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
    const getBorderColor = () => {
        if (props.error) {
            return '#CA0B00';
        } else {
            return '#6E739A';
        }
    };
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={[styles.input, { borderColor: getBorderColor() }]}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                placeholderTextColor='#6E739A'
            />
            {props.error && <Text style={styles.error}>{props.error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        fontSize: 16,
        width: '80%',
        marginVertical: 5,
    },

    label: {
        color: '#6E739A',
    },
    input: {
        color: '#6E739A',
        borderWidth: 1.2,
        borderRadius: 7,
        paddingVertical: 7,
        paddingHorizontal: 14,
        marginTop: 5,
        outlineColor: '#007aff',
    },


    error: {
        color: '#CA0B00',
        paddingTop: 2,
        fontSize: 13,
    },
})

export default Input;