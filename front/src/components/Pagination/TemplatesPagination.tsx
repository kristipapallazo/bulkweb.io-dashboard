import { FC } from "react";
import { Pagination, PaginationProps } from "antd";
import { TEMPLATES } from "../Content/TemplateContentContainer/GridContainer/GridContainer";
import classes from "./TemplatesPagination.module.css";

const TemplatesPagination: FC<PaginationProps> = (...props) => {
  return (
    <Pagination
      {...props}
      className={classes.pagination_cont}
      total={TEMPLATES.length}
    />
  );
};

export default TemplatesPagination;
