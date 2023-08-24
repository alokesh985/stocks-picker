import OverviewReader from "../../readers/Overview";

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
    accessor: OverviewReader.currentPrice,
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
    accessor: OverviewReader.marketCap,
  },
]