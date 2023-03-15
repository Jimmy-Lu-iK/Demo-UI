import { useState } from "react"

function FormValidate() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastNamee] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    
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

  const handleFN = (e) => {
    setFirstName(e.target.value)
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
          <input placeholder='Email' type="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          <label>Password</label>
          <input placeholder='Password' type="password" value={password} onChange={handlePassword} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidate