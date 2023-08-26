import React, { memo } from "react";
import PropTypes from 'prop-types';

// Styles
import styles from './loader.module.scss';

// Loader svg
import loader from "./assets/svg/loader.svg"

const Loader = ({ className }) => <img className={`${styles.loader} ${className}`} src={loader} alt="loader"/>;

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
}

export default memo(Loader);