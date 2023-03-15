import { useState } from "react"

function Carousel() {
  const albumList = ['nihao', 'hello','what', 'love you']
  const [show, setShow] = useState(albumList[0])

  setInterval(() => {
    if(show===albumList[albumList.length-1]) {
      setShow(albumList[0])
    } else {
      setShow(albumList.findIndex(show) + 1)
    }
  },[1000])


  return <div>
    {show} 
  </div>
}

export default Carousel