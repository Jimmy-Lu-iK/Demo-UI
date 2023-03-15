function FormValidate() {
  return (
    <div>
      <form>
        <div>
        <label>First Name</label>
            <input placeholder='First Name' type="text" />
        </div>
            <label>First Name</label>
            <input placeholder='First Name' type="text" />
            <label>Last Name</label>
            <input placeholder='Last Name' type="text" />
            <label>Email</label>
            <input placeholder='Email' type="email" />
            <label>Password</label>
            <input placeholder='Password' type="password" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidate