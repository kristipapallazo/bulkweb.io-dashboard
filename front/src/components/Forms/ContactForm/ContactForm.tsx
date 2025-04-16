import { Form } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import ContactFormRow from "./ContacFormRow/ContactFormRow";
import SubmitFormItem from "./ContacFormRow/ContactFormItem";

interface UserInfo {
  name: string;
  email: string;
  message?: string;
}

const frstRowItemsArr: ContactFormItem[] = [
  {
    key: "full-name",
    label: "Full name",
    required: true,
  },
  {
    key: "email",
    label: "Email",
    required: true,
    type: "email",
  },
];
const secRowItemsArr: ContactFormItem[] = [
  {
    key: "message",
    label: "Message",
    component: "textarea",
  },
];

const ContactForm = () => {
  const [form] = useForm();

  // const handleSendingEmail = () => {};

  const onFinish: FormProps<UserInfo>["onFinish"] = (values) => {
    console.log("Success:", values);
    alert(JSON.stringify(values));
  };

  const onFinishFailed: FormProps<UserInfo>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="my-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <ContactFormRow rowItemsArr={frstRowItemsArr} gutter={16} />
      <ContactFormRow rowItemsArr={secRowItemsArr} />

      <SubmitFormItem />
    </Form>
  );
};

export default ContactForm;
