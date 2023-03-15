import { useState } from "react"

export default function ReactClock() {

  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [totalSecond, setTotalSecond] = useState(0)

  function init() {
    setInterval(() => {
      
    }, 1000)
  }


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

    <div>
      {second/60}:{second%60}
    </div>
  </div>
}