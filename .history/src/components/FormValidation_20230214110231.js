import { useState } from "react"

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
      errorMessage: '',
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id:2,
      name: 'email',
      type: 'text',
      errorMessage: '',
      placeholder: '#mail',
      label: '#mail'
    },
    {
      id:3,
      name: 'password',
      type: 'password',
      errorMessage: '',
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

  return <div>
    FormValidation
  </div>
}