import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../../assets/img/company-logo.png";
import NavItem from "./NavItem";
import { navUtils } from "../../../utils/HomeScreen/navUtils";

const DesktopNav = ({ isMobileNavOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div
        className={`header-section flex-row ${!isHome ? "header-subpage" : ""}`}
      >
        <Link to="/">
          <img
            className={`header-logo ${isMobileNavOpen ? "header-logo-hidden" : ""}`}
            src={companyLogo}
            alt="Company Logo"
          />
        </Link>

        <nav>
          <ul className="nav-links flex-row">
            {navUtils.map((util, index) => (
              <li key={util.route}>
                <NavItem util={util} isMobile={false} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DesktopNav;
