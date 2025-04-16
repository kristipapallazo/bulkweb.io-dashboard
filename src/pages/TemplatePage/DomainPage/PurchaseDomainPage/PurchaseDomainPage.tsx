import { Alert, Button, Input, Select, Spin } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Typography, message } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./PurchaseDomainPage.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const { Text } = Typography;

const endings = [".com", ".net", ".org", ".io", ".dev"];

const PurchaseDomainPage = () => {
  const [domain, setDomain] = useState("");
  const [searchName, setSearchName] = useState("");
  const [ending, setEnding] = useState(".com");
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState<null | boolean>(null);

  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    setLoading(true);
    setAvailability(null);
    setTimeout(() => {
      setAvailability(Math.random() > 0.3);
      setLoading(false);
    }, 1200);
  };

  const handleBuy = () => {
    message.success("Domain purchased with 13 credits 🎉");
  };

  return (
    <div className={styles.buyContainer}>
      <div className={styles.inputGroup}>
        <Input
          placeholder="e.g. yourbrand"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className={styles.input}
        />
        <Select
          value={ending}
          onChange={setEnding}
          options={endings.map((ext) => ({ value: ext, label: ext }))}
          className={styles.select}
        />
        <Button type="default" onClick={handleSearch} icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
      {loading && (
        <Spin className={styles.spinner} tip="Checking availability..." />
      )}
      {availability !== null &&
        !loading &&
        (availability ? (
          <Alert
            type="success"
            showIcon
            icon={<CheckCircleOutlined />}
            message={
              <div className={styles.result}>
                <Text strong>{`${searchName}${ending}`} is available</Text>
                <Text type="secondary">Price: 13 credits</Text>
              </div>
            }
            action={
              <Button type="primary" onClick={handleBuy}>
                Buy Now
              </Button>
            }
          />
        ) : (
          <Alert
            type="error"
            showIcon
            icon={<CloseCircleOutlined />}
            message={
              <Text strong>{`${searchName}${ending}`} is not available</Text>
            }
          />
        ))}
    </div>
  );
};

export default PurchaseDomainPage;
