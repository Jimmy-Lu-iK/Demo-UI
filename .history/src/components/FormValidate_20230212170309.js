function FormValidate() {
  const []

  const handleSubmit = () => {
    
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
          <input placeholder='Email' type="email" value={email} onChange={handleLN} />
        </div>
        <div>
          <label>Password</label>
          <input placeholder='Password' type="password" value={password} onChange={handleLN} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidate