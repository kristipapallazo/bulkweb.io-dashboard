import { Breadcrumb, Button, Layout } from "antd";
import { useTranslation } from "react-i18next";

/* Todo: relocate properly the bttn */
const ChangeLangBttn = () => {
  const { i18n } = useTranslation();

  const handleLangChange = (lng: string) => {
    const curr = i18n.language;
    console.log("curr :>> ", curr);
    i18n.changeLanguage(lng);
  };

  return <button onClick={() => handleLangChange("en")}>English</button>;
};

const MainContent = () => {
  const { t } = useTranslation();

  return (
    <Layout.Content style={{ padding: "0 48px" }}>
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div
        style={{
          //   background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          //   borderRadius: borderRadiusLG,
        }}
      >
        Content
        <Button type="primary">{t("welcome")}</Button>
        <p>{t("greeting", { name: "Kristi" })}</p>
      </div>
    </Layout.Content>
  );
};

export default MainContent;
