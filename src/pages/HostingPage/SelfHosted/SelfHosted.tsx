import { Button, message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "./SelfHosted.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setDomain,
  setHosting,
  setTemplate,
} from "../../../redux/Slices/FlowSlice";

const SelfHosted = () => {
  const [isDeployed, setIsDeployed] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleDownload = () => {
    // const link = document.createElement("a");
    // link.href = "./Downloads";
    // link.download = "my-website-backup.zip";
    // link.click();
    dispatch(setDomain(null));
    dispatch(setTemplate(null));
    dispatch(setHosting("bulkweb_hosted"));

    setIsDeployed(true);
    message.success("Backup ZIP downloaded!");
  };

  return (
    <div className={styles.self_hosted_cont}>
      <p className={styles.label}>
        You’ll receive a downloadable ZIP file of your website files. Host it on
        your own server.
      </p>
      {!isDeployed && (
        <div className={styles.bttn_cont}>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
          >
            Download Backup ZIP
          </Button>
        </div>
      )}
      {isDeployed && (
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "var(--primary-color)",
          }}
        >
          Websites is created and deployed successfully1
        </div>
      )}
    </div>
  );
};

export default SelfHosted;
