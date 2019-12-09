import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

export default function Buttons(props) {
    return (
        <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => props.handleClick('ac')} style={Object.assign({}, styles.btn, styles.triple)}>
                <Text style={styles.text}>AC</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('/', true)} style={Object.assign({}, styles.btn, styles.operator)}>
                <Text style={Object.assign({}, styles.text, styles.operatorText) }>/</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('7')} style={styles.btn}>
                <Text style={styles.text}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('8')} style={styles.btn}>
                <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.handleClick('9')} style={styles.btn}>
                <Text style={styles.text}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('*', true)} style={Object.assign({}, styles.btn, styles.operator)}>
                <Text style={Object.assign({}, styles.text, styles.operatorText) }>*</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('4')} style={styles.btn}>
                <Text style={styles.text}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('5')} style={styles.btn}>
                <Text style={styles.text}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('6')} style={styles.btn}>
                <Text style={styles.text}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('-', true)} style={Object.assign({}, styles.btn, styles.operator)}>
                <Text style={Object.assign({}, styles.text, styles.operatorText) }>-</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('1')} style={styles.btn}>
                <Text style={styles.text}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('2')} style={styles.btn}>
                <Text style={styles.text}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('3')} style={styles.btn}>
                <Text style={styles.text}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('+', true)} style={Object.assign({}, styles.btn, styles.operator)}>
                <Text style={Object.assign({}, styles.text, styles.operatorText) }>+</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('0')} style={Object.assign({}, styles.btn, styles.double)}>
                <Text style={styles.text}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('.')} style={styles.btn}>
                <Text style={styles.text}>.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.handleClick('=', true)} style={Object.assign({}, styles.btn, styles.operator)}>
                <Text style={Object.assign({}, styles.text, styles.operatorText) }>=</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        height: deviceHeight / 1.3,
        width: deviceWidth,
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: '#000',
    },
    btn: {
        width: deviceWidth / 4, 
        height: (deviceHeight / 1.3) / 5, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#0004'
    },
    triple: {
        flexGrow: 10,
        width: deviceWidth / 1.5
    },
    double: {
        width: deviceWidth / 2
    },
    operator: {
        backgroundColor: '#FF8C00'
    },
    text: {
        fontSize: 40,
    },
    operatorText: {
        color: '#fff',
    },

})
