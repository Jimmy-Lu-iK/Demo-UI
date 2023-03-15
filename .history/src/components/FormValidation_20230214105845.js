import { useState } from "react"

export default function FormValidation() {
  const initialFormValue = {
    username: '',
    email: '',
    password: '',
  }
  const [formValue, setFormValue] = useState(initialFormValue)

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
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id:3,
      name: 'password',
      type: 'text',
      errorMessage: '',
      placeholder: 'Username',
      label: 'Username'
    }
  ]

  return <div>
    FormValidation
  </div>
}