import { Input, InputProps } from "antd";
import { PasswordProps, SearchProps } from "antd/es/input";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { InputType } from "../../../../declarations/antD";

const defaultInputWidth = "var('--input-m-width')";

type TestInputOne = Omit<InputProps, "type"> & { type?: InputType };
type TestInputTwo = Omit<PasswordProps, "type"> & { type?: "password" };

type TranslatedInputProps = TestInputOne | TestInputTwo;

const TranslatedInput: FC<TranslatedInputProps> = ({
  width = defaultInputWidth,
  placeholder,
  type = "text",
  ...props
}) => {
  const { t } = useTranslation();

  const translatedPlaceholder = placeholder ? t(placeholder) : placeholder;

  return type === "password" ? (
    <Input.Password
      /* Todo: define size */
      size="middle"
      width={width}
      placeholder={translatedPlaceholder}
      {...props}
    />
  ) : (
    <Input
      type={type}
      /* Todo: define size */
      size="middle"
      width={width}
      placeholder={translatedPlaceholder}
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
