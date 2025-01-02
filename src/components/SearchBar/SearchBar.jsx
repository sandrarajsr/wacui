import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import style from './SearchBar.module.scss';
import Iconmoon from '../Iconmoon/Iconmoon';
import { headerLinks } from "../Layout/Header/Header";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(headerLinks);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0) {
      // Use headerLinks for filtering
      const filteredSuggestions = headerLinks.filter(suggestion =>
        suggestion.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions(headerLinks);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.title); // Use suggestion.title for display
  };

  return (
    <div className={`${style.search} position-relative`}>
      <Form.Group className={style.form_group}>
        <Form.Control
          type="input"
          placeholder="Search"
          onChange={handleInputChange}
          value={inputValue}
        />
        <div className={style.icon}>
          <Iconmoon icon="search" size={15} color="#71717a" />
        </div>
      </Form.Group>
      {suggestions.length > 0 ? (
        <ul className={style.suggestions}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              onKeyDown={(e) => e.key === 'Enter' && handleSuggestionClick(suggestion)}
              role="option"
              tabIndex="0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file "><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
              {suggestion.title} {/* Adjust based on the structure of headerLinks */}
            </li>
          ))}
        </ul>
      )
        :
        <div className={style.no_result}>
          <p className={`${style.no_text} mb-0`}>No result found</p>
        </div>
      }
    </div>
  );
};

export default SearchBar;
