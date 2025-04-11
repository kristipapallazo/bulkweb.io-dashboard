import { Layout } from "antd";
import Logo from "../Atoms/Logo/Logo";

import classes from "./Footer.module.css";
import FooterLinksSection from "./FooterLinksSection/FooterLinksSection";
import SocialMediaSection from "./SocialMediaSection/SocialMediaSection";

const LogoRow = () => {
  return (
    <div className={classes.frstRow}>
      <Logo />
    </div>
  );
};

const Footer = () => {
  return (
    <Layout.Footer className={classes.mainFooter}>
      <LogoRow />
      <hr />
      <FooterLinksSection />
      <hr />
      <SocialMediaSection />
    </Layout.Footer>
  );
};

export default Footer;
