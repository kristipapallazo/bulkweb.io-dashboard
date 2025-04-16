import { Layout } from "antd";
import SubMenu from "../../Menu/SubMenu/SubMenu";
import classes from "./SubSider.module.css";
import { useState } from "react";

const SubSider = () => {
  const [isSubSiderCollapsed, setIsSubSiderCollapsed] = useState<boolean>(true);

  const handleCollapse = () => {
    setIsSubSiderCollapsed(!isSubSiderCollapsed);
  };

  return (
    <Layout.Sider
      collapsed={isSubSiderCollapsed}
      onCollapse={handleCollapse}
      collapsible
      className={classes.sub_sider}
      width={200}
      theme="light"
    >
      <SubMenu />
    </Layout.Sider>
  );
};

export default SubSider;
