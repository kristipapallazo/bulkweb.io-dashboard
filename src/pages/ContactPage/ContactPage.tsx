import Contact from "../../components/Content/ContactSection/ContactSection";
import MapSection from "../../components/Maps/MainMapSection/MapSection";
// import ContactInfo from "../../components/Content/ContactSection/ContactInfo";
// import ContactTitle from "../../components/Content/ContactSection/ContactTitle";
// import ContactForm from "../../components/Forms/ContactForm/ContactForm";

import classes from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div id="contact" className={classes.contact}>
      <Contact />
      <MapSection />
      {/* <ContactTitle />
      <ContactInfo />
      <ContactForm /> */}
    </div>
  );
};

export default ContactPage;
