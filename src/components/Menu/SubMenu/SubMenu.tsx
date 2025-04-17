import { Menu } from "antd";
import MenuItem from "../MenuItem";
import { MdWorkHistory } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { MenuItemAntd } from "../../../declarations/antD";
import { useTemplatePageCtx } from "../../../context/TemplatePageCtxProvider";
import { GrDeploy } from "react-icons/gr";

import classes from "./SubMenu.module.css";

const items: MenuItemAntd[] = [
  {
    key: "domain-setup",
    label: <MenuItem id="domain-setup" />,
    icon: <HiTemplate />,
  },
  {
    key: "purchase-templates",
    label: <MenuItem id="purchase-templates" />,
    icon: <HiTemplate />,
  },
  {
    key: "hosting",
    label: <MenuItem id="hosting" />,
    icon: <GrDeploy />,
  },
  // {
  //   key: "favorites",
  //   label: <MenuItem id="favorites" />,
  //   icon: <MdOutlineFavorite />,
  // },
  {
    key: "history",
    label: <MenuItem id="history" />,
    icon: <MdWorkHistory />,
  },
];

const SubMenu = () => {
  const { templateModule, setTemplateModule } = useTemplatePageCtx();

  return (
    <Menu
      theme="light"
      mode="vertical"
      className={classes.subMenu}
      selectedKeys={[templateModule]}
      items={items}
      onClick={({ key }) => {
        setTemplateModule(key);
      }}
    />
  );
};

export default SubMenu;
