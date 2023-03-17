import './App.css';
import Calculator from './components/Calculator';
import Dropdown from './components/Dropdown';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi']

const App = () => {
  return (
    <div className='app'>
      {/* <Calculator /> */}
      <Dropdown />
    </div>
  )
};


export default App;
