import { Menu } from "antd";
import { GrDeploy } from "react-icons/gr";
import MenuItem from "../MenuItem";
import { MdOutlineFavorite, MdWorkHistory } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";

import classes from "./SubMenu.module.css";

const items: MenuItem[] = [
  {
    key: "all-templates",
    label: <MenuItem id="all templates" />,
    icon: <HiTemplate />,
  },
  {
    key: "favorites",
    label: <MenuItem id="favorites" />,
    icon: <MdOutlineFavorite />,
  },
  {
    key: "history",
    label: <MenuItem id="history" />,
    icon: <MdWorkHistory />,
  },
  {
    key: "pricing",
    label: <MenuItem id="deploy" />,
    icon: <GrDeploy />,
  },
];

const SubMenu = () => {
  return (
    <Menu
      theme="light"
      mode="vertical"
      className={classes.subMenu}
      // defaultSelectedKeys={["2"]}
      items={items}
    />
  );
};

export default SubMenu;
