import React, { useEffect, useState, useCallback } from "react";

// Styles
import styles from "./carousel.module.scss";

// Images
import leftIcon from "./assets/images/left-icon.svg";
import rightIcon from "./assets/images/right-icon.svg";

const Carousel = ({
  data,
  component: Component,
  componentProps,
  isCarouselLoading,
}) => {
  const [currentItemIdx, setItemIdx] = useState(0);

  // Used to go to the latest item when it is added
  useEffect(() => setItemIdx(data.length - 1), [data]);

  const goToPreviousComponent = useCallback(
    () =>
      setItemIdx(currentItemIdx === 0 ? data.length - 1 : currentItemIdx - 1),
    [currentItemIdx, data]
  );
  const goToNextComponent = useCallback(
    () =>
      setItemIdx(currentItemIdx === data.length - 1 ? 0 : currentItemIdx + 1),
    [currentItemIdx, data]
  );
  const deleteCurrentCarouselItem = useCallback(
    () => currentItemIdx > 0 && goToPreviousComponent(),
    [goToPreviousComponent, currentItemIdx]
  );

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

export default Carousel;
