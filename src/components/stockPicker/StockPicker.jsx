import React, { useEffect, useState, useCallback } from "react";

// lodash
import _debounce from "lodash/debounce";
import _isEmpty from "lodash/isEmpty";
import _some from "lodash/some";

// utils
import toaster from "react-hot-toast";

// Services
import { fetchSymbols } from "./stockPicker.services";

// Helpers
import {
  getSuggestions,
  handleFailure,
  getFilteredSuggestions,
  getOverviewAndGraphDetailsPromises,
} from "./stockPicker.helpers";
import { getApiData, getStockOverview } from "../../helpers/helpers.general";

// Components
import { Toaster } from "react-hot-toast";
import AutoComplete from "../autoComplete";
import StockOverview from "../stockOverview";
import Carousel from "../carousel";
import NoStocksSelected from "./components/noStocksSelected";
import RefreshStocks from "../refreshStocks";

// Readers
import OverviewReader from "../../readers/Overview";
import StockDataReader from "../../readers/StockData";

// Styles
import styles from "./stockPicker.module.scss";

const StockPicker = () => {
  // Local State
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [stockSuggestions, setStockSuggestions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [shouldShowSuggestions, setShouldShowSuggestions] = useState(false);
  const [isAutoSuggestLoading, setAutoSuggestLoading] = useState(false);
  const [isStockOverviewLoading, setStockOverviewLoading] = useState(false);

  // Clear suggestions list if input is cleared
  useEffect(() => {
    if (searchText === "") {
      setStockSuggestions([]);
    }
  }, [searchText  ]);

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
    [updateSuggestions]
  );

  const handleFetchDataSuccess = ([overViewResponse, timeSeriesResponse]) => {
    const stockOverview = getApiData(overViewResponse);
    const dailyTimeSeries = getApiData(timeSeriesResponse);
    // For handling empty response
    if (_isEmpty(stockOverview) || _isEmpty(dailyTimeSeries)) {
      toaster.error("Stock data not found");
      return;
    }
    const fetchedStockData = { stockOverview, dailyTimeSeries };
    // To remove a stock from suggestions if it is selected
    const filteredSuggestions = getFilteredSuggestions(
      fetchedStockData,
      stockSuggestions
    );
    setSelectedStocks([...selectedStocks, fetchedStockData]);
    setStockSuggestions(filteredSuggestions);
  };

  const handleSuggestionSelect = (selectedSuggestion) => {
    // Check to avoid duplicate stocks being selected
    const overviewData = getStockOverview(selectedStocks);
    if (_some(overviewData, { Symbol: selectedSuggestion })) {
      toaster.success("Stock already selected!");
      return;
    }
    setStockOverviewLoading(true);
    const fetchData = getOverviewAndGraphDetailsPromises(selectedSuggestion);
    fetchData
      .then(handleFetchDataSuccess)
      .catch(handleFailure)
      .finally(() => setStockOverviewLoading(false));
  };

  const handleRemoveStockFromSelectedStocks = useCallback(
    (symbol) => {
      const updatedSelectedStocks = selectedStocks.filter((stock) => {
        const overviewData = StockDataReader.stockOverview(stock);
        return OverviewReader.symbol(overviewData) === symbol;
      });
      setSelectedStocks(updatedSelectedStocks);
      // If we delete a stock, it should come back to the top of suggestions
      setStockSuggestions([symbol, ...stockSuggestions]);
    },
    [selectedStocks, stockSuggestions]
  );

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Stock Picker</h1>
      <AutoComplete
        userInput={searchText}
        handleChange={handleSearchTextChange}
        handleSuggestionSelect={handleSuggestionSelect}
        suggestions={stockSuggestions}
        shouldShowSuggestions={shouldShowSuggestions}
        placeholderText="Enter stock name here"
        setShouldShowSuggestions={setShouldShowSuggestions}
        isAutoSuggestLoading={isAutoSuggestLoading}
      />
      {selectedStocks.length !== 0 || isStockOverviewLoading ? (
        <Carousel
          component={StockOverview}
          data={selectedStocks}
          componentProps={{
            handleRemoveStockFromSelectedStocks,
            isStockOverviewLoading,
          }}
          isCarouselLoading={isStockOverviewLoading}
        />
      ) : (
        <NoStocksSelected />
      )}
      {selectedStocks.length > 0 && (
        <RefreshStocks
          setSelectedStocks={setSelectedStocks}
          selectedStocks={selectedStocks}
          setStockOverviewLoading={setStockOverviewLoading}
        />
      )}
      <Toaster position="bottom-center" />
    </div>
  );
};

export default StockPicker;
