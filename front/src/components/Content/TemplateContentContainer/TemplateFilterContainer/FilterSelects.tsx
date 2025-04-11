import { DefaultOptionType } from "antd/es/select";
import TranslatedSelect from "../../../UI/AntD/Select/TranslatedSelect";
import { categs, niches } from "../GridContainer/GridContainer";

type Options = DefaultOptionType[];

const NicheSelect = () => {
  const finalNiches = [{ id: "all-niches", name: "All niches" }, ...niches];

  const options: Options = finalNiches.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const defaultValue = finalNiches[0].id;

  return (
    <TranslatedSelect
      options={options}
      width={200}
      defaultValue={defaultValue}
    />
  );
};

const CategSelect = () => {
  const finalCategs = [{ id: "all-categs", name: "All categs" }, ...categs];

  const options: Options = finalCategs.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return <TranslatedSelect options={options} width={200} />;
};

export { NicheSelect, CategSelect };
