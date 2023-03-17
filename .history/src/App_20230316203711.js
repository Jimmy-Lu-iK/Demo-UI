import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Dropdown from './components/Dropdown';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi']

const App = () => {
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option)
  }
  return (
    <div className='app'>
      {/* <Calculator /> */}
      <Dropdown options={options} value={selected} onChange={setValue} />
    </div>
  )
};


export default App;
