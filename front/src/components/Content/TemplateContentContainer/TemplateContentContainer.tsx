import GridContainer from "./GridContainer/GridContainer";
import TemplateFilterContainer from "./TemplateFilterContainer/TemplateFilterContainer";
import classes from "./TemplateContentContainer.module.css";

/* Todo: check this later, not used rn */

const TemplateContentContainer = () => {
  return (
    <div className={classes.cont}>
      <TemplateFilterContainer />
      <GridContainer />
    </div>
  );
};

export default TemplateContentContainer;
