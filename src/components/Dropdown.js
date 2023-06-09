import { useEffect, useState, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import './Dropdown.css'

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  
  const divElement = useRef()
  const optionsPanelRef = useRef()

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

  useEffect(() => {
    if(optionsPanelRef.current) {
      if (isOpen) {
        optionsPanelRef.current.style.display = 'block';
        optionsPanelRef.current.style.maxHeight = `${optionsPanelRef.current.scrollHeight}px`;
      } else {
        optionsPanelRef.current.style.maxHeight = '0';
        setTimeout(() => {
          optionsPanelRef.current.style.display = 'none';
        },400)
      }
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    setIsOpen(false);
  }

  const renderedOptions = options
    .filter((option) => option !== selected)
    .map((option) => (
      <div className="option" key={option} onClick={() => handleOptionClick(option)}>
        {option}
      </div>
    ));

  return (
    <div ref={divElement} className="dropdown">
        <div
            className="select-panel panel" 
            onClick={handleClick}
        >
            {selected || 'Select...'}
            <GoChevronDown className="chevron-down-icon"/>
        </div>
        <div ref={optionsPanelRef} className={`options-panel panel${isOpen ? ' show' : ' hidden'}`} >
          {renderedOptions}
        </div>
    </div>
  )
}