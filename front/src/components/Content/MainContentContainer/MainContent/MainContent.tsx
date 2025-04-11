import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";
import classes from "./MainContent.module.css";

/* Todo: relocate properly the bttn */
const ChangeLangBttn = () => {
  const { i18n } = useTranslation();

  const handleLangChange = (lng: string) => {
    const curr = i18n.language;
    console.log("curr :>> ", curr);
    i18n.changeLanguage(lng);
  };

  return <button onClick={() => handleLangChange("en")}>English</button>;
};

const MainContent = () => {
  return (
    <div id="main-content-outlet" className={classes.mainContentOutlet}>
      <Outlet />
    </div>
  );
};

export default MainContent;
