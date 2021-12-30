import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const UserCard = (props) => {


    return (
        <View style={styles.userCard}>
            <View style={styles.info}>

                <Text style={styles.label}>User: </Text>
                <Text style={styles.data}>{props.user.id}</Text>
            </View>

            <View style={styles.info}>

                <Text style={styles.label}>Full name: </Text>
                <Text style={styles.data}>{props.user.firstname} {props.user.lastname}</Text>
            </View>

            <View style={styles.info}>

                <Text style={styles.label}>Birth date: </Text>
                <Text style={styles.data}>{props.user.birthdate}</Text>
            </View>

            <View style={styles.info}>

                <Text style={styles.label}>Email: </Text>
                <Text style={styles.data}>{props.user.email}</Text>
            </View>

            <View style={styles.info}>

                <Text style={styles.label}>Phone number: </Text>
                <Text style={styles.data}>{props.user.phone}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    userCard: {
        fontSize: 16,
        borderWidth: 1.2,
        borderRadius: 7,
        borderColor: '#6E739A',
        padding: 20,
        marginTop: 14,
        width: '85%',
    },

    info: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 3,
    },
    label: {
        color: '#555',
        width: '40%',

    },
    data: {
        color: '#000',
        width: '50%',
    },

})

export default UserCard;