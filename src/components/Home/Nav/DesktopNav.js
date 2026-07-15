import { useLocation } from "react-router-dom";
import companyLogo from "../../../assets/img/company-logo.png";
import NavItem from "./NavItem";

const DesktopNav = ({ isMobile = false }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div
        className={`header-section flex-row ${!isHome ? "header-subpage" : ""} ${isMobile ? "" : ""}`}
      >
        
          <a href="/">
            <img className={`header-logo ${isMobile? "header-logo-hidden" :null}`} src={companyLogo} alt="Company Logo" />
          </a>
       

        <nav>
          <ul className="nav-links flex-row">
            <li>
              <NavItem text={"Strona główna"} route={"/"} />
            </li>
            <li>
              <NavItem text={"Trasy spływów"} route={"/trasy-splywow"} />
            </li>
            <li>
              <NavItem text={"Galeria"} route={"/galeria"} />
            </li>
            <li>
              <NavItem text={"FAQ"} route={"/faq"} />
            </li>
            <li>
              <NavItem text={"PL | ENG"} route={""} />
            </li>

            <li>
              <NavItem text={"Kontakt"} route={"/kontakt"} type={"contact"} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DesktopNav;
