import { useState } from "react";
import FormInput from "./FormInput";
import validator from 'validator';

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
      errorMessage:"Username shoudl be 3-16 characters adn shouldn't include any special character",
      label: 'Username',
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id:2,
      name:'email',
      type:"email",
      placeholder: 'Email',
      errorMessage:"It should be a valid email address",
      label: 'Email',
      required: true
    },
    {
      id:3,
      name:'birthday',
      type:"date",
      placeholder: 'Birthday',
      errorMessage:"",
      label: 'Birthday',
      required: true
    },
    {
      id:4,
      name:'password',
      type:"text",
      placeholder: 'Password',
      errorMessage:"Password should be 8-20 characters and in clude at least 1 letter, 1 number and 1 special character",
      label: 'Password',
      required: true
    },
    {
      id:5,
      name:'confirmPassword',
      type:"text",
      placeholder: 'ConfirmPassword',
      errorMessage:"Passwords don't match",
      label: 'ConfirmPassword',
      pattern: values.password,
      required: true
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