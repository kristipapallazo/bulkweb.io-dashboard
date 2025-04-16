import { FC } from "react";
import { Pagination, PaginationProps } from "antd";
import classes from "./TemplatesPagination.module.css";
import { useFilteredTemplates } from "../../hooks/useFilteredTemplates";
import { useTranslation } from "react-i18next";

const TemplatesPagination: FC<PaginationProps> = (props) => {
  const { total } = useFilteredTemplates();
  const { t } = useTranslation();

  return (
    <Pagination
      style={{ flex: 1 }}
      {...props}
      className={classes.pagination_cont}
      total={total}
      showTotal={(total) => t(`${total} items`)}
    />
  );
};

export default TemplatesPagination;
