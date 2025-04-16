import { Rule } from "antd/es/form";
import { Col, Form, Input, Row, RowProps } from "antd";
import { FC, ReactNode } from "react";
import { FormItem } from "./Contact";
import TextArea from "antd/es/input/TextArea";

interface FormRowProps extends RowProps {
  rowItemsArr: FormItem[];
  children?: ReactNode;
}

const FormRow: FC<FormRowProps> = ({ rowItemsArr, gutter }) => {
  const formItems = rowItemsArr.map((item) => {
    const { key, label, required, type, component } = item;

    const rules = [] as Rule[];

    if (required) {
      const messageLabel: string = key.includes("-")
        ? key.split("-").join(" ")
        : key;
      rules.push({
        required: true,
        message: `Please input your ${messageLabel}!`,
      });
    }
    if (type)
      rules.push({
        type,
        message: `Please enter a valid ${type}!`,
      });

    return (
      <Col xs={24} sm={12} key={key}>
        <Form.Item label={label} name={key} rules={rules}>
          {!component ? <Input /> : <TextArea rows={5} />}
        </Form.Item>
      </Col>
    );
  });

  return <Row gutter={gutter}>{formItems}</Row>;
};

export default FormRow;
