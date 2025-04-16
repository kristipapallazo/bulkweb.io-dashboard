import { useState } from "react";
import Footer from "../../Footer/Footer";
import MainContent from "./MainContent/MainContent";
import classes from "./MainContentContainer.module.css";

const MainContentContainer = () => {
  const [showFooter, setShowFooter] = useState<boolean>(false);

  return (
    <div className={classes.mainContentContainer}>
      <MainContent />
      {showFooter && <Footer />}
    </div>
  );
};

export default MainContentContainer;
