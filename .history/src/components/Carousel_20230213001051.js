import { useState } from "react"

function Carousel() {
  const albumList = ['nihao', 'hello','what', 'love you']
  const [show, setShow] = useState(albumList[0])

  setTimeout(() => {
    console.log('hello')
    if(show===albumList[albumList.length-1]) {
      console.log('albumList[0]', albumList[0])
      setShow(albumList[0])
    } else {
      console.log('albumList[albumList.findIndex(show) + 1]', albumList[albumList.findIndex((album) => album === show) + 1])
      //setShow(albumList[albumList.findIndex(show) + 1])
    }
  },[1000])


  return <div>
    {show} 
  </div>
}

export default Carousel