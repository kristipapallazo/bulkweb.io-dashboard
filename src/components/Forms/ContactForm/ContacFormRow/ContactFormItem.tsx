import { Col, Form, Row } from "antd";
import TranslatedButton from "../../../UI/AntD/Buttons/TranslatedBttn";

const SubmitFormItem = () => {
  return (
    <Row>
      <Col xs={3}>
        <Form.Item>
          <TranslatedButton label="Submit" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default SubmitFormItem;
