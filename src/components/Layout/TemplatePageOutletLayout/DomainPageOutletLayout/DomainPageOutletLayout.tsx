import { FC } from "react";
import { Outlet, useOutletContext } from "react-router";
import styles from "./DomainPageOutletLayout.module.css";

interface Props<D = any> {
  context: D;
}

const DomainPageOutletLayout: FC<Props> = ({ context }) => {
  return (
    <div className={styles.outlet_container}>
      <Outlet context={context} />
    </div>
  );
};

export function useTemplatePageContext() {
  return useOutletContext<Props["context"]>();
}

export default DomainPageOutletLayout;
