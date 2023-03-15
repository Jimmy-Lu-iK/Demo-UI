import './App.css';
import AutoComplete from './components/AutoComplete';
import Calculator from './components/Calculator';
import Carousel from './components/Carousel';
import Dropdown from './components/Dorpdown';
import Flexbox from './components/Flexbox';
import Form from './components/Form';
import FormValidation from './components/FormValidation';
import Inputs from './components/Inputs';
import ReactClock from './components/ReactClock';
import TodoList from './components/TodoList';
import TodoListRedux from './components/TodoListRedux';
import ArrayBuiltIn from './Js/ArrayBuiltIn';
import Closual from './Js/Closual';
import FlattenObject from './Js/FlattenObject';
import PromisePractice from './Js/PromisePractice';
import UrlDeal from './Js/UrlDeal';
import Word from './Js/Word';

const App = () => {
  return <div className='app'>
    <ReactClock />
    <UrlDeal url='www.apple.com?a=1&b=2&c=3' />
    <Calculator />
    <FlattenObject />
    <PromisePractice />
    <Closual />
    <Inputs />
    <TodoList />
    {/* <TodoList />
    <TodoListRedux />
    <FlattenObject />
    <Form />
    <Flexbox />
    <FormValidation /> */}
    {/* <Carousel />
    <Dropdown />
    <AutoComplete />
    <Form /> */}
    <ArrayBuiltIn />
    {/* <Word sentence="hello my name hello is Jinming I want to make friend with you let us to be good friends forever"/> */}
  </div>
};


export default App;
