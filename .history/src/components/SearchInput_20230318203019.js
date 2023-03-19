function SearchInput() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [autocompleteText, setAutocompleteText] = useState('');
  const inputRef = useRef(null);

  const fetchSuggestions = async (inputValue) => {
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

  const debouncedSearch = useDebounce(fetchSuggestions, 500);

  const handleChange = (event) => {
    const inputValue = event.target.value;

    setQuery(inputValue);
    debouncedSearch(inputValue);
  };

  const handleOptionSelect = (event) => {
    setQuery(event.target.textContent);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' && autocompleteText) {
      setQuery((query) => query + autocompleteText);
      setAutocompleteText('');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const autocompleteLeft = inputRect.left + inputRect.width + 5;
      const autocompleteTop = inputRect.top + window.pageYOffset;

      const autocompleteTextEl = document.querySelector('.autocomplete-text');
      autocompleteTextEl.style.left = `${autocompleteLeft}px`;
      autocompleteTextEl.style.top = `${autocompleteTop}px`;
    }
  }, [isOpen, autocompleteText]);

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
        <span
          className="autocomplete-text"
        >
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
