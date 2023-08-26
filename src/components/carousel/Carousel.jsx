import React, { useState, memo } from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./carousel.module.scss";

// Images
import leftIcon from "./assets/images/left-icon.svg";
import rightIcon from "./assets/images/right-icon.svg";
import useCarouselHandlers from "./hooks/useCarouselHandlers";

// Constants
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../../constants/general.constants";

const Carousel = ({
  data,
  component: Component,
  componentProps,
  isCarouselLoading,
}) => {
  const [currentItemIdx, setItemIdx] = useState(0);

  const {
    goToPreviousComponent,
    goToNextComponent,
    deleteCurrentCarouselItem,
  } = useCarouselHandlers({ setItemIdx, data, currentItemIdx });

  return (
    <div className={styles.carouselContainer}>
      {data.length > 1 && (
        <button
          onClick={goToPreviousComponent}
          className={styles.navigationButton}
        >
          <img
            className={styles.navigationIcon}
            src={leftIcon}
            alt="left-icon"
          />
        </button>
      )}
      {isCarouselLoading ? (
        // Loader logic inside component
        <Component
          {...componentProps}
          deleteCurrentCarouselItem={deleteCurrentCarouselItem}
        />
      ) : (
        data.map((currentData, idx) => {
          return currentItemIdx === idx ? (
            <Component
              key={currentItemIdx}
              {...componentProps}
              data={currentData}
              deleteCurrentCarouselItem={deleteCurrentCarouselItem}
            />
          ) : null;
        })
      )}
      {data.length > 1 && (
        <button onClick={goToNextComponent} className={styles.navigationButton}>
          <img
            className={styles.navigationIcon}
            src={rightIcon}
            alt="right-icon"
          />
        </button>
      )}
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.array,
  component: PropTypes.elementType,
  componentProps: PropTypes.object,
  isCarouselLoading: PropTypes.bool,
};

Carousel.defaultProps = {
  data: EMPTY_ARRAY,
  component: null,
  componentProps: EMPTY_OBJECT,
  isCarouselLoading: false,
};

export default memo(Carousel);
