// Utils
import axios from "axios";

// Constants
import { SECRET_KEY, BASE_URL } from "../../constants/services.constants";

export const fetchSymbols = (searchText) =>
  axios.get(
    `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=${SECRET_KEY}`
  );

export const fetchOverview = (symbol) =>
  axios.get(
    `${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${SECRET_KEY}`
  );

export const fetchDailyTimeSeries = (symbol) =>
  axios.get(
    `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${SECRET_KEY}`
  );
