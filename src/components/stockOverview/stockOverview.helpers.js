// Readers
import GraphReader from "../../readers/Graph";

// Constants
import { GRAPH_DATASET_CONFIG } from "./stockOverview.constants";

export const createGraphConfig = (graphData) => {
  const dailyTimeSeries = GraphReader.dailyTimeSeries(graphData);
  if (dailyTimeSeries) {
    // Sorting and getting the last 5 days dates
    const lastFiveDays = Object.keys(dailyTimeSeries).sort().slice(-5);
    const lastFiveDaysPrices = lastFiveDays.map(date => {
      const stockPriceData = dailyTimeSeries[date];
      return GraphReader.closingPrice(stockPriceData);
    });
    return {
      labels: lastFiveDays,
      datasets: [
        {
          ...GRAPH_DATASET_CONFIG,
          data: lastFiveDaysPrices,
        }
      ]
    }
  }
};
