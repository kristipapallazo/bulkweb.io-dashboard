import React, { useState, useCallback, FC, useEffect } from "react";
import { Input, InputProps } from "antd";
import debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";

const { Search } = Input;

interface Props extends InputProps {
  handleChange: (value: string) => void;
}

const defaultInputWidth = 120;

const DebouncedSearch: FC<Props> = ({
  style,
  value,
  placeholder,
  width = defaultInputWidth,
  handleChange,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { t } = useTranslation();

  const translatedPlaceholder = placeholder ? t(placeholder) : placeholder;

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      handleChange(value);
    }, 500),
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLocaleLowerCase();
    setSearchValue(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    setSearchValue(value as string);
  }, [value]);

  return (
    <Search
      style={{ ...style, width }}
      value={searchValue}
      onChange={onChange}
      enterButton={true}
      size="middle"
      width={width}
      placeholder={translatedPlaceholder}
      {...props}
    />
  );
};

export default DebouncedSearch;
