import { Layout } from "antd";
import MainHeader from "../../components/Header/MainHeader";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <Layout className="app">
      <MainHeader />
      <div className="outlet">
        <Outlet />
      </div>
      {/* <MainContent />
      <Footer /> */}
    </Layout>
  );
};

export default Dashboard;
