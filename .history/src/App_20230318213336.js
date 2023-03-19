import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Dropdown from './components/Dropdown';
import SearchInput from './components/SearchInput'
import VirtualList from './components/VirturalList';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']

const App = () => {
  return (
    <div className='app'>
      {/* <Calculator /> */}
      {/* <Dropdown options={options} /> */}
      {/* <SearchInput /> */}
      <VirtualList />
    </div>
  )
};


export default App;