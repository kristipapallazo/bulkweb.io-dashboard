import { DefaultOptionType } from "antd/es/select";
import TranslatedSelect from "../../../UI/AntD/Select/TranslatedSelect";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreState } from "../../../../redux";
import { setCategory, setNiche } from "../../../../redux/Slices/FlowSlice";
import { useTranslation } from "react-i18next";

type Options = DefaultOptionType[];

const NicheSelect = () => {
  const { nicheAllIds, nicheById, niche } = useSelector(
    (state: RootStoreState) => state.flow
  );
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const options: Options = nicheAllIds.map((nicheId) => {
    const { id, name } = nicheById[nicheId];
    return {
      value: id,
      label: t(name),
    };
  });

  const handleChange = (value: NicheId) => {
    dispatch(setNiche(value));
  };

  return (
    <TranslatedSelect
      options={options}
      width={200}
      value={niche}
      onChange={handleChange}
    />
  );
};

const CategSelect = () => {
  const { filteredCategs, categById, category } = useSelector(
    (state: RootStoreState) => state.flow
  );
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const options: Options = filteredCategs.map((categId) => {
    const { id, name } = categById[categId as CategId];

    return {
      value: id,
      label: t(name),
    };
  });

  const handleChange = (value?: CategId) => {
    const val: CategId | null = value || null;
    dispatch(setCategory(val));
  };

  return (
    <TranslatedSelect
      placeholder={t("Category")}
      allowClear={true}
      options={options}
      width={200}
      value={category}
      onChange={handleChange}
    />
  );
};

export { NicheSelect, CategSelect };
