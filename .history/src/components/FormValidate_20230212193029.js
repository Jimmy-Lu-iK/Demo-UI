import { useState } from "react"
import validator from 'validator';

function FormValidate() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastNamee] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = validator.isEmail(email)
    if(validation) {
      alert('success!')
    } else {
      alert('fail!')
    }
  }

  const handleFN = (e) => {
    setFirstName(e.target.value)
  }

  const handleLN = (e) => {
    setLastNamee(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <form style={{display: 'flex-column'}} onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input placeholder='First Name' type="text" value={firstName} onChange={handleFN} />
        </div>
        <div>
          <label>Last Name</label>
          <input placeholder='Last Name' type="text" value={lastName} onChange={handleLN} />
        </div>
        <div>
          <label>Email</label>
          <input placeholder='Email' type="text" value={email} onChange={handleEmail} />
        </div>
        <div>
          <label>Password</label>
          <input placeholder='Password' type="text" value={password} onChange={handlePassword} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidate