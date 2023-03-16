import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const [selectItem1, setSelectItem1] = useState(0)
  const [selectItem2, setSelectItem2] = useState(0)
  const [selectFunction, setSelectFunction] = useState('')
  const [computedValue, setComputedValue] = useState(0)
  const [dot, setDot] = useState(false)

  const handleSelectItem = (value) => {
    if(selectItem2) {
      if(dot) {
        setSelectItem2(selectItem2+'' +value)
        setComputedValue(selectItem2+'' +value)
        setDot(false)
      } else {
        setSelectItem2(selectItem2 + '' + value)
        setComputedValue(selectItem2 + '' + value)
      }
    } else if(selectItem1) {
      if(dot) {
        setSelectItem1(selectItem1+'' +value)
        setComputedValue(selectItem1+'' +value)
        setDot(false)
      } else if(selectFunction) {
        setSelectItem2(value)
        setComputedValue(value)
      } else {
        setSelectItem1(selectItem1 + '' + value)
        setComputedValue(selectItem1 + '' + value)
      }
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
    if(func === '+') {
      return  value1*1+value2*1
    } else if(func === '-') {
      return value1*1-value2*1
    } else if(func === '/') {
      return value1*1/value2*1
    } else if(func === 'x') {
      return value1*1*value2*1
    } else if(func === '%') {
      return value1*1%value2*1
    }
  }

  const handleComputed = () => {
    if(selectFunction && selectItem2) {
      let calculateResult = calculate(selectFunction,selectItem1,selectItem2 )
      setComputedValue(calculateResult)
      setSelectItem1(calculateResult)
      setSelectFunction('')
      setSelectItem2(0)
    }
  }

  const handleAddDot = () => {
    if(selectItem1) {
      if(selectFunction) {
        if(!(selectItem2+'').includes('.')) {
          setSelectItem2(selectItem2+'.')
          setComputedValue(selectItem2+'.')
          setDot(true)
        }
      } else {
        if(!(selectItem1+'').includes('.')) {
          setSelectItem1(selectItem1+'.')
          setComputedValue(selectItem1+'.')
          setDot(true)
        }
      }
    }
  }

  const handleMinus = () => {
    if(selectItem1) {
      if(selectFunction) {
        if(selectItem2*1 <0) {
          let newValue = (selectItem2+'').split('-').join('')
          setSelectItem2(newValue)
          setComputedValue(newValue)
        } else {
          let newValue = '-' + selectItem2
          setSelectItem2(newValue)
          setComputedValue(newValue)
        }
      } else {
        if(selectItem1*1 <0) {
          let newValue = (selectItem1+'').split('-').join('')
          setSelectItem1(newValue)
          setComputedValue(newValue)
        } else {
          let newValue = '-' + selectItem1
          setSelectItem1(newValue)
          setComputedValue(newValue)
        }
      }
    }
  }


  return (
    <div className='app'>
      <div className="calculator">
        <div className="calculator-display-border">
          <div className="calculator-display">{computedValue}</div>
        </div>
        <div className="calculator-row">
          <button className="calculator-button gray-button" onClick={handleReset}>AC</button>
          <button className="calculator-button gray-button" onClick={handleMinus}>+/-</button>
          <button className="calculator-button gray-button" onClick={() => handleFunction('%')}>%</button>
          <button className="calculator-button yellow-button" onClick={() => handleFunction('/')}>/</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button black-button" onClick={() => handleSelectItem(7)}>7</button>
          <button className="calculator-button black-button" onClick={() => handleSelectItem(8)}>8</button>
          <button className="calculator-button black-button" onClick={() => handleSelectItem(9)}>9</button>
          <button className="calculator-button yellow-button" onClick={() => handleFunction('x')}>x</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button black-button" onClick={() => handleSelectItem(4)}>4</button>
          <button className="calculator-button black-button" onClick={() => handleSelectItem(5)}>5</button>
          <button className="calculator-button black-button" onClick={() => handleSelectItem(6)}>6</button>
          <button className="calculator-button yellow-button" onClick={() => handleFunction('-')}>-</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button black-button" onClick={() => handleSelectItem(1)}>1</button>
          <button className="calculator-button black-button" onClick={() => handleSelectItem(2)}>2</button>
          <button className="calculator-button black-button" onClick={() => handleSelectItem(3)}>3</button>
          <button className="calculator-button yellow-button" onClick={() => handleFunction('+')}>+</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button-zero black-button" onClick={() => handleSelectItem(0)}>0</button>
          <button className="calculator-button black-button" onClick={handleAddDot}>.</button>
          <button className="calculator-button yellow-button" onClick={handleComputed}>=</button>
        </div>
      </div>
    </div>
  )
}