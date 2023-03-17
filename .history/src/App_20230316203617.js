import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Dropdown from './components/Dropdown';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi']

const App = () => {
  const [value, setValue] = useState()
  return (
    <div className='app'>
      {/* <Calculator /> */}
      <Dropdown options={options} value={value} onChange={setValue} />
    </div>
  )
};


export default App;
