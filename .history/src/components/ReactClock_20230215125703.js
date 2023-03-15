import { useEffect, useState } from "react"

export default function ReactClock() {

  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [totalSecond, setTotalSecond] = useState(0)
  const [isStart, setIsStart] = useState(false)
  const [isResume, setIsResume] = useState(false)

  useEffect(() => {
    if(!isResume) {
      
    }
    const internal = setInterval(() => {
      if(totalSecond === 0) {
        clearInterval(internal)
      } else {
        setTotalSecond(totalSecond=>totalSecond-1)
      }
    }, 1000)
    return () => clearInterval(internal)
  }, [totalSecond, isResume])

  const handleStart = () => {
    if(!isStart) {
      console.log('minute*60, ', minute*60)
      console.log('second, ', second)
      console.log('minute*60+second*1, ', minute*60+second*1)
      setTotalSecond(minute*60+second*1)
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
    setSecond(0)
    setTotalSecond(0)
    setIsStart(false)
    setIsResume(false)
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