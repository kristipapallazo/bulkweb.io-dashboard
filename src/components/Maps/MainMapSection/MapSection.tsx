// import { useCallback, useLayoutEffect } from "react";

import MainMapComp from "./MapComp";
import classes from "./MapSection.module.css";

const MapSection = () => {
  // const isMobile = true;

  // const getContentHeight = useCallback(() => {
  //   const rootEl = document.getElementById("root");
  //   const headerEl = document.getElementById("main-header");
  //   const outerContEl = document.getElementById("outer-cont");

  //   if (rootEl && outerContEl) {
  //     if (isMobile) {
  //       /* if is mobile will be adjust both height and width of the container */
  //       const rootWidht = rootEl.clientHeight;

  //       /* Todo: Find exact padding */
  //       const mobilePadding = 40 * 2;

  //       const availableWidth = rootWidht - mobilePadding;
  //       outerContEl.style.width = `${availableWidth}px`;
  //       outerContEl.style.aspectRatio = "auto";
  //       // outerContEl.style.height = `${availableWidth}px`;
  //     } else {
  //       /* if is not mobile adjust based on the vp available height */
  //       if (headerEl) {
  //         const rootHeight = rootEl.clientHeight;
  //         const headerHeight = headerEl.clientHeight;

  //         /* Todo: find the exact padding height */
  //         const paddingHeight = 40 * 2;
  //         const availableHeight = rootHeight - headerHeight - paddingHeight;
  //         outerContEl.style.height = `${availableHeight}px`;
  //       }
  //     }
  //   } else {
  //     console.error("Element not found on getContentHeight fn");
  //   }
  // }, []);

  // useLayoutEffect(() => {
  //   getContentHeight();
  // }, []);

  return (
    <div id="outer-cont" className={classes.mapContainer}>
      <MainMapComp />
    </div>
  );
};

export default MapSection;
