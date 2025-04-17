import { Button, message } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "../SelfHosted/SelfHosted.module.css";
import { RootStoreState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { addWebsite, updateCredits } from "../../../redux/Slices/UserSlice";
import { useWebCreateInial } from "../../../hooks/useFilteredTemplates";
import { NavLink } from "react-router";

const OurServerHosted = () => {
  const [isDeployed, setIsDeployed] = useState<boolean>(false);
  const [deployUrl, setDeployUrl] = useState<string | null>(null);
  // const [canDeplooy, setCanDeplooy] = useState<boolean>(false);

  const amountCredits = 10;

  const { credits } = useSelector((state: RootStoreState) => state.user);

  const dispatch = useDispatch();
  const website = useWebCreateInial("bulkweb_hosted");

  const deployNow = (
    website: Website,
    credits: number,
    amountCredits: number
  ) => {
    // Simulate credit deduction
    // const storedCredits = localStorage.getItem("credits");
    // const currentCredits = storedCredits ? parseInt(storedCredits) : 0;

    console.log("website :>> ", website);

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
  console.log("website, isDeployed :>> ", website, isDeployed);

  return (
    <div className={styles.self_hosted_cont}>
      {!isDeployed && (
        <p className={styles.label}>
          We will host your site for you. Uses{" "}
          <strong>{amountCredits}$ credits</strong>. You’ll get a live link once
          deployed.
        </p>
      )}
      {deployUrl && (
        <p className={styles.label}>
          Website is created successfully.{" "}
          <span style={{ marginRight: "10px" }}>
            <span>Url: </span>
            {deployUrl}
          </span>
          <Button type="primary">
            <NavLink
              // onClick={handlePurchaseTemplateRelocation}
              to={"/my-websites"}
            >
              Go to websites
            </NavLink>
          </Button>
        </p>
      )}
      <div className={styles.bttn_cont}>
        {!isDeployed && (
          <Button
            type="primary"
            icon={<CloudUploadOutlined />}
            onClick={() => {
              deployNow(website!, credits, amountCredits);
            }}
            disabled={website ? false : isDeployed ? true : false}
          >
            {isDeployed ? "Deployed ✅" : "Deploy Now"}
          </Button>
        )}{" "}
      </div>
    </div>
  );
};

export default OurServerHosted;
