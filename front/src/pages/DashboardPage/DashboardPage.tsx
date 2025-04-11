import { Layout } from "antd";
import MainHeader from "../../components/Header/MainHeader";
import classes from "./DashboardPage.module.css";
import MainContentContainer from "../../components/Content/MainContentContainer/MainContentContainer";

const Dashboard = () => {
  return (
    <Layout className={classes.dashboardPage}>
      <MainHeader />
      <MainContentContainer />
    </Layout>
  );
};

export default Dashboard;
