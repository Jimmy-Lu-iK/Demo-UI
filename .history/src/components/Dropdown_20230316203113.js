import { useState, useRef } from 'react'
import './Dropdown.css'

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const divElement = useRef()

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handleOptionClick = (option) => {
    onChange(option)
    setIsOpen(false);
  }

  const renderedOptions = options.map((option) => {
    console.log('option: ', option)
    console.log('value: ', value)
    if(option && value && option === value) {
        return;
    } else {
      return (
        <div key={option} onClick={() => handleOptionClick(option)}>
            {option}
        </div>
      )
    }
  })
  return (
    <div ref={divEl} className="w-48 relative">
            <Panel 
                className="flex justify-between items-center-pointer" 
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
  )
}