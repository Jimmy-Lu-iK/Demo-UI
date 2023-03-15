import { useState } from "react"

export default function Inputs() {
  const [select, setSelect] = useState('')

  const handleChange = (e) => {
    setSelect(e.target.value)
  }

  return <div>
    < select onChange={handleChange} onSelect={select} >
      <option value="grapefruit">葡萄柚</option>
      <option value="lime">酸橙</option>
      <option selected value="coconut">椰子</option>
      <option value="mango">芒果</option>
    </select >
  </div>
}