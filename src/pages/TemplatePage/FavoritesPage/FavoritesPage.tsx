// import classes from "./FavoritesPage.module.css";
/* Todo: change the styling file, make their own file */
import classes from "../AllTemplates/AllTemplatesPage.module.css";
import TemplateFilterContainer from "../../../components/Content/TemplateContentContainer/TemplateFilterContainer/TemplateFilterContainer";
import GridContainer from "../../../components/Content/TemplateContentContainer/GridContainer/GridContainer";

export const FavoritesPage = () => {
  return (
    <div className={classes.cont}>
      <TemplateFilterContainer />
      <GridContainer />
    </div>
  );
};

export default FavoritesPage;
