import { FC, ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import Dashboard from "../pages/DashboardPage/DashboardPage";
import TemplatePage from "../pages/TemplatePage/TemplatePage";
import PricingPage from "../pages/PricengPage/PricingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import CreateProductPage from "../pages/CreateProductPage/CreateProductPage";
import CreateBulkPage from "../pages/CreateBulkPage/CreateBulkPage";
import AboutPage from "../pages/AboutPage/AboutPage";

interface RouterProviderProps {
  children?: ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      { index: true, Component: HomePage },
      { path: "template", Component: TemplatePage },
      { path: "about", Component: AboutPage },
      { path: "pricing", Component: PricingPage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "create-product", Component: CreateProductPage },
      { path: "create-bulk", Component: CreateBulkPage },
    ],
  },
]);

const RouterProviderComp: FC<RouterProviderProps> = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderComp;
