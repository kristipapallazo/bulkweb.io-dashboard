import { Form, Input, Button, message } from "antd";
import CardDesign from "../../UI/General/Card/CardDesign";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Submitted:", values);
    message.success("Message sent successfully!");
    form.resetFields();
    // TODO: integrate with API or EmailJS
  };

  return (
    <div style={{ width: "60%" }}>
      <h2 className={styles.heading}>Contact Us</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className={styles.form}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea rows={6} className={styles.textarea} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
