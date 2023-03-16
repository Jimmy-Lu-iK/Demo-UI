import './FormInput.css'

function FormInput(props) {
  const { label, onChange, id, ...inputProps } = props

  return <div className="formInput">
    <label>{label}</label>
    <input 
      {...inputProps}
    />
  </div>
}

export default FormInput