import React, { memo } from 'react';

// Styles
import styles from "./noStocksSelected.module.scss";

const NoStocksSelected = () => (
  <div className={styles.container}>
    <h2>No Stocks Selected!</h2>
    <h2>Please search for a stock on the search bar above</h2>
  </div>
);

export default memo(NoStocksSelected);
