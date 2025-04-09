import { Button, ButtonProps } from "antd";
import { useTranslation } from "react-i18next";

type TranslatedButtonProps = ButtonProps & {
  label: string;
};

const TranslatedButton: React.FC<TranslatedButtonProps> = ({
  label,
  ...props
}) => {
  const { t } = useTranslation();

  return <Button {...props}>{t(label)}</Button>;
};

export default TranslatedButton;
