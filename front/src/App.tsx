import React from "react";
import ThemeProvider from "./ThemeProvider";
import RouterProviderComp from "./router/RouterProviderComp";

import "./App.css";
import "./internalization/internalization";
import "./components/UI/AntD/GlobalAntD.css";

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
