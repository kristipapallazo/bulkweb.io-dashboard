import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import MainContent from "./MainContent/MainContent";
import classes from "./MainContentContainer.module.css";
import { useLocation } from "react-router";

const MainContentContainer = () => {
  const [showFooter, setShowFooter] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (["about"].some((path) => pathname.includes(path))) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, [pathname]);

  return (
    <div className={classes.mainContentContainer}>
      <MainContent />
      {showFooter && <Footer />}
    </div>
  );
};

export default MainContentContainer;
