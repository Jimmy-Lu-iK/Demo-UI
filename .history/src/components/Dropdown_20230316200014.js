import { useState, useRef } from 'react'
import './Dropdown.css'

export default function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const divElement = useRef()
  return <div>
    Dropdown
  </div>
}