import { useEffect, useState } from "react";
import { Typography } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
// import DomainConatainer from "../../../components/Content/TemplateContentContainer/TemplateFilterContainer/DomainContainer/DomainConatainer";
import styles from "../TemplatePage/DomainPage/DomainPage.module.css";
import { HostingTab } from "../../components/Tabs/DomainTab/DomainTab";
import { BurgerBttnContainer } from "../../components/Content/TemplateContentContainer/TemplateFilterContainer/TemplateFilterContainer";

const { Title } = Typography;

// const HostingPage1: React.FC = () => {
//   const [selectedHosting, setSelectedHosting] = useState<"self" | "bulk">(
//     "self"
//   );
//   const [isDeployed, setIsDeployed] = useState(false);

//   const handleHostClick = () => {
//     // Simulate deployment and credit deduction
//     setIsDeployed(true);
//     message.success("Website deployed on BulkWeb.io servers!");
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <Title level={3}>Choose Hosting Option</Title>

//       <Radio.Group
//         onChange={(e) => setSelectedHosting(e.target.value)}
//         value={selectedHosting}
//         style={{ marginBottom: 24 }}
//       >
//         <Radio value="self">🗃️ Self-hosted (download backup)</Radio>
//         <Radio value="bulk">☁️ Host on BulkWeb.io servers</Radio>
//       </Radio.Group>

//       <Row gutter={16}>
//         {selectedHosting === "self" ? <div></div> : <div></div>}
//       </Row>
//     </div>
//   );
// };

// import { useEffect, useState } from "react";
// import { Typography } from "antd";
// import styles from "./DomainPage.module.css";
// import DomainTab from "../../../components/Tabs/DomainTab/DomainTab";
// import { Outlet, useLocation, useNavigate } from "react-router";
// import DomainConatainer from "../../../components/Content/TemplateContentContainer/TemplateFilterContainer/DomainContainer/DomainConatainer";

export const HOSTING_MODE: HostingMode[] = ["self", "our-servers"];

const HostingPage = () => {
  const [mode, setMode] = useState<HostingMode>(HOSTING_MODE[0]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currPath = location.pathname;

    if (currPath.endsWith("hosting")) {
      const fullPath = `${currPath}/${mode}`;
      navigate(fullPath, { replace: true });
    }
  }, [location]);

  return (
    <div className={styles.domain_page}>
      <div className={styles.absolute_burgerBttn_wrapper}>
        <BurgerBttnContainer />
      </div>
      <Title level={3} className={styles.heading}>
        Hosting Setup
      </Title>
      {/* <DomainConatainer style={{ marginBottom: "10px" }} /> */}

      <HostingTab setMode={setMode} />
      <div className={styles.domain_page_outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default HostingPage;
