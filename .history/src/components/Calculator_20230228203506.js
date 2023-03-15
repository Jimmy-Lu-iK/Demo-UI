import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const [selectItem1, setSelectItem1] = useState('')
  const [selectItem2, setSelectItem2] = useState('')
  const [selectFunction, setSelectFunction] = useState('')
  const [computedValue, setComputedValue] = useState('')

  const handleSelectItem = (value) => {
    if(selectItem1) {
      setSelectItem2(value)
    } else {
      setSelectItem1(value)
    }
  }


  return <div className="calculator">
    <div className="calculator-display">
      nihao
    </div>
    <div className="calculator-row">
      <button className="calculator-button">AC</button>
      <button className="calculator-button">+/-</button>
      <button className="calculator-button">%</button>
      <button className="calculator-button">/</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button">7</button>
      <button className="calculator-button">8</button>
      <button className="calculator-button">9</button>
      <button className="calculator-button">x</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button">4</button>
      <button className="calculator-button">5</button>
      <button className="calculator-button">6</button>
      <button className="calculator-button">-</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button">1</button>
      <button className="calculator-button">2</button>
      <button className="calculator-button">3</button>
      <button className="calculator-button">+</button>
    </div>
    <div className="calculator-row">
      <button className="calculator-button-zero">0</button>
      <button className="calculator-button">.</button>
      <button className="calculator-button">=</button>
    </div>
  </div>
}