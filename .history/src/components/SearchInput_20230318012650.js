import React, { useState, useRef, useEffect } from 'react';
import './SearchInput.css'

const searchBase = [
  'Apple', 'Banana','Ipad mini', 'Ipad 4', 'Ipad 5', 'Ipad 6',
  "iMac", 'iMac mini', 'Macbook Pro', 'Macbook'
]

function useDebounce(fn, delay) {

  const { current } = useRef({timer: null})

  return (...args) => {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    
    current.timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function SearchInput() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const optionsRef = useRef([]);

  const filterSuggestions = (inputValue) => {
    if(inputValue) {
      setSuggestions(searchBase.filter(item => {
        return item.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      }))
    } else {
      setSuggestions([])
    }
    setIsOpen(true)
  };

  const debouncedSearch = useDebounce(filterSuggestions, 500);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    debouncedSearch(inputValue)
  };

  function handleOptionSelect(event) {
    setQuery(event.target.textContent);
    setIsOpen(false);
  }

  function handleLastOptionTab(event) {
    if (event.keyCode === 9 ) { // Tab key pressed
      const lastOptionIndex = optionsRef.current.length - 1;
      if (event.target === optionsRef.current[lastOptionIndex]) {
        event.preventDefault();
        optionsRef.current[0].focus();
      }
    }

    if(event.key === "Enter") {
      console.log('event', event)
      setQuery(event.target.innerText)
      setIsOpen(false);
    }
  }

  return (
    <div className='search-input'>
      <label>Search Input: </label>
      <input type="text" value={query} onChange={handleChange} id="search-input"  />
      {isOpen && (
        <ul className='suggestion-list'>
          {
            suggestions.map((suggestion, index) => {
              return (
                <li 
                  key={index} 
                  tabIndex='0'
                  className='suggestion-item'  
                  ref={(node) => {
                    if (node) {
                      optionsRef.current[index] = node;
                    }
                  }}
                  onKeyDown={handleLastOptionTab} 
                  onClick={handleOptionSelect}
                >
                  {suggestion}
                </li>
              );
            })
          }
        </ul>
      )}
    </div>
  );
}

export default SearchInput;