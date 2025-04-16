import GridContainer from "../../../components/Content/TemplateContentContainer/GridContainer/GridContainer";
import TemplateFilterContainer from "../../../components/Content/TemplateContentContainer/TemplateFilterContainer/TemplateFilterContainer";

import classes from "./AllTemplatesPage.module.css";

const AllTemplatesPage = () => {
  return (
    <div className={classes.cont}>
      <TemplateFilterContainer />
      <GridContainer />
    </div>
  );
};

export default AllTemplatesPage;
