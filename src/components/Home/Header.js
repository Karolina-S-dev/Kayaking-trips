import MobileNav from "./Nav/MobileNav";
import DesktopNav from "./Nav/DesktopNav";
import { useState } from "react";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  //otwieranie mobilnej nawigacji
  const changeMobileState = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <MobileNav isMobile={true} isOpen={isMobileNavOpen}/>
      <DesktopNav isMobile={false} isOpen={isMobileNavOpen} />
      <button onClick={changeMobileState} className="hamburger-button white">
        <ion-icon name={!isMobileNavOpen? "menu-outline":"close-outline"}></ion-icon>
      </button>
    </>
  );
};

export default Header;
