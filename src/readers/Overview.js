import _property from "lodash/property";

const READERS = {
  name: _property("Name"),
  symbol: _property("Symbol"),
  description: _property("Description"),
  currentPrice: _property("BookValue"),
  exchange: _property("Exchange"),
  industry: _property("Industry"),
  peRatio: _property("PERatio"),
  marketCap: _property("MarketCapitalization"),
}

export default READERS;
