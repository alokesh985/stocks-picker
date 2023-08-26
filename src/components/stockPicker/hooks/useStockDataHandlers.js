import { useCallback } from "react";

// Lodash
import _isEmpty from "lodash/isEmpty";
import _some from "lodash/some";

// Utils
import toaster from "react-hot-toast";

// Helpers
import {
  getApiData,
  getStockOverview,
  handleFailure,
} from "../../../helpers/helpers.general";
import {
  getFilteredSuggestions,
  getOverviewAndGraphDetailsPromises,
} from "../stockPicker.helpers";

// Readers
import StockDataReader from "../../../readers/StockData";
import OverviewReader from "../../../readers/Overview";

const useStockDataHandlers = ({
  stockSuggestions,
  setSelectedStocks,
  selectedStocks,
  setStockSuggestions,
  setStockOverviewLoading,
}) => {
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
        return OverviewReader.symbol(overviewData) !== symbol;
      });
      setSelectedStocks(updatedSelectedStocks);
      // If we delete a stock, it should come back to the top of suggestions
      setStockSuggestions([symbol, ...stockSuggestions]);
    },
    [selectedStocks, stockSuggestions, setSelectedStocks, setStockSuggestions]
  );

  return { handleSuggestionSelect, handleRemoveStockFromSelectedStocks };
};

export default useStockDataHandlers;
