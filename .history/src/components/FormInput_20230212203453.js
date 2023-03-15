import { useState } from 'react'
import './FormInput.css'

function FormInput(props) {
  const [focused, setFocused] = useState(false)
  const { label, onChange, errorMessage, ...inputProps } = props

  const handleFocus = () => {
    setFocused(true)
  }

  return <div className="formInput">
    <label>{label}</label>
    <input 
      {...inputProps}
      onChange={onChange}
      onBlur={handleFocus}
    />
    <span>{errorMessage}</span>
  </div>
}

export default FormInput