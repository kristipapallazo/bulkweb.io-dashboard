import { Menu } from "antd";
import { IoBusinessSharp } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { GiPriceTag } from "react-icons/gi";
import MenuItem from "../MenuItem";
import { FC } from "react";
import { IoIosContact } from "react-icons/io";
import { MenuItemAntd } from "../../../declarations/antD";

// import classes from "./MainMenu.module.css";

interface ItemProps {
  id: string;
  label?: string;
  mr?: boolean;
}

const LoginMenuItem: FC<ItemProps> = ({ id }) => {
  /* Todo: define user */
  const properId = id;
  const label = "";

  // return <span>{user ? user.name : t("Login")}</span>;
  return <MenuItem id={properId} label={label} />;
};

const items: MenuItemAntd[] = [
  {
    key: "template",
    label: <MenuItem id="template" label="Create web" />,
    icon: <GrTemplate />,
  },
  {
    key: "my-websites",
    label: <MenuItem id="my-websites" label="my websites" />,
    icon: <GiPriceTag />,
  },
  {
    key: "pricing",
    label: <MenuItem id="pricing" />,
    icon: <GiPriceTag />,
  },
  {
    key: "contact",
    label: <MenuItem id="contact" />,
    icon: <IoBusinessSharp />,
  },
  {
    key: "about",
    label: <MenuItem id="about" />,
    icon: <IoBusinessSharp />,
  },
  {
    key: "login",
    label: <LoginMenuItem id="login" />,
    icon: <IoIosContact />,
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
