import React, { useState, useCallback } from "react";

// lodash
import _debounce from "lodash/debounce";

// Services
import { fetchOverview, fetchSymbols } from "./stockPicker.services";

// Helpers
import {
  getSuggestions,
  handleFailure,
  getStockOverview,
} from "./stockPicker.helpers";

// Components
import AutoComplete from "../autoComplete";
import StockOverview from "../stockOverview";

// Readers
import OverviewReader from "../../readers/Overview";

const StockPicker = () => {
  // Local State
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [stockSuggestions, setStockSuggestions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [shouldShowSuggestions, setShouldShowSuggestions] = useState(false);

  const handleFetchSymbolsSuccess = (apiResponse) => {
    const suggestions = getSuggestions(apiResponse);
    setStockSuggestions(suggestions);
    setShouldShowSuggestions(true);
  };

  const updateSuggestions = useCallback(
    _debounce((searchText) => {
      fetchSymbols(searchText)
        .then(handleFetchSymbolsSuccess)
        .catch(handleFailure);
    }, 1000),
    []
  );

  const handleSearchTextChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    setShouldShowSuggestions(false);
    if (newSearchText) {
      updateSuggestions(newSearchText);
    }
  };

  const handleFetchOverviewSuccess = (apiResponse) => {
    const stockOverView = getStockOverview(apiResponse);
    console.log(stockOverView);
    setSelectedStocks([...selectedStocks, stockOverView]);
    
  };

  const handleSuggestionSelect = (selectedSuggestion) => {
    fetchOverview(selectedSuggestion)
      .then(handleFetchOverviewSuccess)
      .catch(handleFailure);
  };

  const handleRemoveStockFromSelectedStocks = (symbol) => () => {
    console.log(symbol);
    const updatedSelectedStocks = selectedStocks.filter(
      (stock) => OverviewReader.symbol(stock) !== symbol
    );
    setSelectedStocks(updatedSelectedStocks);
  };

  return (
    <>
      <AutoComplete
        userInput={searchText}
        handleChange={handleSearchTextChange}
        handleSuggestionSelect={handleSuggestionSelect}
        suggestions={stockSuggestions}
        shouldShowSuggestions={shouldShowSuggestions}
        placeholderText="Enter stock name here"
      />
      <StockOverview selectedStocks={selectedStocks} handleRemoveStockFromSelectedStocks={handleRemoveStockFromSelectedStocks} />
    </>
  );
};

export default StockPicker;
