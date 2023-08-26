// Readers
import StockDataReader from "../readers/StockData";

export const getApiData = (apiResponse) => {
  const { data } = apiResponse;
  return data;
};

export const getStockOverview = stockData => stockData.map(stock => StockDataReader.stockOverview(stock));

export const getStockGraphData = stockData => stockData.map(stock => StockDataReader.dailyTimeSeries(stock));
