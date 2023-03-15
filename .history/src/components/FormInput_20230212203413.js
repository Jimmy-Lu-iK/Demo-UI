import { useState } from 'react'
import './FormInput.css'

function FormInput(props) {
  const [focused, setFocused] = useState()
  const { label, onChange, errorMessage, ...inputProps } = props

  return <div className="formInput">
    <label>{label}</label>
    <input 
      {...inputProps}
      onChange={onChange}
      onBlur={}
    />
    <span>{errorMessage}</span>
  </div>
}

export default FormInput