import { Button, message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "./SelfHosted.module.css";

const SelfHosted = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Downloads";
    link.download = "my-website-backup.zip";
    link.click();
    message.success("Backup ZIP downloaded!");
  };

  return (
    <div className={styles.self_hosted_cont}>
      <p className={styles.label}>
        You’ll receive a downloadable ZIP file of your website files. Host it on
        your own server.
      </p>
      <div className={styles.bttn_cont}>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={handleDownload}
        >
          Download Backup ZIP
        </Button>
      </div>
    </div>
  );
};

export default SelfHosted;
