import { FC, useState } from "react";
import { InputItem } from "../../../declarations/antD";
import { IoMailOutline } from "react-icons/io5";
import { LockOutlined } from "@ant-design/icons";
import FlipCard from "../../UI/General/FlipCard/FlipCard";
import LoginCardContent from "./LoginCardContent/LoginCardContent";

interface LoginCardProps {}

let loginInputItems: InputItem[] = [
  {
    id: "email",
    name: "email",
    placeholder: "email",
    type: "email",
    icon: <IoMailOutline />,

    rules: [{ required: true }],
  },
  {
    id: "passwd",
    name: "password",
    placeholder: "password",
    icon: <LockOutlined />,
    type: "password",
  },
];
const registerInputItems: InputItem[] = [
  ...loginInputItems,
  {
    id: "c_passwd",
    name: "confirmed_password",
    placeholder: "password",
    icon: <LockOutlined />,
    type: "password",
  },
];

const LoginCard: FC<LoginCardProps> = () => {
  const [isRegisterCardOpen, setIsRegisterCardOpen] = useState<boolean>(false);

  const handleCardChange = () => {
    setIsRegisterCardOpen((prev) => !prev);
  };

  return (
    <FlipCard flipType="manual" isManualFlipped={isRegisterCardOpen}>
      <LoginCardContent
        handleCardChange={handleCardChange}
        inputItems={loginInputItems}
        type="login"
      />
      <LoginCardContent
        handleCardChange={handleCardChange}
        inputItems={registerInputItems}
        type="register"
      />
    </FlipCard>
  );
};

export default LoginCard;
