import { FC } from "react";
import { Outlet, useOutletContext } from "react-router";
import styles from "./TemplatePageLayout.module.css";

interface Props<D = any> {
  context: D;
}

const TemplatePageLayout: FC<Props> = ({ context }) => {
  return (
    <div className={styles.outlet_container}>
      <Outlet context={context} />
    </div>
  );
};

export function useTemplatePageContext() {
  return useOutletContext<Props["context"]>();
}

export default TemplatePageLayout;
