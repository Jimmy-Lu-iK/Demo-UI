function Flexbox() {
  let dayArr = Array(42).fill(0)
  let weekArr = Array(6).fill(0)

  return <div>
    {weekArr.map((item, index) => {
      <div className="row"></div>
      dayArr.slice(index*7, index*7+7).map((item, ind) => {

      })
    })}
  </div>
}

export default Flexbox