import React from "react";
import PropTypes from "prop-types";

// Lodash
import _noop from "lodash/noop";

// Styles
import styles from "./suggestionsDropdown.module.scss";

// Components
import Loader from "../../../loader";

// Constants
import { EMPTY_ARRAY } from "../../../../constants/general.constants";

const SuggestionsDropdown = ({
  suggestions,
  handleSuggestionClick,
  isAutoSuggestLoading,
}) => {
  if (suggestions.length === 0) {
    return (
      <ul className={`${styles.suggestions} ${styles.center}`}>
        {isAutoSuggestLoading ? <Loader /> : <li>No results found</li>}
      </ul>
    );
  }
  return (
    <ul className={styles.suggestions}>
      {suggestions.map((suggestion, index) => {
        return (
          <li key={suggestion} onClick={handleSuggestionClick}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  );
};

SuggestionsDropdown.propTypes = {
  suggestions: PropTypes.array,
  handleSuggestionClick: PropTypes.func,
  isAutoSuggestLoading: PropTypes.bool,
};

SuggestionsDropdown.defaultProps = {
  suggestions: EMPTY_ARRAY,
  handleSuggestionClick: _noop,
  isAutoSuggestLoading: false,
};

export default SuggestionsDropdown;
