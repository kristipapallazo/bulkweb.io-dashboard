import React from "react";
import { Layout, theme } from "antd";
import MainHeader from "./components/Header/MainHeader";
import MainContent from "./components/Content/MainContent";
import Footer from "./components/Footer/Footer";
import ThemeProvider from "./ThemeProvider";
import "./internalization/internalization";

import "./App.css";
import RouterProviderComp from "./router/RouterProviderComp";

const App: React.FC = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  // console.log(
  //   "colorBgContainer, borderRadiusLG :>> ",
  //   colorBgContainer,
  //   borderRadiusLG
  // );

  return (
    <ThemeProvider>
      <RouterProviderComp />
      {/* <AppLayout /> */}
    </ThemeProvider>
  );
};

export default App;
