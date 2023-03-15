import FormInput from "./FormInput";

function Form() {
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