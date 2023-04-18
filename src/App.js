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
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']
const links = [
  { title: "Home", path: "/" },
  { title: "Search", path: "/search" },
  { title: "Bar", path: "/bar" },
];

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
      {/* <FormValidate /> */}
      <Router>
        <div className="App" style={{ paddingTop: '3.5rem' }}>
          <NavBar links={links} />
          <Routes>
              <Route path="/" exact element={<h2>Hello</h2>} />
              <Route path="/search" element={<SearchInput />} />
              <Route path="/bar" element={<BarChartWithResize />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
};


export default App;
