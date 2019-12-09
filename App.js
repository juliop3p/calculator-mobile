import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Display from './src/components/Display'
import Buttons from './src/components/Buttons'

export default function App() {
  const [values, setValues] = useState(['0', '0'])
  const [index, setIndex] = useState(0)
  const [operator, setOperator] = useState('')
  

  clear = () => {
    const newValues = ['0', '0']
    setValues(newValues)
    setIndex(0)
    setOperator('')
  }

  makeCalc = () => {
    const A = parseFloat(values[0])
    const B = parseFloat(values[1])
    let result

    switch(operator) {
      case '+':
        result = A + B
        break
      case '-':
        result = A - B
        break
      case '*':
        result = A * B
        break
      case '/':
        result = A / B
        break
    }
    const newArray = [result.toString(), '0']
    setValues([...newArray])
    setIndex(0)
  }

  add = (number) => {
    if(number === '.' && values[index].includes('.')) {
      return
    }
    const newValue = values[index] !== '0' ? values[index] += number : values[index] = number
    const newArray = values
    newArray[index] = newValue
    setValues([...newArray])
  }

  handleClick = (btn, operator = false) => {
    
    if(btn === 'ac') return clear()
    if(operator && values[index] === '0') return
    
    if(operator && values[index] !== '0') {
      setOperator(btn)
      setIndex(1)
      if(values[1] !== '0') return makeCalc()
      return
    }

    add(btn)

  }

  return (
    <View style={styles.container}>
      <Display currentNumber={values[index]}/>
      <Buttons handleClick={handleClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0009',
    justifyContent: 'space-between',
  }
});
