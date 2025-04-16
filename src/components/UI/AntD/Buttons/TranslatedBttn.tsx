import { Button, ButtonProps } from "antd";
import { useTranslation } from "react-i18next";
import classes from "./TranslatedBttn.module.css";
import { ReactNode } from "react";

type TranslatedButtonProps = ButtonProps & {
  extendableShadow?: boolean;
  shadowBckgColor?: string;
} & (
    | { label: string; children?: undefined }
    | { label?: undefined; children: ReactNode }
  );

const TranslatedButton: React.FC<TranslatedButtonProps> = ({
  label,
  className = "",
  extendableShadow = true,
  shadowBckgColor = "var(--color-primary)",
  children = undefined,
  ...props
}) => {
  const { t } = useTranslation();
  const finalClassName = `${className} ${classes.bttn}`;

  return (
    <Button className={finalClassName} {...props}>
      {extendableShadow && <div style={{ background: shadowBckgColor }}></div>}
      {/* Todo: children is not translated */}
      {label ? t(label) : children}
    </Button>
  );
};

export default TranslatedButton;
