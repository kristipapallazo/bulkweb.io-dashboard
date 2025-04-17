import { FC } from "react";
import classes from "./Logo.module.css";
import { useNavigate } from "react-router";

const Logo: FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <span onClick={handleLogoClick} className={classes.logo}>
      bulkWeb.io
    </span>
  );
};

export default Logo;
