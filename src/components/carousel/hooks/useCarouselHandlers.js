import { useEffect, useCallback } from "react";

const useCarouselHandlers = ({ setItemIdx, data, currentItemIdx }) => {
   // Used to go to the latest item when it is added
   useEffect(() => setItemIdx(data.length - 1), [data, setItemIdx]);

   const goToPreviousComponent = useCallback(
     () =>
       setItemIdx(currentItemIdx === 0 ? data.length - 1 : currentItemIdx - 1),
     [currentItemIdx, data, setItemIdx]
   );
   const goToNextComponent = useCallback(
     () =>
       setItemIdx(currentItemIdx === data.length - 1 ? 0 : currentItemIdx + 1),
     [currentItemIdx, data, setItemIdx]
   );
   const deleteCurrentCarouselItem = useCallback(
     () => currentItemIdx > 0 && goToPreviousComponent(),
     [goToPreviousComponent, currentItemIdx]
   );

   return { goToPreviousComponent, goToNextComponent, deleteCurrentCarouselItem };
}

export default useCarouselHandlers;
