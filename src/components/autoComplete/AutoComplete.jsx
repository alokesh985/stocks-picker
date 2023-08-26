import React from "react";
import PropTypes from "prop-types";

// Lodash
import _noop from 'lodash/noop';

// Styles
import styles from "./autoComplete.module.scss";

// Components
import SuggestionsDropdown from "./components/suggestionsDropdown";

// Images
import searchIcon from "./assets/images/search-icon.svg";

// Hooks
import useAutoCompleteHandlers from "./hooks/useAutoCompleteHandlers";

// Constants
import { EMPTY_ARRAY } from "../../constants/general.constants";

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
  const {
    onKeyDown,
    handleSuggestionClick,
    showSuggestions,
    hideSuggestions,
    handleSearchButtonClicked,
  } = useAutoCompleteHandlers({
    handleSuggestionSelect,
    userInput,
    setShouldShowSuggestions,
  });

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

Autocomplete.propTypes = {
  userInput: PropTypes.string,
  handleChange: PropTypes.func,
  handleSuggestionSelect: PropTypes.func,
  suggestions: PropTypes.array,
  shouldShowSuggestions: PropTypes.bool,
  placeholderText: PropTypes.string,
  setShouldShowSuggestions: PropTypes.func,
  isAutoSuggestLoading: PropTypes.bool,
};

Autocomplete.defaultProps = {
  userInput: '',
  handleChange: _noop,
  handleSuggestionSelect: _noop,
  suggestions: EMPTY_ARRAY,
  shouldShowSuggestions: false,
  placeholderText: '',
  setShouldShowSuggestions: _noop,
  isAutoSuggestLoading: false,
}

export default Autocomplete;
