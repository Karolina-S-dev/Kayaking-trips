import { useLocation } from "react-router-dom";
import companyLogo from "../../../assets/img/company-logo.png";
import NavItem from "./NavItem";

const DesktopNav = ({ isMobileNavOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div
        className={`header-section flex-row ${!isHome ? "header-subpage" : ""}`}
      >
        <a href="/">
          <img
            className={`header-logo ${isMobileNavOpen ? "header-logo-hidden" : ""}`}
            src={companyLogo}
            alt="Company Logo"
          />
        </a>

        <nav>
          <ul className="nav-links flex-row">
            <li>
              <NavItem
                text={"Strona główna"}
                route={"/"}
                type={"common"}
                isMobile={false}
              />
            </li>
            <li>
              <NavItem
                text={"Trasy spływów"}
                route={"/trasy-splywow"}
                type={"common"}
                isMobile={false}
              />
            </li>
            <li>
              <NavItem
                text={"Galeria"}
                route={"/galeria"}
                type={"common"}
                isMobile={false}
              />
            </li>
            <li>
              <NavItem
                text={"FAQ"}
                route={"/faq"}
                type={"common"}
                isMobile={false}
              />
            </li>
            <li>
              <NavItem
                text={"PL | ENG"}
                route={""}
                type={"common"}
                isMobile={false}
              />
            </li>

            <li>
              <NavItem
                text={"Kontakt"}
                route={"/kontakt"}
                type={"contact"}
                isMobile={false}
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DesktopNav;
