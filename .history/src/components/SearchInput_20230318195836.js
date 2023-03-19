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
  const [autocompleteText, setAutocompleteText] = useState('');

  const inputRef = useRef(null);
  const hiddenTextRef = useRef(null)

  useEffect(() => {
    if (inputRef.current && hiddenTextRef.current) {
      hiddenTextRef.current.style.fontSize = window.getComputedStyle(inputRef.current).fontSize;
    }
  }, []);

  const filterSuggestions = (inputValue) => {
    if (inputValue) {
      const filteredSuggestions = searchBase.filter((item) => {
        return item.toLocaleLowerCase().startsWith(inputValue.toLocaleLowerCase());
      });
      setSuggestions(filteredSuggestions);
      if (filteredSuggestions.length > 0) {
        setAutocompleteText(filteredSuggestions[0].substr(inputValue.length));
      } else {
        setAutocompleteText('');
      }
    } else {
      setSuggestions([]);
      setAutocompleteText('');
    }

    setIsOpen(true);
  };

  const debouncedSearch = useDebounce(filterSuggestions, 500);

  const handleChange = (event) => {
    const inputValue = event.target.value;

    setQuery(inputValue);
    debouncedSearch(inputValue);
  };

  function handleOptionSelect(event) {
    setQuery(event.target.textContent);
    setIsOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight' && autocompleteText) {
      setQuery((query) => query + autocompleteText);
      setAutocompleteText('');
    }
  }

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
        <span className="autocomplete-text" style={{ left: `${inputRef.current?.value.length*8 || 0}px` }}>
          {autocompleteText}
        </span>
      </div>
      {isOpen && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => {
            return (
              <li key={index} tabIndex="0" className="suggestion-item" onClick={handleOptionSelect}>
                <b>{suggestion.slice(0, query.length)}</b>
                {suggestion.slice(query.length)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
