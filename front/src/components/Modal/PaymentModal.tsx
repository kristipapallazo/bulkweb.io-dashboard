import React, { useCallback, useState } from "react";
import { Modal, Radio, RadioChangeEvent, Button } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import TranslatedInput from "../UI/AntD/Input/TranslatedInput";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  onPay: (method: PaymentMethod) => void;
  amount: number;
  creditsToBuy: number;
}

const CardForm = () => (
  <div style={{ marginTop: 16 }}>
    <p style={{ marginBottom: "10px" }}>💳 Enter Card Details:</p>
    <TranslatedInput
      placeholder="Card Number"
      //   className="ant-input"
      style={{ marginBottom: 8 }}
    />
    <TranslatedInput
      placeholder="Expiry Date"
      //   className="ant-input"
      style={{ marginBottom: 8 }}
    />
    <TranslatedInput
      type="number"
      style={{ width: "200px" }}
      placeholder="CVV"
      className="ant-input"
    />
  </div>
);

const BankTransferForm = () => (
  <div style={{ marginTop: 16 }}>
    <p>🏦 Bank Transfer Instructions:</p>
    <p style={{ fontSize: 14, color: "var(--sec-text)" }}>
      Send payment to IBAN: <strong>AL35202111090000000001234567</strong>
      <br />
      Use your email as reference.
    </p>
  </div>
);

const CryptoForm = () => (
  <div style={{ marginTop: 16 }}>
    <p>🪙 Send crypto to:</p>
    <p style={{ fontSize: 14, color: "var(--sec-text)" }}>
      BTC Wallet: <strong>bc1qexamplebtcwalletaddress</strong>
      <br />
      ETH Wallet: <strong>0xExampleEthereumAddress</strong>
    </p>
  </div>
);

const PaymentModal: React.FC<PaymentModalProps> = ({
  open,
  onClose,
  onPay,
  amount,
  creditsToBuy,
}) => {
  const handleMethodChange = (e: RadioChangeEvent) => {
    setMethod(e.target.value);
  };
  //   const credits = useSelector((state: RootStoreState) => state.user.credits);

  const [method, setMethod] = useState<PaymentMethod>("credit_card");

  const renderMethodForm = useCallback(() => {
    switch (method) {
      case "credit_card":
        return <CardForm />;
      case "bank_transfer":
        return <BankTransferForm />;
      case "crypto":
        return <CryptoForm />;
      default:
        return <div>Payment type error</div>;
    }
  }, [method]);

  return (
    <Modal
      title="Complete Your Payment"
      open={open}
      onCancel={onClose}
      centered
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="pay"
          type="primary"
          icon={<DollarOutlined />}
          onClick={() => onPay(method)}
          style={
            {
              // backgroundColor: "var(--primary-green)",
              // borderColor: "var(--dark-green)",
            }
          }
        >
          Pay ${amount} with {method.charAt(0).toUpperCase() + method.slice(1)}
        </Button>,
      ]}
    >
      <p>
        You're about to purchase <strong>{creditsToBuy} credits</strong> for{" "}
        <strong>${amount}</strong>.
      </p>
      <Radio.Group onChange={handleMethodChange} value={method}>
        <Radio value="credit_card">💳 Credit Card</Radio>
        <Radio value="bank_transfer">🏦 Bank Transfer</Radio>
        <Radio value="crypto">🪙 Crypto</Radio>
      </Radio.Group>
      {renderMethodForm()}
    </Modal>
  );
};

export default PaymentModal;
