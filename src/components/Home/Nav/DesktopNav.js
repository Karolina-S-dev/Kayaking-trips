import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../../assets/img/company-logo.png";
import NavItem from "./NavItem";
import { navUtils } from "../../../utils/HomeScreen/navUtils";
import { motion } from "motion/react";

const DesktopNav = ({ isMobileNavOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = (
    <ul className="nav-links flex-row">
      {navUtils.map((util) => (
        <li key={util.route}>
          <NavItem util={util} isMobile={false} />
        </li>
      ))}
    </ul>
  );

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

        {isHome ? (
          <motion.nav
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {navLinks}
          </motion.nav>
        ) : (
          <nav>{navLinks}</nav>
        )}
      </div>
    </>
  );
};

export default DesktopNav;
