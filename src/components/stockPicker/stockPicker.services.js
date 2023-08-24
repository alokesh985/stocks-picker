import axios from "axios";

// Constants
import { SECRET_KEY } from "../../constants/secretKey.constants";

export const fetchSymbols = (searchText) =>
  axios.get(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=${SECRET_KEY}`
  );

export const fetchOverview = (symbol) =>
  axios.get(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${SECRET_KEY}`
  );
