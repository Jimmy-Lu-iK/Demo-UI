import './FormInput.css'

function FormInput(props) {
  const { label, onChange, id, ...inputProps } = props

  return <div className="formInput">
    <label>Username</label>
    <input 
      placeholder={props.placeholder} 
      onChange={(e) => props.setUsername(e.target.value)}
    />
  </div>
}

export default FormInput