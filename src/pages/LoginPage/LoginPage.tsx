import { useSelector } from "react-redux";
import LoginCard from "../../components/Content/LoginCard/LoginCard";

import classes from "./LoginPage.module.css";
import { RootStoreState } from "../../redux";

const LoginPage = () => {
  const user = useSelector((state: RootStoreState) => state.user.user);

  return (
    <div className={classes.container}>
      {user && (
        <div className={classes.test}>
          Allready logged in, for test purpose!
        </div>
      )}
      <LoginCard />
    </div>
  );
};

export default LoginPage;
