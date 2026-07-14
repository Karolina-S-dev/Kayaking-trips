import { useLocation, useNavigate } from "react-router-dom";
import { usePageContext } from "../../context/pageContext";
import { useState } from "react";
import DesktopNav from "./Nav.js/DesktopNav";

const Header = () => {
  const[isOpen, setIsOpen]=useState(true);
  const { activePage } = usePageContext();
  const navigate = useNavigate();
  const handleRedirectHomeScreen = () => {
    navigate("/");
  };

  const handleRedirectTripsScreen = () => {
    navigate("/trasy-splywow");
  };

  const handleRedirectGalleryScreen = () => {
    navigate("/galeria");
  };
  const handleRedirectFaqScreen = () => {
    navigate("/faq");
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    // <>{
    //   ? <HeaderMobileCOntent/> : <HeaderDesktopContent/>
    // }</>
    <header
      className={
        isHome
          ? "header-section flex-row"
          : "header-section flex-row header-subpage"
      }
    >
      <DesktopNav/>
      
    </header>
  );
};

export default Header;
