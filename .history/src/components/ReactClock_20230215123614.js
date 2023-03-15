import { useEffect, useState } from "react"

export default function ReactClock() {

  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [totalSecond, setTotalSecond] = useState(100)

  useEffect(() => {
    const internal = setInterval(() => {
      if(totalSecond === 0) {
        clearInterval(internal)
      } else {
        setTotalSecond(totalSecond=>totalSecond-1)
      }
    }, 1000)

  }, [totalSecond])

  
  
  
  function init() {
    const internal = setInterval(() => {
      if(totalSecond === 0) {
        clearInterval(internal)
      } else {
        setTotalSecond(totalSecond=>totalSecond-1)
      }
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
      {totalSecond/60}:{totalSecond%60}
    </div>
  </div>
}