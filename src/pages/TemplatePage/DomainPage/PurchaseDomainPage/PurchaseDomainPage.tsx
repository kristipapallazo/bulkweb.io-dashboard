import { Alert, Button, Input, Select, Spin } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Typography, message } from "antd";
import styles from "./PurchaseDomainPage.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCredits } from "../../../../redux/Slices/UserSlice";
import { MdWifiProtectedSetup } from "react-icons/md";
import { RootStoreState } from "../../../../redux";
import { setDomain } from "../../../../redux/Slices/FlowSlice";
import { useNavigate } from "react-router";
import { useTemplatePageContext } from "../../../../components/Layout/TemplatePageOutletLayout/TemplatePageOutletLayout";
import {
  TEMPLATE_MODULES,
  useTemplatePageCtx,
} from "../../../../context/TemplatePageCtxProvider";

const { Text } = Typography;

const endings = [".com", ".net", ".org", ".io", ".dev"];

const creditAmount = 13;

const PurchaseDomainPage = () => {
  const [fullDomain, setFullDomain] = useState("");
  const [searchName, setSearchName] = useState("");
  const [ending, setEnding] = useState(".com");
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState<null | boolean>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setTemplateModule } = useTemplatePageCtx();

  const handleSearch = () => {
    setLoading(true);
    setAvailability(null);
    setTimeout(() => {
      setAvailability(Math.random() > 0.3);
      setLoading(false);
    }, 1200);
  };

  const handleBuy = () => {
    dispatch(removeCredits(creditAmount));
    message.success(`Domain purchased with ${13} credits`);
    setAvailability(null);
    setFullDomain(searchName + ending);
    setSearchName("");
    setEnding(".com");
  };

  const handleDomainSetup = () => {
    message.success("Domain is setup successfully!");
    dispatch(setDomain(fullDomain));
    setFullDomain("");
    navigate(`/template/${TEMPLATE_MODULES[1]}`);
    setTemplateModule(TEMPLATE_MODULES[1]);
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
        <Button
          disabled={searchName === "" ? true : false}
          type="primary"
          onClick={handleSearch}
          icon={<SearchOutlined />}
        >
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
              <Text strong>
                {`${searchName}${ending}`} is not available. Try again!
              </Text>
            }
          />
        ))}

      {fullDomain !== "" && (
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            onClick={handleDomainSetup}
            icon={<MdWifiProtectedSetup />}
          >
            Setup domain
          </Button>
        </div>
      )}
    </div>
  );
};

export default PurchaseDomainPage;
