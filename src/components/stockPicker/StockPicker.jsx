import React, { useState } from "react";

// Components
import { Toaster } from "react-hot-toast";
import AutoComplete from "../autoComplete";
import StockOverview from "../stockOverview";
import Carousel from "../carousel";
import NoStocksSelected from "./components/noStocksSelected";
import RefreshStocks from "../refreshStocks";

// Hooks
import useAutoCompleteHandlers from "./hooks/useAutoCompleteHandlers";
import useStockDataHandlers from "./hooks/useStockDataHandlers";

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

  const { handleSearchTextChange } = useAutoCompleteHandlers({
    setStockSuggestions,
    setShouldShowSuggestions,
    setAutoSuggestLoading,
    setSearchText,
    searchText,
  });

  const { handleSuggestionSelect, handleRemoveStockFromSelectedStocks } = useStockDataHandlers({
    stockSuggestions,
    setSelectedStocks,
    selectedStocks,
    setStockSuggestions,
    setStockOverviewLoading,
  });

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
