import { Header } from "antd/es/layout/layout";
import MainMenu from "../Menu/MainMenu/MainMenu";

import classes from "./MainHeader.module.css";
// import TranslatedButton from "../UI/AntD/Buttons/TranslatedBttn";
import Logo from "../Atoms/Logo/Logo";
import { RootStoreState } from "../../redux";
import { useSelector } from "react-redux";
import TranslatedButton from "../UI/AntD/Buttons/TranslatedBttn";

const CreateProjectBttn = () => {
  const { user } = useSelector((state: RootStoreState) => state.user);

  return (
    <TranslatedButton
      disabled={!user ? true : false}
      label="Profile"
      type="primary"
    />
  );
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
