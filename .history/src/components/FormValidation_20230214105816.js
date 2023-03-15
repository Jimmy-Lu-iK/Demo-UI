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
    }
  ]

  return <div>
    FormValidation
  </div>
}