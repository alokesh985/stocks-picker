import React, { useCallback } from "react";

// Styles
import styles from "./autoComplete.module.scss";

// Constants
import { KEYS } from "./autoComplete.constants";

// Components
import SuggestionsDropdown from "./components/suggestionsDropdown";

// Images
import searchIcon from "./assets/images/search-icon.svg";

const Autocomplete = ({
  userInput,
  handleChange,
  handleSuggestionSelect,
  suggestions,
  shouldShowSuggestions,
  placeholderText,
  setShouldShowSuggestions,
  isAutoSuggestLoading,
}) => {
  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === KEYS.ENTER) {
        handleSuggestionSelect(userInput);
      }
    },
    [handleSuggestionSelect, userInput]
  );

  const handleSuggestionClick = useCallback(
    (e) => handleSuggestionSelect(e.currentTarget.innerText),
    [handleSuggestionSelect]
  );

  const showSuggestions = useCallback(() => {
    if (userInput) {
      setShouldShowSuggestions(true);
    }
  }, [setShouldShowSuggestions, userInput]);
  const hideSuggestions = useCallback(
    // Setting a timeout because we don't want to close the dropdown immediately, in case we click on some suggestion
    () => setTimeout(() => setShouldShowSuggestions(false), 100),
    [setShouldShowSuggestions]
  );

  const handleSearchButtonClicked = useCallback(() => {
    handleSuggestionSelect(userInput);
  }, [handleSuggestionSelect, userInput]);

  return (
    <div className={styles.autoCompleteContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder={placeholderText}
          onBlur={hideSuggestions}
          onFocus={showSuggestions}
        />
        <button
          className={styles.searchButton}
          onClick={handleSearchButtonClicked}
        >
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="search-icon"
          />
        </button>
      </div>
      {shouldShowSuggestions && (
        <SuggestionsDropdown
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
          isAutoSuggestLoading={isAutoSuggestLoading}
        />
      )}
    </div>
  );
};

export default Autocomplete;
