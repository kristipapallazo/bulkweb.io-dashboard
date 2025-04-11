import { Button, ButtonProps } from "antd";
import { useTranslation } from "react-i18next";
import classes from "./TranslatedBttn.module.css";

type TranslatedButtonProps = ButtonProps & {
  label: string;
  extendableShadow?: boolean;
  shadowBckgColor?: string;
};

const TranslatedButton: React.FC<TranslatedButtonProps> = ({
  label,
  className = "",
  extendableShadow = true,
  shadowBckgColor = "var(--color-primary)",
  ...props
}) => {
  const { t } = useTranslation();
  const finalClassName = `${className} ${classes.bttn}`;

  console.log(
    "extendableShadow, finalClassName :>> ",
    extendableShadow,
    finalClassName
  );

  return (
    <>
      <Button className={finalClassName} {...props}>
        {extendableShadow && (
          <div style={{ background: shadowBckgColor }}></div>
        )}
        {t(label)}
      </Button>
    </>
  );
};

export default TranslatedButton;
