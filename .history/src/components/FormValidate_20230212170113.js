function FormValidate() {
  return (
    <div>
      <form style={{display: 'flex-column'}}>
        <div>
          <label>First Name</label>
          <input placeholder='First Name' type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input placeholder='Last Name' type="text" />
        </div>
        <div>
          <label>Email</label>
          <input placeholder='Email' type="email" />
        </div>
        <div>
          <label>Password</label>
          <input placeholder='Password' type="password" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidate