import './FormInput.css'

function FormInput(props) {
  return <div className="formInput">
    <label>Username</label>
    <input placeholder={props.placeholder} onChange={props.setUsername}/>
  </div>
}

export default FormInput