import { Layout } from "antd";
import SubSider from "../../components/Sider/SubSider/SubSider";
import classes from "./TemplatePage.module.css";
import TemplateContentContainer from "../../components/Content/TemplateContentContainer/TemplateContentContainer";

const SubMenuContent = () => {
  return <div className={classes.subMenuContent}></div>;
};

const TemplatePage = () => {
  return (
    <div className={classes.template_container}>
      <Layout hasSider className={classes.template}>
        <SubSider />
        <TemplateContentContainer />
      </Layout>
    </div>
  );
};

export default TemplatePage;
