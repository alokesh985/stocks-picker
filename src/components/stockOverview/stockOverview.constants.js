// Utils
import { compose} from 'recompose';

// Readers
import OverviewReader from "../../readers/Overview";

// Helpers
import { USD } from "../../helpers/localisation";

export const STOCK_OVERVIEW_CONFIG = [
  {
    label: "Name",
    accessor: OverviewReader.name,
  },
  {
    label: "Symbol",
    accessor: OverviewReader.symbol,
  },
  {
    label: "Description",
    accessor: OverviewReader.description,
  },
  {
    label: "Current Price",
    accessor: compose(USD.format, OverviewReader.currentPrice),
  },
  {
    label: "Exchange",
    accessor: OverviewReader.exchange,
  },
  {
    label: "Industry",
    accessor: OverviewReader.industry,
  },
  {
    label: "PE Ratio",
    accessor: OverviewReader.peRatio,
  },
  {
    label: "Market Cap",
    accessor: compose(USD.format, OverviewReader.marketCap),
  },
];

export const GRAPH_DATASET_CONFIG = {
  label: "Closing Price (in USD)",
  fill: true,
  lineTension: 0.5,
  borderWidth: 2,
};

export const GRAPH_OPTIONS = {
  plugins: {
    title: {
      display: true,
      text: "Closing Price (USD) for the last 5 days",
      fontSize: 20,
      color: "#FFF",
    },
    legend: {
      display: false,
    },
  },
};
