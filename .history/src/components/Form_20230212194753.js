import { useState } from "react";
import FormInput from "./FormInput";

function Form() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')

  return <div>
    <form className='input-form'>
      <FormInput placeholder="Username" username=setUsername={setUsername}/>
      <FormInput placeholder="Email"/>
      <FormInput placeholder="Full Name"/>
      <FormInput placeholder="Sth else"/>
      <button>Submite</button>
    </form>
  </div>
}

export default Form;