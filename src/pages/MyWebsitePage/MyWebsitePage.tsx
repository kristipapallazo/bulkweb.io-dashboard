import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux";
import styles from "./MyWebsitePage.module.css";
import { FC } from "react";
import { MainTitle } from "../../components/Content/ContactSection/ContactTitle";

interface WebsiteListProps {
  websites: AllWebsites;
}
const WebsiteList: FC<WebsiteListProps> = ({ websites }) => {
  return (
    <div className={styles.list}>
      {websites.map((site, index) => (
        <div key={index} className={styles.card}>
          <h2>{site.domain}</h2>
          <p>
            <strong>Template:</strong> {site.template}
          </p>
          <p>
            <strong>URL:</strong>{" "}
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              {site.url}
            </a>
          </p>
          {site.hosting && (
            <p>
              <strong>Hosting:</strong> {site.hosting}
            </p>
          )}
          {site.createdAt && (
            <p className={styles.createdAt}>
              <strong>Created:</strong>{" "}
              {new Date(Number(site.createdAt)).toLocaleString()}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

const MyWebsitePage = () => {
  const websites = useSelector((state: RootStoreState) => state.user.websites);

  return (
    <div className={styles.container}>
      <MainTitle label="My Websites"></MainTitle>
      <hr style={{ marginBottom: "10px" }} />
      {websites && websites.length > 0 ? (
        <WebsiteList websites={websites} />
      ) : (
        <div>no items</div>
      )}
    </div>
  );
};

export default MyWebsitePage;
