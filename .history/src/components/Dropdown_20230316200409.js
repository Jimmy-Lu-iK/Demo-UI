import { useState, useRef } from 'react'
import './Dropdown.css'

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const divElement = useRef()

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const renderedOptions = options.map((option) => {
    console.log('option: ', option)
    console.log('value: ', value)
    if(option && value && option === value) {
        return;
    }
    return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
        </div>
    )
  })
  return <div>
    Dropdown
  </div>
}