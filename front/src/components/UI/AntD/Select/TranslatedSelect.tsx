import { Select, SelectProps } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface TranslatedSelectProps extends SelectProps {
  width?: number | string;
}

const TranslatedSelect: FC<TranslatedSelectProps> = ({
  width = "var('--input-m-width')",
  options,
  ...props
}) => {
  const { t } = useTranslation();

  const finalOptions = options?.map((option) => ({
    ...option,
    label: typeof option.label === "string" ? t(option.label) : option.label,
  }));

  return <Select options={finalOptions} style={{ width }} {...props} />;
};

export default TranslatedSelect;
