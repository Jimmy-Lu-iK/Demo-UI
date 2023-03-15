import './App.css';
import AutoComplete from './components/AutoComplete';
import Dropdown from './components/Dorpdown';
import FormInput from './components/FormInput';
import FormValidate from './components/FormValidate';
import ArrayBuiltIn from './Js/ArrayBuiltIn';
import Word from './Js/Word';

const App = () => {
  return <div className='app'>
    <Dropdown />
    <AutoComplete />
    <FormValidate />
    <form className='input-form'>
      <FormInput placeholder="Username"/>
      <FormInput placeholder="Email"/>
      <FormInput placeholder="Full Name"/>
      <FormInput placeholder="Sth else"/>
    </form>
    {/* <ArrayBuiltIn /> */}
    {/* <Word sentence="hello my name hello is Jinming I want to make friend with you let us to be good friends forever"/> */}
  </div>
};


export default App;
