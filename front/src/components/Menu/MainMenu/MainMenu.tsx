import { Menu, MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { IoBusinessSharp } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { IoLogIn } from "react-icons/io5";
import { GiPriceTag } from "react-icons/gi";

import classes from "./MainMenu.module.css";
import { FC, ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { capitalizeFrstLetter } from "../../../utils/utils";

interface ItemProps {
  id: string;
  label?: string;
  mr?: boolean;
}

const LoginMenuItem: FC<ItemProps> = ({ id }) => {
  /* Todo: define user */
  let user: User | undefined = undefined;
  const properId = id;
  const label = "";

  // return <span>{user ? user.name : t("Login")}</span>;
  return <Item id={properId} label={label} />;
};

const Item: FC<ItemProps> = ({ id }) => {
  const { t } = useTranslation();

  const label = capitalizeFrstLetter(id);

  return (
    <NavLink to={id} className={({ isActive }) => (isActive ? "active" : "")}>
      {t(label)}
    </NavLink>
  );
};

const items: MenuItem[] = [
  {
    key: "template",
    label: <Item id="template" />,
    icon: <GrTemplate />,
  },
  {
    key: "about",
    label: <Item id="about" />,
    icon: <IoBusinessSharp />,
  },
  {
    key: "pricing",
    label: <Item id="pricing" />,
    icon: <GiPriceTag />,
  },
  {
    key: "login",
    label: <LoginMenuItem id="login" />,
    icon: <IoLogIn />,
  },
];

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      // defaultSelectedKeys={["2"]}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default MainMenu;
