import { Layout } from "antd";
import MainHeader from "../../components/Header/MainHeader";
import MainContentContainer from "../../components/Content/MainContentContainer/MainContentContainer";
// import Footer from "../../components/Footer/Footer";
// import { useState } from "react";
import classes from "./DashboardPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocalStorageItem } from "../../utils/utils";
import {
  setUser,
  updateCredits,
  updateWebsites,
} from "../../redux/Slices/UserSlice";
import {
  updateFavorites,
  updateMyTemplates,
} from "../../redux/Slices/TemplatesSlice";

let initial = true;

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (initial) {
      const init = () => {
        //update items from localStorage
        const login = getLocalStorageItem("login");
        const loginItems = getLocalStorageItem("loginItems") || [];
        console.log("loginItems :>> ", loginItems);
        const credits = getLocalStorageItem("credits");
        const websites = getLocalStorageItem("websites") || [];
        const favorites = getLocalStorageItem("favorites") || [];
        console.log("favorites xxx :>> ", favorites);
        const myTemplates = getLocalStorageItem("myTemplates") || [];

        //update redux state
        if (login) dispatch(setUser(login === "undefined" ? undefined : login));
        dispatch(updateCredits(credits));
        dispatch(updateWebsites(websites as AllWebsites));

        dispatch(updateFavorites(favorites as TemplateAllIds));
        dispatch(updateMyTemplates(myTemplates as TemplateAllIds));
      };
      init();
      initial = false;
    }
  }, []);

  return (
    <Layout className={classes.dashboardPage} style={{ height: "100vh" }}>
      <MainHeader />
      <MainContentContainer />
    </Layout>
  );
};

export default Dashboard;
