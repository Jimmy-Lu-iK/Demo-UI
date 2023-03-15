
export default function FormValidationInput(props) {
  const {label, errorMessage, ...inputProps} = props

  return <div>
    <label>{label}</label>
    <input {...inputProps}  />
    <p>{errorMessage}</p>
  </div>
}