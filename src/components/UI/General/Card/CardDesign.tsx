import { CSSProperties, FC, ReactNode } from "react";
import classes from "./CardDesign.module.css";

interface CardDesignProps {
  children: ReactNode;
  style?: CSSProperties;
}

const CardDesign: FC<CardDesignProps> = ({ children, style }) => {
  return (
    <div style={style} className={classes.card}>
      {children}
    </div>
  );
};

export default CardDesign;
