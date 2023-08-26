import React, { useMemo } from "react";
import cx from "classnames";

// Constants
import {
  STOCK_OVERVIEW_CONFIG,
  GRAPH_OPTIONS,
} from "./stockOverview.constants";

// Styles
import styles from "./stockOverview.module.scss";

// Readers
import OverviewReader from "../../readers/Overview";
import StockDataReader from "../../readers/StockData";

// Components
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import Loader from "../loader";

// Images
import deleteIcon from "./assets/images/delete-icon.svg";

// Helpers
import { createGraphConfig } from "./stockOverview.helpers";

Chart.register(...registerables);

const renderOverviewField = (stock) => (field) => {
  const { label, accessor } = field;
  const value = accessor(stock);
  return (
    <div className={styles.overviewField} key={value}>
      <div className={styles.overviewFieldLabel}>{label}</div>
      <div className={styles.overviewFieldValue}>{value}</div>
    </div>
  );
};

const StockOverview = ({
  data: stock,
  handleRemoveStockFromSelectedStocks,
  deleteCurrentCarouselItem,
  isStockOverviewLoading,
}) => {
  const overviewData = StockDataReader.stockOverview(stock);
  const graphData = StockDataReader.dailyTimeSeries(stock);
  const graphConfig = useMemo(() => createGraphConfig(graphData), [graphData]);
  const handleDelete = () => {
    handleRemoveStockFromSelectedStocks(OverviewReader.symbol(overviewData));
    deleteCurrentCarouselItem();
  };
  return (
    <div
      key={OverviewReader.symbol(overviewData)}
      className={`${styles.overviewContainer} ${cx({
        [styles.loadingContainer]: isStockOverviewLoading,
      })}`}
    >
      {isStockOverviewLoading ? (
        <Loader />
      ) : (
        <>
          <button onClick={handleDelete} className={styles.deleteButton}>
            <img
              src={deleteIcon}
              alt="delete-icon"
              className={styles.deleteIcon}
            />
          </button>
          {STOCK_OVERVIEW_CONFIG.map(renderOverviewField(overviewData))}
          {graphConfig && <Line data={graphConfig} options={GRAPH_OPTIONS} />}
        </>
      )}
    </div>
  );
};

export default StockOverview;
