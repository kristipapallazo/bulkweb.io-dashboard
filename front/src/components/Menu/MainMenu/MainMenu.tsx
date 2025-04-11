import { Menu } from "antd";
import { IoBusinessSharp } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { IoLogIn } from "react-icons/io5";
import { GiPriceTag } from "react-icons/gi";
import MenuItem from "../MenuItem";
import { FC } from "react";

import classes from "./MainMenu.module.css";

interface ItemProps {
  id: string;
  label?: string;
  mr?: boolean;
}

const LoginMenuItem: FC<ItemProps> = ({ id }) => {
  /* Todo: define user */
  let user: User | undefined = undefined;
  const properId = id;
  const label = "";

  // return <span>{user ? user.name : t("Login")}</span>;
  return <MenuItem id={properId} label={label} />;
};

const items: MenuItem[] = [
  {
    key: "template",
    label: <MenuItem id="template" />,
    icon: <GrTemplate />,
  },
  {
    key: "about",
    label: <MenuItem id="about" />,
    icon: <IoBusinessSharp />,
  },
  {
    key: "pricing",
    label: <MenuItem id="pricing" />,
    icon: <GiPriceTag />,
  },
  {
    key: "login",
    label: <LoginMenuItem id="login" />,
    icon: <IoLogIn />,
  },
];

const MainMenu = () => {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      // defaultSelectedKeys={["2"]}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default MainMenu;
