// Utils
import toaster from "react-hot-toast";

// Services
import { fetchOverview, fetchDailyTimeSeries } from "./stockPicker.services";

// Readers
import SymbolSearchReader from "../../readers/SymbolSearch";
import OverviewReader from "../../readers/Overview";

export const getSuggestions = (apiResponse) => {
  const { data } = apiResponse;
  const bestMatches = SymbolSearchReader.bestMatches(data);
  if (bestMatches) {
    return bestMatches.map((match) => SymbolSearchReader.symbol(match));
  }
  return [];
};

export const handleFailure = (err) => {
  console.error(err);
  toaster.error("Some error occurred. Please try again");
};

export const getFilteredSuggestions = (stockData, stockSuggestions) => {
  const { stockOverview } = stockData;
  return stockSuggestions.filter(
    (suggestion) => suggestion !== OverviewReader.symbol(stockOverview)
  );
};

export const getOverviewAndGraphDetailsPromises = (symbol) => {
  const getOverviewPromise = fetchOverview(symbol);
  const getDailyTimeSeriesPromise = fetchDailyTimeSeries(symbol);
  return Promise.all([getOverviewPromise, getDailyTimeSeriesPromise]);
};
