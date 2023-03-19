// SearchInput.js
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

  const filterSuggestions = (inputValue) => {
    if (inputValue) {
      const filteredSuggestions = searchBase.filter((item) => {
        return item.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
      });
      setSuggestions(filteredSuggestions);
      if (filteredSuggestions.length > 0) {
        setAutoComplete(filteredSuggestions[0]);
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

  const handleOptionSelect = (suggestion) => {
    setQuery(suggestion);
    setIsOpen(false);
  };

  const inputStyle = {
    background: `linear-gradient(to right, rgba(255, 255, 255, 1) ${query.length}ch, rgba(255, 255, 255, 0) 0)`
  };

  return (
    <div className="search-input">
      <label htmlFor="search-input">Search Input: </label>
      <input
        type="text"
        value={`${query}${autoComplete.slice(query.length)}`}
        onChange={handleChange}
        id="search-input"
        style={inputStyle}
      />
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
