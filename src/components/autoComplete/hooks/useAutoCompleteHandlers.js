import { useCallback } from "react";

// Constants
import { KEYS } from "../autoComplete.constants";

const useAutoCompleteHandlers = ({
  handleSuggestionSelect,
  userInput,
  setShouldShowSuggestions,
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

  return {
    onKeyDown,
    handleSuggestionClick,
    showSuggestions,
    hideSuggestions,
    handleSearchButtonClicked,
  };
};

export default useAutoCompleteHandlers;
