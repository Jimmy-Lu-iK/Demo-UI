import { useEffect, useState, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import './Dropdown.css'

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const divElement = useRef()

  useEffect(() => {
    const handler = (event) => {
      if(divElement.current && !divElement.current.contains(event.target)) {
        setIsOpen(false)
      }
    };
    
    document.addEventListener('click', handler, true)

    return () => {
        document.removeEventListener('click', handler)
    };
}, [])

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    setIsOpen(false);
  }

  const renderedOptions = options.map((option) => {
    if(option && selected && option === selected) {
        return undefined;
    } else {
      return (
        <div key={option} onClick={() => handleOptionClick(option)}>
            {option}
        </div>
      )
    }
  }).filter(item => item !== undefined)

  return (
    <div ref={divElement} className="">
        <div
            className="" 
            onClick={handleClick}
        >
            {selected || 'Select...'}
            <GoChevronDown className=""/>
        </div>
        {isOpen && <div className="">{renderedOptions}</div>}
    </div>
  )
}