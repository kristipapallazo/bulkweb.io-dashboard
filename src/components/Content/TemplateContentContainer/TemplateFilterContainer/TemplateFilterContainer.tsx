import TemplatesPagination from "../../../Pagination/TemplatesPagination";
import { CategSelect, NicheSelect } from "./FilterSelects";
import TemplateSearch from "./TemplateSearch";
import DomainConatainer from "./DomainContainer/DomainConatainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreState } from "../../../../redux";
import {
  setPaginationFilter,
  setTemplateType,
} from "../../../../redux/Slices/FlowSlice";
import BurgerBttn from "../../../UI/General/Button/BurgerBttn";
import { handleBurgerBttnClick } from "../../../../redux/Slices/UserSlice";
import { Popover } from "antd";

import classes from "./TemplateFilterContainer.module.css";

export const BurgerBttnContainer = () => {
  const { burgerBttnIsOpen } = useSelector(
    (state: RootStoreState) => state.user
  );
  const dispatch = useDispatch();

  const handleOpen = (open: boolean) => {
    dispatch(handleBurgerBttnClick(open));
  };

  return (
    <Popover
      content={
        <div className={classes.dropdown_content}>
          <DomainConatainer label="Selected domain" />
          <DomainConatainer type="template" label="Selected template" />
        </div>
      }
      trigger="click"
      open={burgerBttnIsOpen}
      onOpenChange={handleOpen}
      placement="bottomLeft"
    >
      <div>
        <BurgerBttn
          isOpen={burgerBttnIsOpen}
          setOpen={() => handleOpen(!burgerBttnIsOpen)}
        />
      </div>
    </Popover>
  );
};

const FrstRow = () => {
  return (
    <div className={classes.frstRow}>
      <div>
        <NicheSelect />
        <CategSelect />
      </div>
      <BurgerBttnContainer />
    </div>
  );
};

import { Select } from "antd";

const { Option } = Select;

type TemplateFilterTag = "All templates" | "Favorites" | "My templates";

const TemplateFilterSelect = () => {
  const dispatach = useDispatch();

  const value = useSelector((state: RootStoreState) => state.flow.templateType);

  const handleChange = (value: TemplateFilterTag) => {
    dispatach(setTemplateType(value));
  };

  return (
    <Select<TemplateFilterTag>
      value={value}
      onChange={handleChange}
      style={{ width: 200 }}
    >
      <Option value="All templates">All templates</Option>
      <Option value="Favorites">Favorites</Option>
      <Option value="My templates">My templates</Option>
    </Select>
  );
};

const SecRow = () => {
  const {
    pagination: { currentPage, pageSize },
  } = useSelector((state: RootStoreState) => state.flow);
  const dispatach = useDispatch<AppDispatch>();

  const onChange = (page: number, newPageSize: number) => {
    dispatach(
      setPaginationFilter({ currentPage: page, pageSize: newPageSize })
    );
  };
  return (
    <div className={classes.secRow}>
      <div>
        <TemplateSearch />
        <TemplateFilterSelect />
      </div>

      <TemplatesPagination
        current={currentPage}
        pageSize={pageSize}
        onChange={onChange}
      />
    </div>
  );
};

const TemplateFilterContainer = () => {
  return (
    <div className={classes.cont}>
      <FrstRow />
      <SecRow />
    </div>
  );
};

export default TemplateFilterContainer;
