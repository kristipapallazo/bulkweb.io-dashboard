import { useEffect, useState } from "react";
import { Typography } from "antd";
import TranslatedInput from "../../../../components/UI/AntD/Input/TranslatedInput";
import TranslatedButton from "../../../../components/UI/AntD/Buttons/TranslatedBttn";
import CustomDomainInstructions from "../../../../components/Content/DomainContent/CustomDomainInstructions/CustomDomainInstructions";

import styles from "./CustomDomainPage.module.css";
import { useDispatch } from "react-redux";
import { setDomain as setFinalDomain } from "../../../../redux/Slices/FlowSlice";

const { Title } = Typography;

interface DnsRecord {
  key: string;
  type: string;
  host: string;
  value: string;
  ttl: string;
}

export default function CustomDomainPage() {
  const [domain, setDomain] = useState<string>("");
  const [dnsRecord, setDnsRecord] = useState<DnsRecord[]>([]);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [verified, setVerified] = useState<null | boolean>(null);

  const dispatach = useDispatch();

  useEffect(() => {
    if (domain) {
      const tempDnsRecords = [
        {
          key: "1",
          type: "A",
          host: "@",
          value: "45.55.65.123",
          ttl: "Automatic",
        },
        {
          key: "2",
          type: "CNAME",
          host: "www",
          value: `${domain}`,
          ttl: "Automatic",
        },
      ];
      setDnsRecord(tempDnsRecords);
    }
  }, [domain]);

  useEffect(() => {
    if (verified) {
      dispatach(setFinalDomain(domain));
    }
  }, [verified]);

  const handleVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerified(Math.random() > 0.3);
      setVerifying(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <Title level={3} className={styles.heading}>
        Connect Your Own Domain
      </Title>

      <TranslatedInput
        type="text"
        placeholder="Enter domain"
        value={domain}
        onChange={(e) => {
          setDomain(e.target.value);
          setShowInstructions(false);
          setVerified(null);
        }}
        className={styles.input}
      />

      <TranslatedButton
        type="primary"
        // className={styles.button}
        disabled={!domain}
        onClick={() => setShowInstructions(true)}
        label="Get DNS Setup"
      />

      {showInstructions && (
        <CustomDomainInstructions
          dnsRecords={dnsRecord}
          verifying={verifying}
          handleVerify={handleVerify}
          domain={domain}
          verified={verified}
        />
      )}
    </div>
  );
}
