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
        optionsPanelRef.current.style.maxHeight = `${optionsPanelRef.current.scrollHeight}px`;
      } else {
        optionsPanelRef.current.style.maxHeight = '0';
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

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setTimeout(() => {
        optionsPanelRef.current.style.border = 'none';
        optionsPanelRef.current.style.padding = '0';
      }, 200); // 300毫秒是动画时间，确保在动画结束后再执行此代码
    } else {
      optionsPanelRef.current.style.border = 'none';
      optionsPanelRef.current.style.padding = '0';
    }
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
        <div ref={optionsPanelRef} className={`options-panel panel${isOpen ? ' show' : ' hidden'}`} onTransitionEnd={handleTransitionEnd}>
          {renderedOptions}
        </div>
    </div>
  )
}