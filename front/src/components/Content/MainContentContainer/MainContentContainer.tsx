import Footer from "../../Footer/Footer";
import MainContent from "./MainContent/MainContent";
import classes from "./MainContentContainer.module.css";

const MainContentContainer = () => {
  return (
    <div className={classes.mainContentContainer}>
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
};

export default MainContentContainer;
