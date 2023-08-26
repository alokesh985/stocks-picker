import React, { useState, useEffect, useCallback } from "react";

import PropTypes from 'prop-types';

// Lodash
import _noop from 'lodash/noop';

// Utils
import toaster from "react-hot-toast";

// Constants
import { DEFAULT_REFRESH_INTERVAL } from "./refreshStocks.constants";
import { KEYS } from "../autoComplete/autoComplete.constants";
import { EMPTY_ARRAY } from "../../constants/general.constants";

// Helpers
import {
  convertMilliSecondsToSeconds,
  convertSecondsToMilliSeconds,
  fetchAllStockData,
} from "./refreshStocks.helpers";
import { getApiData } from "../../helpers/helpers.general";

// Styles
import styles from "./refreshStocks.module.scss";

const RefreshStocks = ({
  setSelectedStocks,
  selectedStocks,
  setStockOverviewLoading,
}) => {
  const [refreshInterval, setRefreshInterval] = useState(
    convertSecondsToMilliSeconds(DEFAULT_REFRESH_INTERVAL)
  );

  const formatAndSetUpdatedStocks = useCallback(
    (responses) => {
      const updatedStocks = responses.map(response => {
        const [overviewDataResponse, graphDataResponse] = response;
        const stockOverview = getApiData(overviewDataResponse);
        const dailyTimeSeries = getApiData(graphDataResponse);
        return { stockOverview, dailyTimeSeries }
      });
      setSelectedStocks(updatedStocks)
    },
    [setSelectedStocks]
  );

  // Fetching stock overview in some interval
  useEffect(() => {
    const interval = setInterval(() => {
      setStockOverviewLoading(true);
      const fetchStockDataPromise = fetchAllStockData(selectedStocks);
      fetchStockDataPromise
        .then(formatAndSetUpdatedStocks)
        .catch(() => toaster.error("Failed to refresh stocks"))
        .finally(() => setStockOverviewLoading(false));
    }, refreshInterval);
    return () => clearInterval(interval);
  }, [
    selectedStocks,
    refreshInterval,
    setSelectedStocks,
    setStockOverviewLoading,
    formatAndSetUpdatedStocks,
  ]);

  const handleSetNewInteval = (e) => {
    if (e.keyCode === KEYS.ENTER) {
      setRefreshInterval(convertSecondsToMilliSeconds(e.target.value));
    }
  };

  return (
    <div className={styles.refreshStocksContainer}>
      <div className={styles.refreshInputContainer}>
        <div className={styles.refreshAfterLabel}>
          Refresh After (seconds):{" "}
        </div>
        <input
          type="text"
          placeholder="Enter time in seconds and press Enter"
          onKeyDown={handleSetNewInteval}
        />
      </div>
      <div
        className={styles.refreshingAfterMessage}
      >{`Refreshing every ${convertMilliSecondsToSeconds(
        refreshInterval
      )} second(s)!`}</div>
    </div>
  );
};

RefreshStocks.propTypes = {
  setSelectedStocks: PropTypes.func,
  selectedStocks: PropTypes.array,
  setStockOverviewLoading: PropTypes.func,
};

RefreshStocks.defaultProps = {
  setSelectedStocks: _noop,
  selectedStocks: EMPTY_ARRAY,
  setStockOverviewLoading: _noop,
};

export default RefreshStocks;
