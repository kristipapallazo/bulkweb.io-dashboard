import GridContainer from "./GridContainer/GridContainer";
import classes from "./TemplateContentContainer.module.css";
import TemplateFilterContainer from "./TemplateFilterContainer/TemplateFilterContainer";

const TemplateContentContainer = () => {
  return (
    <div className={classes.cont}>
      <TemplateFilterContainer />
      <GridContainer />
    </div>
  );
};

export default TemplateContentContainer;
