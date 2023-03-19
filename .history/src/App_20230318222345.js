import './App.css';
import Calculator from './components/Calculator';
import Dropdown from './components/Dropdown';
import SearchInput from './components/SearchInput'
import VirtualList from './components/VirtualList';
import LazyLoadImages from './components/LazyLoadImages';

const options = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Orange']

const App = () => {
  return (
    <div className='app'>
      {/* <Calculator /> */}
      {/* <Dropdown options={options} /> */}
      {/* <SearchInput /> */}
      {/* <VirtualList itemSize={100} /> */}
      <LazyLoadImages />
    </div>
  )
};


export default App;
