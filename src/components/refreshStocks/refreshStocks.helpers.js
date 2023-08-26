// Readers
import OverviewReader from "../../readers/Overview";
import StockDataReader from "../../readers/StockData";

// Services
import { fetchOverview, fetchDailyTimeSeries } from "../stockPicker/stockPicker.services";

export const convertSecondsToMilliSeconds = (seconds) => seconds * 1000;
export const convertMilliSecondsToSeconds = (milliSeconds) =>
  milliSeconds / 1000;

const createFetchStockDataPromise = (stock) => {
  const overviewData = StockDataReader.stockOverview(stock);
  const symbol = OverviewReader.symbol(overviewData);
  const overviewPromise = fetchOverview(symbol);
  const timeSeriesPromise = fetchDailyTimeSeries(symbol);
  // Making parallel API calls
  return Promise.all([overviewPromise, timeSeriesPromise]);
};

export const fetchAllStockData = (stocks) => {
  console.log({ stocks });
  const stocksPromises = stocks.map(createFetchStockDataPromise);
  // Making parallel API calls
  return Promise.all(stocksPromises);
};
