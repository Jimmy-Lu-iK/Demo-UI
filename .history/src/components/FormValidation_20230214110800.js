import { useState } from "react"
import FormValidationInput from "./FormValidationInput"

export default function FormValidation() {
  const initialFormValue = {
    username: '',
    email: '',
    password: '',
  }
  const [formValue, setFormValue] = useState(initialFormValue)
  const [formError, setFormError] = useState({})

  const inputsProp = [
    {
      id:1,
      name: 'username',
      type: 'text',
      errorMessage: formError.username,
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id:2,
      name: 'email',
      type: 'text',
      errorMessage: formError.email,
      placeholder: 'Email',
      label: 'Email'
    },
    {
      id:3,
      name: 'password',
      type: 'password',
      errorMessage: formError.password,
      placeholder: 'Password',
      label: 'Password'
    }
  ]

  const validate = (value) => {
    let errorObj = {}
    if(!value.username) {
      errorObj.username = 'This field is required'
    } else if (value.username.length<4) {
      errorObj.username = 'username should be 4 or more characters'
    }

    if(!value.email) {
      errorObj.email = 'This field is required'
    } else if (value.email.length<4) {
      errorObj.email = 'email should be 4 or more characters'
    }

    if(!value.password) {
      errorObj.password = 'This field is required'
    } else if (value.password.length<4) {
      errorObj.password = 'password should be 4 or more characters'
    }

    return errorObj
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue))
  }

  return <div>
    <form onSubmit={handleSubmit}>
      {inputsProp.map((input) => {
        return <FormValidationInput key={input.id} label={input.label} errorMessage={errorMessage}  />
      })}
    </form>
  </div>
}