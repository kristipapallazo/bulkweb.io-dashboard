import { FC } from "react";
import TemplatesPagination from "../../../Pagination/TemplatesPagination";
import { CategSelect, NicheSelect } from "./FilterSelects";
import TemplateSearch from "./TemplateSearch";
import DomainConatainer from "./DomainContainer/DomainConatainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreState } from "../../../../redux";
import { setPaginationFilter } from "../../../../redux/Slices/FlowSlice";
import BurgerBttn from "../../../UI/General/Button/BurgerBttn";
import { handleBurgerBttnClick } from "../../../../redux/Slices/UserSlice";
import { Popover, Tag } from "antd";

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
      <NicheSelect />
      <CategSelect />
      <BurgerBttnContainer />
    </div>
  );
};

interface SecRowProps {
  type?: "favorites";
}
const SecRow: FC<SecRowProps> = ({ type }) => {
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
      <TemplateSearch />

      {!type ? (
        <TemplatesPagination
          current={currentPage}
          pageSize={pageSize}
          onChange={onChange}
        />
      ) : (
        <Tag
          color="var(--primary-color)"
          style={{
            width: "100px",
            color: "var(--primary-text)",
            textAlign: "center",
            fontSize: "larger",
          }}
        >
          Favorites
        </Tag>
      )}
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
export const TemplateFilterContainerForFavorites = () => {
  return (
    <div className={classes.cont}>
      <FrstRow />
      <SecRow type="favorites" />
    </div>
  );
};

export default TemplateFilterContainer;
