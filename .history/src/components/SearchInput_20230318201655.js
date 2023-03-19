import React, { useState, useRef, useEffect } from 'react';
import faker from 'faker';
import './SearchInput.css';

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

  const filterSuggestions = async (inputValue) => {
    if (inputValue) {
      const response = await fetch(`https://api.npms.io/v2/search/suggestions?q=${inputValue}`);
      const suggestionsData = await response.json();
      const filteredSuggestions = suggestionsData
        .map((suggestion) => suggestion.package.name)
        .slice(0, 10);
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
        <span className="autocomplete-text" style={{ left: `${inputRef.current?.value.length*7 + 7 || 0}px` }}>
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
