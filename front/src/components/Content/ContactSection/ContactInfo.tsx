import { Col, Row } from "antd";
import { ReactNode } from "react";
import { IoMdTime } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import classes from "./ContactSection.module.css";

interface InfoItem {
  key: string;
  label: string;
  value: string;
  icon: ReactNode;
}
type InfoItems = InfoItem[];

const INFO_ITEMS: InfoItems = [
  {
    key: "call",
    label: "Call Us",
    value: "+(46) 123 456 789",
    icon: <PiPhoneCallFill />,
  },
  {
    key: "email",
    label: "Email Us",
    value: "admin@gmail.com",
    icon: <MdMarkEmailUnread />,
  },
  { key: "hour", label: "Hours", value: "Daily: 7AM-9PM", icon: <IoMdTime /> },
];

const ContactInfo = () => {
  const infoItems = INFO_ITEMS.map((infoItem) => {
    const { key, label, value, icon } = infoItem;
    return (
      <Col xs={24} sm={8} key={key} className={classes.contactItem}>
        <span className=".icon">{icon}</span>

        <h2>{label}</h2>
        <p>{value}</p>
      </Col>
    );
  });

  return (
    <div className={classes.contactInfo}>
      <Row gutter={16} justify="space-around">
        {infoItems}
      </Row>
    </div>
  );
};

export default ContactInfo;
