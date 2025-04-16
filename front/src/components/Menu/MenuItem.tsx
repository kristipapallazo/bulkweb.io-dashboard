import { FC } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFrstLetter } from "../../utils/utils";
import { NavLink } from "react-router";

interface ItemProps {
  id: string;
  label?: string;
}

const MenuItem: FC<ItemProps> = ({ id, label }) => {
  const { t } = useTranslation();

  const finalLabel = capitalizeFrstLetter(label || id);

  return (
    <NavLink to={id} className={({ isActive }) => (isActive ? "active" : "")}>
      {t(finalLabel)}
    </NavLink>
  );
};

export default MenuItem;
