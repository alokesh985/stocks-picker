import { useCallback, useEffect } from "react";

// Lodash
import _debounce from "lodash/debounce";

// Helpers
import { getSuggestions } from "../stockPicker.helpers";
import { handleFailure } from "../../../helpers/helpers.general";

// Services
import { fetchSymbols } from "../stockPicker.services";

const useAutoCompleteHandlers = ({
  setStockSuggestions,
  setShouldShowSuggestions,
  setAutoSuggestLoading,
  setSearchText,
  searchText,
}) => {
  // Clear suggestions list if input is cleared
  useEffect(() => {
    if (searchText === "") {
      setStockSuggestions([]);
    }
  }, [searchText, setStockSuggestions]);

  const handleFetchSymbolsSuccess = (apiResponse) => {
    const suggestions = getSuggestions(apiResponse);
    setStockSuggestions(suggestions);
    setShouldShowSuggestions(true);
  };

  const updateSuggestions = useCallback(
    _debounce((searchText) => {
      setAutoSuggestLoading(true);
      setShouldShowSuggestions(true);
      fetchSymbols(searchText)
        .then(handleFetchSymbolsSuccess)
        .catch(handleFailure)
        .finally(() => setAutoSuggestLoading(false));
    }, 500),
    []
  );

  const handleSearchTextChange = useCallback(
    (e) => {
      const newSearchText = e.target.value;
      setSearchText(newSearchText);
      setShouldShowSuggestions(false);
      if (newSearchText) {
        updateSuggestions(newSearchText);
      }
    },
    [updateSuggestions, setSearchText, setShouldShowSuggestions]
  );

  return { handleSearchTextChange };
};

export default useAutoCompleteHandlers;
