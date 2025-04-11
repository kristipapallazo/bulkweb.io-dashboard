import TranslatedInput from "../../../UI/AntD/Input/TranslatedInput";
import { CiSearch } from "react-icons/ci";

const TemplateSearch = () => {
  return (
    <TranslatedInput
      placeholder="Search templates"
      prefix={<CiSearch className=".icon" />}
    />
  );
};

export default TemplateSearch;
