import { Button, message } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "../SelfHosted/SelfHosted.module.css";
import { RootStoreState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { addWebsite, updateCredits } from "../../../redux/Slices/UserSlice";
import { useWebCreateInial } from "../../../hooks/useFilteredTemplates";

const OurServerHosted = () => {
  const [isDeployed, setIsDeployed] = useState<boolean>(false);
  const [deployUrl, setDeployUrl] = useState<string | null>(null);
  // const [canDeplooy, setCanDeplooy] = useState<boolean>(false);

  const amountCredits = 10;

  const { credits } = useSelector((state: RootStoreState) => state.user);

  const dispatch = useDispatch();
  const website = useWebCreateInial();

  const deployNow = (
    website: Website,
    credits: number,
    amountCredits: number
  ) => {
    // Simulate credit deduction
    // const storedCredits = localStorage.getItem("credits");
    // const currentCredits = storedCredits ? parseInt(storedCredits) : 0;

    if (credits < amountCredits) {
      message.error("Not enough credits to deploy.");
      return;
    }

    //update credits
    const updatedCredits = credits - amountCredits;
    dispatch(updateCredits(updatedCredits));

    dispatch(addWebsite(website));

    setIsDeployed(true);
    setDeployUrl(website.url);
    message.success("Website deployed successfully!");
  };
  console.log("website :>> ", website);

  return (
    <div className={styles.self_hosted_cont}>
      <p className={styles.label}>
        We will host your site for you. Uses{" "}
        <strong>{amountCredits}$ credits</strong>. You’ll get a live link once
        deployed.
      </p>
      {deployUrl && (
        <p className={styles.label}>
          Website is created successfully.{" "}
          <span>
            <span>Url: </span>
            {deployUrl}
          </span>
        </p>
      )}
      <div className={styles.bttn_cont}>
        <Button
          type="primary"
          icon={<CloudUploadOutlined />}
          onClick={() => {
            deployNow(website!, credits, amountCredits);
          }}
          disabled={website ? false : true}
        >
          {isDeployed ? "Deployed ✅" : "Deploy Now"}
        </Button>
      </div>
    </div>
  );
};

export default OurServerHosted;
