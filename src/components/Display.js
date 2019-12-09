import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Display(props) {
    return (
        <View style={styles.displayContainer}>
            <Text style={styles.displayText}>{props.currentNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    displayContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 20, 
    },
    displayText: {
        fontSize: 50,
        color: '#fff',
        flexWrap: 'nowrap'
    }
})
