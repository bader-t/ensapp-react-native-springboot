import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.btnWrapper}>
            <Text
                style={styles.btntxt}>{props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    btnWrapper: {
        width: '80%',
        backgroundColor: '#007AFF',
        marginTop: 28,
        borderRadius: 7,
        paddingVertical: 10,
    },
    btntxt: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
    }
})
