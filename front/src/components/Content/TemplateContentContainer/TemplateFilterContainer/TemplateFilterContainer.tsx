import TemplatesPagination from "../../../Pagination/TemplatesPagination";
import { CategSelect, NicheSelect } from "./FilterSelects";
import TemplateSearch from "./TemplateSearch";
import DomainConatainer from "./DomainContainer/DomainConatainer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStoreState } from "../../../../redux";
import { setPaginationFilter } from "../../../../redux/Slices/FlowSlice";

import classes from "./TemplateFilterContainer.module.css";

const FrstRow = () => {
  return (
    <div className={classes.frstRow}>
      <DomainConatainer />
      <NicheSelect />
      <CategSelect />

      <DomainConatainer type="template" />
    </div>
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
      <TemplateSearch />

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
