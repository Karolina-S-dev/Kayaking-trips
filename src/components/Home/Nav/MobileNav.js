import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../../assets/img/company-logo.png";
import NavItem from "./NavItem";
import { navUtils } from "../../../utils/HomeScreen/navUtils";
import { AnimatePresence, motion } from "motion/react";

const MobileNav = ({ isMobileNavOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <AnimatePresence>
        {isMobileNavOpen && (
          <div className="header-mobile-wrapper">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%"}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`header-section-mobile flex-col ${!isHome ? "header-subpage" : ""} `}
            >
              <Link to="/">
                <img
                  className="header-logo-mobile"
                  src={companyLogo}
                  alt="Company Logo"
                />
              </Link>

              <nav>
                <ul className="nav-links-mobile flex-col">
                  {navUtils.map((util, index) => (
                    <li key={util.route}>
                      <NavItem util={util} isMobile={true} />
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

//MobileNav -> <NavItem isMobile={true}/>    - navItem to kazdy button
//DesktopNav -> <NavItem isMobile={false}/>
// const NavItem = ({ route, isMobile }) => {
//     //route: /faq
//     const redirect = () =>{
//         // navigate(route)
//     }
//     const isActive = location.pathname === route
//     return ({ isMobile ? <li >

//     </li> : <a>cos tam</a>})
// };

// export default NavItem;
