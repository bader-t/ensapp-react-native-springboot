import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native'

const Container = ({ children }) => {
    return (

        <ScrollView>
            <View style={styles.wrapper}>
                {children}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Container;