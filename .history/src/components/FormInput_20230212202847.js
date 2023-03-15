import './FormInput.css'

function FormInput(props) {
  const { label, onChange, errorMessage, ...inputProps } = props

  return <div className="formInput">
    <label>{label}</label>
    <input 
      {...inputProps}
      onChange={onChange}
    />
    <span>{}</span>
  </div>
}

export default FormInput