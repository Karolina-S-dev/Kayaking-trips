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
    <header >
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <DesktopNav isMobileNavOpen={isMobileNavOpen} />
      <button onClick={handleMobileNavOpen} className="hamburger-button white">
        <ion-icon
          name={isMobileNavOpen ? "close-outline" : "menu-outline"}
        ></ion-icon>
      </button>
    </header>
  );
};

export default Header;
