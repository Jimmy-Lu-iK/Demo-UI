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

function SuggestionItem({ suggestion, query, onClick }) {
  const highlight = (suggestion, query) => {
    const startIndex = suggestion.toLowerCase().indexOf(query.toLowerCase());
    const endIndex = startIndex + query.length;
    return (
      <span>
        {suggestion.slice(0, startIndex)}
        <strong>{suggestion.slice(startIndex, endIndex)}</strong>
        {suggestion.slice(endIndex)}
      </span>
    );
  };

  return (
    <li
      tabIndex="0"
      className="suggestion-item"
      onClick={onClick}
    >
      {highlight(suggestion, query)}
    </li>
  );
}

function SearchInput() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [autoComplete, setAutoComplete] = useState('');

  const inputRef = useRef();

  const filterSuggestions = (inputValue) => {
    if (inputValue) {
      const filteredSuggestions = searchBase.filter((item) => {
        return item.toLocaleLowerCase().startsWith(inputValue.toLocaleLowerCase());
      });
      setSuggestions(filteredSuggestions);
      if (filteredSuggestions.length > 0) {
        setAutoComplete(filteredSuggestions[0].slice(inputValue.length));
      } else {
        setAutoComplete('');
      }
    } else {
      setSuggestions([]);
      setAutoComplete('');
    }
    setIsOpen(true);
  };  

  const debouncedSearch = useDebounce(filterSuggestions, 500);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    debouncedSearch(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setQuery(query + autoComplete);
      setAutoComplete('');
    }
  };

  const handleOptionSelect = (suggestion) => {
    setQuery(suggestion);
    setIsOpen(false);
  };

  return (
    <div className="search-input">
      <label htmlFor="search-input">Search Input: </label>
      <div className="input-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          id="search-input"
          ref={inputRef}
        />
        <span className="autocomplete-text">{autoComplete}</span>
      </div>
      {isOpen && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              suggestion={suggestion}
              query={query}
              onClick={() => handleOptionSelect(suggestion)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
