import { FC } from "react";
import CardTemplate from "./CardTemplate/CardTemplate";
import classes from "./GridContainer.module.css";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../../redux";
import { useTranslation } from "react-i18next";
import { useFilteredTemplates } from "../../../../hooks/useFilteredTemplates";

interface GridTemplatesProps {
  templates: TemplateId[];
}

const GridTemplates: FC<GridTemplatesProps> = ({ templates }) => {
  const { templateById, favorites, myTemplates } = useSelector(
    (state: RootStoreState) => state.templates
  );
  const { template: selectedTemplate } = useSelector(
    (state: RootStoreState) => state.flow
  );

  console.log("favorites :>> ", favorites);
  const items = templates.map((id) => {
    const isFavorite = favorites.includes(id);
    const isMyTemplate = myTemplates.includes(id);
    const template = templateById[id];

    return (
      <CardTemplate
        key={id}
        id={id}
        template={template}
        isSelected={selectedTemplate === id ? true : false}
        isFavorite={isFavorite}
        isMyTemplate={isMyTemplate}
      />
    );
  });

  return <div className={classes.grid_templates}>{items}</div>;
};

export const NoItemsContainer = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: "20px",
        color: "var(--accent-color)",
      }}
    >
      {t("No items available!")}
    </div>
  );
};

const GridContainer = () => {
  const { templates, total } = useFilteredTemplates();

  return (
    <div className={classes.grid_container}>
      {total > 0 ? (
        <GridTemplates templates={templates} />
      ) : (
        <NoItemsContainer />
      )}
    </div>
  );
};

export default GridContainer;
