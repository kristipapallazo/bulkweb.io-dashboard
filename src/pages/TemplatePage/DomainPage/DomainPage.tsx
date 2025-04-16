import { useEffect, useState } from "react";
import { Typography } from "antd";
import styles from "./DomainPage.module.css";
import DomainTab from "../../../components/Tabs/DomainTab/DomainTab";
import { Outlet, useLocation, useNavigate } from "react-router";
import DomainConatainer from "../../../components/Content/TemplateContentContainer/TemplateFilterContainer/DomainContainer/DomainConatainer";

const { Title } = Typography;

const endings = [".com", ".net", ".org", ".io", ".dev"];

export const DOMAIN_MODES: DomainMode[] = ["custom-domain", "purchase-domain"];

const DomainPage = () => {
  const [mode, setMode] = useState<DomainMode>(DOMAIN_MODES[0]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currPath = location.pathname;

    if (currPath.endsWith("domain-setup")) {
      const fullPath = `${currPath}/${mode}`;
      navigate(fullPath, { replace: true });
    }
  }, [location]);

  return (
    <div className={styles.domain_page}>
      <Title level={3} className={styles.heading}>
        Domain Setup
      </Title>
      <DomainConatainer style={{ marginBottom: "10px" }} />

      <DomainTab />
      <div className={styles.domain_page_outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default DomainPage;
