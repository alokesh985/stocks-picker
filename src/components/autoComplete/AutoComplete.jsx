import React, { useCallback, useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./autoComplete.module.scss";

import { KEYS } from "./autoComplete.constants";

const Autocomplete = ({
  userInput,
  handleChange,
  handleSuggestionSelect,
  suggestions,
  shouldShowSuggestions,
  placeholderText,
}) => {
  const [currentSuggestionIdx, setCurrentSuggestionIdx] = useState(0);

  const onKeyDown = useCallback((e) => {
    if (e.keyCode === KEYS.ENTER) {
      handleSuggestionSelect(suggestions[currentSuggestionIdx]);
    } else if (e.keyCode === KEYS.UP_ARROW) {
      if (currentSuggestionIdx === 0) {
        return;
      }
      setCurrentSuggestionIdx((suggestion) => suggestion - 1);
    } else if (e.keyCode === KEYS.DOWN_ARROW) {
      if (currentSuggestionIdx === suggestions.length - 1) {
        return;
      }
      setCurrentSuggestionIdx((suggestion) => suggestion + 1);
    }
  }, [currentSuggestionIdx, suggestions, handleSuggestionSelect]);

  const handleSuggestionClick = useCallback((e) => handleSuggestionSelect(e.currentTarget.innerText), [handleSuggestionSelect]);

  let suggestionsListComponent;

  if (shouldShowSuggestions) {
    if (suggestions.length) {
      suggestionsListComponent = (
        <ul className={styles.suggestions}>
          {suggestions.map((suggestion, index) => {
            return (
              <li
                className={cx({
                  [styles.suggestionActive]: index === currentSuggestionIdx,
                })}
                key={suggestion}
                onClick={handleSuggestionClick}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = <ul className={styles.suggestions}><li>No results found</li></ul>
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={userInput}
        placeholder={placeholderText}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;
