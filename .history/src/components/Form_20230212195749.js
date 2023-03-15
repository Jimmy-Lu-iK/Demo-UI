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

  const inputs = [
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
      placeholder: 'Email',
      label: 'Email'
    },
    {
      id:3,
      name:'birthday',
      type:"text",
      placeholder: 'Birthday',
      label: 'Birthday'
    },
    {
      id:4,
      name:'password',
      type:"text",
      placeholder: 'Password',
      label: 'Password'
    },
    {
      id:5,
      name:'confirmPassword',
      type:"text",
      placeholder: 'ConfirmPassword',
      label: 'ConfirmPassword'
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return <div>
    <form className='input-form' onSubmit={handleSubmit}>
      {inputs.map((input)=>{

      })}
      <button>Submit</button>
    </form>
  </div>
}

export default Form;