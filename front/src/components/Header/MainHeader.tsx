import { Header } from "antd/es/layout/layout";
import MainMenu from "../Menu/MainMenu/MainMenu";

import classes from "./MainHeader.module.css";
import TranslatedButton from "../UI/AntD/Buttons/TranslatedBttn";

const Logo = () => {
  return <div /* className={classes.logo} */>Logo</div>;
};

const CreateProjectBttn = () => {
  return <TranslatedButton label="Create Project" type="primary" />;
};

const MainHeader = () => {
  return (
    <Header className={classes.mainHeader}>
      <Logo />
      <MainMenu />
      <CreateProjectBttn />
    </Header>
  );
};

export default MainHeader;
