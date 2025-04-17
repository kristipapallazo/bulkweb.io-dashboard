import styles from "../TemplatePage/DomainPage/DomainPage.module.css";
import { Typography } from "antd";
const { Title } = Typography;

const HistoryPage = () => {
  return (
    <div className={styles.domain_page}>
      <Title level={3} className={styles.heading}>
        History
      </Title>
      {/* <DomainConatainer style={{ marginBottom: "10px" }} /> */}

      {/* <DomainTab />
      <div className={styles.domain_page_outlet}>
        <Outlet context={{ setMode }} />
      </div> */}
    </div>
  );
};

export default HistoryPage;
