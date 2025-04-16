import { Layout } from "antd";
import MainHeader from "../../components/Header/MainHeader";
import MainContentContainer from "../../components/Content/MainContentContainer/MainContentContainer";
// import Footer from "../../components/Footer/Footer";
// import { useState } from "react";
import classes from "./DashboardPage.module.css";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {}, []);
  return (
    <Layout className={classes.dashboardPage} style={{ height: "100vh" }}>
      <MainHeader />
      <MainContentContainer />
      {/* {showFooter && <Footer />} */}
    </Layout>
  );
};

export default Dashboard;
