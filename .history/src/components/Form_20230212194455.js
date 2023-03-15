import { useState } from "react";
import FormInput from "./FormInput";

function Form() {
  const [username. setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [fullname. setFullname] = useState('')
  const [username. setUsername] = useState('')

  return <div>
    <form className='input-form'>
      <FormInput placeholder="Username"/>
      <FormInput placeholder="Email"/>
      <FormInput placeholder="Full Name"/>
      <FormInput placeholder="Sth else"/>
    </form>
  </div>
}

export default Form;