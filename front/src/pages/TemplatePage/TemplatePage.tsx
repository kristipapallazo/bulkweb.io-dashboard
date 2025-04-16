import { Layout } from "antd";
import SubSider from "../../components/Sider/SubSider/SubSider";
import { Outlet } from "react-router";
import { FC, ReactNode } from "react";
// import TemplateContentContainer from "../../components/Content/TemplateContentContainer/TemplateContentContainer";
import { TemplatePageCtxProvider } from "../../context/TemplatePageCtxProvider";

import classes from "./TemplatePage.module.css";

const TemplateContentOutlet: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={classes.outlet}>{children}</div>;
};

const TemplatePageComp = () => {
  return (
    <div className={classes.template_container}>
      <Layout hasSider className={classes.template}>
        <SubSider />
        {/* <TemplateContentContainer /> */}
        <TemplateContentOutlet>
          <Outlet />
        </TemplateContentOutlet>
      </Layout>
    </div>
  );
};

const TemplatePage = () => {
  return (
    <TemplatePageCtxProvider>
      <TemplatePageComp />
    </TemplatePageCtxProvider>
  );
};

export default TemplatePage;
