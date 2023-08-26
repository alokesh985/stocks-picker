// Utils
import toaster from "react-hot-toast";

// Readers
import StockDataReader from "../readers/StockData";

export const getApiData = (apiResponse) => {
  const { data } = apiResponse;
  return data;
};

export const getStockOverview = stockData => stockData.map(stock => StockDataReader.stockOverview(stock));

export const getStockGraphData = stockData => stockData.map(stock => StockDataReader.dailyTimeSeries(stock));

export const handleFailure = (err) => {
  console.error(err);
  toaster.error("Some error occurred. Please try again");
};