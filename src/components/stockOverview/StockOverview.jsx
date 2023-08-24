import React from "react";

// constants
import { STOCK_OVERVIEW_CONFIG } from "./stockOverview.constants";

// styles
import styles from './stockOverview.module.scss';

// readers
import OverviewReader from "../../readers/Overview";

const renderOverviewField = (stock) => (field) => {
  const { label, accessor } = field;
  const value = accessor(stock);
  return (
    <div key={value}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

const renderStockOverview = (handleRemoveStockFromSelectedStocks) => (stock) =>
  (
    <div key={OverviewReader.name(stock)} className={styles.overviewContainer}>
      <button onClick={handleRemoveStockFromSelectedStocks(OverviewReader.symbol(stock))}>
        Click to delete
      </button>
      {STOCK_OVERVIEW_CONFIG.map(renderOverviewField(stock))}
    </div>
  );

const StockOverview = ({
  selectedStocks,
  handleRemoveStockFromSelectedStocks,
}) => {
  return (
    <div>
      {selectedStocks.map(
        renderStockOverview(handleRemoveStockFromSelectedStocks)
      )}
    </div>
  );
};

export default StockOverview;
