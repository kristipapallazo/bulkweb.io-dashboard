import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";
import classes from "./MainContent.module.css";
import { FC } from "react";

export const ChangeLangBttn = () => {
  const { i18n } = useTranslation();

  const handleLangChange = (lng: string) => {
    const curr = i18n.language;
    console.log("curr :>> ", curr);
    i18n.changeLanguage(lng);
  };

  return <button onClick={() => handleLangChange("en")}>English</button>;
};

interface Props {
  setShowFooter: SetStateFn<boolean>;
}
const MainContent: FC<Props> = () => {
  return (
    <div id="main-content-outlet" className={classes.mainContentOutlet}>
      <Outlet />
    </div>
  );
};

export default MainContent;
