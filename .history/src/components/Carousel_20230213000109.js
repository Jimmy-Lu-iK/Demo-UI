import { useState } from "react"

function Carousel() {
  const albumList = ['nihao', 'hello','what', 'love you']
  const [show, setShow] = useState(albumList[0])


  return <div>
    Carousel 
  </div>
}

export default Carousel