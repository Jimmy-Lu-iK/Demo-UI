import { useState, useRef } from 'react'
import './Dropdown.css'

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setOpen] = useState(false)
  const divElement = useRef()

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }
  return <div>
    Dropdown
  </div>
}