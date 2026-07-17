import MobileNav from "./Nav/MobileNav";
import DesktopNav from "./Nav/DesktopNav";
import { useState } from "react";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  //mobile nav opening
  const handleMobileNavOpen = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <MobileNav isMobileNavOpen={isMobileNavOpen}/>
      <DesktopNav isMobileNavOpen={isMobileNavOpen} />
      <button onClick={handleMobileNavOpen} className="hamburger-button white">
        <ion-icon name={isMobileNavOpen? "close-outline":"menu-outline"}></ion-icon>
      </button>
    </>
  );
};

export default Header;
