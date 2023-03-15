import { useState } from "react";
import FormInput from "./FormInput";

function Form() {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [fullname, setFullname] = useState('')

  const [values, setValues] = useState({
    username: "",
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const input = [
    {
      id:1,
      name:'username',
      type:"text",
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id:2,
      name:'email',
      type:"text",
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id:3,
      name:'username',
      type:"text",
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id:4,
      name:'username',
      type:"text",
      placeholder: 'Username',
      label: 'Username'
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return <div>
    <form className='input-form' onSubmit={handleSubmit}>
      <FormInput name="username" placeholder="Username" />
      <FormInput name="email" placeholder="Email" />
      <FormInput name="fullname" placeholder="Full Name" />
      <button>Submit</button>
    </form>
  </div>
}

export default Form;