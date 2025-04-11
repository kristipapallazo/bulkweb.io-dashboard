import { PaginationProps } from "antd";
import TemplatesPagination from "../../../Pagination/TemplatesPagination";
import classes from "./TemplateFilterContainer.module.css";
import { CategSelect, NicheSelect } from "./FilterSelects";
import TemplateSearch from "./TemplateSearch";
import DomainConatainer from "./DomainContainer/DomainConatainer";

const FrstRow = () => {
  return (
    <div className={classes.frstRow}>
      <DomainConatainer />
      <NicheSelect />
      <CategSelect />
    </div>
  );
};

const SecRow = () => {
  const currPage = 1;
  const pageSize = 10;
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log("current, pageSize", current, pageSize);
  };
  const handlePageChange = (page: number) => {
    // setCurrentPage(page);
  };

  return (
    <div className={classes.secRow}>
      <TemplateSearch />
      <TemplatesPagination
        current={currPage}
        // pageSize={pageSize}
        onChange={handlePageChange}
        onShowSizeChange={onShowSizeChange}
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
