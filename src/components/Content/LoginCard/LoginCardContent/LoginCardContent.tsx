import { Button, Checkbox, Form, message } from "antd";
import ProfileImg from "../../../../assets/girl-profile.png";
import ProfileImg1 from "../../../../assets/man-profile.png";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFrstLetter } from "../../../../utils/utils";
import { InputItem } from "../../../../declarations/antD";
import TranslatedInput from "../../../UI/AntD/Input/TranslatedInput";

import styles from "./LoginCardContent.module.css";
import { useNavigate } from "react-router";
import { TEMPLATE_MODULES } from "../../../../context/TemplatePageCtxProvider";

interface LoginCardTemplateProps {
  inputItems: InputItem[];
  type: "login" | "register";
  handleCardChange: () => void;
}

const LoginOptions = () => {
  const [forgotPasswdModalIsOpen, setForgotPasswdModalIsOpen] =
    useState<boolean>(false);
  const { t } = useTranslation();

  const handleForgotPasswd = () => {
    setForgotPasswdModalIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.remember_option}>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox className={styles.checkbox}>{t("Remember me")}</Checkbox>
      </Form.Item>
      <span className={styles.forgot} onClick={handleForgotPasswd}>
        {t("Forgot Password?")}
      </span>
      {/* Todo: Check the modal */}
      {forgotPasswdModalIsOpen && <div>modal</div>}
    </div>
  );
};

const RegisterOptions = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      name="terms"
      valuePropName="checked"
      // rules={[{ required: true, message: t("Please accept the terms") }]}
    >
      <Checkbox className={styles.checkbox}>
        {t("I agree to the Terms and Conditions")}
      </Checkbox>
    </Form.Item>
  );
};

interface LoginCardTemplateProps {
  inputItems: InputItem[];
  type: "login" | "register";
  handleCardChange: () => void;
}

const LoginCardContent: FC<LoginCardTemplateProps> = ({
  handleCardChange,
  type,
  inputItems,
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const alt = `${type}-profile-img`;
  const src = type === "login" ? ProfileImg : ProfileImg1;
  const submitLabel = t(capitalizeFrstLetter(type));
  const title = capitalizeFrstLetter(type);
  const relocateBttnLabel = type === "login" ? "register" : "login";

  const finalInputItems = inputItems.map(
    ({ id, name, placeholder, type: inputType, icon, rules }) => {
      const finalPlaceholder = t(placeholder || name);

      const finalRules = rules?.map(({ required, message }) => {
        const proccesedMessage = message || `${finalPlaceholder} is required!`;
        const finalMessage = t(proccesedMessage);

        return {
          required,
          message: finalMessage,
        };
      });

      const finalId = `${type}_${id}`;
      const finalName = `${name}`;

      return (
        <Form.Item key={finalId} name={finalName} rules={finalRules}>
          <TranslatedInput
            type={inputType}
            className={styles.input}
            placeholder={placeholder}
            prefix={icon}
          />
        </Form.Item>
      );
    }
  );

  const handleLogin = ({ email, password }: OnFinishLogin) => {
    try {
      const loginItems = localStorage.getItem("loginItems"); // could be null or JSON array
      let loginItemsProcessed: LocalStorageLoginItemDict | null = null;

      if (loginItems) {
        loginItemsProcessed = JSON.parse(loginItems);
      } else {
        //go to register
        handleCardChange();
        message.error("User not exist! Please register!");
        return;
      }

      // Check if the user exists
      const userExists = loginItemsProcessed![email];
      console.log("userExist :>> ", userExists);

      if (userExists) {
        if (userExists.password === password) {
          navigate(`../template/${TEMPLATE_MODULES[0]}`);
          message.success("User is logged in!");
          localStorage.setItem("login", email);
        } else {
          message.error("Password is not correct!");
          handleCardChange();
        }
      } else {
        // go to registre
        message.error("User not exist! Please register!");
        handleCardChange();
      }
    } catch (error) {
      console.error("Something went wrong during login/registration", error);
      message.error("User not exist! Please register!");
      handleCardChange();
    }
  };

  const handleRegister = ({ email, password }: OnFinishLogin) => {
    const loginItems = localStorage.getItem("loginItems");
    const loginItemsProcessed: LocalStorageLoginItemDict = loginItems
      ? JSON.parse(loginItems)
      : {};

    const newUser = {
      email: email,
      password: password,
    };

    loginItemsProcessed[email] = newUser;
    localStorage.setItem("loginItems", JSON.stringify(loginItemsProcessed));
    localStorage.setItem("login", email);

    navigate(`../template/${TEMPLATE_MODULES[0]}`);
  };

  const onFinish = (values: OnFinishLogin) => {
    console.log("Form Values:", values);
    // handle login/register logic here
    if (type === "login") {
      handleLogin(values);
    } else {
      handleRegister(values);
    }
  };

  const handleRelocate = () => {
    handleCardChange();
  };

  return (
    <div className={styles.content}>
      <div style={{ flexShrink: 0 }}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.avatar}>
          <img src={src} alt={alt} className={styles.img} />
        </div>
      </div>

      <Form onFinish={onFinish} layout="vertical" className={styles.form}>
        <div className={styles.input_container}>{finalInputItems}</div>

        <div className={styles.options}>
          {type === "login" ? <LoginOptions /> : <RegisterOptions />}
        </div>
        <div className={styles.bttn_container}>
          <Button
            type="primary"
            // className={styles.relocate_bttn}
            onClick={handleRelocate}
          >
            <span>Go to</span>
            <span>{relocateBttnLabel}</span>
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submit_bttn}
          >
            {submitLabel}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginCardContent;
