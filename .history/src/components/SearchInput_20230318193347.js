import React, { useState, useRef, useEffect } from 'react';
import './SearchInput.css';

const searchBase = [
  'Apple',
  'Banana',
  'Ipad mini',
  'Ipad 4',
  'Ipad 5',
  'Ipad 6',
  'iMac',
  'iMac mini',
  'Macbook Pro',
  'Macbook',
];

function useDebounce(fn, delay) {
  const { current } = useRef({ timer: null });

  return (...args) => {
    if (current.timer) {
      clearTimeout(current.timer);
    }

    current.timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function SearchInput() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [autoComplete, setAutoComplete] = useState('');
  const [inputWidth, setInputWidth] = useState(0);
  const inputWrapperRef = useRef(null);

  const filterSuggestions = (inputValue) => {
    if (inputValue) {
      const filteredSuggestions = searchBase.filter((item) => {
        return item
          .toLocaleLowerCase()
          .startsWith(inputValue.toLocaleLowerCase());
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

  useEffect(() => {
    if (inputWrapperRef.current) {
      const inputWidth = inputWrapperRef.current.clientWidth;
      setInputWidth(inputWidth);
    }
  }, [query]);

  return (
    <div className="search-input">
      <label htmlFor="search-input">Search Input: </label>
      <div className="input-wrapper" ref={inputWrapperRef}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          id="search-input"
        />
        <span
          className="autocomplete-text"
          style={{ paddingLeft: inputWidth }}
        >
          {autoComplete}
        </span>
      </div>
      {isOpen && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              tabIndex="0"
              className="suggestion-item"
              onClick={() => {
                setQuery(suggestion);
                setIsOpen(false);
              }}
            >
              <strong>{suggestion.slice(0, query.length)}</strong>
              {suggestion.slice(query.length)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
