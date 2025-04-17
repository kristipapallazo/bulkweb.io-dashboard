import Hamburger from "hamburger-react";
import { FC } from "react";

interface BurgerBttnProps {
  isOpen: boolean;
  setOpen: SetStateFn<boolean>;
}

const BurgerBttn: FC<BurgerBttnProps> = ({ isOpen, setOpen }) => {
  return (
    <Hamburger color="var(--primary-color)" toggled={isOpen} toggle={setOpen} />
  );
};

export default BurgerBttn;
