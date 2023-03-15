function Option() {

  return <div>
    <li onClick={() => hanldeChoose(option)}>{option} <button onClick={() => hanldeEdit(option)}>Edit</button></li>
  </div>
}

export default Option