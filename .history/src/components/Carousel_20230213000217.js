import { useState } from "react"

function Carousel() {
  const albumList = ['nihao', 'hello','what', 'love you']
  const [show, setShow] = useState(albumList[0])

  setInterval(() => {
    if(show===albumList[albumList.length-1]) {
      setShow(albumList[0])
    } else {
      
    }
  },[1000])


  return <div>
    Carousel 
  </div>
}

export default Carousel