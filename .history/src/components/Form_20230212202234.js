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
      errorMessage:"",
      label: 'Username'
    },
    {
      id:2,
      name:'email',
      type:"text",
      placeholder: 'Email',
      errorMessage:"",
      label: 'Email'
    },
    {
      id:3,
      name:'birthday',
      type:"text",
      placeholder: 'Birthday',
      errorMessage:"",
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

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return <div>
    <form className='input-form' onSubmit={handleSubmit}>
      {inputs.map((input) => {
        return <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
      })}
      <button>Submit</button>
    </form>
  </div>
}

export default Form;