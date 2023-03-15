import { useEffect, useState } from "react"

export default function ReactClock() {

  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [totalSecond, setTotalSecond] = useState(0)
  const [isStart, setIsStart] = useState(false)
  const [isResume, setIsResume] = useState(false)

  useEffect(() => {
    const internal = setInterval(() => {
      if(totalSecond === 0) {
        clearInterval(internal)
      } else {
        setTotalSecond(totalSecond=>totalSecond-1)
      }
    }, 1000)
    return () => clearInterval(internal)
  }, [totalSecond])

  const handleStart = () => {
    if(!isStart) {
      setTotalSecond(minute*60+second)
      setIsStart(false)
    }
  }

  const handleResume = () => {
    if(isResume) {
      setIsResume(false)
    } else {
      setIsResume(true)
    }
  }

  const handleReset = () => {
    setMinute(0)
  }


  return <div>
    <label>
      <input type='number' value={minute} onChange={(e) => setMinute(e.target.value)}/>
      Minutes
    </label>
    <label>
      <input type='number' value={second} onChange={(e) => setSecond(e.target.value)}/>
      Seconds
    </label>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleResume}>Resume</button>
    <button onClick={handleReset}>Reset</button>

    <div>
      {Math.floor(totalSecond/60)}:{totalSecond%60}
    </div>
  </div>
}