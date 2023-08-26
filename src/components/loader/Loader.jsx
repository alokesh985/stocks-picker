import React from "react";

// Styles
import styles from './loader.module.scss';

// Loader svg
import loader from "./assets/svg/loader.svg"

const Loader = ({ className }) => <img className={`${styles.loader} ${className}`} src={loader} alt="loader"/>;

export default Loader;