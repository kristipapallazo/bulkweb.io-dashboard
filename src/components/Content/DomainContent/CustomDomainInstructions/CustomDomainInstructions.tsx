import { FC } from "react";
import { Button, Alert, Typography, Table } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import styles from "./CustomDomainInstructions.module.css";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import {
  TEMPLATE_MODULES,
  useTemplatePageCtx,
} from "../../../../context/TemplatePageCtxProvider";

const { Text } = Typography;

interface CustomDomainInstructionsProps {
  domain: string;
  dnsRecords: any;
  verifying: boolean;
  verified: null | boolean;
  handleVerify: () => void;
}

const CustomDomainInstructions: FC<CustomDomainInstructionsProps> = (props) => {
  const { domain, dnsRecords, verifying, handleVerify, verified } = props;
  const { t } = useTranslation();
  const { setTemplateModule } = useTemplatePageCtx();

  const purchaseTemplateLink = `../../${TEMPLATE_MODULES[1]}`;

  const handlePurchaseTemplateRelocation = () => {
    setTemplateModule(TEMPLATE_MODULES[1]);
  };

  return (
    <div className={styles.dnsBox}>
      ``
      <Text type="secondary">
        Please add the following DNS records at your domain registrar:
      </Text>
      <Table
        className={styles.table}
        dataSource={dnsRecords}
        pagination={false}
        columns={[
          { title: "Type", dataIndex: "type" },
          { title: "Host", dataIndex: "host" },
          { title: "Value", dataIndex: "value" },
          { title: "TTL", dataIndex: "ttl" },
        ]}
      />
      <Button
        type="default"
        onClick={handleVerify}
        loading={verifying}
        style={{ marginTop: "1rem" }}
      >
        {t("Verify DNS")}
      </Button>
      <div className={styles.successful_container}>
        {verified !== null &&
          !verifying &&
          (verified ? (
            <>
              <Alert
                type="success"
                showIcon
                icon={<CheckCircleOutlined />}
                message={`${domain} is connected successfully!`}
                className={styles.alert}
              />
              <Button type="primary">
                <NavLink
                  onClick={handlePurchaseTemplateRelocation}
                  to={purchaseTemplateLink}
                >
                  {t("Purchase template")}
                </NavLink>
              </Button>
            </>
          ) : (
            <Alert
              type="error"
              showIcon
              icon={<ExclamationCircleOutlined />}
              message="Simulated error: We couldn't verify your domain yet. Please check your DNS settings and try again. Verify again!"
            />
          ))}
      </div>
    </div>
  );
};

export default CustomDomainInstructions;
