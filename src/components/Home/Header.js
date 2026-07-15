import MobileNav from "./Nav/MobileNav";
import DesktopNav from "./Nav/DesktopNav";
import { useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  //otwieranie mobilnej nawigacji
  const changeMobileState = () => {
    setIsMobile((prev) => !prev);
  };

  return (
    <>
      <MobileNav isMobile={isMobile} />
      <DesktopNav isMobile={isMobile} />
      <button onClick={changeMobileState} className="hamburger-button white">
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </>
  );
};

export default Header;
