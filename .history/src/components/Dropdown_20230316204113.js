import { useEffect, useState, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import './Dropdown.css'

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const divElement = useRef()

  useEffect(() => {
    const handler = (event) => {
      console.log('handler')
        if(!divElement.current) {
            return;
        }

        if(!divElement.current.contains(event.target)) {
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
    <div ref={divElement} className="w-48 relative">
        <div
            className="flex justify-between items-center-pointer" 
            onClick={handleClick}
        >
            {selected || 'Select...'}
            <GoChevronDown className="text-lg"/>
        </div>
        {isOpen && <div className="absolute top-full">{renderedOptions}</div>}
    </div>
  )
}