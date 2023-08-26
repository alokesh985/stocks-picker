import React from "react";

// Styles
import styles from "./suggestionsDropdown.module.scss";
import Loader from "../../../loader";

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
          <li
            key={suggestion}
            onClick={handleSuggestionClick}
          >
            {suggestion}
          </li>
        );
      })}
    </ul>
  );
};

export default SuggestionsDropdown;
