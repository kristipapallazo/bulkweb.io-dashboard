import { Header } from "antd/es/layout/layout";
import MainMenu from "../Menu/MainMenu/MainMenu";

import classes from "./MainHeader.module.css";
import TranslatedButton from "../UI/AntD/Buttons/TranslatedBttn";
import Logo from "../Atoms/Logo/Logo";

const CreateProjectBttn = () => {
  return <TranslatedButton label="Create Project" type="primary" />;
};

const MainHeader = () => {
  return (
    <Header className={classes.main_header}>
      <Logo />
      <MainMenu />
      <CreateProjectBttn />
    </Header>
  );
};

export default MainHeader;
