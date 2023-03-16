import { useState } from "react"

export default function Inputs() {
  const [select, setSelect] = useState('')
  const [check1, setCheck1] = useState('')
  const [check2, setCheck2] = useState('')

  const handleChange = (e) => {
    setSelect(e.target.value)
  }

  return <div>
    <input name="gender" type="radio" value="男" checked={this.state.v5==='男'} onChange={this.changeValue5} />
    <input name="gender" type="checkbox" value="男" checked={this.state.v5==='男'} onChange={this.changeValue5} />
    < select onChange={handleChange} value={select} >
      <option value="grapefruit">葡萄柚</option>
      <option value="lime">酸橙</option>
      <option value="coconut">椰子</option>
      <option value="mango">芒果</option>
    </select >
  </div>
}