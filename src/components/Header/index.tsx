import { useEffect, useState } from "react";
import logotipo from "../../assets/Logo-AllanDev.png";
import MenuSlide from "../MenuSlide";

import HeaderTag, { Hamburguer } from "./style";

const Header = () => {
  const [isHamburguerMenu, setIsHamburguerMenu] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const HamburgerMenuStatus = () => {
    if (isHamburguerMenu) {
      setIsHamburguerMenu(false);
    } else {
      setIsHamburguerMenu(true);
    }
  };

  useEffect(() => {
    let timer: any;
    if (isHamburguerMenu) {
      setIsOpenMenu(true);
    } else {
      timer = setTimeout(() => {
        setIsOpenMenu(false);
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isHamburguerMenu]);

  return (
    <>
      <HeaderTag>
        <div>
          <img src={logotipo} alt="logotipo" />

          <Hamburguer
            onClick={() => HamburgerMenuStatus()}
            isHamburguerMenu={isHamburguerMenu}
          >
            <section className="bar1" />
            <section className="bar2" />
            <section className="bar3" />
          </Hamburguer>
        </div>
      </HeaderTag>
      {isOpenMenu && <MenuSlide isHamburguerMenu={isHamburguerMenu} />}
    </>
  );
};

export default Header;
