import { FC } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFrstLetter } from "../../utils/utils";
import { NavLink } from "react-router";

interface ItemProps {
  id: string;
  label?: string;
}

const MenuItem: FC<ItemProps> = ({ id }) => {
  const { t } = useTranslation();

  const label = capitalizeFrstLetter(id);

  return (
    <NavLink to={id} className={({ isActive }) => (isActive ? "active" : "")}>
      {t(label)}
    </NavLink>
  );
};

export default MenuItem;
