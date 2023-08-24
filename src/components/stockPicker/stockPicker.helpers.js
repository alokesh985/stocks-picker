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

export const getStockOverview = (apiResponse) => {
  const { data } = apiResponse;
  console.log({ data });
  return data;
  // const name = OverviewReader.name(data);
  // const symbol = OverviewReader.symbol(data);
  // const currentPrice = OverviewReader.currentPrice(data);
  // const exchange = OverviewReader.exchange(data);
  // const industry = OverviewReader.industry(data);
  // const peRatio = OverviewReader.peRatio(data);
  // const marketCap = OverviewReader.marketCap(data);

  // return {
  //   name,
  //   symbol,
  //   currentPrice,
  //   exchange,
  //   industry,
  //   peRatio,
  //   marketCap,
  // };
};

export const handleFailure = (err) => {
  console.log(err);
};
