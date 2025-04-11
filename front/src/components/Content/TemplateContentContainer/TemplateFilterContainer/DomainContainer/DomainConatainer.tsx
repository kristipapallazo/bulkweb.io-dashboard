import Input from "antd/es/input";
import { TranslatedSearch } from "../../../../UI/AntD/Input/TranslatedInput";
import type { GetProps } from "antd";
import classes from "./DomainContainer.module.css";

type SearchProps = GetProps<typeof Input.Search>;

const DomainConatainer = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className={classes.domain_container}>
      <TranslatedSearch
        addonBefore="www."
        placeholder="Search domain"
        allowClear
        enterButton
        onSearch={onSearch}
        width={"var(--input-lg-width"}
      />
    </div>
  );
};

export default DomainConatainer;
