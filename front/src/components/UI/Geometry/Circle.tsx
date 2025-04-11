import { CSSProperties, FC } from "react";
import classes from "./Circle.module.css";

interface CircleProps {
  style?: CSSProperties;
  className?: string;
}

const Circle: FC<CircleProps> = ({ style = {}, className = "" }) => {
  const finalClassName = `${classes.circle} ${className}`;
  // style.width = width;

  return <div className={finalClassName} style={style}></div>;
};

export default Circle;
