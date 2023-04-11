import { useState } from "react"
import './FormValidate.css'

export default function FormValidate() {
  const [logFormValues, setLogFormValues] = useState({
    username: '',
    lastname: ''
  })
  const [logFormError, setLogFormError] = useState({})
  const [dataFormValues, setDataFormValues] = useState({
    color: '',
    income: null,
    email: '',
  })
  const [dataFormError, setDataFormError] = useState({})
  const [isLogin, setIsLogin] = useState(false)

  const logInputsProp = [
    {
      id:1,
      name: 'username',
      type: 'text',
      errorMessage: logFormError.username,
      placeholder: 'Username',
      label: 'Username'
    },
    {
      id:2,
      name: 'lastname',
      type: 'text',
      errorMessage: logFormError.lastname,
      placeholder: 'Lastname',
      label: 'Lastname'
    },
  ]
  const dataInputsProp = [
    {
      id:1,
      name: 'color',
      type: 'text',
      errorMessage: dataFormError.color,
      placeholder: 'Color',
      label: 'Color'
    },
    {
      id:2,
      name: 'income',
      type: 'number',
      errorMessage: dataFormError.income,
      placeholder: 'Income',
      label: 'Income'
    },
    {
      id:3,
      name: 'email',
      type: 'text',
      errorMessage: dataFormError.email,
      placeholder: 'Email',
      label: 'Email'
    }
  ]

  const loginValidate = (value) => {
    let errorObj = {}
    if(!value.username) {
      errorObj.username = 'This field is required'
    } else if (value.username.length<4) {
      errorObj.username = 'username should be 4 or more characters'
    }

    if(!value.lastname) {
      errorObj.lastname = 'This field is required'
    } else if (value.lastname.length<4) {
      errorObj.lastname = 'lastname should be 4 or more characters'
    }

    return errorObj
  }

  const dataValidate = (value) => {
    let errorObj = {}
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail(email) {
      return emailRegex.test(email);
    }
    if(!value.email) {
      errorObj.email = 'This field is required'
    } else if (!validateEmail(value.email)) {
      errorObj.email = 'email is not valid!'
    }

    if(!value.income) {
      errorObj.income = 'This field is required'
    } else if (typeof value.income === 'number') {
      errorObj.income = 'Your input is not number'
    } else if (value.income<100000) {
      errorObj.income = 'Your annual income does not meet our standard'
    }

    if(!value.color) {
      errorObj.color = 'This field is required'
    } else if (value.color.length<3) {
      errorObj.color = 'color should be 3 or more characters'
    }

    return errorObj
  }

  const handleLoginOnChange = (e) => {
    const { name, value } = e.target;
    setLogFormValues({...logFormValues, [name]:value})
  }

  const handleDataOnChange = (e) => {
    const { name, value } = e.target;
    setDataFormValues({...dataFormValues, [name]:value})
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();  
    let errorObj = loginValidate(logFormValues) 
    if(Object.keys(errorObj).length === 0) {
      setIsLogin(true)
    } else {
      setLogFormError(errorObj)
    }
  }

  const handleDataSubmit = (e) => {
    e.preventDefault(); 
    let errorObj = dataValidate(dataFormValues) 
    if(Object.keys(errorObj).length === 0) {
      alert('API call succeed!')
    } else {
      setDataFormError(errorObj)
    }
  }

  const handleLoginOnBlur = (e) => {
    const { name } = e.target;

    let newError = loginValidate(logFormValues)
    console.log('newError: ', newError)
    const {[name]: currentInputError} = newError
    console.log('currentInputError: ', currentInputError)
    setLogFormError({...logFormError, [name]: currentInputError})
  }

  const handleDataOnBlur = (e) => {
    const { name } = e.target;

    let newError = dataValidate(dataFormValues)
    const {[name]: currentInputError} = newError
    setDataFormError({...dataFormError, [name]: currentInputError})
  }

  return <div>
    <div className="login-sign">You are {isLogin ? 'log in!' : 'log out!'}</div>
    <br />
    {!isLogin && <form onSubmit={handleLoginSubmit}>
      {logInputsProp.map(input => {
        return <div key={input.id}>
          <label htmlFor={input.id}>{input.label}: </label>
          <input
            id={input.id}
            name={input.name} 
            type={input.type}
            placeholder={input.placeholder}
            value={logFormValues[input.name]} 
            onChange={handleLoginOnChange}
            onBlur={handleLoginOnBlur}
          />
          <p style={{color: 'red'}}>{input.errorMessage}</p>
        </div>
      })}
      <button>Next</button>
    </form>}

    {isLogin && <div>
      <form onSubmit={handleDataSubmit}>
        {dataInputsProp.map(input => {
          return <div key={input.id}>
            <label htmlFor={input.id}>{input.label}: </label>
            <input 
              id={input.id}
              name={input.name} 
              value={dataFormValues[input.name]} 
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleDataOnChange}
              onBlur={handleDataOnBlur}
            />
            <p style={{color: 'red'}}>{input.errorMessage}</p>
          </div>
        })}
        <button>Save</button>
      </form>
      <button onClick={() => setIsLogin(false)}>Back</button>
    </div>
    }
  </div>
}