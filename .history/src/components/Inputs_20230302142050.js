import { useState } from "react"

export default function Inputs() {
  const [select, setSelect] = useState('')
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const handleChange = (e) => {
    setSelect(e.target.value)
  }

  return <div>
    <input name="gender" type="radio" checked={check1} value="男" onChange={()=>setCheck1(!check1)} />
    <input name="gender" type="radio" checked={check1} value="女" onChange={()=>setCheck1(!check1)} />

    <input name="gender" type="checkbox" checked={check2} onChange={()=>setCheck2(!check2)} />
    < select onChange={handleChange} value={select} >
      <option value="grapefruit">葡萄柚</option>
      <option value="lime">酸橙</option>
      <option value="coconut">椰子</option>
      <option value="mango">芒果</option>
    </select >
  </div>
}