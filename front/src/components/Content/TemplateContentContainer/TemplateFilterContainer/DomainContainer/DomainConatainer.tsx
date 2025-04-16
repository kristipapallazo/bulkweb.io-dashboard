import classes from "./DomainContainer.module.css";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../../../redux";
import { useTranslation } from "react-i18next";
import { CSSProperties, FC } from "react";

type Label = "Current domain" | "Domain" | "Template";

interface Props {
  label?: Label;
  style?: CSSProperties;
  type?: "domain" | "template";
}
const DomainConatainer: FC<Props> = ({
  type = "domain",
  label = "Domain",
  style = {},
}) => {
  const { domain, template } = useSelector(
    (state: RootStoreState) => state.flow
  );
  const { templateById } = useSelector(
    (state: RootStoreState) => state.templates
  );
  const { t } = useTranslation();

  const value =
    type === "domain"
      ? domain
      : template || template === 0
      ? templateById[template].name
      : null;

  console.log("template :>> ", template);

  return (
    <div className={classes.domain_container} style={style}>
      <span style={{ marginLeft: "5px" }}>{t(label)}:</span>
      <span>{value || t("Not selected")}</span>
    </div>
  );
};

export default DomainConatainer;
