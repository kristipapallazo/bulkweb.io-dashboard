import { message } from "antd";
import { Rule } from "antd/es/form";
import { InputProps } from "antd/es/input";

type MenuItemAntd = Required<MenuProps>["items"][number];
type InputType = InputProps["type"];

interface InputItem {
  id: Key;
  name: string;
  placeholder: string;
  type?: InputType;
  icon?: ReactNode;
  rules?: { required?: boolean; message?: string }[];
}
