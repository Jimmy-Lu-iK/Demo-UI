import { useState } from "react"

export default function ReactClock() {

  const [Minute, setMinute] = useState()
  
  


  return <div>
    <label>
      <input type='number' />
      Minutes
    </label>
    <label>
      <input type='number' />
      Seconds
    </label>
    <button>Start</button>
    <button>Resume</button>
    <button>Reset</button>
  </div>
}