import { useState } from "react"

function Carousel() {
  const albumList = ['nihao', 'hello','what', 'love you']
  const [show, setShow] = useState(albumList[0])

  setInterval(() => {
    console.log('hello')
    if(show===albumList[albumList.length-1]) {
      console.log('albumList[0]', albumList[0])
      setShow(albumList[0])
    } else {
      setShow(albumList[albumList.findIndex(show) + 1])
    }
  },[1000])


  return <div>
    {show} 
  </div>
}

export default Carousel