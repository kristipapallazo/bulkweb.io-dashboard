import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import styles from "./DomainTab.module.css";
import { FC } from "react";

interface DomainTabItem {
  key: DomainMode;
  label: string;
}
interface HostingTabItem {
  key: HostingMode;
  label: string;
}

const DOMAIN_TAB_ITEMS: DomainTabItem[] = [
  {
    key: "custom-domain",
    label: "Use My Domain",
  },
  {
    key: "purchase-domain",
    label: "Purchase a New Domain",
  },
];
const HOSTING_TAB_ITEMS: HostingTabItem[] = [
  {
    key: "self",
    label: "Self-hosted (download backup)",
  },
  {
    key: "our-servers",
    label: "Host on BulkWeb.io servers",
  },
];

const goBackOneLevel = (pathname: string) => {
  const segments = pathname.split("/");
  segments.pop();
  const parentPath = segments.join("/") || "/";
  return parentPath;
};

const DomainTab = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const items = DOMAIN_TAB_ITEMS.map((item) => ({
    ...item,
    label: t(item.label),
  }));

  const onChange: TabsProps["onChange"] = (activeKey) => {
    const parentPath = goBackOneLevel(location.pathname);
    const path = `${parentPath}/${activeKey}`;

    navigate(path);
  };

  return (
    <Tabs
      className={styles.domain_tab}
      onChange={onChange}
      centered
      type="card"
      items={items}
    />
  );
};
interface Props {
  setMode: SetStateFn<HostingMode>;
}
export const HostingTab: FC<Props> = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const items = HOSTING_TAB_ITEMS.map((item) => ({
    ...item,
    label: t(item.label),
  }));

  const onChange: TabsProps["onChange"] = (activeKey) => {
    const parentPath = goBackOneLevel(location.pathname);
    const path = `${parentPath}/${activeKey}`;

    navigate(path);
    // setMode(e.target.value);
    // setAvailability(null);
  };

  return (
    <Tabs
      className={styles.domain_tab}
      onChange={onChange}
      centered
      type="card"
      // activeKey={}
      // defaultActiveKey={}
      // tabPosition="bottom"
      items={items}
    />
  );
};

export default DomainTab;
