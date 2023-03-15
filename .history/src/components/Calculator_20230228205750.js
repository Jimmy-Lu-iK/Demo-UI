import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const [selectItem1, setSelectItem1] = useState(0)
  const [selectItem2, setSelectItem2] = useState(0)
  const [selectFunction, setSelectFunction] = useState('')
  const [computedValue, setComputedValue] = useState(0)
  const [dot, setDot] = useState(0)

  const handleSelectItem = (value) => {
    // if(selectItem1) {
    //   setSelectItem2(value)
    //   setComputedValue(value)
    // } else if(selectItem2) {
    //   console.log('computedValue', computedValue)
    //   setSelectItem1(computedValue)
    //   setSelectItem2(value)
    //   setComputedValue(value)
    // } else {
    //   setSelectItem1(value)
    //   setComputedValue(value)
    // }

    if(selectItem2) {
      setSelectItem1(computedValue)
      setSelectItem2(value)
      setComputedValue(value)
    } else if(selectItem1) {
      setSelectItem2(value)
      setComputedValue(value)
    } else {
      setSelectItem1(value)
      setComputedValue(value)
    }
  }

  const handleFunction = (value) => {
    setSelectFunction(value)
  }

  const handleReset = () => {
    setSelectItem1(0)
    setSelectItem2(0)
    setSelectFunction('')
    setComputedValue(0)
  }

  const calculate = (func,value1,value2) => {
    if(func == '+') {
      return  value1+value2
    } else if(func == '-') {
      return value1-value2
    } else if(func == '/') {
      return value1/value2
    } else if(func == 'x') {
      return value1*value2
    }
  }

  const handleComputed = () => {
    if(selectFunction) {
      if(selectItem2) {
        setComputedValue(calculate(selectFunction,selectItem1,selectItem2 ))
      }
    }
  }


  return <div className="calculator">
    <div className="calculator-display">
      {computedValue}
    </div>
    <div className="calculator-row">
      <button className="calculator-button"onClick={handleReset}>AC</button>
      <button className="calculator-button">+/-</button>
      <button className="calculator-button">%</button>
      <button className="calculator-button" onClick={() => handleFunction('/')}>/</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button" onClick={() => handleSelectItem(7)}>7</button>
      <button className="calculator-button" onClick={() => handleSelectItem(8)}>8</button>
      <button className="calculator-button" onClick={() => handleSelectItem(9)}>9</button>
      <button className="calculator-button" onClick={() => handleFunction('x')}>x</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button" onClick={() => handleSelectItem(4)}>4</button>
      <button className="calculator-button" onClick={() => handleSelectItem(5)}>5</button>
      <button className="calculator-button" onClick={() => handleSelectItem(6)}>6</button>
      <button className="calculator-button" onClick={() => handleFunction('-')}>-</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button" onClick={() => handleSelectItem(1)}>1</button>
      <button className="calculator-button" onClick={() => handleSelectItem(2)}>2</button>
      <button className="calculator-button" onClick={() => handleSelectItem(3)}>3</button>
      <button className="calculator-button" onClick={() => handleFunction('+')}>+</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button-zero" onClick={() => handleSelectItem(0)}>0</button>
      <button className="calculator-button">.</button>
      <button className="calculator-button" onClick={handleComputed}>=</button>
    </div>
  </div>
}