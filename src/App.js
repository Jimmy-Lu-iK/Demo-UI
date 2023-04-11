import './App.css';
import Calculator from './components/Calculator';
import Dropdown from './components/Dropdown';
import SearchInput from './components/SearchInput'
import VirtualList from './components/VirtualList';
import LazyLoadImages from './components/LazyLoadImages';
import BarChartWithResize from './components/BarChartWithResize';
import Toast from './components/Toast';
import { useState } from 'react';
import ToastExamples from './components/ToastExamples';
import FormValidate from './components/FormValidate';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']

const App = () => {
  return (
    <div className='app'>
      {/* <Calculator /> */}
      {/* <Dropdown options={options} /> */}
      {/* <SearchInput /> */}
      {/* <VirtualList itemSize={100} /> */}
      {/* <LazyLoadImages /> */}
      {/* <BarChartWithResize /> */}
      {/* <ToastExamples /> */}
      <FormValidate />
    </div>
  )
};


export default App;
