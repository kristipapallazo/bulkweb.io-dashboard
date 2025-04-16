import { FC } from "react";

const ContactTitle = () => {
  return (
    <header /* className={classes.title} */>
      <h1>Contact Us</h1>
    </header>
  );
};

export default ContactTitle;

interface MainTitleProps {
  label: string;
}

export const MainTitle: FC<MainTitleProps> = ({ label = "Contact Us" }) => {
  return (
    <header style={{ textAlign: "center" }} /* className={classes.title} */>
      <h1>{label}</h1>
    </header>
  );
};
