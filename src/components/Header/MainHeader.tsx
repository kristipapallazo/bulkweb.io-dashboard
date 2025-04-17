import { Header } from "antd/es/layout/layout";
import MainMenu from "../Menu/MainMenu/MainMenu";

import classes from "./MainHeader.module.css";
// import TranslatedButton from "../UI/AntD/Buttons/TranslatedBttn";
import Logo from "../Atoms/Logo/Logo";
import { RootStoreState } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import TranslatedButton from "../UI/AntD/Buttons/TranslatedBttn";
import { Popover } from "antd";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { FC } from "react";
import Flag, { FlagProps } from "react-world-flags";
import { setLang } from "../../redux/Slices/UserSlice";

const FlagIcon: FC<FlagProps> = (props) => {
  const { code = "AL", width = 30 } = props;
  return <Flag code={code} width={width} />;
};

const items: MenuProps["items"] = [
  {
    key: "AL",
    icon: <FlagIcon />,
  },
  {
    key: "GB_ENG",
    icon: <FlagIcon code="GB_ENG" />,
  },
  {
    key: "IT",
    icon: <FlagIcon code="IT" />,
  },
];

const FlagDropdown = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootStoreState) => state.user.lang);

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: [lang],
        onClick: ({ key }) => {
          dispatch(setLang(key as Lang));
        },
      }}
    >
      <span style={{ cursor: "pointer" }}>
        <FlagIcon code={lang} />
      </span>
    </Dropdown>
  );
};

const CreateProjectBttn = () => {
  const { user, credits } = useSelector((state: RootStoreState) => state.user);

  return (
    <>
      <Popover
        content={
          <div>
            {user ? (
              <>
                <p>
                  <b>User: </b>
                  <span>{user}</span>
                </p>
                <p>
                  <b>Credits: </b>
                  <span>{credits}</span>
                </p>
              </>
            ) : (
              <p>Please login</p>
            )}
          </div>
        }
        title="Dropdown"
        trigger="hover"
        placement="bottomLeft"
      >
        <TranslatedButton
          // disabled={user ? true : false}
          label="Profile"
          type="primary"
          style={{ marginLeft: "10px" }}
        />
      </Popover>
    </>
  );
};

const MainHeader = () => {
  return (
    <Header className={classes.main_header}>
      <Logo />
      <MainMenu />

      <FlagDropdown />
      <CreateProjectBttn />
    </Header>
  );
};

export default MainHeader;
