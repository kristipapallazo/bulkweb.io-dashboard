import { Input, InputProps } from "antd";
import { SearchProps } from "antd/es/input";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const TranslatedInput: FC<InputProps> = ({
  width = "var('--input-m-width')",
  placeholder,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <Input
      width={width}
      placeholder={placeholder || t(placeholder!)}
      {...props}
    />
  );
};

export const TranslatedSearch: FC<SearchProps> = ({
  width = "var('--input-m-width')",
  placeholder,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <Input.Search
      width={width}
      placeholder={placeholder || t(placeholder!)}
      {...props}
    />
  );
};

export default TranslatedInput;
