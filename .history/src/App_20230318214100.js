import { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Dropdown from './components/Dropdown';
import SearchInput from './components/SearchInput'
import VirtualList from './components/VirturalList';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']
const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

const App = () => {
  return (
    <div className='app'>
      {/* <Calculator /> */}
      {/* <Dropdown options={options} /> */}
      {/* <SearchInput /> */}
      <VirtualList items={items} itemSize={50} />
    </div>
  )
};


export default App;
