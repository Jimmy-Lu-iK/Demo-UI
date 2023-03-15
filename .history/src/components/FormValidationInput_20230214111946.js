
export default function FormValidationInput(props) {
  const {label, errorMessage, onChange, onBlur, ...inputProps} = props

  return <div>
    <label>{label}</label>
    <input {...inputProps} onChange={onChange} onBlur={onBlur}  />
    <p style={{color: 'red'}}>{errorMessage}</p>
  </div>
}