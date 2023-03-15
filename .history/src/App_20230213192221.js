import './App.css';
import AutoComplete from './components/AutoComplete';
import Carousel from './components/Carousel';
import Dropdown from './components/Dorpdown';
import Form from './components/Form';
import TodoList from './components/TodoList';
import TodoListRedux from './components/TodoListRedux';
import ArrayBuiltIn from './Js/ArrayBuiltIn';
import FlattenObject from './Js/FlattenObject';
import Word from './Js/Word';

const App = () => {
  return <div className='app'>
    <TodoList />
    <TodoListRedux />
    <FlattenObject />
    {/* <Carousel />
    <Dropdown />
    <AutoComplete />
    <Form /> */}
    {/* <ArrayBuiltIn /> */}
    {/* <Word sentence="hello my name hello is Jinming I want to make friend with you let us to be good friends forever"/> */}
  </div>
};


export default App;
