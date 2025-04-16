import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import MainContent from "./MainContent/MainContent";
import classes from "./MainContentContainer.module.css";

const MainContentContainer = () => {
  const [showFooter, setShowFooter] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <div className={classes.mainContentContainer}>
      <MainContent setShowFooter={setShowFooter} />
      {showFooter && <Footer />}
    </div>
  );
};

export default MainContentContainer;
