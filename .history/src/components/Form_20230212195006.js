import { useState } from "react";
import FormInput from "./FormInput";

function Form() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return <div>
    <form className='input-form' onSubmit={handleSubmit}>
      <FormInput placeholder="Username" />
      <FormInput placeholder="Email"/>
      <FormInput placeholder="Full Name"/>
      <FormInput placeholder="Sth else"/>
      <button>Submit</button>
    </form>
  </div>
}

export default Form;